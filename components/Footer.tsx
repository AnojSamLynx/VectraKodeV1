
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TwitterIcon, LinkedInIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
              <LogoIcon className="h-8 w-8 text-brand-primary" />
              <span>VectraKode</span>
            </Link>
            <p className="text-gray-400">
              Crafting the future of technology with innovative software solutions and services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary"><LinkedInIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary"><GithubIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/solutions" className="text-base text-gray-400 hover:text-white">VectraLMS</Link></li>
              <li><Link to="/solutions" className="text-base text-gray-400 hover:text-white">VectraWorkforce</Link></li>
              <li><Link to="/solutions" className="text-base text-gray-400 hover:text-white">VectraEshop</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services" className="text-base text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Como, 6152, Western Australia</li>
              <li>contact@vectrakode.com</li>
              <li>+61 489 200 283</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VectraKode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
