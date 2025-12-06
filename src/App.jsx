import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Carousel from "./components/carousel";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects.js";
import experience from "./data/experience.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">
        <Section id="about" title="About Me">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="/your-photo.jpg" 
              alt="Andrew Atherton"
              className="w-56 h-56 rounded-2xl object-cover bg-gray-800 ring-4 ring-neutral-800"
            />
            <p className="text-gray-300">
              Welcome! I'm Andrew, and I'm passionate about web development.
            </p>
            <div className={"flex gap-3 pt-2 justify-center"}>
              <a 
                href={"#projects"}
                className={"rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"}>
                  Projects
                </a>
              <a 
                href={"#experience"}
                className={"rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"}>
                  Work Experience
                </a>

            </div>
          </div>
        </Section>
        <div>
          {/* Project with carousel */}
          <Section id="projects" title="Projects" subtitle={"Some of my projects"}>
            <p className="text-gray-300">Here are some of the projects I've worked on.</p>

            <Carousel>
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </Carousel>
          </Section>
          {/* Experience Section */}
          <Section id="experience" title="Experience" subtitle={"My work Experience"}>
            <div className="space-y-4 text-left">
              {experience.map((job) => (
                <ExperienceItem key={job.id} item={job} />
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
