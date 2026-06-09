import React, { useState } from 'react';
import { MapPin, Sparkles, ChevronRight } from 'lucide-react';

export default function DestinationCard({ destination, isSelected, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`card-hover rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${
        isSelected 
          ? 'ring-4 ring-rose-400 transform scale-105' 
          : 'hover:ring-2 hover:ring-rose-300'
      }`}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={destination.image}
          alt={destination.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
          <Sparkles size={16} />
          {destination.vibe}
        </div>

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4">
              <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-start gap-2">
          <MapPin size={24} className="text-rose-500 flex-shrink-0 mt-1" />
          <span>{destination.name}</span>
        </h3>

        {/* Highlight */}
        <p className="text-rose-600 font-semibold text-sm mb-4">
          ✨ {destination.highlight}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {destination.description}
        </p>

        {/* Activities */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">ACTIVITIES</p>
          <div className="flex flex-wrap gap-2">
            {destination.activities.map((activity, idx) => (
              <span
                key={idx}
                className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        {/* Select Button */}
        <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
          isSelected
            ? 'bg-rose-500 text-white'
            : 'bg-rose-100 text-rose-600 hover:bg-rose-200'
        }`}>
          {isSelected ? '💕 Selected' : 'Choose Destination'}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
