import { Head, Link } from '@inertiajs/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Users, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AllCourses() {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Get category from URL query parameter
    const getCategoryFromURL = () => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const category = params.get('category');
            return category ? decodeURIComponent(category) : 'All Courses';
        }
        return 'All Courses';
    };
    
    const [selectedCategory, setSelectedCategory] = useState(getCategoryFromURL());

    // Update category when component mounts or URL changes
    useEffect(() => {
        const category = getCategoryFromURL();
        setSelectedCategory(category);
    }, []);

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
        {
            id: 14,
            slug: 'train-the-trainer',
            title: 'Train The Trainer',
            description: 'Master the art of effective training delivery. Learn to design, develop, and deliver engaging training programs that maximize learner engagement and retention.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '1,200+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 15,
            slug: 'competency-based-interviewing-skill',
            title: 'Competency-Based Interviewing Skill',
            description: 'Learn to conduct effective competency-based interviews that identify the right candidates. Master interview techniques and assessment methods.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '950+',
            rating: 4.7,
            price: '$999',
            originalPrice: '$1,299',
            level: 'Beginner',
            category: 'Administration and HR Management',
        },
        {
            id: 16,
            slug: 'effective-office-management-skills',
            title: 'Effective Office Management Skills',
            description: 'Develop essential office management skills including organization, time management, communication, and administrative excellence.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,500+',
            rating: 4.6,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'All Levels',
            category: 'Administration and HR Management',
        },
        {
            id: 17,
            slug: 'human-resources-management-skills',
            title: 'Human Resources Management Skills',
            description: 'Comprehensive HR management training covering recruitment, employee relations, performance management, and strategic HR planning.',
            image: '/images/courses/hr1.jpg',
            duration: '8 weeks',
            students: '2,100+',
            rating: 4.9,
            price: '$1,499',
            originalPrice: '$1,899',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 18,
            slug: 'pa-professional-administrative-skills',
            title: 'PA & Professional Administrative Skills',
            description: 'Elevate your professional administrative capabilities. Master executive support, scheduling, communication, and advanced administrative techniques.',
            image: '/images/courses/admin.jpg',
            duration: '6 weeks',
            students: '1,800+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 19,
            slug: 'writing-for-business-email-etiquette',
            title: 'Writing for Business & Email Etiquette',
            description: 'Master professional business writing and email communication. Learn to write clear, concise, and impactful business communications.',
            image: '/images/courses/email.jpg',
            duration: '4 weeks',
            students: '2,300+',
            rating: 4.7,
            price: '$899',
            originalPrice: '$1,199',
            level: 'Beginner',
            category: 'Administration and HR Management',
        },
        {
            id: 20,
            slug: 'new-uae-federal-labour-law-course',
            title: 'New UAE Federal Labour Law Course',
            description: 'Stay updated with the latest UAE Federal Labour Law. Understand key provisions, employee rights, employer obligations, and compliance requirements.',
            image: '/images/courses/uae.jpg',
            duration: '3 weeks',
            students: '1,600+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'All Levels',
            category: 'Administration and HR Management',
        },
        {
            id: 21,
            slug: 'writing-policies-procedure',
            title: 'Writing Policies & Procedure',
            description: 'Learn to write clear, comprehensive policies and procedures that ensure organizational compliance and operational efficiency.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '1,100+',
            rating: 4.6,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 22,
            slug: 'new-emiratization-law',
            title: 'New Emiratization Law',
            description: 'Understand the latest Emiratization requirements and regulations. Learn how to implement effective Emiratization strategies in your organization.',
            image: '/images/courses/placeholder.jpg',
            duration: '3 weeks',
            students: '1,400+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'All Levels',
            category: 'Administration and HR Management',
        },
        {
            id: 23,
            slug: 'modern-recruitment-trends',
            title: 'Modern Recruitment Trends',
            description: 'Explore cutting-edge recruitment strategies and trends. Learn about digital recruitment, AI tools, and modern hiring practices.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '1,700+',
            rating: 4.7,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 24,
            slug: 'hiring-for-attitude-hiring-right-people',
            title: 'Hiring for Attitude - Hiring the Right People',
            description: 'Master the art of hiring for attitude and cultural fit. Learn assessment techniques to identify candidates who align with your organization\'s values.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '1,300+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 25,
            slug: 'performance-management',
            title: 'Performance Management',
            description: 'Develop effective performance management systems. Learn to set goals, conduct reviews, provide feedback, and drive employee performance.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,900+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Administration and HR Management',
        },
        {
            id: 26,
            slug: 'strategic-succession-planning',
            title: 'Strategic Succession Planning',
            description: 'Build robust succession planning strategies to ensure organizational continuity. Learn to identify and develop future leaders.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '1,200+',
            rating: 4.7,
            price: '$1,499',
            originalPrice: '$1,899',
            level: 'Advanced',
            category: 'Administration and HR Management',
        },
        {
            id: 27,
            slug: 'microsoft-excel-fundamentals',
            title: 'Microsoft Excel Fundamentals',
            description: 'Master Excel basics including formulas, functions, data entry, formatting, and creating professional spreadsheets for business use.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '2,800+',
            rating: 4.8,
            price: '$699',
            originalPrice: '$999',
            level: 'Beginner',
            category: 'Microsoft Office',
        },
        {
            id: 28,
            slug: 'advanced-excel-formulas-and-functions',
            title: 'Advanced Excel Formulas and Functions',
            description: 'Master complex Excel formulas, array functions, data analysis tools, and advanced calculations to boost productivity and efficiency.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '2,100+',
            rating: 4.9,
            price: '$899',
            originalPrice: '$1,199',
            level: 'Intermediate',
            category: 'Microsoft Office',
        },
        {
            id: 29,
            slug: 'excel-pivot-tables-and-data-analysis',
            title: 'Excel Pivot Tables and Data Analysis',
            description: 'Learn to create powerful pivot tables, analyze large datasets, and generate insightful reports for informed business decisions.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '1,900+',
            rating: 4.8,
            price: '$799',
            originalPrice: '$1,099',
            level: 'Intermediate',
            category: 'Microsoft Office',
        },
        {
            id: 30,
            slug: 'microsoft-word-for-business',
            title: 'Microsoft Word for Business',
            description: 'Create professional documents, reports, and business communications. Master formatting, styles, templates, and collaboration features.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '2,200+',
            rating: 4.7,
            price: '$649',
            originalPrice: '$899',
            level: 'Beginner',
            category: 'Microsoft Office',
        },
        {
            id: 31,
            slug: 'microsoft-powerpoint-presentations',
            title: 'Microsoft PowerPoint Presentations',
            description: 'Design engaging and professional presentations. Master slide design, animations, transitions, and delivery techniques for impactful presentations.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '2,400+',
            rating: 4.8,
            price: '$699',
            originalPrice: '$949',
            level: 'All Levels',
            category: 'Microsoft Office',
        },
        {
            id: 32,
            slug: 'microsoft-outlook-productivity',
            title: 'Microsoft Outlook Productivity',
            description: 'Master email management, calendar scheduling, task organization, and Outlook features to boost your professional productivity.',
            image: '/images/courses/placeholder.jpg',
            duration: '3 weeks',
            students: '1,800+',
            rating: 4.6,
            price: '$599',
            originalPrice: '$799',
            level: 'Beginner',
            category: 'Microsoft Office',
        },
        {
            id: 33,
            slug: 'microsoft-access-database-management',
            title: 'Microsoft Access Database Management',
            description: 'Build and manage databases effectively. Learn to create tables, queries, forms, reports, and automate data management tasks.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,500+',
            rating: 4.7,
            price: '$899',
            originalPrice: '$1,199',
            level: 'Intermediate',
            category: 'Microsoft Office',
        },
        {
            id: 34,
            slug: 'office-365-collaboration',
            title: 'Office 365 Collaboration',
            description: 'Master Office 365 tools including Teams, SharePoint, OneDrive, and collaborative features for modern workplace productivity.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '2,000+',
            rating: 4.8,
            price: '$999',
            originalPrice: '$1,299',
            level: 'Intermediate',
            category: 'Microsoft Office',
        },
        {
            id: 35,
            slug: 'excel-macros-and-automation',
            title: 'Excel Macros and Automation',
            description: 'Automate repetitive Excel tasks using VBA and macros. Save time and increase efficiency with advanced automation techniques.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,600+',
            rating: 4.9,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Advanced',
            category: 'Microsoft Office',
        },
        {
            id: 36,
            slug: 'microsoft-office-suite-complete',
            title: 'Microsoft Office Suite Complete',
            description: 'Comprehensive training covering Excel, Word, PowerPoint, Outlook, and Access. Master the complete Office suite for maximum productivity.',
            image: '/images/courses/placeholder.jpg',
            duration: '8 weeks',
            students: '3,200+',
            rating: 4.9,
            price: '$1,299',
            originalPrice: '$1,699',
            level: 'All Levels',
            category: 'Microsoft Office',
        },
        {
            id: 37,
            slug: 'excel-financial-modeling',
            title: 'Excel Financial Modeling',
            description: 'Build professional financial models, perform business analysis, and create forecasting models using advanced Excel techniques.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,700+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Advanced',
            category: 'Microsoft Office',
        },
        {
            id: 38,
            slug: 'microsoft-teams-for-business',
            title: 'Microsoft Teams for Business',
            description: 'Master Microsoft Teams for effective team collaboration, virtual meetings, file sharing, and integrated business communication.',
            image: '/images/courses/placeholder.jpg',
            duration: '3 weeks',
            students: '2,100+',
            rating: 4.7,
            price: '$799',
            originalPrice: '$1,099',
            level: 'All Levels',
            category: 'Microsoft Office',
        },
        {
            id: 39,
            slug: 'building-powerful-leadership-effective-management-skills',
            title: 'Building Powerful Leadership & Effective Management Skills',
            description: 'Develop core leadership and management competencies to inspire teams, drive results, and achieve organizational excellence.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '2,500+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 40,
            slug: 'strategic-decision-making-problem-solving-skills',
            title: 'Strategic Decision Making Skills & Problem Solving Skills',
            description: 'Master analytical thinking and decision-making frameworks to solve complex business problems and make strategic choices.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '2,100+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 42,
            slug: 'supervisory-management-skills',
            title: 'Supervisory Management Skills',
            description: 'Build essential supervisory skills to lead teams, manage performance, delegate effectively, and drive productivity.',
            image: '/images/courses/supervisory.jpg',
            duration: '5 weeks',
            students: '2,200+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'All Levels',
            category: 'Management and Leadership',
        },
        {
            id: 43,
            slug: 'change-management-conflict-resolution',
            title: 'Change Management & Conflict Resolution',
            description: 'Master strategies for managing organizational change and resolving workplace conflicts to maintain team harmony and productivity.',
            image: '/images/courses/conclict.jpg',
            duration: '5 weeks',
            students: '1,800+',
            rating: 4.7,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 44,
            slug: 'introduction-to-project-management',
            title: 'Introduction to Project Management',
            description: 'Learn fundamental project management principles, methodologies, and tools to successfully deliver projects on time and within budget.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '2,400+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Beginner',
            category: 'Management and Leadership',
        },
        {
            id: 45,
            slug: 'character-competency-in-leadership',
            title: 'Character & Competency in Leadership',
            description: 'Develop leadership character and core competencies to build trust, credibility, and influence as an effective leader.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '1,700+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 46,
            slug: 'emotional-intelligence-for-leaders',
            title: 'Emotional Intelligence for Leaders',
            description: 'Enhance your emotional intelligence to better understand, connect with, and motivate your team for improved leadership effectiveness.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '2,000+',
            rating: 4.8,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 47,
            slug: 'logistics-management',
            title: 'Logistics Management',
            description: 'Master logistics and supply chain operations to optimize inventory, distribution, and transportation for business efficiency.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,600+',
            rating: 4.7,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 48,
            slug: 'risk-management',
            title: 'Risk Management',
            description: 'Learn to identify, assess, and mitigate business risks to protect your organization and ensure sustainable growth.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '1,900+',
            rating: 4.8,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
        {
            id: 49,
            slug: 'supply-chain-management-logistics-management',
            title: 'Supply Chain Management & Logistics Management',
            description: 'Comprehensive training in supply chain optimization, logistics coordination, and end-to-end operations management.',
            image: '/images/courses/placeholder.jpg',
            duration: '7 weeks',
            students: '1,800+',
            rating: 4.9,
            price: '$1,499',
            originalPrice: '$1,899',
            level: 'Advanced',
            category: 'Management and Leadership',
        },
        {
            id: 50,
            slug: 'english-language-for-arabic-speakers',
            title: 'English Language for Arabic Speakers',
            description: 'Comprehensive English language training designed specifically for Arabic speakers. Improve your grammar, vocabulary, pronunciation, and communication skills.',
            image: '/images/courses/placeholder.jpg',
            duration: '10 weeks',
            students: '2,600+',
            rating: 4.8,
            price: '$999',
            originalPrice: '$1,299',
            level: 'All Levels',
            category: 'Languages',
        },
        {
            id: 51,
            slug: 'ielts-review-and-preparation',
            title: 'IELTS Review and Preparation',
            description: 'Comprehensive IELTS exam preparation covering all four skills: Listening, Reading, Writing, and Speaking. Boost your score with proven strategies and practice.',
            image: '/images/courses/placeholder.jpg',
            duration: '8 weeks',
            students: '3,100+',
            rating: 4.9,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Languages',
        },
        {
            id: 52,
            slug: 'assertiveness-skills-dealing-difficult-situation',
            title: 'Assertiveness Skills & Dealing with Difficult Situation',
            description: 'Develop assertiveness and confidence to handle challenging situations effectively. Learn to communicate boundaries and manage conflicts professionally.',
            image: '/images/courses/assertiveness.jpg',
            duration: '4 weeks',
            students: '1,800+',
            rating: 4.7,
            price: '$899',
            originalPrice: '$1,199',
            level: 'All Levels',
            category: 'Personality Development',
        },
        {
            id: 53,
            slug: 'time-stress-management',
            title: 'Time and Stress Management',
            description: 'Master techniques to manage time effectively, reduce stress, improve productivity, and achieve better work-life balance.',
            image: '/images/courses/time and management.jpg',
            duration: '5 weeks',
            students: '2,400+',
            rating: 4.8,
            price: '$999',
            originalPrice: '$1,299',
            level: 'All Levels',
            category: 'Personality Development',
        },
        {
            id: 54,
            slug: 'effective-communication-developing-interpersonal-skills',
            title: 'Effective Communication & Developing Interpersonal Skills',
            description: 'Enhance your communication abilities and build strong interpersonal relationships. Master verbal, non-verbal, and written communication skills.',
            image: '/images/courses/communication.jpg',
            duration: '6 weeks',
            students: '2,600+',
            rating: 4.9,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'All Levels',
            category: 'Personality Development',
        },
        {
            id: 55,
            slug: 'emotional-intelligence-business-workplace',
            title: 'Emotional Intelligence in Business & Workplace',
            description: 'Develop emotional intelligence skills to navigate workplace dynamics, build relationships, and enhance professional performance.',
            image: '/images/courses/emotional.jpg',
            duration: '5 weeks',
            students: '2,100+',
            rating: 4.8,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Personality Development',
        },
        {
            id: 56,
            slug: 'change-management-conflict-resolution-personality',
            title: 'Change Management & Conflict Resolution',
            description: 'Learn to manage organizational change and resolve conflicts constructively. Build resilience and adaptability in professional settings.',
            image: '/images/courses/conclict.jpg',
            duration: '5 weeks',
            students: '1,900+',
            rating: 4.7,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Personality Development',
        },
        {
            id: 57,
            slug: 'analytical-skills',
            title: 'Analytical Skills',
            description: 'Develop critical thinking and analytical abilities to solve problems, make data-driven decisions, and improve business outcomes.',
            image: '/images/courses/analytical.jpg',
            duration: '4 weeks',
            students: '1,700+',
            rating: 4.6,
            price: '$899',
            originalPrice: '$1,199',
            level: 'Intermediate',
            category: 'Personality Development',
        },
        {
            id: 58,
            slug: 'effective-communication-etiquette',
            title: 'Effective Communication and Etiquette',
            description: 'Master professional communication and business etiquette. Learn proper conduct, networking skills, and professional presence.',
            image: '/images/courses/communication.jpg',
            duration: '4 weeks',
            students: '2,200+',
            rating: 4.8,
            price: '$949',
            originalPrice: '$1,249',
            level: 'All Levels',
            category: 'Personality Development',
        },
        {
            id: 59,
            slug: 'financial-awareness-non-financial-employees',
            title: 'Financial Awareness for Non-Financial Employees',
            description: 'Understand financial statements, budgets, and key financial metrics without a finance background. Make informed business decisions.',
            image: '/images/courses/businessman-touching-tip-bar-chart.jpg',
            duration: '4 weeks',
            students: '2,500+',
            rating: 4.7,
            price: '$999',
            originalPrice: '$1,299',
            level: 'Beginner',
            category: 'Finance',
        },
        {
            id: 60,
            slug: 'efficient-budgeting-effective-cost-control',
            title: 'Efficient Budgeting & Effective Cost Control',
            description: 'Master budgeting techniques and cost control strategies to optimize financial performance and improve profitability.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '2,200+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Finance',
        },
        {
            id: 61,
            slug: 'incoterms-2020',
            title: 'Incoterms 2020',
            description: 'Comprehensive training on Incoterms 2020 rules for international trade. Understand obligations, costs, and risks in global commerce.',
            image: '/images/courses/placeholder.jpg',
            duration: '3 weeks',
            students: '1,600+',
            rating: 4.8,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Finance',
        },
        {
            id: 62,
            slug: 'letters-of-credit',
            title: 'Letters of Credit',
            description: 'Master letters of credit, international payment methods, and trade finance instruments for secure global transactions.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '1,800+',
            rating: 4.7,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Finance',
        },
        {
            id: 63,
            slug: 'contract-preparation-bid-evaluation',
            title: 'Contract Preparation & Bid Evaluation',
            description: 'Learn to draft effective contracts, evaluate bids, and manage procurement processes to protect your organization\'s interests.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '1,700+',
            rating: 4.8,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Finance',
        },
        {
            id: 64,
            slug: 'hedging-training',
            title: 'Hedging Training',
            description: 'Understand hedging strategies to manage financial risks, protect against currency fluctuations, and stabilize cash flows.',
            image: '/images/courses/placeholder.jpg',
            duration: '4 weeks',
            students: '1,400+',
            rating: 4.9,
            price: '$1,499',
            originalPrice: '$1,899',
            level: 'Advanced',
            category: 'Finance',
        },
        {
            id: 65,
            slug: 'international-trade-finance',
            title: 'International Trade Finance',
            description: 'Comprehensive training in international trade finance, payment methods, documentation, and risk management for global business.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '1,900+',
            rating: 4.8,
            price: '$1,599',
            originalPrice: '$1,999',
            level: 'Intermediate',
            category: 'Finance',
        },
        {
            id: 66,
            slug: 'new-uae-corporate-tax',
            title: 'New UAE Corporate Tax',
            description: 'Stay compliant with the new UAE corporate tax regulations. Understand tax obligations, filing requirements, and tax planning strategies.',
            image: '/images/courses/placeholder.jpg',
            duration: '3 weeks',
            students: '2,300+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'All Levels',
            category: 'Finance',
        },
        {
            id: 67,
            slug: 'essentials-of-digital-marketing',
            title: 'Essentials of Digital Marketing',
            description: 'Master the fundamentals of digital marketing including SEO, SEM, email marketing, and online advertising to drive business growth.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '3,200+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Beginner',
            category: 'Marketing',
        },
        {
            id: 68,
            slug: 'social-media-marketing',
            title: 'Social Media Marketing',
            description: 'Learn to create engaging social media campaigns, build brand presence, and leverage platforms like Facebook, Instagram, LinkedIn, and Twitter.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '2,800+',
            rating: 4.9,
            price: '$999',
            originalPrice: '$1,299',
            level: 'All Levels',
            category: 'Marketing',
        },
        {
            id: 69,
            slug: 'content-marketing-online-presence',
            title: 'Content Marketing and Online Presence',
            description: 'Develop compelling content strategies, build a strong online presence, and engage audiences through blogs, videos, and multimedia content.',
            image: '/images/courses/placeholder.jpg',
            duration: '6 weeks',
            students: '2,500+',
            rating: 4.7,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Marketing',
        },
        {
            id: 70,
            slug: 'market-intelligence-research',
            title: 'Market Intelligence & Research',
            description: 'Learn to conduct market research, analyze consumer behavior, gather competitive intelligence, and make data-driven marketing decisions.',
            image: '/images/courses/placeholder.jpg',
            duration: '5 weeks',
            students: '2,100+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Marketing',
        },
        {
            id: 71,
            slug: 'strategic-marketing',
            title: 'Strategic Marketing',
            description: 'Develop comprehensive marketing strategies, plan campaigns, set objectives, and align marketing efforts with business goals for long-term success.',
            image: '/images/courses/placeholder.jpg',
            duration: '7 weeks',
            students: '2,400+',
            rating: 4.9,
            price: '$1,499',
            originalPrice: '$1,899',
            level: 'Advanced',
            category: 'Marketing',
        },
        {
            id: 72,
            slug: 'advanced-selling-skills',
            title: 'Advanced Selling Skills',
            description: 'Master advanced sales techniques, closing strategies, objection handling, and relationship building to achieve superior sales performance.',
            image: '/images/courses/young-successful-man-white-shirt-presenting-new-financial-project.jpg',
            duration: '6 weeks',
            students: '2,600+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Advanced',
            category: 'Sales',
        },
        {
            id: 73,
            slug: 'advanced-negotiation-skills',
            title: 'Advanced Negotiation Skills',
            description: 'Develop sophisticated negotiation strategies, master win-win approaches, and handle complex negotiations to achieve optimal outcomes.',
            image: '/images/courses/negotioon.jpg',
            duration: '5 weeks',
            students: '2,200+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Advanced',
            category: 'Sales',
        },
        {
            id: 74,
            slug: 'managing-maximizing-key-accounts',
            title: 'Managing & Maximizing Key Accounts',
            description: 'Learn to identify, develop, and manage key accounts to maximize revenue, build long-term relationships, and ensure customer retention.',
            image: '/images/courses/keyaccounts.jpg',
            duration: '6 weeks',
            students: '2,000+',
            rating: 4.7,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Sales',
        },
        {
            id: 75,
            slug: 'effective-public-speaking-presentation-skills',
            title: 'Effective Public Speaking and Presentation Skills',
            description: 'Master the art of public speaking and professional presentations. Build confidence, engage audiences, and deliver impactful messages.',
            image: '/images/courses/publicspeaking.jpg',
            duration: '4 weeks',
            students: '2,800+',
            rating: 4.8,
            price: '$999',
            originalPrice: '$1,299',
            level: 'All Levels',
            category: 'Sales',
        },
        {
            id: 76,
            slug: 'sales-foundation-non-sales-people',
            title: 'Sales Foundation for Non Sales People',
            description: 'Learn fundamental sales principles and techniques for professionals who need to influence, persuade, and sell ideas in their roles.',
            image: '/images/courses/salesfoundation.jpg',
            duration: '4 weeks',
            students: '2,400+',
            rating: 4.7,
            price: '$899',
            originalPrice: '$1,199',
            level: 'Beginner',
            category: 'Sales',
        },
        {
            id: 77,
            slug: 'customer-service-excellence',
            title: 'Customer Service Excellence',
            description: 'Deliver exceptional customer service experiences. Master communication, problem-solving, and relationship management to exceed customer expectations.',
            image: '/images/courses/sales.jpg',
            duration: '5 weeks',
            students: '3,100+',
            rating: 4.9,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'All Levels',
            category: 'Sales',
        },
        {
            id: 78,
            slug: 'art-of-negotiation',
            title: 'The Art of Negotiation',
            description: 'Master the art and science of negotiation. Learn proven techniques, strategies, and psychology to achieve successful outcomes in any negotiation.',
            image: '/images/courses/negotioon.jpg',
            duration: '5 weeks',
            students: '2,500+',
            rating: 4.8,
            price: '$1,199',
            originalPrice: '$1,499',
            level: 'Intermediate',
            category: 'Sales',
        },
        {
            id: 79,
            slug: 'effective-telesales-skills-techniques',
            title: 'Effective TeleSales Skills & Techniques',
            description: 'Master telephone sales techniques, build rapport over the phone, handle objections, and close deals remotely with proven telesales strategies.',
            image: '/images/courses/sales.jpg',
            duration: '4 weeks',
            students: '2,300+',
            rating: 4.7,
            price: '$999',
            originalPrice: '$1,299',
            level: 'All Levels',
            category: 'Sales',
        },
        {
            id: 80,
            slug: 'strategic-effective-sales-management',
            title: 'Strategic & Effective Sales Management',
            description: 'Lead high-performing sales teams, set targets, manage pipelines, and drive revenue growth through effective sales management practices.',
            image: '/images/courses/sales.jpg',
            duration: '7 weeks',
            students: '2,100+',
            rating: 4.9,
            price: '$1,599',
            originalPrice: '$1,999',
            level: 'Advanced',
            category: 'Sales',
        },
        {
            id: 81,
            slug: 'customer-relationship-management',
            title: 'Customer Relationship Management',
            description: 'Build and maintain strong customer relationships. Learn CRM strategies, tools, and best practices to increase customer loyalty and lifetime value.',
            image: '/images/courses/sales.jpg',
            duration: '5 weeks',
            students: '2,700+',
            rating: 4.8,
            price: '$1,299',
            originalPrice: '$1,599',
            level: 'Intermediate',
            category: 'Sales',
        },
        {
            id: 82,
            slug: 'effective-negotiation-skills',
            title: 'Effective Negotiation Skills',
            description: 'Develop practical negotiation skills to achieve win-win outcomes. Master preparation, communication, and closing techniques for successful negotiations.',
            image: '/images/courses/negotioon.jpg',
            duration: '4 weeks',
            students: '2,600+',
            rating: 4.7,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Sales',
        },
        {
            id: 83,
            slug: 'selling-skills-emotional-intelligence',
            title: 'Selling Skills by Emotional Intelligence',
            description: 'Leverage emotional intelligence to connect with customers, understand their needs, and build authentic relationships that drive sales success.',
            image: '/images/courses/sales.jpg',
            duration: '6 weeks',
            students: '2,200+',
            rating: 4.9,
            price: '$1,399',
            originalPrice: '$1,699',
            level: 'Intermediate',
            category: 'Sales',
        },
        {
            id: 84,
            slug: 'effective-planning-organizing-skills',
            title: 'Effective Planning and Organizing Skills',
            description: 'Learn to plan strategically, organize resources efficiently, and execute projects successfully to achieve business objectives.',
            image: '/images/courses/managemnt.jpg',
            duration: '4 weeks',
            students: '1,900+',
            rating: 4.7,
            price: '$1,099',
            originalPrice: '$1,399',
            level: 'Intermediate',
            category: 'Management and Leadership',
        },
    ];

    const categories = [
        'All Courses',
        'Sales',
        'Personality Development',
        'Management and Leadership',
        'Marketing',
        'Finance',
        'Languages',
        'Microsoft Office',
        'Administration and HR Management',
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
                                            className={`w-full h-full object-cover ${course.image === '/images/courses/uae.jpg' ? 'object-top' : ''} group-hover:scale-110 transition-transform duration-300`}
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
                                            className={`w-full h-full object-cover ${course.image === '/images/courses/uae.jpg' ? 'object-top' : ''} group-hover:scale-110 transition-transform duration-300`}
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

