import React from 'react';
import { Code, Shield, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in modern web technologies and frameworks'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Growing knowledge in ethical hacking and security'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Building scalable and secure server applications'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Creating responsive and interactive user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a dedicated and skilled developer with a strong foundation in <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Java</span> and <span className="text-purple-600 dark:text-purple-400 font-semibold">full-stack web development</span>.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I have built projects such as an Expense Management system in Java, a Password Strength Checker in Python, and an OTP-based login system. Currently, I am working on an Uber Clone while continuously enhancing my development skills.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I possess advanced proficiency in <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Linux and Bash</span>, along with a growing knowledge and strong interest in <span className="text-purple-600 dark:text-purple-400 font-semibold">cybersecurity</span>. My technical expertise spans both front-end and back-end development, with a focus on building secure, scalable applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;