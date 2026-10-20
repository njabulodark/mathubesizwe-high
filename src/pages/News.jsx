import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { CtaBanner } from "../components/Ticker";
import { news } from "../data/school";

export default function News() {
  const [feature, ...rest] = news;

  return (
    <>
      <PageHero
        crumb="News"
        eyebrow="Latest"
        title="News &amp; events"
        intro="Achievements, milestones and community moments from Mathubesizwe High School."
        image={asset("/images/awards-14.jpg")}
      />

      {/* FEATURE */}
      <section className="section">
        <div className="wrap">
          <Reveal
            className="post"
            style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr" }}
          >
            <div className="post__media" style={{ aspectRatio: "auto", height: "100%" }}>
              <img src={feature.img} alt={feature.title} style={{ height: "100%" }} />
            </div>
            <div className="post__body" style={{ padding: "clamp(1.6rem, 4vw, 3rem)" }}>
              <div className="post__meta">
                <span className="tag">{feature.tag}</span>
                <span className="dot" />
                <span>{feature.date}</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                {feature.title}
              </h2>
              <p style={{ fontSize: "1rem" }}>{feature.body}</p>
              <p>
                Siphokazi&rsquo;s achievement follows a proud tradition at
                Mathubesizwe, where learners have gone on to represent South
                Africa abroad and to earn places at the country&rsquo;s leading
                universities.
              </p>
              <Link to="/contact" className="link-arrow">
                Congratulate the school <Icon name="arrow" size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead eyebrow="More stories" title="From the school" />
          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            {rest.map((n, i) => (
              <Reveal key={n.title} delay={(i % 3) * 80}>
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
                    <Link to="/contact" className="link-arrow">
                      Get involved <Icon name="arrow" size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="What&rsquo;s coming up"
            title="School calendar highlights"
            lede="Dates are indicative, so please confirm with the school office."
          />
          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            {[
              { d: "Third term", t: "Open day for prospective learners", b: "Tour the campus, meet our educators and collect an application form." },
              { d: "September", t: "Registration closes", b: "Submit your completed application and documents for the following year." },
              { d: "October", t: "Grade 12 spring classes", b: "Final revision programme for our matric candidates." },
              { d: "November", t: "NSC examinations", b: "Our matric cohort sits the National Senior Certificate." },
              { d: "January", t: "Results & registration", b: "Matric results released, followed by new-learner orientation." },
              { d: "Throughout", t: "Saturday classes", b: "Extra tuition and support for all grades." },
            ].map((e, i) => (
              <Reveal className="card" key={e.t} delay={(i % 3) * 70}>
                <span className="tag">{e.d}</span>
                <h3 style={{ fontSize: "1.2rem", margin: "0.9rem 0 0.4rem" }}>
                  {e.t}
                </h3>
                <p style={{ marginBottom: 0, fontSize: "0.92rem" }}>{e.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <CtaBanner
            title="Have news to share?"
            body="Alumni, parents and community members, send us your updates and achievements."
            primary={{ to: "/contact", label: "Send a message" }}
            secondary={{ to: "/gallery", label: "Browse the gallery" }}
          />
        </div>
      </section>
    </>
  );
}
