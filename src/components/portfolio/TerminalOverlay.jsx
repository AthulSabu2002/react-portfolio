import TerminalPortfolio from './Terminal';
import PropTypes from 'prop-types';

const TerminalOverlay = ({ isOpen, onToggle, isMobile }) => {
  return (
    <>
      {/* Terminal Overlay */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40" onClick={onToggle} />
      )}

      {/* Terminal Component */}
      <div 
        className={`fixed transition-all duration-500 ease-in-out z-50 ${
          isOpen 
            ? isMobile
              ? 'inset-8 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border-2 border-slate-700/50 hover:border-emerald-400/50'
              : 'top-8 bottom-8 right-8 w-[480px] rounded-xl border-2 border-slate-700/50 hover:border-emerald-400/50 bg-slate-900/95 backdrop-blur-md shadow-2xl'
            : 'bottom-20 right-4 sm:bottom-8 sm:right-8 w-auto h-auto'
        }`}
      >
        {isOpen ? (
          <div className="relative h-full p-4">
            <button 
              onClick={onToggle}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 p-2 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="h-full pt-4">
              <TerminalPortfolio />
            </div>
          </div>
        ) : (
          <button
            onClick={onToggle}
            className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 rounded-full p-3 sm:p-4 shadow-lg flex items-center gap-2 transition-all duration-200 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Open Terminal
            </span>
          </button>
        )}
      </div>
    </>
  );
};
TerminalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default TerminalOverlay;