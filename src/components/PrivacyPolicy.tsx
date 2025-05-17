import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none text-slate-700">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Information about your legal matter</li>
              <li>Communications between you and our firm</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide legal services</li>
              <li>Communicate with you about your case</li>
              <li>Comply with legal obligations</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">3. Information Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">4. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: contactus@dpdlawoffices.com</p>
            <p>Phone: (998) 969-9662</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;