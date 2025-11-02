import { useState } from 'react';
import { X } from 'lucide-react';

interface ExpertModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ExpertModal({ isOpen, onClose }: ExpertModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        mobile: '',
        agreeToPrivacy: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-blue-900 rounded-lg shadow-2xl w-full max-w-md relative">
                {/* Header */}
                <div className="flex justify-between items-start p-6 pb-4">
                    <h2 className="text-2xl font-bold text-white">Speak to an Expert</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 pb-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        {/* Company Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2"
                                placeholder="Your company"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        {/* Mobile Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Mobile</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2"
                                placeholder="+971 XX XXX XXXX"
                                required
                            />
                        </div>
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start gap-3 mb-6">
                        <input
                            type="checkbox"
                            name="agreeToPrivacy"
                            checked={formData.agreeToPrivacy}
                            onChange={handleInputChange}
                            className="mt-1 w-4 h-4 text-blue-600 bg-transparent border-white rounded focus:ring-blue-500 focus:ring-2"
                            required
                        />
                        <label className="text-white text-sm">
                            I agree to the{' '}
                            <span className="text-white underline">Privacy Policy</span>{' '}
                            <span className="text-red-400 underline">required</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-800 border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
