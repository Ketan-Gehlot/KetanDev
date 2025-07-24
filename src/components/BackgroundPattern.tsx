import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large floating orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-yellow-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/30 to-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Medium floating shapes */}
      <div className="absolute top-20 right-1/4 w-40 h-40 bg-gradient-to-br from-yellow-300/25 to-blue-400/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/25 to-yellow-400/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 transform rotate-45 blur-xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 transform rotate-12 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        {/* Animated dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-600 rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '7s' }}></div>
      </div>
      
      {/* Animated lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-300/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute left-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${i % 2 === 0 ? 'bg-blue-400' : 'bg-yellow-400'} rounded-full animate-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern;