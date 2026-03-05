import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function Resume() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="size-5" />
            Back to Portfolio
          </Link>
          <h1 className="text-xl font-semibold text-slate-900">Resume</h1>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-slate-50 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/resume.pdf"
            className="w-full h-[calc(100vh-120px)]"
            title="Resume PDF"
          />
        </div>
        
        {/* Fallback download link */}
        <div className="mt-4 text-center text-slate-600">
          Can't see the resume?{' '}
          <a 
            href="/resume.pdf" 
            download
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
