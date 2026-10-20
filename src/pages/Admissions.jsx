import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { Accordion } from "../components/Accordion";
import {
  admissionSteps,
  admissionDocs,
  faqs,
  school,
} from "../data/school";

export default function Admissions() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        eyebrow="Join us"
        title="Admissions &amp; registration"
        intro="Registration for Grades 8 to 12 is open. Mathubesizwe is a no-fee public school — there are no school fees to pay."
        image="/images/awards-07.jpg"
      />

      {/* NO FEE HIGHLIGHT */}
      <section className="section">
        <div className="wrap">
          <Reveal className="card" style={{ borderLeft: "5px solid var(--blue-2)" }}>
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <span className="eyebrow">No-fee school</span>
                <h3 style={{ fontFamily: "var(--font-display)" }}>
                  Cost is never a barrier to learning here.
                </h3>
                <p style={{ marginBottom: 0 }}>
                  As a Quintile 3 public school, Mathubesizwe does not charge
                  school fees. Government funding covers our teaching and
                  running costs. Optional costs may apply for uniforms,
                  stationery and school excursions.
                </p>
              </div>
              <div className="grid-2" style={{ gap: "1rem" }}>
                <div className="stat">
                  <div className="stat__num" style={{ fontSize: "2rem" }}>
                    R0
                  </div>
                  <div className="stat__label">School fees</div>
                </div>
                <div className="stat">
                  <div className="stat__num" style={{ fontSize: "2rem" }}>
                    8–12
                  </div>
                  <div className="stat__label">Grades enrolling</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead
            eyebrow="How to apply"
            title="Four simple steps"
            lede="Applications are processed in line with KwaZulu-Natal Department of Education admission policy."
          />
          <ol
            className="steps"
            style={{ marginTop: "2.5rem", listStyle: "none", padding: 0 }}
          >
            {admissionSteps.map((s) => (
              <Reveal as="li" className="step" key={s.title}>
                <span className="step__num" />
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)" }}>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body">
            <span className="eyebrow">Checklist</span>
            <Reveal as="h2">Bring these documents</Reveal>
            <Reveal as="p">
              Having everything ready helps us place your child quickly. Please
              bring certified copies where indicated.
            </Reveal>
            <ul className="list-check">
              {admissionDocs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div
              style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1.8rem" }}
            >
              <a href={`mailto:${school.email}?subject=Application%20enquiry`} className="btn">
                Request a form <Icon name="download" size={16} />
              </a>
              <Link to="/contact" className="btn btn--ghost">
                Book a visit
              </Link>
            </div>
          </div>
          <Reveal className="split__media">
            <img
              src="/images/hall-audience.jpg"
              alt="Learners, families and guests gathered at school"
            />
            <div className="split__badge">
              <strong>2027</strong>
              registrations now open
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY INFO */}
      <section className="section section--dark section--tight">
        <div className="wrap">
          <div className="grid-3">
            {[
              { icon: "pin", t: "Where to apply", d: school.address },
              {
                icon: "mail",
                t: "Email",
                d: school.email,
                href: `mailto:${school.email}`,
              },
              {
                icon: "phone",
                t: "Call the office",
                d: school.phone,
                href: `tel:${school.phone.replace(/[^+\d]/g, "")}`,
              },
            ].map((b, i) => (
              <Reveal
                key={b.t}
                delay={i * 80}
                style={{
                  borderTop: "2px solid var(--sky)",
                  paddingTop: "1.2rem",
                }}
              >
                <div
                  className="pillar__icon"
                  style={{
                    borderColor: "var(--line-light)",
                    color: "var(--sky)",
                  }}
                >
                  <Icon name={b.icon} size={20} />
                </div>
                <h4 style={{ color: "var(--cream)", marginBottom: "0.3rem" }}>
                  {b.t}
                </h4>
                {b.href ? (
                  <a href={b.href} style={{ color: "rgba(246,240,228,0.82)" }}>
                    {b.d}
                  </a>
                ) : (
                  <p style={{ margin: 0, color: "rgba(246,240,228,0.82)" }}>
                    {b.d}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Questions"
            title="Frequently asked"
            align="center"
            maxWidth="48ch"
          />
          <div style={{ marginTop: "2.5rem", maxWidth: "820px", marginInline: "auto" }}>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
