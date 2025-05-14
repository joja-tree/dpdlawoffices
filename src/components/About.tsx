import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lawson & Associates Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded shadow-lg">
                <p className="text-4xl font-bold">30+</p>
                <p className="text-sm font-medium uppercase tracking-wide">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">About Our Firm</h2>
            <p className="text-slate-600 mb-4">
              Founded in 1995, Lawson & Associates has established itself as a trusted name in legal services. Our firm combines decades of experience with innovative approaches to deliver exceptional results for our clients.
            </p>
            <p className="text-slate-600">
              We pride ourselves on our commitment to understanding each client's unique situation and providing personalized legal strategies that address their specific needs and objectives. Our attorneys bring depth of knowledge and unwavering dedication to every case we handle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;