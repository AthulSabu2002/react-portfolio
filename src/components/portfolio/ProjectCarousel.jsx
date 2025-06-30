import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCarousel = ({ images, name }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Default image if no images provided
  const defaultImages = ['https://via.placeholder.com/640x360?text=Project+Preview'];
  const projectImages = images?.length ? images : defaultImages;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };
  
  return (
    <div className="relative mb-4 overflow-hidden rounded-lg border border-slate-700/50 h-48">
      {/* Image slider */}
      <div className="relative h-full">
        {projectImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${name} preview ${idx + 1}`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/640x360?text=Project+Preview';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      {projectImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}
      
      {/* Indicators */}
      {projectImages.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {projectImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === currentSlide ? 'bg-emerald-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
ProjectCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

export default ProjectCarousel;