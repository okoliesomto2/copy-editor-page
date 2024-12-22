import React from 'react';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Perfect Your Words,
            <span className="text-indigo-600"> Elevate Your Message</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional copy editing and proofreading services to ensure your writing is clear, precise, and error-free.
          </p>
          <div className="mt-5 max-w-md mx-auto flex justify-center gap-3">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get a Quote
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}