import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <WorkExperience/>
      <section
  id="projects"
  className="w-full py-12 px-6 md:px-12 lg:px-20 bg-white scroll-mt-28.5"
>
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="mt-4 text-5xl font-bold text-primary">
      Featured Projects
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary">
      A selection of projects that demonstrate my expertise in full-stack web
      development, responsive UI design, REST APIs, authentication, and
      modern JavaScript technologies.
    </p>

  </div>
</section>
      <Project1/>
      <Project2/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
