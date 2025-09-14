
import React from 'react';
import { LogoIcon } from '../components/icons'; // Using a placeholder, ideally would have unique icons

interface Service {
    name: string;
    description: string;
}

const services: Service[] = [
    {
        name: 'Custom Software Development',
        description: 'We build scalable and robust custom software solutions tailored to your specific business needs, from ideation to deployment and support.'
    },
    {
        name: 'Web Application Development',
        description: 'Creating high-performance, feature-packed, and secure web applications that provide a seamless user experience across all devices.'
    },
    {
        name: 'Mobile App Development',
        description: 'Developing intuitive and engaging native and cross-platform mobile apps for iOS and Android to connect you with your users on the go.'
    },
    {
        name: 'UI/UX Design',
        description: 'Crafting beautiful, user-centric designs that enhance usability, improve user experience, and drive conversions for your digital products.'
    },
    {
        name: 'Cloud Solutions & DevOps',
        description: 'Optimizing your infrastructure with cloud solutions and implementing DevOps practices for faster development cycles and reliable releases.'
    },
    {
        name: 'IT Consulting',
        description: 'Providing strategic IT consulting to help you navigate your digital transformation journey and make technology a key driver of your success.'
    }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-brand-primary/30 transform hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-secondary text-white mb-6">
            <LogoIcon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-white">{service.name}</h3>
        <p className="mt-4 text-gray-400">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <div className="py-20 bg-base-300 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-brand-primary tracking-wide uppercase">Our Expertise</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Comprehensive IT Services
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        We offer a full spectrum of services to help you build, maintain, and grow your technological landscape.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(service => (
                        <ServiceCard key={service.name} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
