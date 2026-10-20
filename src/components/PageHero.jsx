import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro, image, crumb }) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero__bg">
          <img src={image} alt="" aria-hidden="true" />
        </div>
      )}
      <div className="wrap">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{crumb || title}</span>
        </div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <Reveal as="h1">{title}</Reveal>
        {intro && <Reveal as="p">{intro}</Reveal>}
      </div>
    </section>
  );
}
