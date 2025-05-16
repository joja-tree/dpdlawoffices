import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none text-slate-700">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">2. No Attorney-Client Relationship</h2>
            <p className="mb-4">The use of this website does not create an attorney-client relationship. Any information sent to us through the website is not protected by attorney-client privilege.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">3. Website Content</h2>
            <p className="mb-4">The content on this website is for informational purposes only and should not be considered legal advice. Legal advice can only be given after consultation with an attorney and will be specific to the facts and circumstances of your situation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">We make no warranties or representations about the accuracy of the information on this website and assume no liability for any damages arising from its use.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">5. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
            <p>Email: contactus@dpdlawoffices.com</p>
            <p>Phone: (998) 969-9662</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;