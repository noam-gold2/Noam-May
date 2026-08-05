import { useReveal } from '../hooks/useReveal'
import './Values.css'

const items = [
  {
    num: '01',
    body: 'החזקת נדל"ן בחו"ל היא קודם כל כלי לפיזור סיכונים ולשמירה על הכסף. עם כל האהבה לארץ, החזקת נכס במטבע זר ובשוק האירופי היא דרך נכונה להגן על הון, ולתת לצמיחה הטבעית של האזור לעשות את שלה.',
  },
  {
    num: '02',
    body: 'אנחנו לא מאמינות בפתרון גנרי אחד. לפני שנצא לשטח עבורכם, נשב יחד ונרד לפרטים: נגדיר את התקציב, המטרה — תשואה שוטפת, עליית ערך או שילוב — טווח ההשקעה ושיקולי המס. רק כשהמטרות ברורות, נתחיל לחפש ולראות נכסים בשטח עד שנמצא את העסקה המתאימה.',
  },
  {
    num: '03',
    body: 'לאורך שנתיים באזור בנינו קשרים ישירים מול סוכני נדל"ן, עורכי דין ואנשי מקצוע מקומיים. אנחנו עוקבות באופן שוטף אחרי החוקים והרגולציה המשתנה בפורטוגל, ומקפידות על שקיפות מלאה — כל מידע, נתון או שינוי משוקף לכם בזמן אמת. אגב, המגמה הכללית של פורטוגל היא לטובת בעלי הנכסים והמשקיעים.',
  },
]

export default function Values() {
  const ref = useReveal()

  return (
    <section className="values" ref={ref}>
      <div className="values-inner reveal">
        <span className="section-eyebrow">Why it works</span>
        <h2 className="values-heading">מה שמנחה אותנו</h2>
        <div className="values-list">
          {items.map(item => (
            <div className="values-item" key={item.num}>
              <span className="values-num label-en">{item.num}</span>
              <p className="values-body">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="values-close">
          אנחנו מאמינות שעסקה טובה היא עסקה שכולם מרוצים ממנה — וזו המטרה שלנו. אנחנו עושות את מה שאנחנו אוהבות, ואתם משקיעים בלי כאבי ראש.
        </p>
      </div>
    </section>
  )
}
