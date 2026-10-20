import { useState } from "react";

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc__item ${isOpen ? "open" : ""}`} key={it.q}>
            <button
              className="acc__btn"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{it.q}</span>
              <span className="acc__sign" aria-hidden="true" />
            </button>
            <div className="acc__panel">
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
