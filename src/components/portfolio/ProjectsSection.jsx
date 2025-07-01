import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = ({ projects, githubLink, id }) => {
  if (!projects || projects.length === 0) {
    return null;
  }
  
  return (
    <section id={id} className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-200 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, idx) => (
          <div key={idx} 
            className="group p-6 bg-gradient-to-b from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-500/5 hover:shadow-lg">
            <ProjectCarousel 
              images={project.images || [project.previewImage]} 
              name={project.name} 
            />
            <h3 className="text-xl text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
            <div className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4">
              <p>{project.description || project.desc}</p>
              {project.tech && (
                <div className="mt-3">
                  <span className="font-medium text-emerald-400">Technologies: </span>
                  <span>{project.tech}</span>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              {
                project.deployLink ? (
                  <a 
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-slate-500 cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    <span>Deployment Not Available</span>
                  </span>
                )
              }
              {
                project.sourceCodeLink ? (
                  <a 
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-slate-500 cursor-not-allowed">
                    <FaGithub className="w-4 h-4" />
                    <span>Source Code Not Available</span>
                  </span>
                )
              }
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-4">
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-slate-800/30 backdrop-blur-sm rounded-full text-slate-400 border border-slate-700/50 hover:border-emerald-400/50 hover:text-slate-200 transition-all duration-300 hover:scale-105"
        >
          <FaGithub className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
          <span>View More Projects on GitHub</span>
        </a>
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
      previewImage: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
      description: PropTypes.string,
      tech: PropTypes.string,
      deployLink: PropTypes.string,
      sourceCodeLink: PropTypes.string,
    })
  ).isRequired,
  githubLink: PropTypes.string.isRequired,
  id: PropTypes.string
};

export default ProjectsSection