import PropTypes from 'prop-types';

const HeroSection = ({ hero, id }) => {
  return (
    <section id={id} className="text-center sm:text-left space-y-8 relative">
      <div className="hero-glow absolute inset-0 bg-emerald-500/20 blur-[100px] animate-pulse-slow"></div>
      <div className="flex flex-col sm:flex-row items-start gap-6 relative">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto sm:mx-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-spin-slow"></div>
          <div className="absolute inset-[3px] rounded-full bg-slate-900"></div>
          <img 
            src={hero?.profileImage} 
            alt="Profile"
            className="absolute inset-[3px] rounded-full object-cover z-10 p-1"
          />
          <div className="hexagon-border"></div>
        </div>
        
        <div className="flex-1 relative z-10">
          <div className="glitch-wrapper mb-6">
            <h1 className="text-4xl sm:text-6xl font-bold glitch-text" data-text={hero?.name || 'Your Name'}>
              {hero?.name || 'Your Name'}
            </h1>
            <div className="glitch-underline"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-400 typewriter-text">
            {hero?.title || 'Your Title'}
          </p>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed text-justify mt-4 animated-text">
            {hero?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  hero: PropTypes.shape({
    profileImage: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  id: PropTypes.string,
};

export default HeroSection;