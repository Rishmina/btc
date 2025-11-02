import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import ExpertModal from './ExpertModal';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        {
            name: 'Services',
            href: '#services',
            children: [
                { name: 'Sales', href: '/courses?category=Sales' },
                { name: 'Personality Development', href: '/courses?category=Personality Development' },
                { name: 'Management and Leadership', href: '/courses?category=Management and Leadership' },
                { name: 'Marketing', href: '/courses?category=Marketing' },
                { name: 'Finance', href: '/courses?category=Finance' },
                { name: 'Languages', href: '/courses?category=Languages' },
                { name: 'Microsoft Office', href: '/courses?category=Microsoft Office' },
                { name: 'Administration and HR Management', href: '/courses?category=Administration and HR Management' },
            ],
        },
        {
            name: 'Courses',
            href: '/courses',
            children: [
                { name: 'All Courses', href: '/courses' },
                { name: 'Public', href: '#courses-public' },
                { name: 'B2B', href: '#courses-b2b' },
            ],
        },
        { name: 'Events', href: '#events' },
    ];

    return (
        <header className="bg-transparent fixed top-0 z-50 w-full">

            {/* Main navigation */}
            <div className="bg-transparent container mx-auto pl-0 sm:pl-1 md:pl-1 lg:pl-0 xl:pl-2 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16">
                <div className="bg-transparent relative flex justify-between items-center py-3 sm:py-4 md:py-5">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3 sm:gap-4 flex-shrink-0 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-12">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                            <img 
                                src="/images/logos/btclogo.JPG" 
                                alt="Besherr Adi Logo" 
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    // Fallback to text if logo not found
                                    e.currentTarget.style.display = 'none';
                                    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (nextSibling) {
                                        nextSibling.style.display = 'block';
                                    }
                                }}
                            />
                            <span className="font-bold text-lg sm:text-xl md:text-2xl text-blue-900 hidden">BA</span>
                        </div>
                        {/* Company text removed as requested */}
                    </Link>

                    {/* Desktop Navigation - gradient nav bar (white → ash, darker for contrast) */}
                    <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
                        <div className="px-2 py-1 flex items-center gap-1 rounded-xl border border-gray-300 shadow-sm bg-gradient-to-r from-[#f3f4f6] via-[#d1d5db] to-[#9ca3af]">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    <a
                                        href={item.href}
                                        className="px-4 py-2 rounded-md text-sm lg:text-base font-medium text-slate-900 hover:bg-white/20 hover:backdrop-blur-sm hover:text-slate-900/90 transition-all duration-200 inline-block"
                                    >
                                        {item.name}
                                    </a>
                                    {Array.isArray((item as any).children) && (item as any).children.length > 0 && (
                                        <div className="absolute left-0 top-full mt-2 hidden group-hover:block">
                                            <div className={`rounded-md border border-gray-200 bg-white shadow-md py-2 ${((item as any).children.length > 8) ? 'min-w-[520px]' : 'min-w-[220px]'}`}>
                                                <div className={`${((item as any).children.length > 8) ? 'grid grid-cols-2 gap-1' : 'grid grid-cols-1'}`}>
                                                    {(item as any).children.map((child: { name: string; href: string }) => {
                                                        const isActive = currentPath === child.href;
                                                        return (
                                                            <a
                                                                key={child.name}
                                                                href={child.href}
                                                                className={
                                                                    `group flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                                                                        isActive
                                                                            ? 'bg-gray-100 text-blue-900'
                                                                            : 'text-gray-700 hover:bg-gray-50'
                                                                    }`
                                                                }
                                                            >
                                                                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                                                                <span>{child.name}</span>
                                                            </a>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={() => setIsExpertModalOpen(true)}
                                className="ml-1 px-3 py-2 rounded-md text-sm lg:text-base font-semibold text-blue-900 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                            >
                                Speak to an Expert
                            </button>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 sm:p-3 flex-shrink-0 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors duration-200"
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
                        <nav className="flex flex-col gap-3 sm:gap-4">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 text-sm sm:text-base py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                    {Array.isArray((item as any).children) && (item as any).children.length > 0 && (
                                        <div className="ml-4 mt-1 grid grid-cols-1">
                                            {(item as any).children.map((child: { name: string; href: string }) => (
                                                <a
                                                    key={child.name}
                                                    href={child.href}
                                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-900 text-sm py-1"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                                    <span>{child.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={() => {
                                    setIsExpertModalOpen(true);
                                    setIsMenuOpen(false);
                                }}
                                className="bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-center text-sm sm:text-base font-semibold mt-4 w-full"
                            >
                                Speak to an Expert
                            </button>
                        </nav>
                    </div>
                </div>
            )}

            {/* Expert Modal */}
            <ExpertModal 
                isOpen={isExpertModalOpen} 
                onClose={() => setIsExpertModalOpen(false)} 
            />
        </header>
    );
}
