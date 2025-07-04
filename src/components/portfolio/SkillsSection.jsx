import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiC, SiNextdotjs, SiPostman } from 'react-icons/si';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = ({id}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const getRandomDelay = () => Math.random() * 3 + 2; // Random delay between 2-5s

  return (
    <section id={id} className="space-y-6" ref={ref}>
      <motion.h2 
        className="text-2xl font-semibold text-slate-200 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.08, 
              transition: { type: "spring", stiffness: 300 }
            }}
            className="group px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/30 backdrop-blur-sm rounded-lg text-center text-slate-400 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:bg-slate-800/50"
          >
            <motion.span 
              className="skill-icon block text-2xl mb-1 group-hover:text-emerald-400 transition-colors"
              animate={{ 
                y: [0, -4, 0],
              }}
              transition={{ 
                y: { duration: getRandomDelay(), repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {skill.icon}
            </motion.span>
            
            <motion.span 
              className="skill-name text-sm block"
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ opacity: { duration: getRandomDelay(), repeat: Infinity, ease: "easeInOut" } }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
SkillsSection.propTypes = {
  id: PropTypes.string
};

export default SkillsSection;