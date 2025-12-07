import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Carousel from "./components/Carousel.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ExperienceItem from "./components/ExperienceItem.jsx";
import Footer from "./components/Footer.jsx";
import projects from "./data/projects.js";
import experience from "./data/experience.js";

function App() {

  return (
      <div className={"min-h-screen bg-neutral-950 text-neutral-100"}>
          <Navbar/>

          {/*about */}
          <Section id="about" title={"About me"}>
              <div className={"flex flex-col items-center gap-6"}>
                  <img
                      src={"/personal_pic.jpg"}
                      alt={"Andrew Atherton's Profile"}
                      className={"size-40 rounded-2xl object-cover ring-2 ring-neutral-800"}
                  />
                  <div className={"space-y-4 leading-relaxed text-neutral-300"}>
                      <p>
                          Hi, I'm <span className={"font-semibold text-white"}>Andrew Atherton</span> a passionate software engineer with a knack for building
                          efficient, user-friendly web applications. My expertise spans across modern frontend frameworks, backend technologies, and cloud platforms.
                      </p>
                      <p>
                          I am dedicated to crafting high-quality code, optimizing user experiences, and contributing to innovative projects from conception to deployment.
                      </p>
                      <div className={"flex gap-3 pt-2 justify-center"}>
                          <a
                              href={"#projects"}
                              className={"rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"}
                          >View Projects
                          </a>
                          <a
                              href={"#experience"}
                              className={"rounded-xl bg-white/10 px-4 py-2 hover:bg-white/5"}
                          >
                              Work experiences
                          </a>
                      </div>
                  </div>
              </div>
          </Section>

          {/*Pojrects with carousel */}
          <Section id="projects" title={"Projects"} subtitle={"Some of my recent work"}>
              <Carousel>
                  {projects.map((p)=>(
                      <ProjectCard key={p.id} project={p}/>
                  ))}
              </Carousel>
          </Section>

          {/* Experiene */}
          <Section id={"experience"} title={"Work experience"} subtitle={"My Work Experience"}>
              <div className={"space-y-4 text-left"}>
                  {experience.map((job)=>(
                      <ExperienceItem key={job.id} item={job}/>
                  ))}
              </div>
          </Section>

          <Footer/>
      </div>

  )
}

export default App