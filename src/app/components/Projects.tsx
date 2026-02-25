// tree of experiences connecting to the sidebar and archive link at the bottom

import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses machine learning to prioritize tasks and predict completion times. Built with React, Node.js, and TensorFlow.js.",
    tags: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    github: "#",
    demo: "#",
    period: "Feb 2025 - Present"
  },
  {
    id: 2,
    title: "Real-Time Collaborative Code Editor",
    description: "A web-based code editor enabling real-time collaboration with syntax highlighting, live cursors, and integrated chat. Supports multiple programming languages.",
    tags: ["TypeScript", "WebSockets", "Monaco Editor", "Redis"],
    github: "#",
    demo: "#",
    period: "Dec 2024 - Jan 2025"
  },
  {
    id: 3,
    title: "Computer Vision Object Detection",
    description: "Deep learning model for real-time object detection in video streams. Achieved 89% mAP on custom dataset with optimized inference speed.",
    tags: ["Python", "PyTorch", "OpenCV", "YOLO"],
    github: "#",
    period: "Oct 2024 - Nov 2024"
  },
  {
    id: 4,
    title: "Distributed File Storage System",
    description: "Scalable file storage system with data redundancy and fault tolerance. Implements consistent hashing for load balancing across nodes.",
    tags: ["Go", "Docker", "Kubernetes", "gRPC"],
    github: "#",
    period: "Aug 2024 - Sep 2024"
  },
  {
    id: 5,
    title: "Social Media Analytics Dashboard",
    description: "Analytics platform that aggregates and visualizes social media metrics from multiple platforms. Features custom charts and automated reporting.",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    github: "#",
    demo: "#",
    period: "Jun 2024 - Jul 2024"
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
                        <Github className="size-5" />
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