import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { portfolioContent } from '../config/portfolioContent';
import BackgroundEffects from '../components/portfolio/BackgroundEffects';
import HeroSection from '../components/portfolio/HeroSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import SocialSection from '../components/portfolio/SocialSection';
import TerminalOverlay from '../components/portfolio/TerminalOverlay';
import VerticalNavbar from '../components/portfolio/VerticalNavbar';

const Portfolio = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!portfolioContent) {
    console.log('No portfolio content loaded');
    return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 relative overflow-hidden ${
      isTerminalOpen && !isMobile ? 'lg:pr-[520px]' : ''
    }`}>
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Vertical Navigation */}
      <VerticalNavbar />
      
      <Helmet>
        <title>{portfolioContent?.hero?.name || 'Portfolio'}</title>
        <meta name="description" content={`Portfolio of ${portfolioContent?.hero?.name}`} />
      </Helmet>

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative">
        <div className="space-y-12 sm:space-y-16">
          <HeroSection hero={portfolioContent.hero} id="hero" />
          <SkillsSection id="skills" />
          <ProjectsSection projects={portfolioContent.projects} githubLink={portfolioContent.social.github} id="projects" />
          <SocialSection social={portfolioContent.social} id="social" />
        </div>
      </div>

      {/* Terminal Component */}
      <TerminalOverlay 
        isOpen={isTerminalOpen}
        onToggle={() => setIsTerminalOpen(!isTerminalOpen)}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Portfolio;
