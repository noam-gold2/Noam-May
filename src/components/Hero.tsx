import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <svg className="hero-waves" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <path className="wave wave-1" d="M0,80 C360,140 720,20 1440,80" />
        <path className="wave wave-2" d="M0,100 C400,160 800,40 1440,100" />
        <path className="wave wave-3" d="M0,120 C440,60 900,160 1440,120" />
      </svg>
      <div className="hero-content">
        <span className="label-en hero-eyebrow">Silver Coast, Portugal</span>
        <h1 className="hero-title">נועם ומאי</h1>
        <p className="hero-tagline" dir="ltr">Local eyes. Israeli standards.</p>
        <div className="hero-divider" aria-hidden="true" />
        <p className="hero-subtitle">השקעת נדל"ן בפורטוגל, עם ייצוג מלא ונוכחות פיזית בשטח.</p>
        <p className="hero-desc">איתור, ניהול רכישה, פיקוח שיפוץ והשכרה ברצועת הסילבר קוסט.<br />בשקיפות מלאה ובלי שתצטרכו לטוס הלוך ושוב.</p>
      </div>
      <button
        className="hero-scroll"
        aria-label="גלול למטה"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}
