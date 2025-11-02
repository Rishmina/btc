import { Link } from '@inertiajs/react';
import { ArrowRight, Play, Star, Users, Award, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroBanner() {
    const videos = [
        { src: '/videos/banner.mp4', name: 'Training Session' },
        { src: '/videos/hero.mp4', name: 'Leadership Development' }
    ];
    
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const services: { name: string; blurb: string }[] = [
        { name: 'Design Bespoke or In House Corporate Training', blurb: 'Tailored corporate programs built around your team’s goals and schedule.' },
        { name: 'Public Corporate Training', blurb: 'Open-enrollment corporate workshops to upskill professionals across functions.' },
        { name: 'Management Courses', blurb: 'Practical programs that strengthen planning, delegation, and decision-making.' },
        { name: 'Leadership Courses', blurb: 'Inspire, influence, and drive outcomes with modern leadership essentials.' },
        { name: 'HR & Administration Courses', blurb: 'Streamline HR operations and elevate people practices for better performance.' },
        { name: 'Personality Development Courses', blurb: 'Boost communication, confidence, and professional presence.' },
        { name: 'Finance Courses', blurb: 'Master budgeting, reporting, and financial analysis to drive results.' },
        { name: 'Language Courses', blurb: 'Build business-ready language skills for global collaboration.' },
        { name: 'Microsoft Office Courses', blurb: 'Excel, PowerPoint, and Word—advanced tips that save time and impress.' },
        { name: 'Marketing & Sales Courses', blurb: 'Acquire modern marketing tactics and customer-centric sales skills.' },
        { name: 'IT Courses', blurb: 'Future‑ready tech skills across systems, security, and productivity.' },
        { name: 'Technical Courses', blurb: 'Hands-on training to improve technical proficiency and safety.' },
        { name: 'Project Management Courses', blurb: 'Plan, execute, and deliver projects on time with confidence.' },
    ];

    // Build slides: first the current static hero message, then each service headline
    const slides = [
        {
            headline: 'Elevate Your Professional Skills with Expert Training',
            subtext:
                'Join thousands of professionals who have transformed their careers with our comprehensive training programs. From leadership development to technical certifications, we provide world-class education that drives results.',
        },
        ...services.map((s) => ({
            headline: s.name,
            subtext: s.blurb,
        })),
    ];
    const [slideIndex, setSlideIndex] = useState(0);
    const headline = slides[slideIndex]?.headline;
    const subtext = slides[slideIndex]?.subtext;

    useEffect(() => {
        const rotator = setInterval(() => {
            setSlideIndex((i) => (i + 1) % slides.length);
        }, 4000);
        return () => clearInterval(rotator);
    }, [slides.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 8000); // Change video every 8 seconds

        return () => clearInterval(timer);
    }, [videos.length]);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <section className="relative text-white overflow-hidden min-h-screen w-full">
            {/* Background Video Carousel */}
            <div className="absolute inset-0 w-full h-full">
                {videos.map((video, index) => (
                    <video 
                        key={index}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        autoPlay 
                        muted 
                        playsInline
                        onEnded={handleVideoEnd}
                        onLoadedData={() => setIsVideoLoaded(true)}
                        style={{ zIndex: index === currentVideoIndex ? 1 : 0 }}
                    >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ))}
                
                {/* Light overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                
                {/* Video indicators - Fixed positioning */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentVideoIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                                index === currentVideoIndex 
                                    ? 'bg-blue-900 w-4 sm:w-6 md:w-8' 
                                    : 'bg-white/40 hover:bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Social Media Box - Bottom Right */}
            <div className="absolute bottom-16 right-4 lg:right-8 z-10">
                <div className="bg-gray-200/80 backdrop-blur-sm rounded-lg px-5 py-2 flex items-center gap-3">
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                        Follow
                    </button>
                    <div className="flex items-center gap-2">
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Text Content - Bottom Left Overlay */}
            <div className="absolute bottom-8 left-4 lg:left-8 max-w-lg z-10">
                <div className="inline-flex items-center bg-blue-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <Star className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm font-medium text-white">Trusted by 10,000+ Professionals</span>
                </div>

                {/* Auto-rotating headline pulled from services list */}
                <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-3 text-white">
                    {headline}
                </h1>

                <p className="text-base text-white mb-6 leading-relaxed">
                    {subtext}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    {/* Read More with silver gradient border */}
                    <div className="rounded-md p-[1px] bg-gradient-to-r from-white via-gray-300 to-white shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                        <Link
                            href="/register"
                            className="inline-flex items-center justify-center bg-blue-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200"
                        >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Get a Demo - simple outlined white button (like the reference) */}
                    <button className="inline-flex items-center justify-center border-2 border-white text-white px-4 py-2 rounded-md font-semibold hover:bg-white/10 transition-colors duration-200">
                        <Play className="mr-2 h-4 w-4" />
                        Get a Demo
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">10K+</div>
                        <div className="text-xs text-white">Students Trained</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">98%</div>
                        <div className="text-xs text-white">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">50+</div>
                        <div className="text-xs text-white">Expert Instructors</div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 sm:h-20 md:h-24">
                    <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
                </svg>
            </div>
        </section>
    );
}

