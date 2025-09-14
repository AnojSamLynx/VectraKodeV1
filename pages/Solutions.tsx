
import React from 'react';
import { CheckCircleIcon } from '../components/icons';

interface Solution {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const solutions: Solution[] = [
  {
    name: 'VectraLMS',
    tagline: 'The Future of Learning, Simplified.',
    description: 'An intuitive and powerful Learning Management System designed to facilitate online education, corporate training, and professional development. Engage learners with interactive content and track progress seamlessly.',
    features: ['Custom Course Creation', 'Interactive Quizzes & Assessments', 'Progress Tracking & Analytics', 'Certification & Gamification'],
    imageUrl: 'https://picsum.photos/seed/lms/600/400'
  },
  {
    name: 'VectraWorkforce',
    tagline: 'Empower Your Team, Optimize Your Workflow.',
    description: 'A comprehensive workforce management tool that streamlines HR processes, from employee onboarding to performance management. Enhance productivity and collaboration across your organization.',
    features: ['Employee Lifecycle Management', 'Time & Attendance Tracking', 'Performance Reviews', 'Automated Payroll Sync'],
    imageUrl: 'https://picsum.photos/seed/workforce/600/400'
  },
  {
    name: 'VectraEshop',
    tagline: 'Your Vision, Your Store, Our Technology.',
    description: 'A scalable and feature-rich e-commerce platform that allows you to build a stunning online store. From startups to enterprises, VectraEshop provides the tools you need to sell online effectively.',
    features: ['Customizable Storefronts', 'Secure Payment Gateway Integration', 'Inventory Management', 'Advanced Sales Analytics'],
    imageUrl: 'https://picsum.photos/seed/eshop/600/400'
  },
];

const SolutionCard: React.FC<{ solution: Solution, reverse: boolean }> = ({ solution, reverse }) => (
    <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-xl shadow-2xl overflow-hidden my-12">
        <div className={`w-full md:w-1/2 ${reverse ? 'md:order-2' : ''}`}>
            <img src={solution.imageUrl} alt={solution.name} className="object-cover w-full h-64 md:h-full" />
        </div>
        <div className={`w-full md:w-1/2 p-8 lg:p-12 ${reverse ? 'md:order-1' : ''}`}>
            <h3 className="text-3xl font-bold text-white">{solution.name}</h3>
            <p className="mt-2 text-lg text-brand-primary font-semibold">{solution.tagline}</p>
            <p className="mt-4 text-gray-400">{solution.description}</p>
            <ul className="mt-6 space-y-3">
                {solution.features.map(feature => (
                    <li key={feature} className="flex items-start">
                        <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-brand-primary mr-3 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


const Solutions: React.FC = () => {
  return (
    <div className="py-20 bg-base-300 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base font-semibold text-brand-primary tracking-wide uppercase">Our Software</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Tailor-Made Solutions for Your Business
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              Discover our suite of products designed to solve your most complex challenges.
            </p>
        </div>

        <div className="mt-12">
            {solutions.map((solution, index) => (
                <SolutionCard key={solution.name} solution={solution} reverse={index % 2 !== 0} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
