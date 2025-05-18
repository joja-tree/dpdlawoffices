import React, { useEffect } from 'react';

const Disclaimer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-slate-900 pt-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Legal Disclaimer</h1>
        <div className="bg-slate-50/95 backdrop-blur rounded-lg shadow-xl p-8 md:p-12">
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">1. General Information</h2>
            <p className="text-slate-600 mb-4">The information provided on this website is for general informational purposes only and should not be considered as legal advice or a substitute for legal counsel.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">2. No Attorney-Client Relationship</h2>
            <p className="text-slate-600 mb-4">Viewing this website or using any information provided on it does not create an attorney-client relationship. Such a relationship can only be established through direct communication with an attorney and execution of a written agreement.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">3. No Guarantees</h2>
            <p className="text-slate-600 mb-4">Every legal case is unique. Past results do not guarantee or predict similar outcomes in future cases. The outcome of any legal matter depends on its specific circumstances.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">4. Jurisdictional Limitations</h2>
            <p className="text-slate-600 mb-4">Our attorneys are licensed to practice law only in specific jurisdictions. Nothing on this website should be taken as an offer to provide legal services in any jurisdiction where our attorneys are not licensed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">5. Contact Information</h2>
            <div className="bg-slate-100 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">For specific legal advice, please contact us directly at:</p>
              <p className="text-slate-800 font-medium">Email: contactus@dpdlawoffices.com</p>
              <p className="text-slate-800 font-medium">Phone: (998) 969-9662</p>
            </div>
          </section>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-t from-slate-500 to-transparent"></div>
    </section>
  );
};

export default Disclaimer;