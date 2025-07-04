import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const DefaultProjectImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-slate-800">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="80" 
      height="80" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-emerald-400"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  </div>
);

const ProjectCarousel = ({ images, name }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Default image if no images provided
  const defaultImages = ['default-project-image'];
  const projectImages = images?.length ? images : defaultImages;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };
  
  const handleImageError = (idx) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // Restore scrolling
  };
  
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);
  
  const CarouselContent = ({ isInModal = false }) => (
    <div className={`relative ${isInModal ? 'w-full h-full' : 'mb-4 overflow-hidden rounded-lg border border-slate-700/50 h-64 md:h-72 lg:h-80 w-full'}`}>
      {/* Image slider */}
      <div className="relative w-full h-full">
        {projectImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {image === 'default-project-image' || imageErrors[idx] ? (
              <DefaultProjectImage />
            ) : (
              <img
                src={image}
                alt={`${name} preview ${idx + 1}`}
                className={`w-full h-full ${isInModal ? 'object-contain' : 'object-contain object-center'}`}
                onError={() => handleImageError(idx)}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      {projectImages.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10 ${isInModal ? 'p-3' : ''}`}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={isInModal ? "20" : "16"} height={isInModal ? "20" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10 ${isInModal ? 'p-3' : ''}`}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={isInModal ? "20" : "16"} height={isInModal ? "20" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}
      
      {/* Indicators */}
      {projectImages.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
          {projectImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === currentSlide ? 'bg-emerald-400' : 'bg-white/50'
              } ${isInModal ? 'h-3 w-3' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Expand button (only show on non-modal view) */}
      {!isInModal && (
        <button 
          onClick={openModal}
          className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors z-10"
          aria-label="Expand image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>
      )}
    </div>
  );

  CarouselContent.propTypes = {
    isInModal: PropTypes.bool
  };

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        <CarouselContent />
      </div>

      {/* Modal Portal */}
      {isModalOpen && createPortal(
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
          tabIndex={-1}
        >
          {/* Modal content */}
          <div 
            className="relative w-11/12 h-5/6 md:w-10/12 md:h-5/6 lg:w-4/5 lg:h-4/5"
            onClick={(e) => e.stopPropagation()}
          >
            <CarouselContent isInModal={true} />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-20"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Image counter */}
            <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {currentSlide + 1} / {projectImages.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};


ProjectCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

export default ProjectCarousel;