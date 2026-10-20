import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { tickerItems } from "../data/school";

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((t, i) => (
          <span className="ticker__item" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CtaBanner({
  title = "Ready to join the Mathubesizwe family?",
  body = "Registration for the next academic year is open. As a no-fee school, every learner is welcome.",
  primary = { to: "/admissions", label: "Start your application" },
  secondary = { to: "/contact", label: "Talk to the school" },
}) {
  return (
    <Reveal className="cta">
      <span className="eyebrow"         style={{ color: "var(--sky)" }}>
        Admissions
      </span>
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="cta__actions">
        <Link to={primary.to} className="btn btn--sky">
          {primary.label} <Icon name="arrow" size={17} />
        </Link>
        <Link to={secondary.to} className="btn btn--outline-light">
          {secondary.label}
        </Link>
      </div>
    </Reveal>
  );
}
