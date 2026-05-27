import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CyberJourney from './components/CyberJourney'
import Blog from './components/Blog'
import Volunteer from './components/Volunteer'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CyberJourney />
      <Blog />
      {/* <Volunteer /> */}
      <Contact />
      <Footer />
    </main>
  )
}