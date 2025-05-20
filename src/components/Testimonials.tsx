import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, position }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="bg-blue-500/10 rounded-full p-3">
          <Quote size={32} className="text-blue-600" />
        </div>
      </div>
      <blockquote className="text-lg text-slate-700 text-center mb-6 italic">"{content}"</blockquote>
      <div className="text-center">
        <p className="font-serif font-bold text-slate-800">{author}</p>
        <p className="text-slate-600 text-sm">{position}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Lawson & Associates provided exceptional guidance during our company's merger. Their attention to detail and strategic advice made a complex process manageable and successful.",
      author: "David Martinez",
      position: "CEO, TechGrowth Inc."
    },
    {
      content: "During a difficult family matter, the attorneys at Lawson & Associates offered not only legal expertise but also compassion and understanding. They handled my case with the utmost professionalism.",
      author: "Rebecca Wilson",
      position: "Client"
    },
    {
      content: "The real estate team at Lawson & Associates navigated our complex property transaction flawlessly. Their knowledge of local regulations saved us time and potential complications.",
      author: "Thomas Johnson",
      position: "Real Estate Developer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Client Testimonials</h2>
          <p className="max-w-2xl mx-auto text-slate-600">Hear what our clients have to say about our services and commitment to excellence.</p>
        </div>
        
        <div className="relative">
          <Testimonial 
            content={testimonials[currentIndex].content}
            author={testimonials[currentIndex].author}
            position={testimonials[currentIndex].position}
          />
          
          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white text-slate-700 hover:text-blue-600 p-2 rounded-full shadow hover:shadow-md transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-4' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white text-slate-700 hover:text-blue-600 p-2 rounded-full shadow hover:shadow-md transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;