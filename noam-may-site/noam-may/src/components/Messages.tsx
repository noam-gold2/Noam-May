import { useReveal } from '../hooks/useReveal'
import './Messages.css'

const messages = [
  {
    tag: 'פיזור סיכונים',
    tagEn: 'Diversification',
    body: 'החזקת נדל"ן בחו"ל היא קודם כל כלי לפיזור סיכונים ולשמירה על הכסף. עם כל האהבה לארץ, החזקת נכס במטבע זר ובשוק האירופי היא דרך נכונה להגן על הון — ולתת לצמיחה הטבעית של האזור לעשות את שלה.',
  },
  {
    tag: 'אסטרטגיה אישית',
    tagEn: 'Personal Strategy',
    body: 'אנחנו לא מאמינות בפתרון גנרי אחד. לפני שנצא לשטח עבורכם, נשב יחד ונרד לפרטים: נגדיר את התקציב, המטרה (תשואה שוטפת, עליית ערך או שילוב), טווח ההשקעה ושיקולי המס. רק כשהמטרות ברורות, נתחיל לחפש ולראות נכסים בשטח עד שנמצא את העסקה המתאימה עבורכם.',
  },
  {
    tag: 'שקיפות מלאה',
    tagEn: 'Full Transparency',
    body: 'לאורך שנתיים באזור בנינו קשרים ישירים מול סוכני נדל"ן, עורכי דין ואנשי מקצוע מקומיים. אנחנו עוקבות באופן שוטף אחרי החוקים והרגולציה המשתנה בפורטוגל, ומקפידות על שקיפות מלאה — כל מידע, נתון או שינוי משוקף לכם בזמן אמת. אגב, המגמה הכללית בפורטוגל היא לטובת בעלי הנכסים והמשקיעים, לעומת מדינות המעדיפות הגנה על שוכרים ובלימת עליות מחירים.',
  },
]

export default function Messages() {
  const ref = useReveal()
  return (
    <section className="messages" ref={ref}>
      <div className="messages-inner reveal">
        <span className="section-eyebrow">Why invest with us</span>
        <h2 className="messages-heading">כמה דברים שאנחנו מאמינות בהם</h2>
        <div className="messages-list">
          {messages.map((m, i) => (
            <div className="message-item" key={i}>
              <div className="message-tags">
                <span className="message-tag">{m.tag}</span>
                <span className="message-tag-en label-en">{m.tagEn}</span>
              </div>
              <p className="message-body">{m.body}</p>
            </div>
          ))}
        </div>
        <p className="messages-closing">
          אנחנו עושות את מה שאנחנו אוהבות — ואתם משקיעים בלי כאבי ראש.
        </p>
      </div>
    </section>
  )
}
