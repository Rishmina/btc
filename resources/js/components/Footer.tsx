import { Link } from '@inertiajs/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Our Courses', href: '#courses' },
        { name: 'Training Calendar', href: '#calendar' },
        { name: 'Success Stories', href: '#testimonials' },
        { name: 'Contact Us', href: '#contact' }
    ];

    const courseCategories = [
        { name: 'Leadership Development', href: '#' },
        { name: 'Project Management', href: '#' },
        { name: 'Digital Marketing', href: '#' },
        { name: 'Data Analytics', href: '#' },
        { name: 'Business Skills', href: '#' }
    ];

    const supportLinks = [
        { name: 'Help Center', href: '#' },
        { name: 'Course Catalog', href: '#' },
        { name: 'Student Portal', href: '#' },
        { name: 'Certification Verification', href: '#' },
        { name: 'Refund Policy', href: '#' }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'YouTube', icon: Youtube, href: '#' }
    ];

    return (
        <footer
            className="relative text-white"
            style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.15)), linear-gradient(rgba(10,23,64,0.25), rgba(10,23,64,0.25)), url('/images/footer/footer.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundBlendMode: 'soft-light, normal, normal',
            }}
        >
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img 
                                    src="/images/logos/btclogo.JPG" 
                                    alt="Besherr Adi Logo" 
                                    className="w-12 h-12 object-contain"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (nextSibling) {
                                            nextSibling.style.display = 'block';
                                        }
                                    }}
                                />
                                <span className="font-bold text-xl text-white hidden">BA</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Besherr Adi</h3>
                                <p className="text-sm text-gray-400">Professional Training</p>
                            </div>
                        </Link>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering professionals worldwide with cutting-edge skills and knowledge. 
                            Your success is our commitment to excellence.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="h-4 w-4" />
                                <span>info@besherradi.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="h-4 w-4" />
                                <span>123 Business District, Training City, TC 12345</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Course Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Course Categories</h4>
                        <ul className="space-y-3">
                            {courseCategories.map((category) => (
                                <li key={category.name}>
                                    <a 
                                        href={category.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Support & Resources</h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Newsletter Signup */}
            <div
                className="py-12"
                style={{
                    backgroundColor: 'rgba(10,23,64,0.35)'
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-xl font-semibold mb-2">Stay Updated with Our Latest Courses</h4>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter and be the first to know about new training programs and special offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-950 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Besherr Adi Professional Training Consultancy. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
