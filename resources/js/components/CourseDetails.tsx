import { Clock, Users, Star, ArrowUpRight, Play, Award, BookOpen, Target } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

export default function CourseDetails() {
    const [selectedCategory, setSelectedCategory] = useState('All Courses');
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const courses = [
        {
            id: 5,
            slug: "train-the-trainer",
            title: "Train The Trainer",
            description: "Master the art of effective training delivery. Learn to design, develop, and deliver engaging training programs that maximize learner engagement and retention.",
            duration: "5 weeks",
            students: "1,200+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/card1.jpg",
        },
        {
            id: 6,
            slug: "competency-based-interviewing-skill",
            title: "Competency-Based Interviewing Skill",
            description: "Learn to conduct effective competency-based interviews that identify the right candidates. Master interview techniques and assessment methods.",
            duration: "4 weeks",
            students: "950+",
            rating: 4.7,
            price: "$999",
            originalPrice: "$1,299",
            level: "Beginner",
            format: "Online",
            category: "Administration and HR Management",
            image: "/images/courses/card2.jpg",
        },
        {
            id: 7,
            slug: "effective-office-management-skills",
            title: "Effective Office Management Skills",
            description: "Develop essential office management skills including organization, time management, communication, and administrative excellence.",
            duration: "6 weeks",
            students: "1,500+",
            rating: 4.6,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "All Levels",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/card3.jpg",
        },
        {
            id: 8,
            slug: "human-resources-management-skills",
            title: "Human Resources Management Skills",
            description: "Comprehensive HR management training covering recruitment, employee relations, performance management, and strategic HR planning.",
            duration: "8 weeks",
            students: "2,100+",
            rating: 4.9,
            price: "$1,499",
            originalPrice: "$1,899",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/hr1.jpg",
        },
        {
            id: 9,
            slug: "pa-professional-administrative-skills",
            title: "PA & Professional Administrative Skills",
            description: "Elevate your professional administrative capabilities. Master executive support, scheduling, communication, and advanced administrative techniques.",
            duration: "6 weeks",
            students: "1,800+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/admin.jpg",
        },
        {
            id: 10,
            slug: "writing-for-business-email-etiquette",
            title: "Writing for Business & Email Etiquette",
            description: "Master professional business writing and email communication. Learn to write clear, concise, and impactful business communications.",
            duration: "4 weeks",
            students: "2,300+",
            rating: 4.7,
            price: "$899",
            originalPrice: "$1,199",
            level: "Beginner",
            format: "Online",
            category: "Administration and HR Management",
            image: "/images/courses/email.jpg",
        },
        {
            id: 11,
            slug: "new-uae-federal-labour-law-course",
            title: "New UAE Federal Labour Law Course",
            description: "Stay updated with the latest UAE Federal Labour Law. Understand key provisions, employee rights, employer obligations, and compliance requirements.",
            duration: "3 weeks",
            students: "1,600+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "All Levels",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/uae.jpg",
        },
        {
            id: 12,
            slug: "writing-policies-procedure",
            title: "Writing Policies & Procedure",
            description: "Learn to write clear, comprehensive policies and procedures that ensure organizational compliance and operational efficiency.",
            duration: "5 weeks",
            students: "1,100+",
            rating: 4.6,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 13,
            slug: "new-emiratization-law",
            title: "New Emiratization Law",
            description: "Understand the latest Emiratization requirements and regulations. Learn how to implement effective Emiratization strategies in your organization.",
            duration: "3 weeks",
            students: "1,400+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "All Levels",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 14,
            slug: "modern-recruitment-trends",
            title: "Modern Recruitment Trends",
            description: "Explore cutting-edge recruitment strategies and trends. Learn about digital recruitment, AI tools, and modern hiring practices.",
            duration: "4 weeks",
            students: "1,700+",
            rating: 4.7,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 15,
            slug: "hiring-for-attitude-hiring-right-people",
            title: "Hiring for Attitude - Hiring the Right People",
            description: "Master the art of hiring for attitude and cultural fit. Learn assessment techniques to identify candidates who align with your organization's values.",
            duration: "4 weeks",
            students: "1,300+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 16,
            slug: "performance-management",
            title: "Performance Management",
            description: "Develop effective performance management systems. Learn to set goals, conduct reviews, provide feedback, and drive employee performance.",
            duration: "6 weeks",
            students: "1,900+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 17,
            slug: "strategic-succession-planning",
            title: "Strategic Succession Planning",
            description: "Build robust succession planning strategies to ensure organizational continuity. Learn to identify and develop future leaders.",
            duration: "5 weeks",
            students: "1,200+",
            rating: 4.7,
            price: "$1,499",
            originalPrice: "$1,899",
            level: "Advanced",
            format: "Hybrid",
            category: "Administration and HR Management",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 18,
            slug: "microsoft-excel-fundamentals",
            title: "Microsoft Excel Fundamentals",
            description: "Master Excel basics including formulas, functions, data entry, formatting, and creating professional spreadsheets for business use.",
            duration: "4 weeks",
            students: "2,800+",
            rating: 4.8,
            price: "$699",
            originalPrice: "$999",
            level: "Beginner",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 19,
            slug: "advanced-excel-formulas-and-functions",
            title: "Advanced Excel Formulas and Functions",
            description: "Master complex Excel formulas, array functions, data analysis tools, and advanced calculations to boost productivity and efficiency.",
            duration: "5 weeks",
            students: "2,100+",
            rating: 4.9,
            price: "$899",
            originalPrice: "$1,199",
            level: "Intermediate",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 20,
            slug: "excel-pivot-tables-and-data-analysis",
            title: "Excel Pivot Tables and Data Analysis",
            description: "Learn to create powerful pivot tables, analyze large datasets, and generate insightful reports for informed business decisions.",
            duration: "4 weeks",
            students: "1,900+",
            rating: 4.8,
            price: "$799",
            originalPrice: "$1,099",
            level: "Intermediate",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 21,
            slug: "microsoft-word-for-business",
            title: "Microsoft Word for Business",
            description: "Create professional documents, reports, and business communications. Master formatting, styles, templates, and collaboration features.",
            duration: "4 weeks",
            students: "2,200+",
            rating: 4.7,
            price: "$649",
            originalPrice: "$899",
            level: "Beginner",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 22,
            slug: "microsoft-powerpoint-presentations",
            title: "Microsoft PowerPoint Presentations",
            description: "Design engaging and professional presentations. Master slide design, animations, transitions, and delivery techniques for impactful presentations.",
            duration: "4 weeks",
            students: "2,400+",
            rating: 4.8,
            price: "$699",
            originalPrice: "$949",
            level: "All Levels",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 23,
            slug: "microsoft-outlook-productivity",
            title: "Microsoft Outlook Productivity",
            description: "Master email management, calendar scheduling, task organization, and Outlook features to boost your professional productivity.",
            duration: "3 weeks",
            students: "1,800+",
            rating: 4.6,
            price: "$599",
            originalPrice: "$799",
            level: "Beginner",
            format: "Online",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 24,
            slug: "microsoft-access-database-management",
            title: "Microsoft Access Database Management",
            description: "Build and manage databases effectively. Learn to create tables, queries, forms, reports, and automate data management tasks.",
            duration: "6 weeks",
            students: "1,500+",
            rating: 4.7,
            price: "$899",
            originalPrice: "$1,199",
            level: "Intermediate",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 25,
            slug: "office-365-collaboration",
            title: "Office 365 Collaboration",
            description: "Master Office 365 tools including Teams, SharePoint, OneDrive, and collaborative features for modern workplace productivity.",
            duration: "5 weeks",
            students: "2,000+",
            rating: 4.8,
            price: "$999",
            originalPrice: "$1,299",
            level: "Intermediate",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 26,
            slug: "excel-macros-and-automation",
            title: "Excel Macros and Automation",
            description: "Automate repetitive Excel tasks using VBA and macros. Save time and increase efficiency with advanced automation techniques.",
            duration: "6 weeks",
            students: "1,600+",
            rating: 4.9,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Advanced",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 27,
            slug: "microsoft-office-suite-complete",
            title: "Microsoft Office Suite Complete",
            description: "Comprehensive training covering Excel, Word, PowerPoint, Outlook, and Access. Master the complete Office suite for maximum productivity.",
            duration: "8 weeks",
            students: "3,200+",
            rating: 4.9,
            price: "$1,299",
            originalPrice: "$1,699",
            level: "All Levels",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 28,
            slug: "excel-financial-modeling",
            title: "Excel Financial Modeling",
            description: "Build professional financial models, perform business analysis, and create forecasting models using advanced Excel techniques.",
            duration: "6 weeks",
            students: "1,700+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Advanced",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 29,
            slug: "microsoft-teams-for-business",
            title: "Microsoft Teams for Business",
            description: "Master Microsoft Teams for effective team collaboration, virtual meetings, file sharing, and integrated business communication.",
            duration: "3 weeks",
            students: "2,100+",
            rating: 4.7,
            price: "$799",
            originalPrice: "$1,099",
            level: "All Levels",
            format: "Hybrid",
            category: "Microsoft Office",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 30,
            slug: "building-powerful-leadership-effective-management-skills",
            title: "Building Powerful Leadership & Effective Management Skills",
            description: "Develop core leadership and management competencies to inspire teams, drive results, and achieve organizational excellence.",
            duration: "6 weeks",
            students: "2,500+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 31,
            slug: "strategic-decision-making-problem-solving-skills",
            title: "Strategic Decision Making Skills & Problem Solving Skills",
            description: "Master analytical thinking and decision-making frameworks to solve complex business problems and make strategic choices.",
            duration: "5 weeks",
            students: "2,100+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 32,
            slug: "effective-planning-organizing-skills",
            title: "Effective Planning and Organizing Skills",
            description: "Learn to plan strategically, organize resources efficiently, and execute projects successfully to achieve business objectives.",
            duration: "4 weeks",
            students: "1,900+",
            rating: 4.7,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/managemnt.jpg",
        },
        {
            id: 33,
            slug: "supervisory-management-skills",
            title: "Supervisory Management Skills",
            description: "Build essential supervisory skills to lead teams, manage performance, delegate effectively, and drive productivity.",
            duration: "5 weeks",
            students: "2,200+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "All Levels",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/supervisory.jpg",
        },
        {
            id: 34,
            slug: "change-management-conflict-resolution",
            title: "Change Management & Conflict Resolution",
            description: "Master strategies for managing organizational change and resolving workplace conflicts to maintain team harmony and productivity.",
            duration: "5 weeks",
            students: "1,800+",
            rating: 4.7,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/conclict.jpg",
        },
        {
            id: 35,
            slug: "introduction-to-project-management",
            title: "Introduction to Project Management",
            description: "Learn fundamental project management principles, methodologies, and tools to successfully deliver projects on time and within budget.",
            duration: "6 weeks",
            students: "2,400+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Beginner",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 36,
            slug: "character-competency-in-leadership",
            title: "Character & Competency in Leadership",
            description: "Develop leadership character and core competencies to build trust, credibility, and influence as an effective leader.",
            duration: "5 weeks",
            students: "1,700+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 37,
            slug: "emotional-intelligence-for-leaders",
            title: "Emotional Intelligence for Leaders",
            description: "Enhance your emotional intelligence to better understand, connect with, and motivate your team for improved leadership effectiveness.",
            duration: "4 weeks",
            students: "2,000+",
            rating: 4.8,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 38,
            slug: "logistics-management",
            title: "Logistics Management",
            description: "Master logistics and supply chain operations to optimize inventory, distribution, and transportation for business efficiency.",
            duration: "6 weeks",
            students: "1,600+",
            rating: 4.7,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 39,
            slug: "risk-management",
            title: "Risk Management",
            description: "Learn to identify, assess, and mitigate business risks to protect your organization and ensure sustainable growth.",
            duration: "5 weeks",
            students: "1,900+",
            rating: 4.8,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 40,
            slug: "supply-chain-management-logistics-management",
            title: "Supply Chain Management & Logistics Management",
            description: "Comprehensive training in supply chain optimization, logistics coordination, and end-to-end operations management.",
            duration: "7 weeks",
            students: "1,800+",
            rating: 4.9,
            price: "$1,499",
            originalPrice: "$1,899",
            level: "Advanced",
            format: "Hybrid",
            category: "Management and Leadership",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 41,
            slug: "english-language-for-arabic-speakers",
            title: "English Language for Arabic Speakers",
            description: "Comprehensive English language training designed specifically for Arabic speakers. Improve your grammar, vocabulary, pronunciation, and communication skills.",
            duration: "10 weeks",
            students: "2,600+",
            rating: 4.8,
            price: "$999",
            originalPrice: "$1,299",
            level: "All Levels",
            format: "Hybrid",
            category: "Languages",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 42,
            slug: "ielts-review-and-preparation",
            title: "IELTS Review and Preparation",
            description: "Comprehensive IELTS exam preparation covering all four skills: Listening, Reading, Writing, and Speaking. Boost your score with proven strategies and practice.",
            duration: "8 weeks",
            students: "3,100+",
            rating: 4.9,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Languages",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 43,
            slug: "assertiveness-skills-dealing-difficult-situation",
            title: "Assertiveness Skills & Dealing with Difficult Situation",
            description: "Develop assertiveness and confidence to handle challenging situations effectively. Learn to communicate boundaries and manage conflicts professionally.",
            duration: "4 weeks",
            students: "1,800+",
            rating: 4.7,
            price: "$899",
            originalPrice: "$1,199",
            level: "All Levels",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/assertiveness.jpg",
        },
        {
            id: 44,
            slug: "time-stress-management",
            title: "Time and Stress Management",
            description: "Master techniques to manage time effectively, reduce stress, improve productivity, and achieve better work-life balance.",
            duration: "5 weeks",
            students: "2,400+",
            rating: 4.8,
            price: "$999",
            originalPrice: "$1,299",
            level: "All Levels",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/time and management.jpg",
        },
        {
            id: 45,
            slug: "effective-communication-developing-interpersonal-skills",
            title: "Effective Communication & Developing Interpersonal Skills",
            description: "Enhance your communication abilities and build strong interpersonal relationships. Master verbal, non-verbal, and written communication skills.",
            duration: "6 weeks",
            students: "2,600+",
            rating: 4.9,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "All Levels",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/communication.jpg",
        },
        {
            id: 46,
            slug: "emotional-intelligence-business-workplace",
            title: "Emotional Intelligence in Business & Workplace",
            description: "Develop emotional intelligence skills to navigate workplace dynamics, build relationships, and enhance professional performance.",
            duration: "5 weeks",
            students: "2,100+",
            rating: 4.8,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/emotional.jpg",
        },
        {
            id: 47,
            slug: "change-management-conflict-resolution-personality",
            title: "Change Management & Conflict Resolution",
            description: "Learn to manage organizational change and resolve conflicts constructively. Build resilience and adaptability in professional settings.",
            duration: "5 weeks",
            students: "1,900+",
            rating: 4.7,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/conclict.jpg",
        },
        {
            id: 48,
            slug: "analytical-skills",
            title: "Analytical Skills",
            description: "Develop critical thinking and analytical abilities to solve problems, make data-driven decisions, and improve business outcomes.",
            duration: "4 weeks",
            students: "1,700+",
            rating: 4.6,
            price: "$899",
            originalPrice: "$1,199",
            level: "Intermediate",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/analytical.jpg",
        },
        {
            id: 49,
            slug: "effective-communication-etiquette",
            title: "Effective Communication and Etiquette",
            description: "Master professional communication and business etiquette. Learn proper conduct, networking skills, and professional presence.",
            duration: "4 weeks",
            students: "2,200+",
            rating: 4.8,
            price: "$949",
            originalPrice: "$1,249",
            level: "All Levels",
            format: "Hybrid",
            category: "Personality Development",
            image: "/images/courses/communication.jpg",
        },
        {
            id: 50,
            slug: "financial-awareness-non-financial-employees",
            title: "Financial Awareness for Non-Financial Employees",
            description: "Understand financial statements, budgets, and key financial metrics without a finance background. Make informed business decisions.",
            duration: "4 weeks",
            students: "2,500+",
            rating: 4.7,
            price: "$999",
            originalPrice: "$1,299",
            level: "Beginner",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/businessman-touching-tip-bar-chart.jpg",
        },
        {
            id: 51,
            slug: "efficient-budgeting-effective-cost-control",
            title: "Efficient Budgeting & Effective Cost Control",
            description: "Master budgeting techniques and cost control strategies to optimize financial performance and improve profitability.",
            duration: "6 weeks",
            students: "2,200+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 52,
            slug: "incoterms-2020",
            title: "Incoterms 2020",
            description: "Comprehensive training on Incoterms 2020 rules for international trade. Understand obligations, costs, and risks in global commerce.",
            duration: "3 weeks",
            students: "1,600+",
            rating: 4.8,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 53,
            slug: "letters-of-credit",
            title: "Letters of Credit",
            description: "Master letters of credit, international payment methods, and trade finance instruments for secure global transactions.",
            duration: "4 weeks",
            students: "1,800+",
            rating: 4.7,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 54,
            slug: "contract-preparation-bid-evaluation",
            title: "Contract Preparation & Bid Evaluation",
            description: "Learn to draft effective contracts, evaluate bids, and manage procurement processes to protect your organization's interests.",
            duration: "5 weeks",
            students: "1,700+",
            rating: 4.8,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 55,
            slug: "hedging-training",
            title: "Hedging Training",
            description: "Understand hedging strategies to manage financial risks, protect against currency fluctuations, and stabilize cash flows.",
            duration: "4 weeks",
            students: "1,400+",
            rating: 4.9,
            price: "$1,499",
            originalPrice: "$1,899",
            level: "Advanced",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 56,
            slug: "international-trade-finance",
            title: "International Trade Finance",
            description: "Comprehensive training in international trade finance, payment methods, documentation, and risk management for global business.",
            duration: "6 weeks",
            students: "1,900+",
            rating: 4.8,
            price: "$1,599",
            originalPrice: "$1,999",
            level: "Intermediate",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 57,
            slug: "new-uae-corporate-tax",
            title: "New UAE Corporate Tax",
            description: "Stay compliant with the new UAE corporate tax regulations. Understand tax obligations, filing requirements, and tax planning strategies.",
            duration: "3 weeks",
            students: "2,300+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "All Levels",
            format: "Hybrid",
            category: "Finance",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 58,
            slug: "essentials-of-digital-marketing",
            title: "Essentials of Digital Marketing",
            description: "Master the fundamentals of digital marketing including SEO, SEM, email marketing, and online advertising to drive business growth.",
            duration: "6 weeks",
            students: "3,200+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Beginner",
            format: "Hybrid",
            category: "Marketing",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 59,
            slug: "social-media-marketing",
            title: "Social Media Marketing",
            description: "Learn to create engaging social media campaigns, build brand presence, and leverage platforms like Facebook, Instagram, LinkedIn, and Twitter.",
            duration: "5 weeks",
            students: "2,800+",
            rating: 4.9,
            price: "$999",
            originalPrice: "$1,299",
            level: "All Levels",
            format: "Hybrid",
            category: "Marketing",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 60,
            slug: "content-marketing-online-presence",
            title: "Content Marketing and Online Presence",
            description: "Develop compelling content strategies, build a strong online presence, and engage audiences through blogs, videos, and multimedia content.",
            duration: "6 weeks",
            students: "2,500+",
            rating: 4.7,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Marketing",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 61,
            slug: "market-intelligence-research",
            title: "Market Intelligence & Research",
            description: "Learn to conduct market research, analyze consumer behavior, gather competitive intelligence, and make data-driven marketing decisions.",
            duration: "5 weeks",
            students: "2,100+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Marketing",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 62,
            slug: "strategic-marketing",
            title: "Strategic Marketing",
            description: "Develop comprehensive marketing strategies, plan campaigns, set objectives, and align marketing efforts with business goals for long-term success.",
            duration: "7 weeks",
            students: "2,400+",
            rating: 4.9,
            price: "$1,499",
            originalPrice: "$1,899",
            level: "Advanced",
            format: "Hybrid",
            category: "Marketing",
            image: "/images/courses/placeholder.jpg",
        },
        {
            id: 63,
            slug: "advanced-selling-skills",
            title: "Advanced Selling Skills",
            description: "Master advanced sales techniques, closing strategies, objection handling, and relationship building to achieve superior sales performance.",
            duration: "6 weeks",
            students: "2,600+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Advanced",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/young-successful-man-white-shirt-presenting-new-financial-project.jpg",
        },
        {
            id: 64,
            slug: "advanced-negotiation-skills",
            title: "Advanced Negotiation Skills",
            description: "Develop sophisticated negotiation strategies, master win-win approaches, and handle complex negotiations to achieve optimal outcomes.",
            duration: "5 weeks",
            students: "2,200+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Advanced",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/negotioon.jpg",
        },
        {
            id: 65,
            slug: "managing-maximizing-key-accounts",
            title: "Managing & Maximizing Key Accounts",
            description: "Learn to identify, develop, and manage key accounts to maximize revenue, build long-term relationships, and ensure customer retention.",
            duration: "6 weeks",
            students: "2,000+",
            rating: 4.7,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/keyaccounts.jpg",
        },
        {
            id: 66,
            slug: "effective-public-speaking-presentation-skills",
            title: "Effective Public Speaking and Presentation Skills",
            description: "Master the art of public speaking and professional presentations. Build confidence, engage audiences, and deliver impactful messages.",
            duration: "4 weeks",
            students: "2,800+",
            rating: 4.8,
            price: "$999",
            originalPrice: "$1,299",
            level: "All Levels",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/publicspeaking.jpg",
        },
        {
            id: 67,
            slug: "sales-foundation-non-sales-people",
            title: "Sales Foundation for Non Sales People",
            description: "Learn fundamental sales principles and techniques for professionals who need to influence, persuade, and sell ideas in their roles.",
            duration: "4 weeks",
            students: "2,400+",
            rating: 4.7,
            price: "$899",
            originalPrice: "$1,199",
            level: "Beginner",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/salesfoundation.jpg",
        },
        {
            id: 68,
            slug: "customer-service-excellence",
            title: "Customer Service Excellence",
            description: "Deliver exceptional customer service experiences. Master communication, problem-solving, and relationship management to exceed customer expectations.",
            duration: "5 weeks",
            students: "3,100+",
            rating: 4.9,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "All Levels",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/sales.jpg",
        },
        {
            id: 69,
            slug: "art-of-negotiation",
            title: "The Art of Negotiation",
            description: "Master the art and science of negotiation. Learn proven techniques, strategies, and psychology to achieve successful outcomes in any negotiation.",
            duration: "5 weeks",
            students: "2,500+",
            rating: 4.8,
            price: "$1,199",
            originalPrice: "$1,499",
            level: "Intermediate",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/negotioon.jpg",
        },
        {
            id: 70,
            slug: "effective-telesales-skills-techniques",
            title: "Effective TeleSales Skills & Techniques",
            description: "Master telephone sales techniques, build rapport over the phone, handle objections, and close deals remotely with proven telesales strategies.",
            duration: "4 weeks",
            students: "2,300+",
            rating: 4.7,
            price: "$999",
            originalPrice: "$1,299",
            level: "All Levels",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/sales.jpg",
        },
        {
            id: 71,
            slug: "strategic-effective-sales-management",
            title: "Strategic & Effective Sales Management",
            description: "Lead high-performing sales teams, set targets, manage pipelines, and drive revenue growth through effective sales management practices.",
            duration: "7 weeks",
            students: "2,100+",
            rating: 4.9,
            price: "$1,599",
            originalPrice: "$1,999",
            level: "Advanced",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/sales.jpg",
        },
        {
            id: 72,
            slug: "customer-relationship-management",
            title: "Customer Relationship Management",
            description: "Build and maintain strong customer relationships. Learn CRM strategies, tools, and best practices to increase customer loyalty and lifetime value.",
            duration: "5 weeks",
            students: "2,700+",
            rating: 4.8,
            price: "$1,299",
            originalPrice: "$1,599",
            level: "Intermediate",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/sales.jpg",
        },
        {
            id: 73,
            slug: "effective-negotiation-skills",
            title: "Effective Negotiation Skills",
            description: "Develop practical negotiation skills to achieve win-win outcomes. Master preparation, communication, and closing techniques for successful negotiations.",
            duration: "4 weeks",
            students: "2,600+",
            rating: 4.7,
            price: "$1,099",
            originalPrice: "$1,399",
            level: "Intermediate",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/negotioon.jpg",
        },
        {
            id: 74,
            slug: "selling-skills-emotional-intelligence",
            title: "Selling Skills by Emotional Intelligence",
            description: "Leverage emotional intelligence to connect with customers, understand their needs, and build authentic relationships that drive sales success.",
            duration: "6 weeks",
            students: "2,200+",
            rating: 4.9,
            price: "$1,399",
            originalPrice: "$1,699",
            level: "Intermediate",
            format: "Hybrid",
            category: "Sales",
            image: "/images/courses/sales.jpg",
        }
    ];

    // Filter courses based on selected category
    const allFilteredCourses = courses.filter((course) => {
        return selectedCategory === 'All Courses' || course.category === selectedCategory;
    });

    // Limit to 8 courses (2 rows of 4 cards)
    const filteredCourses = allFilteredCourses.slice(0, 8);

    // Cache-busting string to ensure updated images are fetched
    const imageVersion = '?v=20251006';

    const categories = [
        { name: "All Courses", count: 24, active: selectedCategory === "All Courses" },
        { name: "Sales", count: 12, active: selectedCategory === "Sales" },
        { name: "Personality Development", count: 7, active: selectedCategory === "Personality Development" },
        { name: "Management and Leadership", count: 11, active: selectedCategory === "Management and Leadership" },
        { name: "Marketing", count: 5, active: selectedCategory === "Marketing" },
        { name: "Finance", count: 8, active: selectedCategory === "Finance" },
        { name: "Languages", count: 2, active: selectedCategory === "Languages" },
        { name: "Microsoft Office", count: 12, active: selectedCategory === "Microsoft Office" },
        { name: "Administration and HR Management", count: 13, active: selectedCategory === "Administration and HR Management" }
    ];

    // Get only category names (excluding "All Courses")
    const categoryNames = categories.slice(1).map(cat => cat.name);

    // Function to change category smoothly
    const changeCategorySmoothly = (newCategory: string) => {
        setIsTransitioning(true);
        
        // Fade out
        setTimeout(() => {
            setSelectedCategory(newCategory);
            
            // Fade in after a brief delay
            setTimeout(() => {
                setIsTransitioning(false);
            }, 150);
        }, 300);
    };

    // Auto-cycle through categories
    useEffect(() => {
        if (isPaused || isTransitioning) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        // Auto-cycle every 4 seconds with smooth transition
        intervalRef.current = setInterval(() => {
            // Start fade out
            setIsTransitioning(true);
            
            // After fade out, change category and fade in
            setTimeout(() => {
                setSelectedCategory((prevCategory) => {
                    // Determine next category
                    if (prevCategory === 'All Courses') {
                        return categoryNames[0];
                    } else {
                        const currentIndex = categoryNames.indexOf(prevCategory);
                        const nextIndex = currentIndex === -1 
                            ? 0 
                            : (currentIndex + 1) % categoryNames.length;
                        return categoryNames[nextIndex];
                    }
                });
                
                // Fade in after category change
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 50);
            }, 300);
        }, 4000);

        // Cleanup on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, isTransitioning, categoryNames]);

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
                <div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                changeCategorySmoothly(category.name);
                                setIsPaused(true);
                            }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-500 ease-in-out ${
                                category.active
                                    ? 'bg-blue-900 text-white scale-105 shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                            }`}
                        >
                            {category.name}
                            <span className="ml-2 text-sm opacity-75">({category.count})</span>
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 mb-12 transition-opacity duration-500 ease-in-out ${
                        isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    {filteredCourses.map((course) => (
                        <Link
                            key={course.id}
                            href={`/courses/${course.slug}`}
                            className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-colors duration-200 hover:bg-gray-300 hover:shadow-md pb-8 block"
                        >
                            {/* Image Header */}
                            <div className="relative p-3 pb-0">
                                <div className="relative mx-auto w-full">
                                    <div className="aspect-[16/9] rounded-xl overflow-hidden">
                                        <img
                                            src={`${course.image}${imageVersion}`}
                                            alt={course.title}
                                            className={`h-full w-full object-cover ${course.image === '/images/courses/uae.jpg' ? 'object-top' : ''} transform transition-transform duration-300 group-hover:scale-105`}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Course Title and Description */}
                                <div className="p-3 pt-2">
                                    <h4 className="text-xs font-semibold text-gray-900 line-clamp-2">{course.title}</h4>
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{course.description}</p>
                                 </div>
                            </div>
                            {/* Floating Arrow CTA */}
                            <div
                                aria-label="Open details"
                                className="absolute bottom-2 right-2 z-10 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-md group-hover:bg-blue-800 transition-colors duration-200"
                            >
                                <ArrowUpRight className="h-3 w-3" />
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">No courses found in this category.</p>
                    </div>
                )}

                {/* See More Button - Show only if there are more courses available */}
                {allFilteredCourses.length > 8 && (
                    <div className="text-center mt-8">
                        <Link 
                            href="/courses" 
                            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-block"
                        >
                            See More ({allFilteredCourses.length - 8} more courses)
                    </Link>
                </div>
                )}
            </div>
        </section>
    );
}
