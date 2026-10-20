import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { CtaBanner } from "../components/Ticker";
import { aboutFacts, timeline, values, school } from "../data/school";

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our school"
        title="The story of Mathubesizwe"
        intro="A community-founded school in Macambini, KwaZulu-Natal, that has become a gateway to a better life for generations of local families."
        image="/images/awards-01.jpg"
      />

      {/* STORY */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body">
            <span className="eyebrow">Who we are</span>
            <Reveal as="h2">Deep in the valley, high in ambition.</Reveal>
            <Reveal as="p">
              Mathubesizwe High School (also known as Mathubesizwe Senior
              Secondary School) stands in the Macambini Tribal Authority near
              Nyoni, in the Ilembe district of KwaZulu-Natal. It is a public
              no-fee school, classified under quintile 3, serving around 1 035
              learners with a team of about 35 educators.
            </Reveal>
            <Reveal as="p">
              Ours is a story of a community that decided its children deserved
              an education close to home. It is also a story of teachers who
              source resources themselves, borrow laptops so learners can
              research, and arrange for academics from UKZN and UNISA to mentor
              our pupils.
            </Reveal>
            <Reveal as="p">
              And it is a story of learners, many of whom walk seven to ten
              kilometres to school each day, whose discipline has taken our
              name to the national and international stage.
            </Reveal>
            <Reveal>
              <Link to="/academics" className="link-arrow">
                See our academic offering <Icon name="arrow" size={16} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="split__media split__media--wide">
            <img
              src="/images/school-banner.jpg"
              alt="The official Mathubesizwe High School banner"
            />
            <div className="split__badge">
              <strong>Macambini</strong>
              our home community
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACTS */}
      <section className="section section--tight section--paper2">
        <div className="wrap">
          <SectionHead eyebrow="At a glance" title="The essential facts" />
          <div className="grid-2" style={{ marginTop: "2.5rem", rowGap: "1.6rem" }}>
            {aboutFacts.map((f, i) => (
              <Reveal
                key={f.k}
                delay={i * 60}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(8rem, 12rem) 1fr",
                  gap: "1.2rem",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "1.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    color: "var(--blue)",
                  }}
                >
                  {f.k}
                </span>
                <span style={{ fontSize: "0.95rem" }}>{f.v}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="section">
        <div className="wrap">
          <div className="grid-2">
            <Reveal className="card">
              <div className="pillar__icon" style={{ marginBottom: "1rem" }}>
                <Icon name="target" size={22} />
              </div>
              <h3>Our vision</h3>
              <p style={{ marginBottom: 0 }}>
                To give every child of Macambini an education that opens doors
                to the world, grounded in ubuntu, driven by excellence, and
                limited only by their imagination.
              </p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <div className="pillar__icon" style={{ marginBottom: "1rem" }}>
                <Icon name="compass" size={22} />
              </div>
              <h3>Our mission</h3>
              <p style={{ marginBottom: 0 }}>
                To teach rigorously and care deeply; to build the library,
                laboratory and media centre our learners deserve; and to prepare
                young people who are ready for university, for work, and for
                service to their community.
              </p>
            </Reveal>
          </div>

          <SectionHead
            eyebrow="What we stand for"
            title="Our values"
            align="center"
            maxWidth="52ch"
          />
          <div className="grid-4" style={{ marginTop: "2.5rem" }}>
            {values.map((v, i) => (
              <Reveal className="pillar" key={v.title} delay={i * 80}>
                <div className="pillar__icon">
                  <Icon
                    name={["heart", "seed", "star", "scale"][i % 4]}
                    size={22}
                  />
                </div>
                <h3 style={{ fontSize: "1.3rem" }}>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="section section--dark">
        <div className="wrap split">
          <Reveal className="split__media">
            <img
              src="/images/hall-guests.jpg"
              alt="Educators and community members at a school ceremony"
              style={{ aspectRatio: "4 / 5" }}
            />
          </Reveal>
          <div className="split__body">
            <span className="eyebrow">From the principal&rsquo;s desk</span>
            <Reveal as="h2">
              “Our teachers go an extra mile.”
            </Reveal>
            <Reveal as="p">
              {school.principal} has led Mathubesizwe with a clear conviction:
              that the commitment of teachers can change the course of a
              learner&rsquo;s life. Under her leadership, educators research on
              behalf of learners, run weekend classes, and open doors that
              circumstance tried to close.
            </Reveal>
            <Reveal as="p">
              She has also been candid about what the school still needs: a
              library, a science laboratory and an internet-connected media
              centre. She continues to appeal to authorities and donors alike.
            </Reveal>
            <Reveal as="blockquote" className="lede" style={{ fontStyle: "italic" }}>
              “The school is incredibly proud of the hard work and determination
              our learners put into their studies.”
            </Reveal>
            <p style={{ opacity: 0.7, fontSize: "0.88rem" }}>
              Mrs Khumalo, Principal
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Our journey"
            title="Milestones that shaped us"
            lede="From a community's dream to a school that competes on the world stage."
          />
          <div className="grid-2" style={{ marginTop: "3rem", alignItems: "start" }}>
            <div className="timeline">
              {timeline.slice(0, 3).map((t) => (
                <Reveal className="timeline__item" key={t.year}>
                  <div className="timeline__year">{t.year}</div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </Reveal>
              ))}
            </div>
            <div className="timeline">
              {timeline.slice(3).map((t, i) => (
                <Reveal className="timeline__item" key={t.year} delay={i * 80}>
                  <div className="timeline__year">{t.year}</div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <CtaBanner
            title="Become part of our story"
            body="Whether you are a parent, a learner, an alumnus or a donor, there is a place for you at Mathubesizwe."
          />
        </div>
      </section>
    </>
  );
}
