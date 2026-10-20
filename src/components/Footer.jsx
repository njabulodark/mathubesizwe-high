import { Link } from "react-router-dom";
import { Crest } from "./Crest";
import { Icon } from "./Icon";
import { navLinks, school } from "../data/school";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <Crest size={52} light />
              <span className="footer__brandname">Mathubesizwe</span>
            </div>
            <p style={{ maxWidth: "32ch", marginTop: "1rem" }}>
              {school.motto}
            </p>
            <p style={{ fontSize: "0.82rem", opacity: 0.7, marginTop: "0.5rem" }}>
              {school.slogan}
            </p>
            <p style={{ fontSize: "0.82rem", opacity: 0.7 }}>
              A no-fee public secondary school serving the community of
              Macambini, KwaZulu-Natal.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer__list">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>School</h4>
            <ul className="footer__list">
              {navLinks.slice(5).map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/admissions">Apply / Register</Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Get in touch</h4>
            <p style={{ margin: 0, fontSize: "0.92rem" }}>{school.address}</p>
            <span>
              <a href={`mailto:${school.email}`}>{school.email}</a>
            </span>
            <span>
              <a href={`tel:${school.phone.replace(/[^+\d]/g, "")}`}>
                {school.phone}
              </a>
            </span>
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.2rem" }}>
              <a
                href={`mailto:${school.email}`}
                className="btn btn--outline-light btn--sm"
              >
                <Icon name="mail" size={15} /> Email
              </a>
              <Link to="/contact" className="btn btn--sky btn--sm">
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Mathubesizwe High School. All rights
            reserved.
          </span>
          <span>
            Community-built site · Photographs from the school&rsquo;s official
            Facebook page · Please verify official details with the school
            office.
          </span>
        </div>
      </div>
    </footer>
  );
}
