import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap-narrow">
        <div className="code">404</div>
        <h2>This page has wandered off</h2>
        <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "44ch", marginInline: "auto" }}>
          The page you are looking for could not be found. Let us guide you back
          to the classroom.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          <Link to="/" className="btn btn--sky">
            Back to home <Icon name="arrow" size={16} />
          </Link>
          <Link to="/contact" className="btn btn--outline-light">
            Contact the school
          </Link>
        </div>
      </div>
    </section>
  );
}
