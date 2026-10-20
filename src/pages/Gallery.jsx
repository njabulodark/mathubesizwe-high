import { useCallback, useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { galleryImages } from "../data/school";

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % galleryImages.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  const current = open ? galleryImages[index] : null;

  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="In pictures"
        title="Gallery"
        intro="Learning, celebration, heritage and hard work, moments from the Mathubesizwe community."
        image="/images/awards-18.jpg"
      />

      <section className="section">
        <div className="wrap">
          <div className="gallery">
            {galleryImages.map((img, i) => (
              <Reveal
                key={`${img.src}-${i}`}
                delay={(i % 3) * 70}
                className={`gallery__item ${img.size}`}
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`View photo: ${img.cap}`}
                  style={{
                    border: 0,
                    padding: 0,
                    background: "none",
                    width: "100%",
                    display: "block",
                  }}
                >
                  <img src={img.src} alt={img.cap} loading="lazy" />
                  <span className="gallery__cap">{img.cap}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <Icon name="chevronLeft" size={22} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.cap} />
            <p className="lightbox__cap">{current.cap}</p>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <Icon name="chevronRight" size={22} />
          </button>
        </div>
      )}
    </>
  );
}
