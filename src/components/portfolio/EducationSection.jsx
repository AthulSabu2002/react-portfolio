import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationSection = ({ education, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id={id} className="space-y-6" ref={ref}>
      <motion.h2 
        className="text-2xl font-semibold text-slate-200 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative pl-8 border-l-2 border-slate-700 hover:border-emerald-400 transition-colors duration-300"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-emerald-400 group-hover:bg-emerald-400 transition-colors duration-300"></div>
            
            <div className="p-5 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-lg font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {edu.degree}
                </h3>
                <span className="text-sm bg-slate-800/50 px-2 py-1 rounded text-slate-400">
                  {edu.period}
                </span>
              </div>
              
              <div className="text-slate-300 mb-2 flex flex-wrap items-center gap-2">
                <span>{edu.institution}</span>
                {edu.location && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{edu.location}</span>
                  </>
                )}
              </div>
              
              {edu.gpa && (
                <div className="text-slate-300 mb-2">
                  <span className="text-emerald-400">GPA: </span>
                  <span>{edu.gpa}</span>
                </div>
              )}
              
              {edu.description && (
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {typeof edu.description === 'string' ? (
                    <p>{edu.description}</p>
                  ) : (
                    <ul className="list-disc pl-4 space-y-1">
                      {edu.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              
              {edu.achievements && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-emerald-400 mb-1">Achievements & Activities</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400 group-hover:text-slate-300 transition-colors">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.courses && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-emerald-400 mb-2">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-slate-800/70 text-emerald-300 px-2 py-1 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

EducationSection.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      location: PropTypes.string,
      gpa: PropTypes.string,
      description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]),
      achievements: PropTypes.arrayOf(PropTypes.string),
      courses: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  id: PropTypes.string
};

export default EducationSection;