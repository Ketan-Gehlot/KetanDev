import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Soft Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center px-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-8 py-5">
          <img
            src="/ketan.jpg"
            alt="Ketan Gehlot"
            className="h-32 w-32 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          />
        </div>
        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
          Ketan Gehlot
        </h1>

        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <p className="animate-fade-in-delay">Full-Stack Developer</p>
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold animate-fade-in-delay-2">
            & Cybersecurity Enthusiast
          </p>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-3">
          Passionate about creating secure, scalable applications and exploring the fascinating world of cybersecurity.
          Let's build something amazing together!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-4">
        <a
  href="/resume.pdf"
  download
  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center"
>
  <Download className="w-5 h-5 inline mr-2" />
  Download Resume
</a>

          <button
            onClick={scrollToAbout}
            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-delay-5">
          <a
            href="https://github.com/Ketan-Gehlot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/ketan-gehlot/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ketangehlot2002@gmail.com"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
