import React from 'react';
import { BookOpen, FileText, MessageSquare, Newspaper } from 'lucide-react';

const services = [
  {
    title: 'Copy Editing',
    description: 'Comprehensive editing for clarity, flow, and consistency while maintaining your unique voice.',
    icon: FileText,
  },
  {
    title: 'Proofreading',
    description: 'Detailed review for grammar, spelling, punctuation, and formatting errors.',
    icon: BookOpen,
  },
  {
    title: 'Content Review',
    description: 'In-depth analysis of content structure, readability, and engagement.',
    icon: MessageSquare,
  },
  {
    title: 'Document Formatting',
    description: 'Professional formatting according to style guides (APA, MLA, Chicago, etc.).',
    icon: Newspaper,
  },
];

export function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive editing solutions for all your needs</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}