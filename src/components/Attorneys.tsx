import React from 'react';

interface AttorneyProps {
  name: string;
  image: string;
  specialties: string[];
}

const Attorney: React.FC<AttorneyProps> = ({ name, image, specialties }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-slate-800">{name}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {specialties.map((specialty, index) => (
            <span key={index} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Attorneys: React.FC = () => {
  const attorneys = [
    {
      name: 'Atty. Plen John Mark M. Dela Peña',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Real Estate', 'Family Law', 'Litigation', 'Estate Planning', 'Personal Injury']
    },
    {
      name: 'Atty. Theresa Marie C. Puno-Dela Peña',
      image: 'https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Corporate Law', 'Real Estate', 'Estate Planning']
    }
  ];

  return (
    <section id="attorneys" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Our Attorneys</h2>
          <p className="max-w-2xl mx-auto text-slate-600">Meet our exceptional team of legal experts dedicated to providing you with the highest quality representation and counsel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {attorneys.map((attorney, index) => (
            <Attorney 
              key={index}
              name={attorney.name}
              image={attorney.image}
              specialties={attorney.specialties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;