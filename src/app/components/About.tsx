// bottom bar with my contact info

import { Github, Mail, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitLab',
    href: 'https://gitlab.com/DONTTOUCHTHECHAIR',
    icon: Github, // Using Github icon for GitLab
    label: 'gitlab.com/DONTTOUCHTHECHAIR'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DONTTOUCHTHECHAIR',
    icon: Github,
    label: 'github.com/DONTTOUCHTHECHAIR'
  },
  {
    name: 'Email',
    href: 'mailto:jamescarnegie598@hotmail.com',
    icon: Mail,
    label: 'jamescarnegie598@hotmail.com'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/james-carnegie-9133a8345/',
    icon: Linkedin,
    label: 'linkedin.com/in/jamescarnegie'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
        
        <div className="space-y-8">
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          {/* Contact Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors group"
              >
                <div className="flex-shrink-0 size-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <link.icon className="size-6" />
                </div>
                <div>
                  <div className="font-medium">{link.name}</div>
                  <div className="text-sm text-slate-400">{link.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="text-sm">
            © 2025 James Carnegie. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}