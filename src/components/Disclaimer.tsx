import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-8">Legal Disclaimer</h1>
        
        <div className="prose max-w-none text-slate-700">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">1. General Information</h2>
            <p className="mb-4">The information provided on this website is for general informational purposes only and should not be considered as legal advice or a substitute for legal counsel.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">2. No Attorney-Client Relationship</h2>
            <p className="mb-4">Viewing this website or using any information provided on it does not create an attorney-client relationship. Such a relationship can only be established through direct communication with an attorney and execution of a written agreement.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">3. No Guarantees</h2>
            <p className="mb-4">Every legal case is unique. Past results do not guarantee or predict similar outcomes in future cases. The outcome of any legal matter depends on its specific circumstances.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">4. Jurisdictional Limitations</h2>
            <p className="mb-4">Our attorneys are licensed to practice law only in specific jurisdictions. Nothing on this website should be taken as an offer to provide legal services in any jurisdiction where our attorneys are not licensed.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">5. Contact Information</h2>
            <p>For specific legal advice, please contact us directly at:</p>
            <p>Email: contactus@dpdlawoffices.com</p>
            <p>Phone: (998) 969-9662</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;