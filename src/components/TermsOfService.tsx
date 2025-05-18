import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-slate-900 pt-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Terms of Service</h1>
        <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-8 md:p-12">
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">2. No Attorney-Client Relationship</h2>
            <p className="text-slate-600 mb-4">The use of this website does not create an attorney-client relationship. Any information sent to us through the website is not protected by attorney-client privilege.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">3. Website Content</h2>
            <p className="text-slate-600 mb-4">The content on this website is for informational purposes only and should not be considered legal advice. Legal advice can only be given after consultation with an attorney and will be specific to the facts and circumstances of your situation.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">4. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">We make no warranties or representations about the accuracy of the information on this website and assume no liability for any damages arising from its use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">5. Contact Information</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">For questions about these Terms of Service, please contact us at:</p>
              <p className="text-slate-800 font-medium">Email: contactus@dpdlawoffices.com</p>
              <p className="text-slate-800 font-medium">Phone: (998) 969-9662</p>
            </div>
          </section>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-t from-slate-100 to-transparent"></div>
    </section>
  );
};

export default TermsOfService;