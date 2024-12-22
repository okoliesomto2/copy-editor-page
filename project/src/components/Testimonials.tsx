import React from 'react';

const testimonials = [
  {
    quote: "The attention to detail was impressive. My manuscript is now much stronger thanks to the thorough editing.",
    author: "Sarah Johnson",
    role: "Author",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Quick turnaround and excellent communication throughout the process. Highly recommended!",
    author: "Michael Chen",
    role: "Content Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}