import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-900 pt-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Legal Excellence with <span className="text-amber-500">Personal Touch</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            DPD Law Offices delivers exceptional legal representation with a commitment to integrity, personalized service, and successful outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Free Consultation
            </a>
            <a 
              href="#practice-areas" 
              className="inline-block bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded shadow hover:shadow-lg transition-all duration-300 text-center"
            >
              Our Practice Areas
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-100 to-transparent"></div>
    </section>
  );
};

export default Hero