import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Verity One</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Your trusted partner in professional business and financial solutions.</p>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-4">Who We Are</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Verity One is a specialized professional services firm dedicated to simplifying the operational and financial complexities of modern enterprises. As a single-stop business and financial solutions partner, we eliminate the need for fragmented service providers by offering a cohesive suite of core corporate services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-4">What We Do</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                We support businesses by meticulously managing their essential backbone. From handling intricate taxation and comprehensive accounting tasks to structuring company incorporation, automating workflows, and mapping out long-term financial planning, we ensure your foundation is rock solid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach (3-step visual) */}
            {/* Founder Section */}
            <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded"></div>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic mb-8">
            "At Verity One, our goal is to take the burden of financial and operational compliance off your shoulders, so you can focus entirely on scaling your business."
          </p>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Tushar Roy</h3>
            <p className="text-amber-600 font-medium mt-1 uppercase tracking-wide text-sm">Founder & CEO, Verity One</p>
          </div>
        </div>
      </section>


      {/* Why Businesses Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Businesses Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-amber-600">One-Stop Solution</h3>
              <p className="text-slate-600">We eliminate the friction of coordinating between multiple agencies by offering taxation, accounting, and strategic services all under one roof.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-amber-600">Practical Business Support</h3>
              <p className="text-slate-600">Our advice and services are rooted in real-world application, ensuring that the solutions we implement actually work for your day-to-day operations.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-amber-600">Seamless Processes</h3>
              <p className="text-slate-600">Through automation and rigorous procedural standards, we turn chaotic administrative burdens into smooth, predictable routines.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-amber-600">Business-Focused Approach</h3>
              <p className="text-slate-600">We handle the compliance and financial back-office work specifically so that your leadership team can stay focused on core business objectives and scaling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Have a Business Requirement? Let's Talk.</h2>
          <a
            href="https://wa.me/919599734594?text=Hi%20Verity%20One,%20I%20would%20like%20to%20discuss%20my%20business%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors shadow-lg"
          >
            Let's Talk
          </a>

        </div>
      </section>
    </div>
  );
};

export default About;
