import React, { useState } from 'react';
import { Heart, ArrowLeft, CheckCircle } from 'lucide-react';
import DestinationCard from './DestinationCard';

export default function DestinationGallery({ destinations, onConfirm }) {
  const [selectedId, setSelectedId] = useState(null);

  const selectedDestination = destinations.find(d => d.id === selectedId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-rose-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Heart size={40} className="fill-white animate-pulse-heart" />
            Choose Your Dream Destination
            <Heart size={40} className="fill-white animate-pulse-heart" />
          </h2>
          <p className="text-xl text-white/90">
            In beautiful Yogyakarta, Indonesia 🇮🇩
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isSelected={selectedId === destination.id}
              onClick={() => setSelectedId(destination.id)}
            />
          ))}
        </div>

        {/* Confirmation Section */}
        {selectedDestination && (
          <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up">
            {/* Selected Destination Details */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <CheckCircle size={36} className="text-rose-500" />
                You've Selected:
              </h3>
              <p className="text-2xl font-bold text-rose-600 mb-4">
                {selectedDestination.name}
              </p>
              <p className="text-gray-600 text-lg mb-6">
                {selectedDestination.description}
              </p>

              {/* Activities List */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 Activities We Can Do Together:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedDestination.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-rose-50 p-4 rounded-lg"
                    >
                      <Heart size={20} className="text-rose-500" />
                      <span className="text-gray-700 font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vibe */}
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">THE PERFECT VIBE FOR US</p>
                <p className="text-2xl font-bold text-rose-600">
                  ✨ {selectedDestination.vibe}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={() => setSelectedId(null)}
                className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={20} />
                Choose Another
              </button>
              <button
                onClick={() => onConfirm(selectedDestination)}
                className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Heart size={20} className="fill-white" />
                Let's Go Here! 💕
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedDestination && (
          <div className="text-center py-8">
            <p className="text-white/80 text-lg">
              Click on any destination to see more details and select it! 💫
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
