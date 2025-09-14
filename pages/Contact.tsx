
import React, { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !email || !subject || !message) {
            setStatus('error');
            return;
        }
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }, 2000);
    };

    return (
        <div className="bg-gray-900 py-20 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Have a project in mind or just want to say hello? We'd love to hear from you.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-4 text-gray-300">
                            <p><strong>Address:</strong> 123 Tech Avenue, Silicon Valley, CA 94000</p>
                            <p><strong>Email:</strong> contact@vectrakode.com</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        </div>
                        <div className="mt-8 rounded-lg overflow-hidden">
                          <img src="https://picsum.photos/600/400?grayscale" alt="Map" className="w-full h-auto"/>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-brand-primary focus:border-brand-primary"></textarea>
                        </div>
                        <div>
                            <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {status === 'success' && <p className="text-green-400 text-center">Your message has been sent successfully!</p>}
                        {status === 'error' && <p className="text-red-400 text-center">Please fill out all fields before sending.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
