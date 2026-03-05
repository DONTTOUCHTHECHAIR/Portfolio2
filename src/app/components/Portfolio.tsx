import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { About } from './About';
import { Sidebar } from './Sidebar';

export function Portfolio() {
  return (
    <div className="min-h-screen w-full scroll-smooth">
      {/* <Sidebar /> */}
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  );
}
