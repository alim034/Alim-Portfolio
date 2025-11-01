import { Layout } from './components/Layout.jsx'
import PageLoader from './components/PageLoader.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Education from './sections/Experience.jsx'
import Certifications from './sections/Certifications.jsx'
import Achievements from './sections/Achievements.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <PageLoader />
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </Layout>
    </>
  )
}
