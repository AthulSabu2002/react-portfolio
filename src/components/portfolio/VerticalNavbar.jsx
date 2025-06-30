import { useState, useEffect } from 'react';
import { FaHome, FaCode, FaProjectDiagram, FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const VerticalNavbar = ({ isMobile }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'social'];
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      
      if (isAtBottom) {
        setActiveSection('social');
        return;
      }
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile horizontal navbar at the bottom
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-800/90 backdrop-blur-sm py-2 px-4 shadow-lg border-t border-cyan-500/30">
        <div className="flex justify-around items-center">
          <NavItem 
            icon={<FaHome />} 
            label="Home" 
            onClick={() => scrollToSection('hero')} 
            isActive={activeSection === 'hero'}
            isMobile={true}
          />
          <NavItem 
            icon={<FaCode />} 
            label="Skills" 
            onClick={() => scrollToSection('skills')} 
            isActive={activeSection === 'skills'}
            isMobile={true}
          />
          <NavItem 
            icon={<FaProjectDiagram />} 
            label="Projects" 
            onClick={() => scrollToSection('projects')} 
            isActive={activeSection === 'projects'}
            isMobile={true}
          />
          <NavItem 
            icon={<FaUserAlt />} 
            label="Contact" 
            onClick={() => scrollToSection('social')} 
            isActive={activeSection === 'social'}
            isMobile={true}
          />
        </div>
      </div>
    );
  }
  
  // Desktop vertical navbar at the left
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
      <div className="flex flex-col items-center bg-slate-800/70 backdrop-blur-sm py-3 px-2 rounded-r-lg border-r-2 border-cyan-500/30 shadow-lg">
        <NavItem 
          icon={<FaHome />} 
          label="Home" 
          onClick={() => scrollToSection('hero')} 
          isActive={activeSection === 'hero'}
        />
        <NavItem 
          icon={<FaCode />} 
          label="Skills" 
          onClick={() => scrollToSection('skills')} 
          isActive={activeSection === 'skills'}
        />
        <NavItem 
          icon={<FaProjectDiagram />} 
          label="Projects" 
          onClick={() => scrollToSection('projects')} 
          isActive={activeSection === 'projects'}
        />
        <NavItem 
          icon={<FaUserAlt />} 
          label="Contact" 
          onClick={() => scrollToSection('social')} 
          isActive={activeSection === 'social'}
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, onClick, isActive, isMobile }) => {
  if (isMobile) {
    return (
      <button
        onClick={onClick}
        className={`flex flex-col items-center p-2 transition-all duration-200
          ${isActive 
            ? 'text-cyan-400' 
            : 'text-slate-300'
          }`}
        aria-label={label}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="text-lg">{icon}</span>
        <span className="text-xs mt-1">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`p-2 mb-2 last:mb-0 rounded-full hover:bg-slate-700 hover:text-cyan-400 
        transition-all duration-200 group relative 
        ${isActive 
          ? 'bg-slate-700 text-cyan-400 ring-2 ring-cyan-400 shadow-md shadow-cyan-400/30' 
          : 'text-slate-300'
        }`}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="text-lg">{icon}</span>
      <span className="absolute left-full ml-2 px-2 py-1 rounded bg-slate-700 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </span>
    </button>
  );
};

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  isMobile: PropTypes.bool,
};

NavItem.defaultProps = {
  isActive: false,
  isMobile: false,
};

VerticalNavbar.propTypes = {
  isMobile: PropTypes.bool
};

VerticalNavbar.defaultProps = {
  isMobile: false
};

export default VerticalNavbar;