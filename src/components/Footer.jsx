import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left max-w-sm">
            <img src="/logo.png" alt="Verity One" className="h-14 md:h-16 w-auto object-contain mx-auto md:mx-0 mb-6" />

            <p className="text-sm text-slate-400 mb-6">
              Your comprehensive partner for business and financial solutions. We manage the complexity so you can focus on growth.
            </p>

            {/* Contact Info Added Here */}
            <div className="space-y-2">
              <a href="mailto:Info@verityone.in" className="flex items-center text-sm text-slate-400 hover:text-amber-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Info@verityone.in
              </a>
              <a href="tel:9599734594" className="flex items-center text-sm text-slate-400 hover:text-amber-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 9599734594
              </a>
            </div>
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
