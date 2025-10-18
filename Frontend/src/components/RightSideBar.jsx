// src/Documentation/RightSideBar.jsx
import React, { useEffect, useState, useCallback } from "react";

// simple slugify for ids
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function RightSideBar() {
  const [items, setItems] = useState([]);

  const buildToc = useCallback(() => {
    // find headings inside the main content area
    const headings = Array.from(document.querySelectorAll("main h2, main h3"));
    const seen = new Set();
    const toc = headings.map((h) => {
      let id = h.id;
      if (!id) {
        id = slugify(h.textContent || h.innerText || "section");
        // ensure unique id
        let uniq = id;
        let i = 1;
        while (seen.has(uniq) || document.getElementById(uniq)) {
          uniq = `${id}-${i++}`;
        }
        id = uniq;
        h.id = id;
      }
      seen.add(id);
      return {
        to: `#${id}`,
        label: h.textContent.trim(),
        level: h.tagName.toLowerCase(),
      };
    });

    setItems(toc);
  }, []);

  useEffect(() => {
    // build TOC on mount and whenever route changes (router will update document)
    buildToc();

    // observe DOM changes in case content renders later
    const ro = new MutationObserver(() => buildToc());
    const main = document.querySelector("main");
    if (main) ro.observe(main, { childList: true, subtree: true });

    return () => ro.disconnect();
  }, [buildToc]);

  function onClick(e, to) {
    e.preventDefault();
    const id = to.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update hash without jumping
      history.replaceState(null, "", `#${id}`);
    }
  }

  return (
    <aside className="sticky top-24 w-56 pr-4 hidden xl:block" aria-label="On this page">
      <div className="bg-white p-2">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">On This Page</h3>
        <nav>
          {items.length === 0 ? (
            <div className="text-sm text-gray-400">No sections found on this page</div>
          ) : (
            items.map((item, idx) => {
              if (item.level === "h2") {
                return (
                  <div key={item.to} className="mt-3">
                    <a
                      href={item.to}
                      onClick={(e) => onClick(e, item.to)}
                      className="block text-sm font-semibold text-gray-700 hover:text-emerald-700"
                    >
                      {item.label}
                    </a>
                  </div>
                );
              }

              // h3 (sub-item)
              return (
                <a
                  key={`${item.to}-${idx}`}
                  href={item.to}
                  onClick={(e) => onClick(e, item.to)}
                  className="block text-sm text-gray-500 ml-4 mt-1 hover:text-emerald-700"
                >
                  {item.label}
                </a>
              );
            })
          )}
        </nav>
      </div>
    </aside>
  );
}
