import React, { useEffect, useState } from 'react';
import { Heart, Share2, Download, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProposalPage({ destination, onRestart }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti
    setTimeout(() => {
      setShowConfetti(true);
      triggerConfetti();
    }, 500);
  }, []);

  const triggerConfetti = () => {
    // Left side confetti
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0.2, y: 0.6 },
      colors: ['#ec4899', '#f472b6', '#fbbf24', '#34d399']
    });

    // Right side confetti
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.6 },
        colors: ['#ec4899', '#f472b6', '#fbbf24', '#34d399']
      });
    }, 200);

    // Center burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ec4899', '#f472b6', '#fbbf24', '#34d399']
      });
    }, 400);
  };

  const handleShare = async () => {
    const text = `I'm proposing to go to ${destination.name} in Yogyakarta! Will you come with me? 💕🌴`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Romantic Trip Proposal',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(text);
      alert('Proposal copied to clipboard! 📋');
    }
  };

  const handleDownload = () => {
    // Create a simple image-like representation
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Background
    const gradient = ctx.createLinearGradient(0, 0, 1200, 800);
    gradient.addColorStop(0, '#ec4899');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('💕 ROMANTIC TRIP PROPOSAL 💕', 600, 150);

    ctx.font = 'bold 48px Arial';
    ctx.fillText(`Let's Go To:`, 600, 300);

    ctx.font = 'bold 56px Arial';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(destination.name, 600, 380);

    ctx.font = '32px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('In Beautiful Yogyakarta, Indonesia 🇮🇩', 600, 500);

    ctx.fillText('Let\'s make unforgettable memories together! ❤️', 600, 650);

    // Download
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `proposal-${destination.id}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Image Section */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Large Heart Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`transform ${showConfetti ? 'animate-pulse-heart' : ''}`}>
                <Heart size={120} className="text-white fill-white drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 text-center">
            {/* Yes Message */}
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">YES! 💕</span>
            </h2>

            {/* Destination Name */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {destination.name}
            </h3>

            {/* Message */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                I choose to spend unforgettable moments with you in the beautiful city of Yogyakarta!
              </p>
              <p className="text-gray-600">
                Let's explore {destination.vibe.toLowerCase()} experiences, create beautiful memories, and strengthen our love. ✨
              </p>
            </div>

            {/* Itinerary Teaser */}
            <div className="bg-white border-2 border-rose-200 rounded-xl p-6 mb-8">
              <p className="text-sm font-semibold text-rose-600 mb-4">WHAT AWAITS US</p>
              <div className="space-y-3">
                {destination.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3 text-gray-700">
                    <Heart size={16} className="text-rose-500" />
                    <span className="font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Romantic Quote */}
            <div className="mb-8 italic text-gray-600">
              <p className="text-lg">
                "Travel is the only thing you buy that makes you richer. And with you, it's priceless." 💑
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={handleShare}
                className="bg-rose-500 text-white py-4 rounded-xl font-bold hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Share2 size={20} />
                Share Our Proposal
              </button>
              <button
                onClick={handleDownload}
                className="bg-pink-500 text-white py-4 rounded-xl font-bold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Download size={20} />
                Save As Image
              </button>
            </div>

            {/* Start Over Button */}
            <button
              onClick={onRestart}
              className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Choose Another Destination
            </button>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8">
          <p className="text-white text-lg font-semibold">
            I can't wait to explore this magical destination with you! 🌴✨
          </p>
        </div>
      </div>
    </div>
  );
}
