// tree of experiences connecting to the sidebar and archive link at the bottom

import { ExternalLink } from 'lucide-react';
import { siGithub, siGitlab } from 'simple-icons';
import { Button } from './ui/button';

const projects = [
  {
    id: 1,
    title: "Financial Machine Learning Toolkit",
    description: "A research project about the feasability of using machine learning on time series market data to detect patterns and make predictions.",
    tags: ["Deep Learning", "PyTorch", "Forecasting", "Python"],
    //github: "#",
    //demo: "#",
    period: "Jul 2022 - Present"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "New version of my personal portfolio website, built with React and Tailwind CSS. Features improved design and automatic deployment to my home server.",
    tags: ["React", "Tailwind CSS", "Docker", "TypeScript", "Figma", "Full Stack"],
    github: "https://github.com/DONTTOUCHTHECHAIR/Portfolio2",
    period: "Feb 2026 - Present"
  },
  {
    id: 3,
    title: "Training Job Manager",
    description: "A web-based platform designed to manage machine learning training jobs through a queue and worker system.",
    tags: ["Full Stack", "AWS", "Docker", "Production", "FastAPI", "Vercel"],
    github: "https://github.com/DONTTOUCHTHECHAIR/Training-Job-Manager",
    //demo: "#",
    period: "Jul 2025"
  },
  {
    id: 4,
    title: "GemiKnights ",
    description: "Twelve hour hackathon hosted by Hack@UCF where my team of four built an interactive mock interview web app that identifies user posture, confidence, and speech patterns to provide feedback.",
    tags: ["Node.js", "Gemini AI", "Backend"],
    github: "https://github.com/KaziAmin110/Podium",
    period: "Jun 2025"
  },
  {
    id: 5,
    title: "Depracated Portfolio Website",
    description: "My personal portfolio website, built from scratch with HTML, CSS, JavaScript, and Flask. Showcases my projects, resume, and contact information. Deploys to my homeserver using Docker and SSH.",
    tags: ["Flask", "Docker", "SSH", "Full Stack"],
    gitlab: "https://gitlab.com/personal5950318/portfolio",
    //demo: "#",
    period: "Apr 2025 - Jun 2025"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{project.period}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="size-5 fill-current"
                        >
                          <path d={siGithub.path} />
                        </svg>
                      </a>
                    )}

                    {project.gitlab && (
                      <a
                        href={project.gitlab}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="View on GitLab"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="size-5 fill-current"
                        >
                          <path d={siGitlab.path} />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View Project Archive
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}