import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Process.css'

interface Track {
  label: string
  description: string
  includes: string[]
  pricing: { label: string; amount: string }[]
}

interface Stage {
  num: string
  titleHe: string
  titleEn: string
  description: string
  includes?: string[]
  pricing?: { label: string; amount: string; note?: string }[]
  tracks?: Track[]
}

const stages: Stage[] = [
  {
    num: '01',
    titleHe: 'ניהול וליווי הרכישה',
    titleEn: 'Search & Acquisition',
    description:
      'מוצאות את הנכס הנכון לפי התקציב והאסטרטגיה שלכם, ומנהלות את כל התהליך. מהחיפוש והסיורים בשטח, בעשרות נכסים אם צריך, ועד קבלת המפתח. בשלב זה אנחנו תומכות בכם בהכל, בלי שתצטרכו להגיע לפורטוגל.',
    includes: [
      'איתור נכסים לפי פרופיל השקעה',
      'סיורים בשטח וליווי שוטף',
      'ניהול מו"מ מול המוכר',
      'תיאום עורכי דין ונוטריון',
      'הנפקת NIF ופתיחת חשבון בנק',
      'ייפוי כוח וייצוג מלא עד החתימה',
    ],
    pricing: [
      {
        label: 'עמלת ליווי',
        amount: '3.5% מסכום הרכישה (עד 8,000€)',
        note: 'מקדמה של 1,500€ בתחילת העבודה, יורדת מהתשלום הסופי המועבר רק לאחר השלמת הרכישה',
      },
    ],
  },
  {
    num: '02',
    titleHe: 'ניהול ופיקוח שיפוץ',
    titleEn: 'Renovation Management',
    description:
      'אם הנכס דורש שדרוג או התאמה, אנחנו מנהלות את הפרויקט מקרוב. מוודאות שהתקציב נשמר, שהאיכות ללא פשרות ושהזמנים מתקיימים.',
    includes: [
      'תכנון תקציב וחוות דעת ראשונית',
      'גיוס קבלנים והשוואת הצעות מחיר',
      'פיקוח שוטף בשטח',
      'דיווח מצולם בזמן אמת',
      'ניהול מסירה ובדיקת איכות',
    ],
    pricing: [
      { label: 'בתקופת השיפוץ', amount: '1,200€ לחודש' },
      { label: 'חריגות זמנים שלא באשמתכם', amount: '900€ לחודש' },
    ],
  },
  {
    num: '03',
    titleHe: 'ניהול והשכרת הנכס',
    titleEn: 'Rental Management',
    description:
      'אחרי שהנכס מוכן, אנחנו דואגות שיתחיל לייצר הכנסה, לפי המודל שהגדרנו יחד. אתם בוחרים את המסלול, אנחנו מנהלות את האופרציה.',
    tracks: [
      {
        label: 'השכרה לטווח ארוך',
        description:
          'משווקות את הנכס, מסננות מועמדים קפדנית, ודואגות לחוזה שמגן עליכם. מרגע שהדייר נכנס, אנחנו הכתובת היחידה שלו לכל בעיה, ואתם מקבלים דיווח שוטף ושכר דירה בזמן.',
        includes: [
          'פרסום הנכס בפלטפורמות',
          'בדיקת איתנות פיננסית של שוכרים',
          'הכנת חוזה שכירות',
          'מסירת מפתחות',
          'טיפול בתקלות ותיאום אנשי מקצוע',
          'מעקב גבייה',
        ],
        pricing: [
          { label: 'איתור והחתמת דייר', amount: 'שכר דירה חודש אחד' },
          { label: 'ניהול שוטף', amount: '100€ לחודש' },
        ],
      },
      {
        label: 'השכרה לטווח קצר',
        description:
          'ניהול מלא מאפס למאה. אנחנו מנהלות את הנכס כמו מלון בוטיק: מתקשורת עם האורחים ועד ניקיון ותחזוקה בין הזמנה להזמנה.',
        includes: [
          'הקמה וניהול פרופילים (Airbnb, Booking)',
          'תמחור דינמי',
          'מענה 24/7 לאורחים',
          "צ'ק-אין ומסירת מפתחות",
          'תיאום ניקיון וכביסה',
          'תחזוקה שוטפת וניהול ביקורות',
        ],
        pricing: [
          { label: 'ניהול', amount: '20% מהכנסות השכירות' },
        ],
      },
    ],
  },
]

const additionalCosts = [
  { label: 'מיסוי ואגרות', detail: 'מס רכישה (IMT), מס בולים, אגרות נוטריון ורישום בטאבו' },
  { label: 'אנשי מקצוע', detail: 'שכר טרחת עורך דין, רואה חשבון או יועץ מס לפי צורך' },
  { label: 'פרויקט ואבזור', detail: 'עלויות חומרים ועבודת קבלן בשיפוץ, ריהוט וציוד לנכס' },
  { label: 'תחזוקה שוטפת', detail: 'תשלום לאנשי מקצוע במקרה תקלות, ועד בית (Condomínio) וביטוח נכס' },
]

function StageCard({ stage }: { stage: Stage }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`stage-card ${open ? 'stage-card--open' : ''}`}>
      <button className="stage-header" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="stage-num label-en">{stage.num}</span>
        <div className="stage-titles">
          <span className="stage-title-he">{stage.titleHe}</span>
          <span className="stage-title-en label-en">{stage.titleEn}</span>
        </div>
        <svg className="stage-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="stage-body" ref={bodyRef}
        style={{ maxHeight: open ? (bodyRef.current?.scrollHeight ?? 900) + 'px' : '0' }}>
        <div className="stage-body-inner">
          <p className="stage-description">{stage.description}</p>

          {/* Single-track */}
          {stage.includes && (
            <ul className="stage-includes">
              {stage.includes.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
          {stage.pricing && (
            <div className="stage-pricing">
              {stage.pricing.map((p, i) => (
                <div key={i} className="stage-price-row">
                  <span className="stage-price-label">{p.label}</span>
                  <span className="stage-price-amount">{p.amount}</span>
                  {p.note && <p className="stage-price-note">{p.note}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Dual-track */}
          {stage.tracks && (
            <div className="stage-tracks">
              {stage.tracks.map((track, i) => (
                <div key={i} className="track">
                  <p className="track-label">{track.label}</p>
                  <p className="track-description">{track.description}</p>
                  <ul className="stage-includes">
                    {track.includes.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                  <div className="stage-pricing">
                    {track.pricing.map((p, j) => (
                      <div key={j} className="stage-price-row">
                        <span className="stage-price-label">{p.label}</span>
                        <span className="stage-price-amount">{p.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  const ref = useReveal()
  const [costsOpen, setCostsOpen] = useState(false)
  const costsRef = useRef<HTMLDivElement>(null)

  return (
    <section className="process" ref={ref}>
      <div className="process-inner reveal">
        <div className="process-header">
          <span className="section-eyebrow">How it works</span>
          <h2 className="process-heading">איך זה עובד</h2>
          <p className="process-subhead">הכל על השולחן. אין הפתעות.</p>
        </div>

        <div className="stages">
          {stages.map(s => <StageCard key={s.num} stage={s} />)}
        </div>

        {/* Additional costs disclosure */}
        <div className="costs-disclosure">
          <button
            className="costs-toggle"
            onClick={() => setCostsOpen(o => !o)}
            aria-expanded={costsOpen}
          >
            <span>עלויות נלוות וצד ג׳</span>
            <svg className={`costs-chevron ${costsOpen ? 'costs-chevron--open' : ''}`}
              width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="costs-body" ref={costsRef}
            style={{ maxHeight: costsOpen ? (costsRef.current?.scrollHeight ?? 400) + 'px' : '0' }}>
            <div className="costs-body-inner">
              <p className="costs-intro">
                העמלות המפורטות לעיל הן עבור השירות, הליווי והנוכחות הפיזית שלנו בשטח. התקציב הכולל מורכב גם מהוצאות נוספות המשולמות ישירות לגורמים הרלוונטיים. כחלק מבניית האסטרטגיה בתחילת התהליך, אנחנו מגלמות ומחשבות מראש את כל ההוצאות הנלוות, כדי שתקבלו תמונה מלאה ומדויקת של העסקה.
              </p>
              <ul className="costs-list">
                {additionalCosts.map((c, i) => (
                  <li key={i}>
                    <span className="costs-item-label">{c.label}</span>
                    <span className="costs-item-detail">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
