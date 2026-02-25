import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth">
      <Sidebar />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  );
}