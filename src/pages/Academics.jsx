import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { CtaBanner } from "../components/Ticker";
import {
  coreSubjects,
  streams,
  nscResults,
  academicSupport,
  faculty,
} from "../data/school";

export default function Academics() {
  return (
    <>
      <PageHero
        crumb="Academics"
        eyebrow="Teaching &amp; learning"
        title="Academics at Mathubesizwe"
        intro="Three streams, two languages of instruction, and a relentless focus on getting our learners into universities, colleges and careers."
        image={asset("/images/awards-04.jpg")}
      />

      {/* INTRO + CORE */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body">
            <span className="eyebrow">The foundation</span>
            <Reveal as="h2">A curriculum built for real life.</Reveal>
            <Reveal as="p">
              Every learner at Mathubesizwe studies a common core, then chooses a
              stream that matches their strengths and dreams. Teaching happens in
              isiZulu as Home Language and English as First Additional Language,
              so our learners leave confident in both.
            </Reveal>
            <ul className="list-check">
              {coreSubjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <Reveal className="split__media split__media--wide">
            <img
              src={asset("/images/matric-class-2026.jpg")}
              alt="The Matric Class of 2026"
            />
            <div className="split__badge">
              <strong>8–12</strong>
              Grades offered
            </div>
          </Reveal>
        </div>
      </section>

      {/* STREAMS */}
      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead
            eyebrow="Choose your path"
            title="Three streams, one future"
            lede="Learners select a stream in Grade 10 with guidance from our educators and career counsellors."
          />
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {streams.map((s, i) => (
              <Reveal
                className="subject-card"
                key={s.title}
                delay={i * 90}
                style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
              >
                <div
                  className="pillar__icon"
                  style={{ marginBottom: "0.4rem" }}
                >
                  <Icon name={["flask", "scale", "book"][i % 3]} size={22} />
                </div>
                <h4>{s.title}</h4>
                <p style={{ fontSize: "0.9rem", margin: "0 0 0.8rem" }}>{s.note}</p>
                <ul style={{ marginTop: "auto" }}>
                  {s.subjects.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow">National Senior Certificate</span>
              <Reveal as="h2">Punching above our weight.</Reveal>
              <Reveal as="p">
                With limited facilities and a long daily journey for many
                learners, our results speak to a culture of discipline that runs
                from the classroom to the community.
              </Reveal>
              <Reveal as="p" style={{ marginBottom: 0 }}>
                Our Class of 2019 recorded a 98.4% overall pass rate, the
                school&rsquo;s best in years, and our top 2025 achiever earned
                seven distinctions.
              </Reveal>
            </div>
            <Reveal className="results">
              {nscResults.map((r) => (
                <div className="result-row" key={r.year}>
                  <span className="result-row__label">{r.year}</span>
                  <span className="result-row__bar">
                    <span
                      className="result-row__fill"
                      style={{ width: `${r.rate}%` }}
                    />
                  </span>
                  <span className="result-row__val">{r.rate}%</span>
                </div>
              ))}
              <p
                style={{
                  fontSize: "0.78rem",
                  opacity: 0.65,
                  margin: "0.6rem 0 0",
                }}
              >
                Percentages are presented for illustration of the school&rsquo;s
                NSC performance; confirm official figures with the school office.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Academic support"
            title="Support that goes beyond the timetable"
            lede="Extra classes, mentors and guidance, because talent is everywhere, but opportunity is not."
          />
          <div className="grid-2" style={{ marginTop: "2.5rem" }}>
            {academicSupport.map((s, i) => (
              <Reveal className="card" key={s.title} delay={i * 70}>
                <span className="card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: "1.3rem", marginTop: "0.6rem" }}>
                  {s.title}
                </h3>
                <p style={{ marginBottom: 0 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead
            eyebrow="Our people"
            title="The team behind the results"
            align="center"
            maxWidth="52ch"
          />
          <div className="faculty" style={{ marginTop: "2.5rem" }}>
            {faculty.map((f, i) => (
              <Reveal className="faculty__card" key={f.name} delay={i * 80}>
                <div className="faculty__avatar">{f.initials}</div>
                <h4>{f.name}</h4>
                <span className="faculty__role">{f.role}</span>
              </Reveal>
            ))}
          </div>
          <p
            className="center"
            style={{ marginTop: "2rem", color: "var(--ink-mute)", fontSize: "0.85rem" }}
          >
            Want to teach at Mathubesizwe?{" "}
            <Link to="/contact" style={{ color: "var(--blue-2)", fontWeight: 600 }}>
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <CtaBanner
            title="Enrol for the next academic year"
            body="Applications for Grades 8 to 12 are open. It takes just four steps, and there are no school fees."
            primary={{ to: "/admissions", label: "How to apply" }}
            secondary={{ to: "/contact", label: "Ask a question" }}
          />
        </div>
      </section>
    </>
  );
}
