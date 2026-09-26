import Reveal from "./Reveal";

const entries = [
  {
    number: "01",
    degree: "BSc (Hons) in Computer Science",
    place: "Eastern University, Sri Lanka",
    detail:
      "Focused on artificial intelligence, machine learning, software systems, and the ideas that connect them.",
    date: "2023 — 2027",
  },
  {
    number: "02",
    degree: "GCE Advanced Level",
    place: "St. Thomas' College, Matale, Sri Lanka",
    detail: "Physical science stream, laying the groundwork for a computing degree.",
    date: "2020",
  },
  {
    number: "03",
    degree: "GCE Ordinary Level",
    place: "St. Thomas' College, Matale, Sri Lanka",
    detail: "Broad foundation across sciences and mathematics.",
    date: "2017",
  },
];

export default function Education() {
  return (
    <section id="education" className="section section-paper">
      <p className="ghost-title" aria-hidden="true">Study</p>
      <p className="section-kicker">03 / The path so far</p>
      <div className="section-heading">
        <h2>
          <span className="slash">/</span> Education &<br />
          <em>learning</em>
        </h2>
        <p className="section-note">
          Always learning.
          <br />
          Always building.
        </p>
      </div>

      <div className="education-list">
        {entries.map((entry, index) => (
          <Reveal as="article" delay={index * 90} className="education-row" key={entry.degree}>
            <span className="row-number">{entry.number}</span>
            <div>
              <h3>{entry.degree}</h3>
              <p className="education-place">{entry.place}</p>
              <p>{entry.detail}</p>
            </div>
            <span className="education-date">{entry.date}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
