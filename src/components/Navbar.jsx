import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Crest } from "./Crest";
import { Icon } from "./Icon";
import { navLinks, school } from "../data/school";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = !solid;

  return (
    <>
      <header
        className={`nav ${solid ? "nav--solid" : ""} ${
          transparent ? "nav--transparent" : ""
        }`}
      >
        <div className="wrap nav__inner">
          <Link to="/" className="brand" aria-label={`${school.name} home`}>
            <Crest size={42} light={transparent} />
            <span className="brand__text">
              <span className="brand__name">Mathubesizwe</span>
              <span className="brand__sub">High School · Macambini</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__cta">
            <Link to="/admissions" className="btn btn--sky btn--sm">
              Apply now <Icon name="arrow" size={15} />
            </Link>
            <button
              className={`nav__burger ${open ? "open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="drawer__links" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className="drawer__link"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              {l.label}
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
            </NavLink>
          ))}
        </nav>
        <div className="drawer__foot">
          <Link to="/admissions" className="btn btn--sky">
            Apply now <Icon name="arrow" size={16} />
          </Link>
          <a href={`mailto:${school.email}`} className="btn btn--outline-light">
            <Icon name="mail" size={16} /> Email us
          </a>
        </div>
      </div>
    </>
  );
}
