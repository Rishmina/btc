import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface UpskillModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function UpskillModal({ isOpen, onClose }: UpskillModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        trainingInterest: '',
        agreeToPrivacy: false
    });

    const trainingOptions = [
        'Accounting & Finance',
        'Management & Leadership',
        'HR & Administration',
        'Microsoft Office',
        'Marketing & Sales',
        'IT & Technical',
        'Project Management',
        'Language Training',
        'Personality Development',
        'Custom Corporate Training'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Upskill form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative">
                {/* Header */}
                <div className="bg-blue-900 rounded-t-lg p-6 pb-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-white">Ready to Upskill? Join Our Next Batch!</h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4 mb-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
                                placeholder="+971 XX XXX XXXX"
                                required
                            />
                        </div>

                        {/* Training Interest Dropdown */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">What kind of training are you looking for?</label>
                            <select
                                name="trainingInterest"
                                value={formData.trainingInterest}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
                                required
                            >
                                <option value="">Select training type</option>
                                {trainingOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start gap-3 mb-6">
                        <input
                            type="checkbox"
                            name="agreeToPrivacy"
                            checked={formData.agreeToPrivacy}
                            onChange={handleInputChange}
                            className="mt-1 w-4 h-4 text-blue-900 bg-transparent border-gray-300 rounded focus:ring-blue-900 focus:ring-2"
                            required
                        />
                        <label className="text-gray-600 text-sm">
                            I agree to the{' '}
                            <span className="text-blue-900 underline cursor-pointer">Privacy Policy</span>{' '}
                            <span className="text-red-500">*</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    >
                        Join Next Batch
                    </button>
                </form>
            </div>
        </div>
    );
}
