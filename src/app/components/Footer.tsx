import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center">
          
          {/* Copyright */}
          <p className="text-sm text-neutral-500">
     
            © {new Date().getFullYear()} TVM Designs. All rights reserved.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-row gap-8">
            
          <a href="https://www.linkedin.com/in/tom%C3%A1s-m-091177102/" target="_blank" rel="noreferrer"
          className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Linkedin
            </a>
            <Link
              to="/contact"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}