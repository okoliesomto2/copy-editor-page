import React from 'react';
import { BookOpen, CheckCircle, MessageSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-xl text-gray-900">PreciseEdit</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#process" className="text-gray-700 hover:text-indigo-600">Process</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}