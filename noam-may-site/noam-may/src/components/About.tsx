import { useReveal } from '../hooks/useReveal'
import './About.css'

const team = [
  {
    name: 'נועם גולד',
    nameEn: 'Noam Gold',
    photo: '/images/noam.jpg',
    bio: 'אני מגיעה מעולמות הניהול, השיווק והאסטרטגיה העסקית. נדל"ן הוא שפה שאני מכירה מהבית — אבי, טל גולדפרב, הוא מנהל פרויקטים, בעלים של חברת קדם ניהול פרויקטים בע"מ ומשקיע נדל"ן באירופה, ומשמש כיועץ השוטף לפעילות שלנו.',
  },
  {
    name: 'מאי דרומי',
    nameEn: 'May Dromi',
    photo: '/images/may.jpg',
    bio: 'מכורה לנדל"ן ועיצוב. אני מביאה את הזווית של תכנון, סטנדרט נראות גבוה, ורגישות לעיצוב פנים — ואת היכולת לזהות פוטנציאל בחלל עוד לפני שכל השאר רואים אותו.',
  },
]

export default function About() {
  const ref = useReveal()
  return (
    <section className="about" ref={ref}>
      <div className="about-inner reveal">
        <div className="about-header">
          <span className="section-eyebrow">Who we are</span>
          <h2 className="about-heading">מי אנחנו</h2>
          <p className="about-opener">
            לפני שהתיישבנו בפוז דו ארלהו על שפת האוקיינוס, נדדנו שלוש שנים ברחבי אירופה ואסיה.
          </p>
        </div>

        <div className="about-team">
          {team.map((member) => (
            <div key={member.name} className="about-member">
              <div className="about-photo-wrap">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="about-photo"
                />
              </div>
              <div className="about-member-name">
                <span className="about-member-he">{member.name}</span>
                <span className="label-en about-member-en">{member.nameEn}</span>
              </div>
              <p className="about-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>

        <p className="about-closing">
          אנחנו זוג ישראליות. מכירות את הסטנדרט שאתם מצפים לו, מבינות איך מקבלים החלטות, ויודעות בדיוק מה נדרש כדי לנהל עסקה חשובה מרחוק — בצורה חלקה ופשוטה.
        </p>
      </div>
    </section>
  )
}
