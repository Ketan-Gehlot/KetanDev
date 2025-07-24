import React from 'react';
import { Code2, Shield, Brain, Palette, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Learning Ethical Hacking',
      description: 'Exploring cybersecurity techniques, penetration testing methodologies, and security best practices',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: ['Kali Linux', 'Network Security', 'Vulnerability Assessment']
    },
    {
      title: 'Web Development Practice',
      description: 'Building modern web applications and staying updated with latest technologies and frameworks',
      icon: Code2,
      color: 'from-blue-500 to-indigo-500',
      skills: ['React', 'Node.js', 'Full-Stack Development']
    },
    {
      title: 'Cybersecurity Research',
      description: 'Following security researchers and learning about latest threats, defenses, and industry trends',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      skills: ['Threat Analysis', 'Security Research', 'Risk Assessment']
    },
    {
      title: 'Algorithm Problem Solving',
      description: 'Improving algorithmic thinking and problem-solving skills through competitive programming',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: ['Data Structures', 'Algorithms', 'LeetCode']
    },
    {
      title: 'UI/UX Design Learning',
      description: 'Understanding user experience principles, modern design trends, and creating intuitive interfaces',
      icon: Palette,
      color: 'from-orange-500 to-yellow-500',
      skills: ['User Experience', 'Interface Design', 'Design Systems']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            My continuous learning path and areas of expertise development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <div
                key={experience.title}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${experience.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-ping"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;