import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left max-w-sm">
            <span className="font-bold text-2xl text-white tracking-tight block mb-4">VERITY <span className="text-amber-500">ONE</span></span>
            <p className="text-sm text-slate-400">
              Your comprehensive partner for business and financial solutions. We manage the complexity so you can focus on growth.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-amber-500 transition-colors">
              About Us
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Verity One. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
