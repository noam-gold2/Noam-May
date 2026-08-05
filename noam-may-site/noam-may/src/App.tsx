import { Analytics } from '@vercel/analytics/react'
import Hero     from './components/Hero'
import Intro    from './components/Intro'
import Stats    from './components/Stats'
import Messages from './components/Messages'
import Process  from './components/Process'
import About    from './components/About'
import Contact  from './components/Contact'

export default function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <Messages />
      <Process />
      <About />
      <Contact />
      <Analytics />
    </>
  )
}
