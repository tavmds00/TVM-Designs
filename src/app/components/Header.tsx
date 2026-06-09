import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function isProjectDetailPath(pathname: string): boolean {
  if (pathname.startsWith("/project/") && pathname !== "/project") return true;
  if (pathname.startsWith("/projects/") && pathname !== "/projects") return true;
  return false;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onPortfolio = pathname === "/portfolio";
  const onProjectPage = isProjectDetailPath(pathname);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const primaryNavLink = onProjectPage ? (
    <span />
  ) : (
    <Link
      to="/portfolio"
      className="text-sm hover:text-white/80 transition-colors duration-200"
    >
      {onPortfolio ? "Portfolio" : "Projects"}
    </Link>
  );

  const mobilePrimaryNavLink = onProjectPage ? null : (
    <Link
      to="/portfolio"
      className="text-3xl font-bold transition-colors duration-300 hover:text-white/80"
      onClick={() => setMobileMenuOpen(false)}
    >
      {onPortfolio ? "Portfolio" : "Projects"}
    </Link>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 bg-black text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-base sm:text-lg lg:text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity relative z-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                TVM Designs
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {primaryNavLink}
              <Link
                to="/about"
                className="text-sm hover:text-white/80 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-white/80 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            <button
              className="md:hidden text-white hover:opacity-80 transition-opacity relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative h-full flex items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              <Link
                to="/"
                className="text-3xl font-bold hover:text-white/80 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {mobilePrimaryNavLink}
              <Link
                to="/about"
                className="text-3xl font-bold hover:text-white/80 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-3xl font-bold hover:text-white/80 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
