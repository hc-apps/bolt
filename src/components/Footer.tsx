import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 border-t ${
      darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Built with
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              and
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code size={16} className="text-blue-500" />
            </motion.div>
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              by
            </span>
            <span className="text-blue-500 font-semibold">Aarav Patel</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Coffee size={16} className="text-amber-500" />
              </motion.div>
              <span className={`text-xs ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Powered by coffee & cloud computing
              </span>
            </div>
          </div>

          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            © 2024 Aarav Patel. All rights reserved. | React + TypeScript + Tailwind CSS + Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;