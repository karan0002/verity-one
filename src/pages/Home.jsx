import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: "GST & Tax Filing", description: "Comprehensive taxation management, ensuring strict compliance and optimized filing.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { title: "Company Incorporation", description: "Streamlined business registration and legal entity formation processes.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Accounting & Bookkeeping", description: "Precise financial tracking, ledger management, and robust reporting.", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Business Process Automation", description: "Modernizing operations with automated workflows for maximum efficiency.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Financial Planning", description: "Strategic forecasting and planning to secure your business's financial future.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Other Business Solutions", description: "Tailored consulting and operational solutions designed for your specific needs.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
];

const whyUs = [
  "One-Stop Solution",
  "Practical Business Support",
  "Seamless Processes",
  "Business-Focused Approach"
];

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your Business. Our Expertise. <br className="hidden md:block"/>
            <span className="text-amber-500">One Complete Solution.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            From taxation and accounting to business automation and financial planning, Verity One helps businesses manage their essential requirements under one roof.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#services" className="px-8 py-3.5 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors shadow-lg">
              Explore Our Services
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-transparent border border-slate-400 text-white font-medium rounded-md hover:bg-slate-800 hover:border-slate-300 transition-colors">
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Single-Stop Business Partner</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8 rounded"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Verity One is built on the principle that running a business should be straightforward. We serve as your dedicated single-stop partner, seamlessly integrating critical financial, compliance, and operational services. By consolidating your business requirements with us, you eliminate the friction of managing multiple vendors and focus entirely on what matters most: growing your enterprise.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive solutions designed to support every phase of your business lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  <svg className="w-8 h-8 text-slate-700 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Verity One Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Verity One?</h2>
              <p className="text-slate-600 mb-8 text-lg">We differentiate ourselves by removing complexity. Our comprehensive suite of services ensures that your business framework is robust, compliant, and efficient.</p>
              <ul className="space-y-4">
                {whyUs.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-1 mr-4">
                      <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-lg font-medium text-slate-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full h-80 lg:h-[400px] bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
                {/* Abstract placeholder for professional imagery since real photos aren't provided */}
                <div className="text-slate-400 font-medium">Professional Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Make Your Business Simpler.</h2>
          <p className="text-lg text-slate-300 mb-10">Let's discuss your business requirements and explore practical solutions.</p>
          <a href="mailto:contact@verityone.placeholder" className="inline-block px-10 py-4 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors shadow-lg">
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
