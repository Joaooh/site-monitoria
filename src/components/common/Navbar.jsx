import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Início", path: "/" },
  // Evento temporário (MERGE-DF) — remover após o evento
  { name: "MERGE-DF", path: "/merge-df", icon: "/mago-cabeca.png" },
  { name: "Oficinas", path: "/oficinas" },
  { name: "Playlists", path: "/playlists", badge: "Novo" },
  { name: "Pitaco", path: "/pitaco" },
  { name: "Equipe", path: "/equipe" },
  { name: "CEUBenefícios", path: "/beneficios", badge: "Novo" },
  {
    name: "Linktree",
    path: "https://linktr.ee/monitoriaticeub",
    external: true,
  },
];

const CTA_LINK = "";

export default function Navbar({ currentPath = "/" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clientPath, setClientPath] = useState(currentPath);

  const getActiveFromPath = useCallback((path) => {
    const norm =
      path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
    const found = navItems.find((item) => {
      if (item.external) return false;
      if (item.path === "/") return norm === "/";
      return norm === item.path || norm.startsWith(item.path + "/");
    });
    return found ? found.name : "Início";
  }, []);

  const [activeTab, setActiveTab] = useState(() =>
    getActiveFromPath(currentPath),
  );

  const isPitaco = clientPath.startsWith("/pitaco");
  const isPlaylistRoute = clientPath.startsWith("/playlist/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncURL = () => {
      const p = window.location.pathname;
      setClientPath(p);
      setActiveTab(getActiveFromPath(p));
    };
    document.addEventListener("astro:page-load", syncURL);
    window.addEventListener("popstate", syncURL);
    syncURL();
    return () => {
      document.removeEventListener("astro:page-load", syncURL);
      window.removeEventListener("popstate", syncURL);
    };
  }, [getActiveFromPath]);

  useEffect(() => {
    setMobileOpen(false);
  }, [clientPath]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (isPlaylistRoute) return null;

  const accentColor = isPitaco ? "#7adb53" : "var(--purple-neon)";
  const accentGlow = isPitaco
    ? "rgba(122, 219, 83, 0.4)"
    : "rgba(210, 168, 255, 0.3)";
  const ctaBg = isPitaco ? "#283a86" : "var(--purple-primary)";
  const ctaShadow = isPitaco
    ? "0 4px 15px rgba(40, 58, 134, 0.5)"
    : "0 4px 15px rgba(102, 44, 146, 0.4)";

  return (
    <>
      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
        }
        .navbar-header.transparent {
          background: transparent;
          box-shadow: none;
        }
        .navbar-header.scrolled {
          background: rgba(13, 4, 21, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(210, 168, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 72px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          z-index: 2;
        }
        .navbar-logo img {
          height: 38px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
          transition: transform 0.3s ease;
        }
        .navbar-logo:hover img {
          transform: scale(1.05);
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
        }
        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 0.85rem;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.25s ease, background 0.25s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-link[data-active="true"] {
          color: var(--text-main);
        }
        .nav-link .external-icon {
          width: 12px;
          height: 12px;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .nav-link:hover .external-icon {
          opacity: 0.8;
        }
        .nav-badge {
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 2px 6px;
          border-radius: 999px;
          line-height: 1;
          animation: badgePulse 2s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .nav-icon-circle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 25%, #ff5c8f 0%, var(--accent-pink) 65%);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.85), 0 4px 14px rgba(232, 28, 97, 0.55);
          overflow: hidden;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .nav-icon-circle img {
          width: 86%;
          height: 86%;
          object-fit: contain;
          margin-top: 10%;
        }
        .nav-icon-circle::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          animation: iconRing 2.2s ease-out infinite;
        }
        @keyframes iconRing {
          0% { box-shadow: 0 0 0 0 rgba(232, 28, 97, 0.55); }
          100% { box-shadow: 0 0 0 8px rgba(232, 28, 97, 0); }
        }
        .nav-link-icon {
          gap: 0.5rem;
          padding-left: 0.4rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .nav-link-icon:hover .nav-icon-circle {
          transform: scale(1.1) rotate(-6deg);
          box-shadow: 0 0 0 2px #ffffff, 0 6px 18px rgba(232, 28, 97, 0.7);
        }
        .nav-link-icon .nav-underline {
          left: 2.85rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-icon-circle::after { animation: none; }
        }
        .nav-underline {
          position: absolute;
          bottom: 2px;
          left: 0.85rem;
          right: 0.85rem;
          height: 2px;
          border-radius: 2px;
        }
        .navbar-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          flex-shrink: 0;
          white-space: nowrap;
          font-family: inherit;
        }
        .navbar-cta:hover {
          transform: translateY(-1px);
          filter: brightness(1.15);
        }
        .navbar-cta svg {
          width: 14px;
          height: 14px;
        }
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10002;
          padding: 0;
          gap: 5px;
        }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          background: var(--text-main);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        .navbar-hamburger[data-open="true"] .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar-hamburger[data-open="true"] .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar-hamburger[data-open="true"] .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 9998;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: min(280px, 70vw);
          height: 100vh;
          height: 100dvh;
          background: rgba(13, 4, 21, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          padding: 5.5rem 2rem 2rem;
          border-left: 1px solid rgba(210, 168, 255, 0.1);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
          overflow-y: auto;
          will-change: transform;
        }
        .mobile-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.2s ease, transform 0.2s ease;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-close-btn:hover {
          color: var(--text-main);
          transform: scale(1.1);
        }
        .mobile-drawer .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-drawer .mobile-nav-link:hover,
        .mobile-drawer .mobile-nav-link[data-active="true"] {
          color: var(--text-main);
          padding-left: 0.5rem;
        }
        .mobile-drawer .mobile-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 3px 8px;
          border-radius: 999px;
        }
        .mobile-drawer .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.9rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          border-radius: 10px;
          transition: filter 0.3s ease;
          will-change: transform, opacity;
        }
        .mobile-drawer .mobile-cta:hover {
          filter: brightness(1.15);
        }
        @media (max-width: 1180px) {
          .navbar-cta-placeholder {
            display: none !important;
          }
        }
        @media (max-width: 960px) {
          .navbar-links,
          .navbar-cta,
          .navbar-cta-placeholder {
            display: none !important;
          }
          .navbar-hamburger {
            display: flex !important;
          }
          .navbar-inner {
            padding: 0 1.25rem;
          }
        }
      `}</style>

      <header
        className={`navbar-header ${scrolled ? "scrolled" : "transparent"}`}
      >
        <div className="navbar-inner">
          <a href="/" className="navbar-logo" aria-label="Voltar ao início">
            <img
              src="/logo-ceub-light.png"
              alt="Logo CEUB"
              width="38"
              height="38"
            />
          </a>

          <nav aria-label="Navegação principal">
            <ul className="navbar-links">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <li key={item.name} className="nav-item">
                    <a
                      href={item.path}
                      className={`nav-link${item.icon ? " nav-link-icon" : ""}`}
                      data-active={isActive}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.icon && (
                        <span className="nav-icon-circle" aria-hidden="true">
                          <img src={item.icon} alt="" width="26" height="26" />
                        </span>
                      )}
                      {item.name}
                      {item.badge && (
                        <span
                          className="nav-badge"
                          style={{
                            background: isPitaco
                              ? "rgba(122, 219, 83, 0.15)"
                              : "rgba(210, 168, 255, 0.15)",
                            color: isPitaco ? "#7adb53" : "var(--purple-neon)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                      {item.external && (
                        <svg
                          className="external-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="nav-underline"
                          style={{
                            background: accentColor,
                            boxShadow: `0 0 8px ${accentGlow}`,
                          }}
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.5,
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/*
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
            style={{ background: ctaBg, boxShadow: ctaShadow }}
          >
            Seja Monitor
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          */}
          <div
            className="navbar-cta-placeholder"
            style={{ width: "148.5px" }}
          />

          <button
            className="navbar-hamburger"
            data-open={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
            >
              <button
                className="mobile-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {navItems.map((item, i) => {
                const isActive = activeTab === item.name;
                return (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    className="mobile-nav-link"
                    data-active={isActive}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    onClick={() => !item.external && setMobileOpen(false)}
                    style={
                      isActive
                        ? {
                            color: accentColor,
                            borderBottomColor: `${accentColor}33`,
                          }
                        : undefined
                    }
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      {item.icon && (
                        <span className="nav-icon-circle" aria-hidden="true">
                          <img src={item.icon} alt="" width="26" height="26" />
                        </span>
                      )}
                      {item.name}
                      {item.badge && (
                        <span
                          className="mobile-badge"
                          style={{
                            background: isPitaco
                              ? "rgba(122, 219, 83, 0.15)"
                              : "rgba(210, 168, 255, 0.15)",
                            color: isPitaco ? "#7adb53" : "var(--purple-neon)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {item.external && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: 0.5 }}
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    )}
                  </motion.a>
                );
              })}

              {/*
              <motion.a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-cta"
                style={{ background: ctaBg, boxShadow: ctaShadow }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  default: { delay: 0.35, duration: 0.4 },
                  y: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileHover={{ y: -2, transition: { duration: 0.2, delay: 0 } }}
                whileTap={{ scale: 0.95 }}
              >
                Seja Monitor
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
              */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
