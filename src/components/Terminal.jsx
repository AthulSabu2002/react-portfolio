/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Terminal, ArrowRight, Code, User, Mail, Briefcase } from 'lucide-react';
import { portfolioContent } from '../config/portfolioContent';
import styles from '../styles/Terminal.module.css';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: portfolioContent.terminal.welcomeMessage }
  ]);
  const [currentPath, setCurrentPath] = useState(portfolioContent.terminal.prompt);

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => ({
        type: 'system',
        content: portfolioContent?.terminal?.availableCommands || 'Commands not available'
      })
    },
    projects: {
      description: 'View projects',
      action: () => ({
        type: 'project',
        content: portfolioContent?.projects || []
      })
    },
    about: {
      description: 'Learn about me',
      action: () => ({
        type: 'system',
        content: `Name: ${portfolioContent.hero.name}\nRole: ${portfolioContent.hero.title}\n\n${portfolioContent.hero.description}`
      })
    },
    skills: {
      description: 'See technical skills',
      action: () => ({
        type: 'system',
        content: `Technical Skills:\n${portfolioContent.skills.map(skill => `• ${skill}`).join('\n')}`
      })
    },
    contact: {
      description: 'Get contact info',
      action: () => ({
        type: 'system',
        content: `You can find me at:\nGitHub: ${portfolioContent.social.github}\nLinkedIn: ${portfolioContent.social.linkedin}`
      })
    }
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const command = commands[trimmedCmd];
    
    setHistory(prev => [
      ...prev,
      { type: 'command', content: `${currentPath} $ ${cmd}` },
      command 
        ? command.action()
        : { type: 'error', content: `Command not found: ${cmd}` }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    handleCommand(input);
    setInput('');
  };

  const renderOutput = (item) => {
    switch (item.type) {
      case 'project':
        return (
          <div className="mt-4 space-y-6">
            {item.content.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-lg font-mono text-emerald-400">{project.name}</h3>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-slate-400" />
                  <p className="text-sm text-slate-400 font-mono">{project.tech}</p>
                </div>
                <p className="text-slate-200 pl-6 mb-2">{project.description}</p>
                <p className="text-emerald-400 pl-6 font-mono text-sm">
                  Deploy: {project.deployLink}
                </p>
              </div>
            ))}
          </div>
        );
      
      case 'system':
        return (
          <div className="mt-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <pre className="text-slate-200 whitespace-pre-line font-mono text-sm">
              {item.content}
            </pre>
          </div>
        );

      case 'command':
        return (
          <div className="mt-4 flex items-center gap-2 text-gray-400">
            <ArrowRight className="w-4 h-4" />
            <span className="font-mono">{item.content}</span>
          </div>
        );

      case 'error':
        return (
          <div className="mt-4 bg-red-900/20 p-4 rounded-lg border border-red-800/30">
            <p className="text-red-400 font-mono">{item.content}</p>
          </div>
        );

      default:
        return (
          <div className="mt-1 text-gray-300">
            {item.content}
          </div>
        );
    }
  };

  return (
    <div className={`${styles.terminalContainer} flex flex-col h-full`}>
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700">
        <Terminal className="w-4 h-4 text-emerald-400" />
        <span className="text-xs text-slate-400">portfolio.sh</span>
      </div>
      
      <div className={`flex-1 overflow-y-auto space-y-1 mb-4 ${styles.terminalScroll}`}>
        {history.map((item, idx) => (
          <div key={idx}>
            {renderOutput(item)}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="mt-auto sticky bottom-0 flex items-center bg-slate-800/50 p-2 rounded-lg border border-slate-700">
        <span className="text-emerald-400 mr-2">{currentPath} $</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-slate-200"
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalPortfolio;