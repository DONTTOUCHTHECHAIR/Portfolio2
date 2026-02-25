import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { scrollToSection } from './Utils';


export function Hero() {
  return (
    <section id= "hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 md:py-24 relative">
      <div className="max-w-4xl w-full">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg text-slate-600">
                Hi, my name is
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-4">
                James Carnegie
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-700">
              Software Engineer
            </p>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            I'm a student, studying and trying to prepare for my future in machine learnng and systems engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 cursor-pointer" onClick={() => scrollToSection('experience')}>
              View My Work
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" onClick={() => scrollToSection('about')}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="size-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
          <div className="size-1.5 rounded-full bg-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}