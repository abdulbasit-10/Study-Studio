import React from "react";
import { FaGoogle, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-8 text-center bg-white">
      {/* Brand Name */}
      <h2 className="text-lg font-semibold text-gray-900">
        Study<span className="text-green-600">Studio</span>
      </h2>

      {/* Copyright */}
      <p className="text-sm text-gray-500 mt-1">
        © 2025 StudyStudio Inc. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-4 text-gray-500">
        <a href="#" className="hover:text-green-600 transition">
          <FaGoogle size={18} />
        </a>
        <a href="#" className="hover:text-green-600 transition">
          <FaTwitter size={18} />
        </a>
        <a href="#" className="hover:text-green-600 transition">
          <FaGithub size={18} />
        </a>
        <a href="#" className="hover:text-green-600 transition">
          <FaGlobe size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
