import React, { useState } from 'react';
import { Terminal, Cloud, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Welcome to Aarav\'s Terminal! Type "help" for available commands.'
  ]);

  const commands = {
    help: () => 'Available commands: about, skills, projects, contact, clear, whoami',
    about: () => 'Cloud & DevOps Engineer passionate about automation and scalable infrastructure.',
    skills: () => 'AWS | Kubernetes | Terraform | Docker | Jenkins | Python | Linux',
    projects: () => 'Check out my featured projects above! Each one solved real-world challenges.',
    contact: () => 'Email: aarav.devops@gmail.com | LinkedIn: /in/aarav-patel-devops',
    whoami: () => 'aarav@cloud:~$ building the future, one deployment at a time',
    clear: () => 'CLEAR'
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = terminalInput.trim().toLowerCase();
    
    if (input) {
      const newOutput = [...terminalOutput, `$ ${terminalInput}`];
      
      if (input === 'clear') {
        setTerminalOutput(['Terminal cleared.']);
      } else if (commands[input as keyof typeof commands]) {
        const result = commands[input as keyof typeof commands]();
        if (result === 'CLEAR') {
          setTerminalOutput([]);
        } else {
          newOutput.push(result);
          setTerminalOutput(newOutput);
        }
      } else {
        newOutput.push(`Command '${input}' not found. Type 'help' for available commands.`);
        setTerminalOutput(newOutput);
      }
    }
    
    setTerminalInput('');
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode ? 'border-white/10 bg-navy' : 'border-gray-200 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Built with
            </span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              & code by
            </span>
            <span className="text-teal font-semibold">Aarav Patel</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={() => setShowTerminal(!showTerminal)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Terminal size={16} className="text-teal" />
              <span className="text-sm">Terminal</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <Cloud size={16} className="text-teal animate-float" />
              <span className={`text-xs ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Deployed on AWS
              </span>
            </div>
          </div>

          {showTerminal && (
            <div className={`mx-auto max-w-2xl mb-6 p-4 rounded-lg font-mono text-sm ${
              darkMode ? 'bg-black/50 text-green-400' : 'bg-gray-900 text-green-400'
            }`}>
              <div className="max-h-40 overflow-y-auto mb-3">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line}
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleTerminalSubmit} className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="bg-transparent outline-none flex-1"
                  placeholder="Type a command..."
                  autoFocus
                />
              </form>
            </div>
          )}

          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            © 2024 Aarav Patel. All rights reserved. | React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;