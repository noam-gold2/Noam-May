import { useEffect, useRef, useState } from 'react'
import './Stats.css'

interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  { value: 19,   suffix: '%',              label: 'עליית מחירי הנדל"ן בקלדש דה ריינה', sublabel: 'בשנה האחרונה' },
  { value: 17.1, suffix: '%',              label: 'עליית ערך נדל"ן ארצית בפורטוגל',     sublabel: 'הגבוהה באיחוד האירופי — Eurostat' },
  { value: 9.7,  suffix: '%',              label: 'גידול דמוגרפי באזור',                 sublabel: '2021–2025, מקום רביעי בפורטוגל' },
  { value: 40,   suffix: '%', prefix: 'עד ', label: 'פער המחירים מליסבון',              sublabel: 'זול יותר בסילבר קוסט, נכון להיום' },
]

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const decimals = target % 1 !== 0 ? 1 : 0
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({ stat, animate }: { stat: Stat; animate: boolean }) {
  const count = useCountUp(stat.value, 1600, animate)
  const display = stat.value % 1 !== 0 ? count.toFixed(1) : Math.round(count)
  return (
    <div className="stat-item">
      <div className="stat-number">
        {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
        <span>{display}</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-sublabel">{stat.sublabel}</div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats-inner">
        <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>By the numbers</span>
        <h2 className="stats-heading">המספרים שגורמים לנו להמשיך לחפש</h2>
        <div className="stats-grid">
          {stats.map((s, i) => <StatItem key={i} stat={s} animate={animate} />)}
        </div>
      </div>
    </section>
  )
}
