import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  light = false,
  maxWidth,
}) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: maxWidth || (align === "center" ? "62ch" : "70ch"),
        marginInline: align === "center" ? "auto" : undefined,
      }}
    >
      {eyebrow && (
        <Reveal as="span" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" style={{ color: light ? "var(--cream)" : undefined }}>
        {title}
      </Reveal>
      {lede && <Reveal as="p" className="lede">{lede}</Reveal>}
    </div>
  );
}
