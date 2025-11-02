import { useState } from 'react';

export default function CourseCalendar() {
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const courses = [
        {
            id: 'cpa',
            title: 'CPA Certification',
            duration: '6 months',
            level: 'Advanced',
            color: '#031773',
            schedule: [
                { month: 0, dates: ['15-Jan', '22-Jan', '29-Jan'], time: '6:00 PM - 9:00 PM' },
                { month: 1, dates: ['5-Feb', '12-Feb', '19-Feb', '26-Feb'], time: '6:00 PM - 9:00 PM' },
                { month: 2, dates: ['5-Mar', '12-Mar', '19-Mar', '26-Mar'], time: '6:00 PM - 9:00 PM' },
                { month: 3, dates: ['2-Apr', '9-Apr', '16-Apr', '23-Apr'], time: '6:00 PM - 9:00 PM' },
                { month: 4, dates: ['7-May', '14-May', '21-May', '28-May'], time: '6:00 PM - 9:00 PM' },
                { month: 5, dates: ['4-Jun', '11-Jun', '18-Jun', '25-Jun'], time: '6:00 PM - 9:00 PM' }
            ]
        },
        {
            id: 'acca',
            title: 'ACCA Program',
            duration: '8 months',
            level: 'Professional',
            color: '#059669',
            schedule: [
                { month: 0, dates: ['8-Jan', '15-Jan', '22-Jan'], time: '7:00 PM - 10:00 PM' },
                { month: 1, dates: ['5-Feb', '12-Feb', '19-Feb'], time: '7:00 PM - 10:00 PM' },
                { month: 2, dates: ['5-Mar', '12-Mar', '19-Mar'], time: '7:00 PM - 10:00 PM' },
                { month: 3, dates: ['2-Apr', '9-Apr', '16-Apr'], time: '7:00 PM - 10:00 PM' },
                { month: 4, dates: ['7-May', '14-May', '21-May'], time: '7:00 PM - 10:00 PM' },
                { month: 5, dates: ['4-Jun', '11-Jun', '18-Jun'], time: '7:00 PM - 10:00 PM' }
            ]
        },
        {
            id: 'quickbooks',
            title: 'QuickBooks Training',
            duration: '3 months',
            level: 'Beginner',
            color: '#dc2626',
            schedule: [
                { month: 0, dates: ['10-Jan', '17-Jan', '24-Jan', '31-Jan'], time: '5:00 PM - 8:00 PM' },
                { month: 1, dates: ['7-Feb', '14-Feb', '21-Feb', '28-Feb'], time: '5:00 PM - 8:00 PM' },
                { month: 2, dates: ['7-Mar', '14-Mar', '21-Mar', '28-Mar'], time: '5:00 PM - 8:00 PM' }
            ]
        },
        {
            id: 'excel',
            title: 'Advanced Excel',
            duration: '2 months',
            level: 'Intermediate',
            color: '#7c3aed',
            schedule: [
                { month: 0, dates: ['12-Jan', '19-Jan', '26-Jan'], time: '4:00 PM - 7:00 PM' },
                { month: 1, dates: ['2-Feb', '9-Feb', '16-Feb', '23-Feb'], time: '4:00 PM - 7:00 PM' }
            ]
        },
        {
            id: 'taxation',
            title: 'UAE Taxation',
            duration: '4 months',
            level: 'Advanced',
            color: '#ea580c',
            schedule: [
                { month: 0, dates: ['13-Jan', '20-Jan', '27-Jan'], time: '6:30 PM - 9:30 PM' },
                { month: 1, dates: ['3-Feb', '10-Feb', '17-Feb', '24-Feb'], time: '6:30 PM - 9:30 PM' },
                { month: 2, dates: ['3-Mar', '10-Mar', '17-Mar', '24-Mar'], time: '6:30 PM - 9:30 PM' },
                { month: 3, dates: ['7-Apr', '14-Apr', '21-Apr', '28-Apr'], time: '6:30 PM - 9:30 PM' }
            ]
        },
        {
            id: 'audit',
            title: 'Audit & Assurance',
            duration: '5 months',
            level: 'Professional',
            color: '#0891b2',
            schedule: [
                { month: 0, dates: ['16-Jan', '23-Jan', '30-Jan'], time: '7:00 PM - 10:00 PM' },
                { month: 1, dates: ['6-Feb', '13-Feb', '20-Feb', '27-Feb'], time: '7:00 PM - 10:00 PM' },
                { month: 2, dates: ['6-Mar', '13-Mar', '20-Mar', '27-Mar'], time: '7:00 PM - 10:00 PM' },
                { month: 3, dates: ['3-Apr', '10-Apr', '17-Apr', '24-Apr'], time: '7:00 PM - 10:00 PM' },
                { month: 4, dates: ['1-May', '8-May', '15-May', '22-May'], time: '7:00 PM - 10:00 PM' }
            ]
        }
    ];

    const getCurrentMonthCourses = () => {
        return courses.filter(course => 
            course.schedule.some(schedule => schedule.month === selectedMonth)
        );
    };

    const getCourseScheduleForMonth = (courseId: string) => {
        const course = courses.find(c => c.id === courseId);
        return course?.schedule.find(s => s.month === selectedMonth);
    };


    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-green-600 mb-3">Course Schedule</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Upcoming Course Calendar<br />
                        Plan Your Learning Journey
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Browse our comprehensive course schedule and find the perfect time to advance your accounting and finance career with our expert-led training programs.
                    </p>
                </div>

                {/* Month Selector */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {months.slice(0, 6).map((month, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedMonth(index)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                    selectedMonth === index
                                        ? 'text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                style={{
                                    backgroundColor: selectedMonth === index ? '#031773' : undefined
                                }}
                            >
                                {month} 2024
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Cards for Selected Month */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {getCurrentMonthCourses().map((course) => {
                        const schedule = getCourseScheduleForMonth(course.id);
                        return (
                            <div
                                key={course.id}
                                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 cursor-pointer ${
                                    selectedCourse === course.id ? 'ring-2 ring-blue-200' : ''
                                }`}
                                style={{ borderLeftColor: course.color }}
                                onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                            >
                                {/* Course Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                                {course.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <span className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                    </svg>
                                                    {course.duration}
                                                </span>
                                                <span 
                                                    className="px-2 py-1 rounded-full text-xs font-medium text-white"
                                                    style={{ backgroundColor: course.color }}
                                                >
                                                    {course.level}
                                                </span>
                                            </div>
                                        </div>
                                        <button 
                                            className="w-8 h-8 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                            style={{ backgroundColor: course.color }}
                                        >
                                            <span className="text-sm font-bold">
                                                {selectedCourse === course.id ? '−' : '+'}
                                            </span>
                                        </button>
                                    </div>

                                    {/* Schedule Preview */}
                                    {schedule && (
                                        <div className="border-t pt-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-sm font-medium text-gray-700">
                                                    {months[selectedMonth]} Schedule
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {schedule.time}
                                                </span>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                {schedule.dates.slice(0, 3).map((date, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                                                    >
                                                        {date}
                                                    </span>
                                                ))}
                                                {schedule.dates.length > 3 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                                                        +{schedule.dates.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Expanded Details */}
                                {selectedCourse === course.id && schedule && (
                                    <div className="px-6 pb-6 border-t bg-gray-50">
                                        <div className="pt-4">
                                            <h4 className="font-semibold text-gray-800 mb-3">Complete Schedule</h4>
                                            <div className="space-y-2">
                                                {schedule.dates.map((date, index) => (
                                                    <div key={index} className="flex items-center justify-between py-2 px-3 bg-white rounded border">
                                                        <span className="font-medium text-gray-700">{date}</span>
                                                        <span className="text-sm text-gray-500">{schedule.time}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-4 flex gap-3">
                                                <button 
                                                    className="flex-1 text-white py-2 px-4 rounded-lg font-medium transition-colors hover:opacity-90 cursor-pointer"
                                                    style={{ backgroundColor: course.color }}
                                                >
                                                    Enroll Now
                                                </button>
                                                <button className="flex-1 border-2 py-2 px-4 rounded-lg font-medium transition-colors hover:bg-gray-50 cursor-pointer"
                                                    style={{ borderColor: course.color, color: course.color }}
                                                >
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* No Courses Message */}
                {getCurrentMonthCourses().length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">No Courses Scheduled</h3>
                        <p className="text-gray-500">No courses are scheduled for {months[selectedMonth]}. Please check other months.</p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ready to Start Your Learning Journey?
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                            Join thousands of professionals who have advanced their careers with our comprehensive training programs. Get personalized guidance and flexible scheduling options.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                className="text-white px-8 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-colors hover:opacity-90"
                                style={{ backgroundColor: '#031773' }}
                            >
                                View All Courses
                            </button>
                            <button 
                                className="border-2 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-colors"
                                style={{ borderColor: '#031773', color: '#031773' }}
                            >
                                Contact Advisor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
