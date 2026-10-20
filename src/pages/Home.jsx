import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { Ticker, CtaBanner } from "../components/Ticker";
import { homeStats, pillars, news, school } from "../data/school";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img src="/images/hero-matric-awards.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="wrap">
          <span className="eyebrow hero__eyebrow">
            Macambini · Nyoni · KwaZulu-Natal
          </span>
          <h1>
            From the valley,
            <br />
            to the <em>world.</em>
          </h1>
          <div className="hero__bottom">
            <div>
              <p className="hero__blurb">
                Mathubesizwe High School is a proud, no-fee public secondary
                school at the heart of Macambini. Here, ubuntu meets ambition —
                and learners who walk kilometres to reach the classroom go on to
                compete on the world stage.
              </p>
              <div className="hero__actions">
                <Link to="/about" className="btn btn--sky">
                  Discover our story <Icon name="arrow" size={17} />
                </Link>
                <Link to="/admissions" className="btn btn--outline-light">
                  Registration &amp; admissions
                </Link>
              </div>
            </div>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <strong>Grades 8 – 12</strong>
                Senior secondary
              </div>
              <div className="hero__meta-item">
                <strong>No-fee school</strong>
                Quintile 3 · public
              </div>
              <div className="hero__meta-item">
                <strong>98.4%</strong>
                Best recorded NSC pass rate
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* WELCOME */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body">
            <span className="eyebrow">Welcome</span>
            <Reveal as="h2">
              A school built by a community, for its children.
            </Reveal>
            <Reveal as="p" className="lede">
              Mathubesizwe was founded by the Macambini community so that no
              child would have to leave home to finish school.
            </Reveal>
            <Reveal as="p">
              Today we serve around 1 035 learners with a team of 35 dedicated
              educators. Our teachers give up weekends to run extra classes, our
              principal pleads for the facilities our learners deserve, and our
              learners — some of whom walk seven to ten kilometres each way —
              keep showing up, ready to learn.
            </Reveal>
            <Reveal as="p">
              That resilience has produced results: an international moot court
              victory in Poland, a record 98.4% pass rate, and a top provincial
              matric achiever in 2025.
            </Reveal>
            <Reveal>
              <Link to="/about" className="link-arrow">
                Read our full story <Icon name="arrow" size={16} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="split__media split__media--wide">
            <img
              src="/images/matric-class-2026.jpg"
              alt="The Matric Class of 2026"
            />
            <div className="split__badge">
              <strong>35</strong>
              dedicated educators
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--tight section--paper2">
        <div className="wrap">
          <div className="grid-4">
            {homeStats.map((s, i) => (
              <Reveal className="stat" key={s.label} delay={i * 80}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Mathubesizwe"
            title="Three things we do with everything we have"
            lede="No frills, no shortcuts — just a community that refuses to let circumstance decide a child's future."
          />
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {pillars.map((p, i) => (
              <Reveal className="pillar" key={p.title} delay={i * 90}>
                <div className="pillar__icon">
                  <Icon
                    name={["seed", "book", "globe"][i % 3]}
                    size={22}
                  />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMICS TEASER */}
      <section className="section section--dark">
        <div className="wrap split split--reverse">
          <Reveal className="split__media split__media--wide">
            <img
              src="/images/award-handover.jpg"
              alt="A learner receives a certificate at Matric Awards Day"
            />
          </Reveal>
          <div className="split__body">
            <span className="eyebrow">Academics</span>
            <Reveal as="h2">Serious about results, generous with support.</Reveal>
            <Reveal as="p">
              We offer three streams — Sciences &amp; Technology, Commerce, and
              Humanities &amp; Law — grounded in isiZulu and English. Saturday
              classes, university mentors and bursary guidance come standard.
            </Reveal>
            <ul className="list-check list-check--light" style={{ marginBottom: "1.6rem" }}>
              <li>Mathematics, Physical &amp; Life Sciences</li>
              <li>Accounting, Business Studies &amp; Economics</li>
              <li>History, Geography, Tourism &amp; law pathways</li>
            </ul>
            <Link to="/academics" className="btn btn--sky">
              Explore academics <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW / COLLAGE */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Life at Mathubesizwe"
            title="A day in the valley"
            lede="Learning, laughter, heritage and hard work — moments from our school community."
            align="center"
          />
          <Reveal className="collage" style={{ marginTop: "3rem" }}>
            <div className="collage__item collage__item--tall c-a">
              <img
                src="/images/awards-12.jpg"
                alt="Certificate handover at Matric Awards Day"
              />
            </div>
            <div className="collage__item collage__item--mid c-b">
              <img src="/images/awards-14.jpg" alt="Matric Awards Day 2025" />
            </div>
            <div className="collage__item collage__item--short c-c">
              <img src="/images/hall-audience.jpg" alt="Families and guests at school" />
            </div>
            <div className="collage__item collage__item--mid c-b">
              <img src="/images/awards-16.jpg" alt="A learner with the school banner" />
            </div>
            <div className="collage__item collage__item--short c-c">
              <img src="/images/podium-address.jpg" alt="An educator addresses the class" />
            </div>
          </Reveal>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/gallery" className="link-arrow">
              View the full gallery <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="section section--paper2">
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <SectionHead
              eyebrow="News &amp; achievements"
              title="Proud moments"
              maxWidth="40ch"
            />
            <Link to="/news" className="link-arrow">
              All news <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div
            className="grid-3"
            style={{ marginTop: "2.5rem" }}
          >
            {news.slice(0, 3).map((n, i) => (
              <Reveal key={n.title} delay={i * 90}>
                <article className="post">
                  <div className="post__media">
                    <img src={n.img} alt={n.title} />
                  </div>
                  <div className="post__body">
                    <div className="post__meta">
                      <span>{n.tag}</span>
                      <span className="dot" />
                      <span>{n.date}</span>
                    </div>
                    <h3>{n.title}</h3>
                    <p>{n.body}</p>
                    <Link to="/news" className="link-arrow">
                      Read more <Icon name="arrow" size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="wrap-narrow center">
          <Reveal as="span" className="eyebrow" style={{ justifyContent: "center" }}>
            In their words
          </Reveal>
          <Reveal as="blockquote" className="lede" style={{ fontStyle: "italic" }}>
            “Our learners are committed to their studies. Some walk seven to ten
            kilometres to school every day.”
          </Reveal>
          <Reveal as="p" style={{ color: "var(--ink-mute)", fontSize: "0.9rem" }}>
            — {school.principal}, Principal
          </Reveal>
          <hr className="rule-sky mx-auto" />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <CtaBanner />
        </div>
      </section>
    </>
  );
}
