
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '../components/icons';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-brand-primary/30 transform hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
    </div>
);

const Home: React.FC = () => {
    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white py-32 sm:py-40 lg:py-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-brand-secondary opacity-60"></div>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&auto=format&fit=crop')`}}></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="block">Innovate. Integrate.</span>
                        <span className="block text-brand-primary">Elevate.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
                        VectraKode delivers cutting-edge software solutions and IT services that empower businesses to thrive in the digital age.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/solutions" className="inline-block w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary/90 transition-colors">
                            Explore Solutions
                        </Link>
                        <Link to="/contact" className="inline-block w-full sm:w-auto px-8 py-3 border border-gray-400 text-base font-medium rounded-md text-white hover:bg-gray-700 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-base-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Why Partner with VectraKode?</h2>
                        <p className="mt-4 text-lg text-gray-400">We are more than just a vendor; we are your technology partner.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard 
                            title="Innovative Technology"
                            description="We leverage the latest technologies to build scalable, robust, and future-proof solutions for your business."
                            icon={<CheckCircleIcon className="h-6 w-6"/>}
                        />
                        <FeatureCard 
                            title="Expert Team"
                            description="Our team of certified professionals brings years of industry experience and a passion for solving complex challenges."
                            icon={<CheckCircleIcon className="h-6 w-6"/>}
                        />
                        <FeatureCard 
                            title="Client-Centric Approach"
                            description="We prioritize your needs, working collaboratively to ensure our solutions align perfectly with your goals."
                            icon={<CheckCircleIcon className="h-6 w-6"/>}
                        />
                    </div>
                </div>
            </section>
            
            {/* Our Offerings Section */}
            <section className="py-20 bg-gray-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-extrabold text-white">Our Core Offerings</h2>
                  <p className="mt-4 text-lg text-gray-400">
                    From bespoke software to comprehensive IT services, we provide the tools you need to succeed.
                  </p>
                  <Link to="/services" className="mt-6 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-secondary hover:bg-brand-secondary/90 transition-colors">
                    View All Services
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-brand-primary">Software Solutions</h3>
                        <p className="mt-2 text-gray-400">Tailored products like VectraLMS and VectraWorkforce designed to optimize your operations.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-brand-primary">IT Services</h3>
                        <p className="mt-2 text-gray-400">A full spectrum of IT services including custom development, cloud solutions, and consulting.</p>
                    </div>
                </div>
              </div>
            </section>

        </div>
    );
};

export default Home;
