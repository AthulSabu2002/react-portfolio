import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PropTypes from 'prop-types';

const SocialSection = ({ social, id }) => {
  if (!social) {
    return null;
  }
  
  return (
    <section id={id} className="space-y-6 text-center">
      <h2 className="text-2xl font-semibold text-slate-200">Connect</h2>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href={social.github} target="_blank" rel="noopener noreferrer" 
          className="group px-6 py-2 bg-slate-800/30 backdrop-blur-sm rounded-full text-slate-400 border border-slate-700/50 hover:border-emerald-400/50 hover:text-slate-200 transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <FaGithub className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
          <span>GitHub</span>
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
          className="group px-6 py-2 bg-slate-800/30 backdrop-blur-sm rounded-full text-slate-400 border border-slate-700/50 hover:border-emerald-400/50 hover:text-slate-200 transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <FaLinkedin className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
          <span>LinkedIn</span>
        </a>
        <a href={social.email} target="_blank" rel="noopener noreferrer"
          className="group px-6 py-2 bg-slate-800/30 backdrop-blur-sm rounded-full text-slate-400 border border-slate-700/50 hover:border-emerald-400/50 hover:text-slate-200 transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <FaEnvelope className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

SocialSection.propTypes = {
  social: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    email: PropTypes.string,
  }),
  id: PropTypes.string,
};

export default SocialSection;