import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function HomePage({ onPropose }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Hearts */}
        <div className="mb-8 flex justify-center gap-4">
          <Heart 
            size={40} 
            className={`text-white fill-white ${isAnimated ? 'animate-pulse-heart' : ''}`}
            style={{ animationDelay: '0s' }}
          />
          <Heart 
            size={50} 
            className={`text-white fill-white ${isAnimated ? 'animate-pulse-heart' : ''}`}
            style={{ animationDelay: '0.1s' }}
          />
          <Heart 
            size={40} 
            className={`text-white fill-white ${isAnimated ? 'animate-pulse-heart' : ''}`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        {/* Main Title */}
        <h1 className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Will You Travel <span className="gradient-text">With Me?</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-white/90 mb-8 transition-all duration-1000 delay-200 ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          I want to ask you something special... 💫
        </p>

        {/* Description */}
        <p className={`text-lg text-white/80 mb-12 transition-all duration-1000 delay-300 ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Choose your dream destination in beautiful Yogyakarta, Indonesia and let's make memories together.
        </p>

        {/* CTA Button */}
        <button
          onClick={onPropose}
          className={`inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
            isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Sparkles size={24} />
          Let's Choose Our Destination
          <ArrowRight size={24} />
        </button>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2 opacity-60">
          {[...Array(5)].map((_, i) => (
            <Sparkles 
              key={i}
              size={20} 
              className="text-white animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
