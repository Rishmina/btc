import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentBottomSet, setCurrentBottomSet] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

    const testimonials = [
        {
      name: "Sarah Ahmed",
      role: "Senior Accountant at Emirates NBD",
      image: "https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20woman%20accountant%20in%20business%20attire%20smiling%20confidently%20in%20modern%20office%20environment%2C%20professional%20headshot%20style%2C%20clean%20background&width=300&height=300&seq=testimonial-1&orientation=squarish",
      content: "BTC's CPA program was exceptional. The instructors were knowledgeable and the study materials were comprehensive. I passed all four sections on my first attempt! The practical approach to learning made all the difference in my career advancement."
    },
    {
      name: "Mohammed Hassan",
      role: "Finance Manager at ADNOC",
      image: "https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20man%20finance%20manager%20in%20business%20suit%20smiling%20in%20corporate%20office%20setting%2C%20professional%20headshot%20style%2C%20clean%20background&width=300&height=300&seq=testimonial-2&orientation=squarish",
      content: "The QuickBooks training at BTC transformed my career. I went from basic bookkeeping to managing complex financial systems. The hands-on training and expert guidance helped me secure a promotion within six months of completing the course."
    },
    {
      name: "Fatima Al-Zahra",
      role: "Tax Consultant at PwC",
      image: "https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20woman%20tax%20consultant%20in%20business%20attire%20smiling%20in%20modern%20office%2C%20professional%20headshot%20style%2C%20clean%20background&width=300&height=300&seq=testimonial-3&orientation=squarish",
      content: "BTC's ACCA program provided me with the knowledge and confidence to excel in my career. The comprehensive curriculum and supportive instructors made complex concepts easy to understand. I highly recommend BTC to anyone serious about their accounting career."
    },
    {
      name: "Ahmed Al-Rashid",
      role: "CFO at Dubai Holdings",
      image: "https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20man%20CFO%20in%20executive%20business%20suit%20smiling%20confidently%20in%20luxury%20office%2C%20professional%20headshot%20style%2C%20clean%20background&width=300&height=300&seq=testimonial-4&orientation=squarish",
      content: "BTC's advanced financial management course elevated my expertise to the next level. The real-world case studies and practical applications prepared me for executive challenges. Highly recommended for finance professionals."
    },
    {
      name: "Layla Mansouri",
      role: "Audit Manager at Deloitte",
      image: "https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20woman%20audit%20manager%20in%20business%20attire%20smiling%20in%20modern%20corporate%20office%2C%20professional%20headshot%20style%2C%20clean%20background&width=300&height=300&seq=testimonial-5&orientation=squarish",
      content: "The audit and assurance program at BTC was comprehensive and practical. The instructors brought real industry experience that made complex auditing concepts clear and applicable. It significantly boosted my career prospects."
    },
    {
      name: "Omar Khalil",
      role: "Tax Director at KPMG",
      image: "https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20man%20tax%20director%20in%20business%20suit%20smiling%20in%20professional%20office%20environment%2C%20professional%20headshot%20style%2C%20clean%20background&width=300&height=300&seq=testimonial-6&orientation=squarish",
      content: "BTC's taxation courses are unmatched in quality and depth. The practical approach to UAE tax laws and international taxation helped me become a subject matter expert. The investment in BTC education paid off tremendously."
    }
  ];

  // Auto-play for main testimonial
  useEffect(() => {
    if (!isPaused && isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000); // Changed from 4000 to 3000 - Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, isVisible, testimonials.length]);

  // Auto-play for bottom section
  useEffect(() => {
    if (!isPaused && isVisible) {
      const interval = setInterval(() => {
        setCurrentBottomSet((prev) => (prev + 1) % 2); // Toggle between 2 sets
      }, 3500); // Changed from 5000 to 3500 - Change every 3.5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

  // Get testimonials for bottom section based on current set
  const getBottomTestimonials = () => {
    const startIndex = currentBottomSet * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

    return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-16 bg-gray-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Client Testimonials
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Clients Share Their Success Stories
          </h2>
        </div>

        {/* Main Testimonial - Centered Layout */}
        <div 
          className={`transition-all duration-1200 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="text-center">
            {/* Centered Client Image - Larger Size */}
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover rounded-xl transition-all duration-700"
                />
              </div>
            </div>

            {/* Content Below Image */}
            <div className="max-w-4xl mx-auto">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-star-fill text-yellow-400 text-sm"></i>
                  </div>
                ))}
                    </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  {testimonials[currentTestimonial].role}
                    </p>
                </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex gap-3">
                    <button 
                        onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer group"
                  >
                    <i className="ri-arrow-left-line text-sm"></i>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer group"
                  >
                    <i className="ri-arrow-right-line text-sm"></i>
                    </button>
                </div>
                    
                {/* Dots Indicator */}
                <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentTestimonial 
                          ? 'bg-gray-900 w-6' 
                          : 'bg-gray-300 hover:bg-gray-500'
                                }`}
                            />
                        ))}
                </div>
              </div>

              {/* Auto-play indicator */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-5">
                  {isPaused ? 'Paused - Hover to pause auto-play' : 'Auto-playing - Hover to pause'}
                </p>
              </div>
            </div>
          </div>
                    </div>
                    
        {/* Additional testimonials - Auto-rotating bottom section */}
        <div className="mt-16 overflow-hidden">
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out"
            style={{
              transform: `translateX(${currentBottomSet * -100}%)`,
            }}
          >
            {getBottomTestimonials().map((testimonial, index) => (
              <div
                key={`${currentBottomSet}-${index}`}
                className={`transition-all duration-1000 ease-out text-center ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {/* Client Image */}
                <div className="w-16 h-16 mx-auto mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 flex items-center justify-center mr-1">
                      <i className="ri-star-fill text-yellow-400 text-xs"></i>
                    </div>
                                ))}
                            </div>
                            
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-4 text-sm">
                  "{testimonial.content.substring(0, 100)}..."
                            </blockquote>
                            
                {/* Author Info */}
                                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {testimonial.role}
                  </p>
                            </div>
                        </div>
                    ))}
                </div>

          {/* Bottom section indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[0, 1].map((setIndex) => (
              <button
                key={setIndex}
                onClick={() => setCurrentBottomSet(setIndex)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  setIndex === currentBottomSet 
                    ? 'bg-gray-900 w-6' 
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
                </div>
            </div>
        </section>
    );
}
