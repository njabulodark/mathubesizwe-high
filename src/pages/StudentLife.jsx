import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { CtaBanner } from "../components/Ticker";
import { studentClubs } from "../data/school";

const day = [
  {
    time: "05:30",
    title: "The walk begins",
    body: "Many learners set off on foot, some travelling seven to ten kilometres before the first bell.",
  },
  {
    time: "07:30",
    title: "Assembly",
    body: "The school gathers for notices, prayer, song and the day's focus. Ubuntu in practice.",
  },
  {
    time: "08:00",
    title: "Lessons",
    body: "A full academic timetable across our three streams, taught in isiZulu and English.",
  },
  {
    time: "15:00",
    title: "Clubs & sport",
    body: "Moot court, debating, science club, choir, agriculture, athletics, after the last bell.",
  },
  {
    time: "Saturdays",
    title: "Extra classes",
    body: "Educators volunteer their weekends for tuition in Mathematics, Sciences and languages.",
  },
];

export default function StudentLife() {
  return (
    <>
      <PageHero
        crumb="Student Life"
        eyebrow="Beyond the classroom"
        title="Student life"
        intro="Moot court champions, debaters, gardeners, singers and athletes, our learners are more than their marks."
        image="/images/awards-16.jpg"
      />

      {/* MOOT COURT FEATURE */}
      <section className="section">
        <div className="wrap split split--reverse">
          <Reveal className="split__media split__media--wide">
            <img
              src="/images/celebration.jpg"
              alt="A learner celebrates a hard-won matric pass"
            />
            <div className="split__badge">
              <strong>Poland</strong>
              International Moot Court, 2020
            </div>
          </Reveal>
          <div className="split__body">
            <span className="eyebrow">Signature programme</span>
            <Reveal as="h2">Where our learners argue, and win, on the world stage.</Reveal>
            <Reveal as="p">
              In 2020, two of our learners, Nosipho Dube and Nondumiso Ntshangase,
              were selected to represent South Africa at the 5th International
              Moot Court Competition in Gdynia, Poland. Team South Africa was
              announced as the winner.
            </Reveal>
            <Reveal as="p">
              That journey began in the National Schools Moot Court Competition
              and was powered by a teacher, Ms Mandisa Mtolo, who borrowed
              learners her own laptop and arranged mentors from UKZN and UNISA so
              they could research, write and present like advocates.
            </Reveal>
            <Reveal as="blockquote" className="lede" style={{ fontStyle: "italic" }}>
              “This is the breadbasket and a gateway to a better life for my
              family and many others in Macambini.”
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead
            eyebrow="Get involved"
            title="Clubs, teams &amp; societies"
            lede="There is a place for every talent here, and a habit of finding ability in unexpected places."
          />
          <div className="grid-4" style={{ marginTop: "2.5rem" }}>
            {studentClubs.map((c, i) => (
              <Reveal className="card" key={c.title} delay={(i % 4) * 70}>
                <div className="pillar__icon" style={{ marginBottom: "1rem" }}>
                  <Icon
                    name={["scale", "spark", "flask", "seed", "music", "ball", "code", "users"][i % 8]}
                    size={22}
                  />
                </div>
                <h4 style={{ marginBottom: "0.3rem" }}>{c.title}</h4>
                <p style={{ marginBottom: 0, fontSize: "0.9rem" }}>{c.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DAY IN THE LIFE */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow">A day in the life</span>
              <Reveal as="h2">The rhythm of Mathubesizwe</Reveal>
              <Reveal as="p">
                Our school day is shaped by the reality of the valley and the
                determination of its young people. It is early starts, long
                walks and late buses, but it is also full classrooms, loud
                choirs and hard-won results.
              </Reveal>
              <Reveal>
                <img
                  src="/images/hall-audience.jpg"
                  alt="Learners, families and guests in the school hall"
                  style={{
                    borderRadius: "var(--radius)",
                    marginTop: "1.5rem",
                    boxShadow: "var(--shadow)",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                  }}
                />
              </Reveal>
            </div>
            <ol
              className="steps"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {day.map((d) => (
                <Reveal as="li" className="step" key={d.time}>
                  <span
                    className="step__num"
                    style={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {d.time}
                  </span>
                  <div>
                    <h4 style={{ color: "var(--cream)" }}>{d.title}</h4>
                    <p style={{ color: "rgba(246,240,228,0.78)" }}>{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Culture &amp; heritage"
            title="Proudly isiZulu, proudly KwaZulu-Natal"
            lede="We celebrate the language, music and traditions of our community, and we carry that pride into everything we do."
            align="center"
          />
          <Reveal className="collage" style={{ marginTop: "3rem" }}>
            <div className="collage__item collage__item--tall c-a">
              <img src="/images/awards-12.jpg" alt="Certificate handover" />
            </div>
            <div className="collage__item collage__item--mid c-f">
              <img src="/images/awards-18.jpg" alt="A learner with the school banner" />
            </div>
            <div className="collage__item collage__item--short c-g">
              <img src="/images/podium-address.jpg" alt="An address to the class" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <CtaBanner
            title="Find your place at Mathubesizwe"
            body="Whichever gift you bring (an argument, a song, a green thumb or a fast pair of legs), we will help you grow it."
          />
        </div>
      </section>
    </>
  );
}
