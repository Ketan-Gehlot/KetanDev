import React from 'react';
import { Shield, Code2, Eye, Brain, Palette } from 'lucide-react';

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      title: 'Learning Ethical Hacking',
      description: 'Exploring cybersecurity techniques and penetration testing methodologies',
      icon: Shield,
      color: 'from-blue-500 to-yellow-500'
    },
    {
      title: 'Practicing Web Development Skills',
      description: 'Building modern web applications and staying updated with latest technologies',
      icon: Code2,
      color: 'from-yellow-500 to-blue-500'
    },
    {
      title: 'Watching Cybersecurity Content',
      description: 'Following security researchers and learning about latest threats and defenses',
      icon: Eye,
      color: 'from-blue-600 to-yellow-400'
    },
    {
      title: 'Solving DSA Problems on Leetcode',
      description: 'Improving algorithmic thinking and problem-solving skills',
      icon: Brain,
      color: 'from-yellow-600 to-blue-600'
    },
    {
      title: 'Learning UI/UX Designing',
      description: 'Understanding user experience principles and modern design trends',
      icon: Palette,
      color: 'from-blue-500 to-yellow-500'
    }
  ];

  return (
    <section id="hobbies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-yellow-600 dark:from-white dark:to-yellow-300 bg-clip-text text-transparent">
              Interests & Hobbies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.title}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg shadow-blue-500/10 border border-blue-200/30 dark:border-yellow-400/20 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 hover:rotate-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${hobby.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-800 dark:text-yellow-200 mb-2 group-hover:text-yellow-600 dark:group-hover:text-blue-400 transition-colors">
                        {hobby.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;