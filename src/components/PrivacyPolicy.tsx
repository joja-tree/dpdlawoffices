import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-slate-900 pt-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Privacy Policy</h1>
        <div className="bg-slate-50/95 backdrop-blur rounded-lg shadow-xl p-8 md:p-12">
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-600">
              <li className="mb-2">Contact information (name, email address, phone number)</li>
              <li className="mb-2">Information about your legal matter</li>
              <li className="mb-2">Communications between you and our firm</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-600">
              <li className="mb-2">Provide legal services</li>
              <li className="mb-2">Communicate with you about your case</li>
              <li className="mb-2">Comply with legal obligations</li>
              <li className="mb-2">Improve our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">3. Information Security</h2>
            <p className="text-slate-600">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">4. Contact Us</h2>
            <div className="bg-slate-100 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">If you have questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;