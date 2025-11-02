import { Head, Link } from '@inertiajs/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Users, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function AllCourses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Courses');

    const courses = [
        {
            id: 1,
            slug: 'design-bespoke-or-in-house-corporate-training',
            title: 'Design Bespoke or In House Corporate Training',
            description: 'Tailored corporate programs built around your team\'s goals and schedule. Custom training solutions designed specifically for your organization\'s unique needs.',
            image: '/images/courses/card1.jpg',
            duration: '4-8 weeks',
            students: '500+',
            rating: 4.9,
            price: 'Contact Us',
            originalPrice: '',
            level: 'Custom',
            category: 'Corporate Training',
        },
        {
            id: 2,
            slug: 'public-corporate-training',
            title: 'Public Corporate Training',
            description: 'Open-enrollment corporate workshops to upskill professionals across functions. Join peers from other companies to expand your network.',
            image: '/images/courses/card2.jpg',
            duration: '6 weeks',
            students: '3,200+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'All Levels',
            category: 'Corporate Training',
        },
        {
            id: 3,
            slug: 'management-courses',
            title: 'Management Courses',
            description: 'Practical programs covering planning, delegation, communication, and performance management. Build essential management skills for career advancement.',
            image: '/images/courses/card3.jpg',
            duration: '8 weeks',
            students: '2,800+',
            rating: 4.7,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Management',
        },
        {
            id: 4,
            slug: 'leadership-courses',
            title: 'Leadership Development Program',
            description: 'Develop modern leadership capabilities to inspire teams, drive change, and deliver results. Transform your ability to lead with confidence.',
            image: '/images/courses/card4.jpg',
            duration: '6 weeks',
            students: '2,500+',
            rating: 4.9,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Leadership',
        },
        {
            id: 5,
            slug: 'hr-and-administration-courses',
            title: 'HR & Administration Courses',
            description: 'Streamline HR operations and elevate people practices for better performance. Master modern HR strategies and administrative excellence.',
            image: '/images/courses/card1.jpg',
            duration: '10 weeks',
            students: '1,900+',
            rating: 4.6,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'HR & Administration',
        },
        {
            id: 6,
            slug: 'personality-development-courses',
            title: 'Personality Development Courses',
            description: 'Boost communication, confidence, and professional presence. Develop your personal brand and enhance your interpersonal skills.',
            image: '/images/courses/card2.jpg',
            duration: '6 weeks',
            students: '2,200+',
            rating: 4.8,
            price: '$899',
            originalPrice: '$1,199',
            level: 'Beginner',
            category: 'Personal Development',
        },
        {
            id: 7,
            slug: 'finance-courses',
            title: 'Advanced Financial Management',
            description: 'Master budgeting, reporting, and financial analysis to drive results. Develop expertise in financial planning and strategic decision-making.',
            image: '/images/courses/card3.jpg',
            duration: '12 weeks',
            students: '2,100+',
            rating: 4.9,
            price: '$1,799',
            originalPrice: '$2,199',
            level: 'Advanced',
            category: 'Finance',
        },
        {
            id: 8,
            slug: 'language-courses',
            title: 'Business Language Courses',
            description: 'Build business-ready language skills for global collaboration. Master professional communication in multiple languages.',
            image: '/images/courses/card4.jpg',
            duration: '8 weeks',
            students: '1,800+',
            rating: 4.7,
            price: '$999',
            originalPrice: '$1,299',
            level: 'All Levels',
            category: 'Language',
        },
        {
            id: 9,
            slug: 'microsoft-office-courses',
            title: 'Microsoft Office Mastery',
            description: 'Excel, PowerPoint, and Word—advanced tips that save time and impress. Become a power user of Microsoft Office suite.',
            image: '/images/courses/card1.jpg',
            duration: '6 weeks',
            students: '3,500+',
            rating: 4.8,
            price: '$799',
            originalPrice: '$1,099',
            level: 'Beginner',
            category: 'Technology',
        },
        {
            id: 10,
            slug: 'marketing-and-sales-courses',
            title: 'Marketing & Sales Excellence',
            description: 'Acquire modern marketing tactics and customer-centric sales skills. Drive business growth with proven strategies and techniques.',
            image: '/images/courses/card2.jpg',
            duration: '10 weeks',
            students: '2,600+',
            rating: 4.8,
            price: '$1,499',
            originalPrice: '$1,899',
            level: 'Intermediate',
            category: 'Marketing & Sales',
        },
        {
            id: 11,
            slug: 'it-courses',
            title: 'IT & Technology Courses',
            description: 'Future-ready tech skills across systems, security, and productivity. Stay ahead with cutting-edge technology training.',
            image: '/images/courses/card3.jpg',
            duration: '8 weeks',
            students: '2,300+',
            rating: 4.7,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Technology',
        },
        {
            id: 12,
            slug: 'technical-courses',
            title: 'Technical Skills Training',
            description: 'Hands-on training to improve technical proficiency and safety. Master practical technical skills for workplace excellence.',
            image: '/images/courses/card4.jpg',
            duration: '6 weeks',
            students: '1,700+',
            rating: 4.6,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Technical',
        },
        {
            id: 13,
            slug: 'project-management-courses',
            title: 'Project Management Professional (PMP)',
            description: 'Plan, execute, and deliver projects on time with confidence. Master project management methodologies and best practices.',
            image: '/images/courses/card1.jpg',
            duration: '8 weeks',
            students: '3,200+',
            rating: 4.9,
            price: '$1,599',
            originalPrice: '$1,999',
            level: 'Advanced',
            category: 'Project Management',
        },
    ];

    const categories = [
        'All Courses',
        'Corporate Training',
        'Leadership',
        'Management',
        'HR & Administration',
        'Personal Development',
        'Finance',
        'Language',
        'Technology',
        'Marketing & Sales',
        'Technical',
        'Project Management',
    ];

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Head title="All Courses">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
                <style>{`
                    body::before {
                        display: none !important;
                    }
                `}</style>
            </Head>

            <div className="min-h-screen bg-white">
                <Header />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800 text-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Explore Our Professional Training Courses
                            </h1>
                            <p className="text-xl text-white/90 mb-8">
                                Transform your career with expert-led courses designed for real-world success
                            </p>

                            {/* Search Bar */}
                            <div className="relative max-w-2xl mx-auto">
                                <input
                                    type="text"
                                    placeholder="Search for courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                                />
                                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="py-8 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="flex items-center gap-4 overflow-x-auto pb-2">
                            <Filter className="h-5 w-5 text-gray-600 flex-shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                                        selectedCategory === category
                                            ? 'bg-blue-900 text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="mb-8">
                            <p className="text-gray-600">
                                Showing <span className="font-bold text-gray-900">{filteredCourses.length}</span> courses
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course) => (
                                <Link
                                    key={course.id}
                                    href={`/courses/${course.slug}`}
                                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-900"
                                >
                                    {/* Course Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop';
                                            }}
                                        />
                                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-bold text-gray-900 text-sm">{course.rating}</span>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {course.level}
                                        </div>
                                    </div>

                                    {/* Course Details */}
                                    <div className="p-6">
                                        <div className="mb-2">
                                            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wide">
                                                {course.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {course.description}
                                        </p>

                                        {/* Course Meta */}
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4" />
                                                <span>{course.students}</span>
                                            </div>
                                        </div>

                                        {/* Price and CTA */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                                                <span className="text-sm text-gray-400 line-through ml-2">{course.originalPrice}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-blue-900 font-semibold group-hover:gap-3 transition-all">
                                                <span>View Details</span>
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredCourses.length === 0 && (
                            <div className="text-center py-16">
                                <div className="text-gray-400 mb-4">
                                    <Search className="h-16 w-16 mx-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                                <p className="text-gray-600">
                                    Try adjusting your search or filter to find what you're looking for
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Featured Courses Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Featured <span className="text-blue-900">Courses</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Most popular courses this month
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.slice(0, 3).map((course) => (
                                <Link
                                    key={course.id}
                                    href={`/courses/${course.slug}`}
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-900"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop';
                                            }}
                                        />
                                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-bold text-gray-900 text-sm">{course.rating}</span>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {course.level}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2">
                                            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wide">
                                                {course.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {course.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{course.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{course.students}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-gray-900">{course.price}</div>
                                                <div className="text-xs text-gray-400 line-through">{course.originalPrice}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white">
                    <div className="container mx-auto px-6 lg:px-24 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Can't Find What You're Looking For?
                        </h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            We offer custom training programs tailored to your organization's specific needs.
                        </p>
                        <Link
                            href="/services/design-bespoke-or-in-house-corporate-training"
                            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            Request Custom Training
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

