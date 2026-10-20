import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="btn btn--sky btn--sm"
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          zIndex: 999,
        }}
        onFocus={(e) => (e.currentTarget.style.left = "1rem")}
        onBlur={(e) => (e.currentTarget.style.left = "-9999px")}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
