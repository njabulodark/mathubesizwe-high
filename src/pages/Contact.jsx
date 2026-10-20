import { useState } from "react";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { school } from "../data/school";

const enquiries = [
  "Admissions & registration",
  "General enquiry",
  "Academic records",
  "Donations & sponsorship",
  "Careers at Mathubesizwe",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: enquiries[0],
    message: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Contact us"
        intro="Whether you are applying, donating or simply curious, the Mathubesizwe community would love to hear from you."
        image="/images/awards-12.jpg"
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            {/* INFO */}
            <div>
              <span className="eyebrow">School office</span>
              <Reveal as="h2" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
                Reach the school
              </Reveal>
              <div className="info-block" style={{ marginTop: "2rem" }}>
                <div className="info-item">
                  <span className="info-item__icon">
                    <Icon name="pin" size={20} />
                  </span>
                  <div>
                    <h4>Physical address</h4>
                    <p>{school.address}</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-item__icon">
                    <Icon name="mail" size={20} />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href={`mailto:${school.email}`}>{school.email}</a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-item__icon">
                    <Icon name="phone" size={20} />
                  </span>
                  <div>
                    <h4>Telephone</h4>
                    <p>
                      <a href={`tel:${school.phone.replace(/[^+\d]/g, "")}`}>
                        {school.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-item__icon">
                    <Icon name="clock" size={20} />
                  </span>
                  <div>
                    <h4>Office hours</h4>
                    <p>Monday – Friday · 07:30 – 15:30</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-item__icon">
                    <Icon name="users" size={20} />
                  </span>
                  <div>
                    <h4>Leadership</h4>
                    <p>
                      {school.principal}, Principal · {school.district}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="map-frame"
                aria-label="Map of Macambini, KwaZulu-Natal"
              >
                <iframe
                  title="Map showing Macambini, KwaZulu-Natal"
                  src="https://www.google.com/maps?q=Macambini,%20KwaZulu-Natal&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* FORM */}
            <Reveal>
              <SectionHead
                eyebrow="Send a message"
                title="How can we help?"
                maxWidth="34ch"
              />
              {sent ? (
                <div className="form" style={{ marginTop: "1.5rem" }}>
                  <div className="form__ok">
                    <strong>Thank you.</strong> Your message has been prepared.
                    We will be in touch. (This demo form does not send data. Please
                    email the school office directly.)
                  </div>
                  <button
                    className="btn btn--ghost"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit} style={{ marginTop: "1.5rem" }}>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone (optional)</label>
                      <input
                        id="phone"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="e.g. 082 000 0000"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="topic">What is this about?</label>
                    <select id="topic" value={form.topic} onChange={update("topic")}>
                      {enquiries.map((e) => (
                        <option key={e}>{e}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      required
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us how we can help…"
                    />
                  </div>
                  <button type="submit" className="btn">
                    Send message <Icon name="arrow" size={16} />
                  </button>
                  <p className="form__note">
                    By sending this message you agree that the school may contact
                    you about your enquiry. Please do not include sensitive
                    personal information.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
