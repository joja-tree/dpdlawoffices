import React from 'react';
import { Scale, Briefcase, Home, FileText, Users, HeartHandshake } from 'lucide-react';

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-dark mb-3">{title}</h3>
      <p className="text-light">{description}</p>
    </div>
  );
};

const PracticeAreas: React.FC = () => {
  const areas = [
    {
      title: 'Corporate Law',
      description: 'Expert guidance on business formation, contracts, mergers and acquisitions, and corporate governance.',
      icon: <Briefcase size={32} />
    },
    {
      title: 'Family Law',
      description: 'Compassionate representation for annulment, custody, adoption, and other sensitive family matters.',
      icon: <Users size={32} />
    },
    {
      title: 'Real Estate',
      description: 'Comprehensive legal services for property transactions, landlord-tenant disputes, and zoning issues.',
      icon: <Home size={32} />
    },
    {
      title: 'Litigation',
      description: 'Strategic advocacy in civil disputes, commercial litigation, and conflict resolution.',
      icon: <Scale size={32} />
    },
    {
      title: 'Estate Planning',
      description: 'Thoughtful planning for wills, trusts, probate, and asset protection to secure your legacy.',
      icon: <FileText size={32} />
    },
    {
      title: 'Personal Injury',
      description: 'Dedicated representation for victims of accidents, medical malpractice, and wrongful death.',
      icon: <HeartHandshake size={32} />
    }
  ];

  return (
    <section id="practice-areas" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Our Practice Areas</h2>
          <p className="max-w-2xl mx-auto text-light">We offer comprehensive legal services across multiple practice areas, delivering expert guidance tailored to your specific needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <PracticeArea 
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;