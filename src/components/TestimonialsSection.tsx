const testimonials = [
  {
    id: 1,
    text: "We worked with Every to run an AI strategy sprint. They helped us identify our key opportunities and risks, and built a roadmap that we're still executing on today.",
    author: "CIO, mid-market private equity firm",
    stars: 5
  },
  {
    id: 2,
    text: "This is insane work. We pretty much built a whole new product in two days.",
    author: "Dilan, senior design at Metris Energy",
    stars: 5
  },
  {
    id: 3,
    text: "Every was thoughtful in their approach and methodical (and fast) in their execution. They have a deep bench of experts they tap to help deliver on unique solutions.",
    author: "Rupert, CTO at Hugh James",
    stars: 5
  },
  {
    id: 4,
    text: "Every is a team of cutting-edge experts who are also a joy to work with. They helped us transform complex ideas into a nose-to-tail marketing funnel that we couldn't be more excited about.",
    author: "Grace Capobianco, lead brand copywriter at Alpha School",
    stars: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-[#60a5fa]' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="w-content">
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#cfd8dc] text-lg max-w-2xl mx-auto">
            See how we've helped companies transform their digital presence and achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#101820]/80 border border-[#0047ab] rounded-xl p-8 hover:border-[#60a5fa] transition-all duration-300"
            >
              <StarRating rating={testimonial.stars} />
              
              <blockquote className="text-white text-lg leading-relaxed mb-6 font-serif">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0047ab] to-[#60a5fa] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#cfd8dc] font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;