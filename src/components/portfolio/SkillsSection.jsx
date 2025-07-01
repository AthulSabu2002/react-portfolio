import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiC, SiNextdotjs, SiPostman } from 'react-icons/si';
import PropTypes from 'prop-types';

const SkillsSection = ({id}) => {
  const skills = [
    // Programming Languages
    { name: 'C', icon: <SiC /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJs /> },
    // Frontend Technologies
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    // Backend Technologies
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Express', icon: <SiExpress /> },
    // Databases
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL', icon: <FaDatabase /> },
    // Tools
    { name: 'Postman', icon: <SiPostman /> },
    // Version Control
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ];

  return (
    <section id={id} className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-200 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div key={index} 
            className="group px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/30 backdrop-blur-sm rounded-lg text-center text-slate-400 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/50">
            <span className="skill-icon block text-2xl mb-1 group-hover:text-emerald-400 transition-colors">{skill.icon}</span>
            <span className="skill-name text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
SkillsSection.propTypes = {
  id: PropTypes.string
};

export default SkillsSection;