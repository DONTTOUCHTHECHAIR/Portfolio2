// tree of experiences connecting to the sidebar and resume link at the bottom

import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "Jun 2025 - Aug 2025",
    description: "Developed and maintained full-stack web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and optimize existing functionality.",
    achievements: [
      "Improved application performance by 30% through code optimization",
      "Built RESTful APIs serving 10,000+ daily requests",
      "Mentored 2 junior developers on best practices"
    ]
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "University Machine Learning Lab",
    location: "Remote",
    period: "Jan 2025 - May 2025",
    description: "Assisted in machine learning research focused on natural language processing and computer vision applications. Implemented and tested various neural network architectures.",
    achievements: [
      "Co-authored research paper on transformer models",
      "Developed data preprocessing pipelines for image datasets",
      "Achieved 92% accuracy on classification tasks"
    ]
  },
  {
    id: 3,
    title: "Teaching Assistant - Data Structures",
    company: "University Computer Science Department",
    location: "On Campus",
    period: "Sep 2024 - Dec 2024",
    description: "Assisted students in understanding fundamental data structures and algorithms. Held office hours, graded assignments, and created supplementary learning materials.",
    achievements: [
      "Supported 50+ students in mastering complex concepts",
      "Designed interactive coding exercises and tutorials",
      "Received 4.8/5.0 student feedback rating"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-slate-200">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-blue-600 border-4 border-white"></div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600">{exp.company}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-4" />
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-slate-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View Full Resume
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}