export default function CustomizingCodebaseDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Customizing Codebase</h1>

      <p className="text-gray-700 leading-relaxed mb-2">
        There are two ways to customize the StudyStudio codebase:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
        <li>Using <span className="font-semibold">GitHub</span></li>
        <li>Using a <span className="font-semibold">Code Editor</span></li>
      </ul>

      {/* =========================
          Using GitHub
      ========================== */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Using GitHub</h2>

      <SectionTitle>Navigate to The Right Path</SectionTitle>
      <p className="text-gray-700 leading-relaxed mb-8">
        Select your <span className="font-medium">repository</span>. Click on the{" "}
        <Code>code</Code> structure panel to open a file or folder.
      </p>

      <SectionTitle>Understanding The Structure Of The Codebase</SectionTitle>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following sample shows the standard project structure. Use it to locate your editable
        components/pages.
      </p>
      <Figure src="/images/gh-tree-1.png" caption="File/folder tree view on GitHub." />

      <Warn>
        Make sure that you do not touch any files that are part of the{" "}
        <Code>node_modules</Code> or framework internals. Only modify the pages and components
        provided for customization. Incorrect edits may break the app or build process.
      </Warn>

      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
        <li><span className="font-medium">/app</span> holds routes, layouts and top-level UI.</li>
        <li><span className="font-medium">/components</span> contains reusable UI and logic.</li>
        <li><span className="font-medium">/lib</span> holds helper utilities.</li>
        <li><span className="font-medium">/public</span> contains static assets (images, icons, fonts).</li>
        <li><span className="font-medium">/styles</span> holds global styles.</li>
      </ul>

      <SectionTitle>Submitting Changes</SectionTitle>
      <p className="text-gray-700 leading-relaxed mb-4">
        After editing files directly on GitHub, you can commit the changes by clicking{" "}
        <Code>Commit changes…</Code>. Provide a concise message and choose the target branch.
      </p>
      <Figure src="/images/gh-edit-1.png" caption="Editing a file online and committing changes." />
      <Figure src="/images/gh-edit-2.png" caption="Providing the commit message in GitHub." />

      <Info className="mt-4">
        If you’re not deploying immediately, create a separate branch. Later you can safely make a
        <Code className="ml-1">pull request</Code> to merge into <Code>main</Code>.
      </Info>

      {/* =========================
          Using a Code Editor
      ========================== */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-4">Using a Code Editor</h2>

      <SectionTitle>Setup Codebase in Code Editor</SectionTitle>
      <p className="text-gray-700 leading-relaxed mb-4">
        Open the project folder in your editor (e.g., VS Code). Select the folders where you plan
        to make edits: <Code>app</Code>, <Code>components</Code>, <Code>public</Code>,{" "}
        <Code>lib</Code>, <Code>styles</Code>.
      </p>

      <SectionTitle>Understanding The Structure Of The Codebase</SectionTitle>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following tree again highlights the folders that are safe for customization.
      </p>
      <Figure src="/images/editor-tree.png" caption="Project structure inside a code editor." />

      <Warn>
        Do not rename critical routes or files unless you know the implications. Keep{" "}
        <Code>env</Code> and configuration files intact. Use version control to track your edits.
      </Warn>

      <SectionTitle>Submitting Changes</SectionTitle>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have tested locally, stage and commit changes using your editor’s VCS panel or the
        terminal:
      </p>

      <Figure src="/images/vscode-commit.png" caption="Staging and committing via VS Code." />
      <Figure src="/images/editor-preview.png" caption="Previewing UI updates inside the application." />

      <Info className="mt-4">
        This is the recommended way. Always sync your local edits with{" "}
        <Code>git pull</Code> to avoid conflicts when collaborating with a team.
      </Info>

      <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto my-6">
{`git add .
git commit -m "feat: your change summary"
git push origin <branch-name>`}
      </pre>

      <p className="text-gray-700 leading-relaxed">
        When preparing a release, test locally. Minor refactors or changes will be automatically
        shipped to your production on the connected branch via rebuild.
      </p>

      {/* Footer */}
      <nav className="flex items-center justify-between mt-12 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Deployment</a>
        <a href="#" className="hover:underline">Custom Server Environment ›</a>
      </nav>
    </main>
  );
}

/* ========= Helpers ========= */

function SectionTitle({ children }) {
  return <h3 className="text-lg sm:text-xl font-semibold mb-3">{children}</h3>;
}

function Code({ children, className = "" }) {
  return (
    <code className={`bg-gray-100 rounded px-1 py-0.5 text-sm ${className}`}>{children}</code>
  );
}

function Figure({ src, caption }) {
  return (
    <figure className="mt-4 mb-8">
      <img src={src} alt={caption} className="w-full rounded-xl shadow-lg" />
      <figcaption className="text-sm text-gray-500 text-center mt-2">{caption}</figcaption>
    </figure>
  );
}

function Info({ children, className = "" }) {
  return (
    <div className={`bg-blue-50 border border-blue-100 text-blue-900 rounded-md px-4 py-3 text-sm ${className}`}>
      {children}
    </div>
  );
}

function Warn({ children, className = "" }) {
  return (
    <div className={`bg-red-50 border border-red-100 text-red-900 rounded-md px-4 py-3 text-sm my-6 ${className}`}>
      {children}
    </div>
  );
}
