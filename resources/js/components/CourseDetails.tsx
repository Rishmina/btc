import { Clock, Users, Star, ArrowUpRight, Play, Award, BookOpen, Target } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function CourseDetails() {
    const courses = [
        {
            id: 1,
            slug: "leadership-development",
            title: "Leadership Development Program",
            description: "Master essential leadership skills and transform your ability to inspire and guide teams toward success.",
            duration: "6 weeks",
            students: "2,500+",
            rating: 4.9,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Leadership",
            image: "/images/courses/card1.jpg",
            features: [
                "Executive Coaching Sessions",
                "Team Management Strategies",
                "Communication Excellence",
                "Strategic Decision Making",
                "Certification Included"
            ],
            instructor: {
                name: "Dr. Sarah Johnson",
                title: "Leadership Expert",
                experience: "15+ years"
            },
            badge: "Most Popular"
        },
        {
            id: 2,
            slug: "project-management-professional",
            title: "Project Management Professional (PMP)",
            description: "Prepare for PMP certification with comprehensive training covering all project management domains.",
            duration: "8 weeks",
            students: "3,200+",
            rating: 4.8,
            price: "$1,499",
            originalPrice: "$1,899",
            level: "Advanced",
            format: "Online",
            category: "Project Management",
            image: "/images/courses/card2.jpg",
            features: [
                "PMP Exam Preparation",
                "Real-world Case Studies",
                "Practice Tests & Quizzes",
                "35 PDUs Included",
                "Money-back Guarantee"
            ],
            instructor: {
                name: "Mike Chen",
                title: "PMP Certified",
                experience: "12+ years"
            },
            badge: "Certified"
        },
        {
            id: 3,
            slug: "digital-marketing-mastery",
            title: "Digital Marketing Mastery",
            description: "Learn the latest digital marketing strategies and tools to drive business growth in the digital age.",
            duration: "10 weeks",
            students: "4,100+",
            rating: 4.9,
            price: "$999",
            originalPrice: "$1,299",
            level: "Beginner",
            format: "Self-Paced",
            category: "Marketing",
            image: "/images/courses/card3.jpg",
            features: [
                "SEO & SEM Strategies",
                "Social Media Marketing",
                "Content Marketing",
                "Analytics & Reporting",
                "Portfolio Project"
            ],
            instructor: {
                name: "Lisa Rodriguez",
                title: "Digital Marketing Director",
                experience: "10+ years"
            },
            badge: "New"
        },
        {
            id: 4,
            slug: "data-analytics-visualization",
            title: "Data Analytics & Visualization",
            description: "Transform raw data into actionable insights using modern analytics tools and visualization techniques.",
            duration: "12 weeks",
            students: "1,800+",
            rating: 4.7,
            price: "$1,799",
            originalPrice: "$2,199",
            level: "Intermediate",
            format: "Hybrid",
            category: "Data Science",
            image: "/images/courses/card4.jpg",
            features: [
                "Python & R Programming",
                "Tableau & Power BI",
                "Machine Learning Basics",
                "Statistical Analysis",
                "Capstone Project"
            ],
            instructor: {
                name: "David Park",
                title: "Senior Data Scientist",
                experience: "8+ years"
            },
            badge: "Trending"
        }
    ];

    // Cache-busting string to ensure updated images are fetched
    const imageVersion = '?v=20251006';

    const categories = [
        { name: "All Courses", count: 24, active: true },
        { name: "Leadership", count: 6, active: false },
        { name: "Project Management", count: 5, active: false },
        { name: "Marketing", count: 4, active: false },
        { name: "Data Science", count: 3, active: false },
        { name: "Technology", count: 6, active: false }
    ];

    return (
        <section id="courses" className="py-20 bg-white">
            <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Our Courses
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Transform Your Career with
                        <span className="text-blue-900"> Expert Training</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from our comprehensive selection of professional development courses designed to 
                        accelerate your career growth and expand your skill set.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                                category.active
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                            <span className="ml-2 text-sm opacity-75">({category.count})</span>
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8 mb-12">
                    {courses.map((course) => (
                        <Link
                            key={course.id}
                            href={`/courses/${course.slug}`}
                            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-colors duration-200 hover:bg-gray-300 hover:shadow-md max-w-[540px] mx-auto pb-14 block"
                        >
                            {/* Image Header */}
                            <div className="relative p-5 pb-0">
                                {course.badge && (
                                    <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold ${
                                        course.badge === 'Most Popular' ? 'bg-yellow-400 text-yellow-900' :
                                        course.badge === 'Certified' ? 'bg-green-400 text-green-900' :
                                        course.badge === 'New' ? 'bg-blue-400 text-blue-900' :
                                        'bg-purple-400 text-purple-900'
                                    }`}>
                                        {course.badge}
                                    </div>
                                )}
                                <div className="relative mx-auto w-full">
                                    <div className="aspect-[16/9] rounded-xl overflow-hidden">
                                        <img
                                            src={`${course.image}${imageVersion}`}
                                            alt={course.title}
                                            className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Image-specific caption only */}
                                <div className="p-5 pt-4">
                                     {course.id === 1 && (
                                         <>
                                             <h4 className="text-sm font-semibold text-gray-900">Design Bespoke or In House Corporate Training</h4>
                                             <p className="text-sm text-gray-600 mt-1">Tailored, organization-specific sessions delivered on-site or online to address your team’s exact goals.</p>
                                         </>
                                     )}
                                     {course.id === 2 && (
                                         <>
                                             <h4 className="text-sm font-semibold text-gray-900">Public Corporate Training</h4>
                                             <p className="text-sm text-gray-600 mt-1">Join open-enrolment classes to upskill with peers from other companies and expand your network.</p>
                                         </>
                                     )}
                                     {course.id === 3 && (
                                         <>
                                             <h4 className="text-sm font-semibold text-gray-900">Management Courses</h4>
                                             <p className="text-sm text-gray-600 mt-1">Practical programs covering planning, delegation, communication, and performance management.</p>
                                         </>
                                     )}
                                     {course.id === 4 && (
                                         <>
                                             <h4 className="text-sm font-semibold text-gray-900">Leadership Courses</h4>
                                             <p className="text-sm text-gray-600 mt-1">Develop modern leadership capabilities to inspire teams, drive change, and deliver results.</p>
                                         </>
                                     )}
                                 </div>
                            </div>
                            {/* Floating Arrow CTA */}
                            <div
                                aria-label="Open details"
                                className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-md group-hover:bg-blue-800 transition-colors duration-200"
                            >
                                <ArrowUpRight className="h-5 w-5" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Link href="/courses" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 inline-block">
                        View All Courses
                    </Link>
                </div>
            </div>
        </section>
    );
}
