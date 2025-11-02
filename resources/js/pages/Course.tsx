import { Head, Link } from '@inertiajs/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, MapPin, Calendar, Users, CheckCircle, Star, Phone, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface CourseProps {
    course?: {
        id: number;
        slug: string;
        title: string;
        description: string;
        image: string;
        duration: string;
        level: string;
        price: string;
        rating: number;
    };
}

export default function Course({ slug }: { slug: string }) {
    const [showEnrollModal, setShowEnrollModal] = useState(false);

    // All course data based on services dropdown
    const allCourses = {
        'design-bespoke-or-in-house-corporate-training': {
            id: 1,
            slug: 'design-bespoke-or-in-house-corporate-training',
            title: 'Design Bespoke or In House Corporate Training',
            description: 'Tailored corporate programs built around your team\'s goals and schedule. Custom training solutions designed specifically for your organization\'s unique needs and challenges.',
            image: '/images/courses/card1.jpg',
            duration: '4-8 weeks',
            level: 'Custom',
            price: 'Contact Us',
            rating: 4.9,
        },
        'public-corporate-training': {
            id: 2,
            slug: 'public-corporate-training',
            title: 'Public Corporate Training',
            description: 'Open-enrollment corporate workshops to upskill professionals across functions. Join peers from other companies to expand your network and learn industry best practices.',
            image: '/images/courses/card2.jpg',
            duration: '6 weeks',
            level: 'All Levels',
            price: '$1,199',
            rating: 4.8,
        },
        'management-courses': {
            id: 3,
            slug: 'management-courses',
            title: 'Management Courses',
            description: 'Practical programs covering planning, delegation, communication, and performance management. Build essential management skills for career advancement.',
            image: '/images/courses/card3.jpg',
            duration: '8 weeks',
            level: 'Intermediate',
            price: '$1,399',
            rating: 4.7,
        },
        'leadership-courses': {
            id: 4,
            slug: 'leadership-courses',
            title: 'Leadership Development Program',
            description: 'Develop modern leadership capabilities to inspire teams, drive change, and deliver results. Transform your ability to lead with confidence and impact.',
            image: '/images/courses/card4.jpg',
            duration: '6 weeks',
            level: 'Intermediate',
            price: '$1,299',
            rating: 4.9,
        },
        'hr-and-administration-courses': {
            id: 5,
            slug: 'hr-and-administration-courses',
            title: 'HR & Administration Courses',
            description: 'Streamline HR operations and elevate people practices for better performance. Master modern HR strategies and administrative excellence.',
            image: '/images/courses/card1.jpg',
            duration: '10 weeks',
            level: 'Intermediate',
            price: '$1,199',
            rating: 4.6,
        },
        'personality-development-courses': {
            id: 6,
            slug: 'personality-development-courses',
            title: 'Personality Development Courses',
            description: 'Boost communication, confidence, and professional presence. Develop your personal brand and enhance your interpersonal skills.',
            image: '/images/courses/card2.jpg',
            duration: '6 weeks',
            level: 'Beginner',
            price: '$899',
            rating: 4.8,
        },
        'finance-courses': {
            id: 7,
            slug: 'finance-courses',
            title: 'Advanced Financial Management',
            description: 'Master budgeting, reporting, and financial analysis to drive results. Develop expertise in financial planning and strategic decision-making.',
            image: '/images/courses/card3.jpg',
            duration: '12 weeks',
            level: 'Advanced',
            price: '$1,799',
            rating: 4.9,
        },
        'language-courses': {
            id: 8,
            slug: 'language-courses',
            title: 'Business Language Courses',
            description: 'Build business-ready language skills for global collaboration. Master professional communication in multiple languages.',
            image: '/images/courses/card4.jpg',
            duration: '8 weeks',
            level: 'All Levels',
            price: '$999',
            rating: 4.7,
        },
        'microsoft-office-courses': {
            id: 9,
            slug: 'microsoft-office-courses',
            title: 'Microsoft Office Mastery',
            description: 'Excel, PowerPoint, and Word—advanced tips that save time and impress. Become a power user of Microsoft Office suite.',
            image: '/images/courses/card1.jpg',
            duration: '6 weeks',
            level: 'Beginner',
            price: '$799',
            rating: 4.8,
        },
        'marketing-and-sales-courses': {
            id: 10,
            slug: 'marketing-and-sales-courses',
            title: 'Marketing & Sales Excellence',
            description: 'Acquire modern marketing tactics and customer-centric sales skills. Drive business growth with proven strategies and techniques.',
            image: '/images/courses/card2.jpg',
            duration: '10 weeks',
            level: 'Intermediate',
            price: '$1,499',
            rating: 4.8,
        },
        'it-courses': {
            id: 11,
            slug: 'it-courses',
            title: 'IT & Technology Courses',
            description: 'Future-ready tech skills across systems, security, and productivity. Stay ahead with cutting-edge technology training.',
            image: '/images/courses/card3.jpg',
            duration: '8 weeks',
            level: 'Intermediate',
            price: '$1,399',
            rating: 4.7,
        },
        'technical-courses': {
            id: 12,
            slug: 'technical-courses',
            title: 'Technical Skills Training',
            description: 'Hands-on training to improve technical proficiency and safety. Master practical technical skills for workplace excellence.',
            image: '/images/courses/card4.jpg',
            duration: '6 weeks',
            level: 'Intermediate',
            price: '$1,199',
            rating: 4.6,
        },
        'project-management-courses': {
            id: 13,
            slug: 'project-management-courses',
            title: 'Project Management Professional (PMP)',
            description: 'Plan, execute, and deliver projects on time with confidence. Master project management methodologies and best practices.',
            image: '/images/courses/card1.jpg',
            duration: '8 weeks',
            level: 'Advanced',
            price: '$1,599',
            rating: 4.9,
        },
    };

    const courseData = allCourses[slug as keyof typeof allCourses] || allCourses['leadership-courses'];

    // Dynamic curriculum based on course type
    const getCurriculum = (courseSlug: string) => {
        const curriculumMap: Record<string, any[]> = {
            'design-bespoke-or-in-house-corporate-training': [
                { week: 1, title: 'Needs Assessment', topics: ['Company Analysis', 'Team Evaluation', 'Goal Setting', 'Custom Curriculum Design'] },
                { week: 2, title: 'Program Development', topics: ['Content Creation', 'Resource Planning', 'Schedule Design', 'Assessment Methods'] },
                { week: 3, title: 'Implementation', topics: ['Training Delivery', 'Progress Monitoring', 'Interactive Sessions', 'Practical Applications'] },
                { week: 4, title: 'Evaluation & Support', topics: ['Performance Assessment', 'Feedback Collection', 'Follow-up Support', 'Continuous Improvement'] }
            ],
            'public-corporate-training': [
                { week: 1, title: 'Professional Development', topics: ['Industry Trends', 'Best Practices', 'Networking', 'Skill Assessment'] },
                { week: 2, title: 'Core Competencies', topics: ['Communication Skills', 'Leadership Basics', 'Project Management', 'Team Collaboration'] },
                { week: 3, title: 'Advanced Skills', topics: ['Strategic Thinking', 'Decision Making', 'Problem Solving', 'Innovation'] },
                { week: 4, title: 'Application', topics: ['Case Studies', 'Real-world Projects', 'Peer Learning', 'Certification'] },
                { week: 5, title: 'Integration', topics: ['Implementation Planning', 'Change Management', 'Performance Metrics', 'Success Strategies'] },
                { week: 6, title: 'Certification', topics: ['Final Assessment', 'Portfolio Review', 'Certification Award', 'Continuous Learning'] }
            ],
            'management-courses': [
                { week: 1, title: 'Management Fundamentals', topics: ['Management Principles', 'Planning & Organizing', 'Leading & Controlling', 'Management Styles'] },
                { week: 2, title: 'Team Leadership', topics: ['Team Building', 'Motivation Techniques', 'Performance Management', 'Conflict Resolution'] },
                { week: 3, title: 'Communication & Delegation', topics: ['Effective Communication', 'Delegation Strategies', 'Feedback Systems', 'Meeting Management'] },
                { week: 4, title: 'Decision Making', topics: ['Decision Frameworks', 'Problem Solving', 'Risk Management', 'Strategic Planning'] },
                { week: 5, title: 'Performance Excellence', topics: ['Goal Setting', 'KPI Management', 'Performance Reviews', 'Development Planning'] },
                { week: 6, title: 'Change Management', topics: ['Change Strategies', 'Resistance Management', 'Implementation', 'Success Measurement'] },
                { week: 7, title: 'Leadership Development', topics: ['Leadership Styles', 'Emotional Intelligence', 'Influence & Persuasion', 'Coaching Skills'] },
                { week: 8, title: 'Final Project', topics: ['Capstone Project', 'Implementation Plan', 'Presentation', 'Certification'] }
            ],
            'leadership-courses': [
                { week: 1, title: 'Leadership Foundations', topics: ['Understanding Leadership Styles', 'Self-Assessment & Personal Leadership', 'Building Trust & Credibility', 'Effective Communication Basics'] },
                { week: 2, title: 'Team Management', topics: ['Building High-Performance Teams', 'Delegation & Empowerment', 'Conflict Resolution Strategies', 'Motivating & Inspiring Teams'] },
                { week: 3, title: 'Strategic Thinking', topics: ['Strategic Planning Fundamentals', 'Decision Making Frameworks', 'Problem Solving Techniques', 'Innovation & Change Management'] },
                { week: 4, title: 'Communication Excellence', topics: ['Executive Communication', 'Presentation Skills', 'Difficult Conversations', 'Stakeholder Management'] },
                { week: 5, title: 'Performance Management', topics: ['Setting Clear Expectations', 'Feedback & Coaching', 'Performance Metrics', 'Development Planning'] },
                { week: 6, title: 'Leadership in Action', topics: ['Leading Through Change', 'Crisis Management', 'Ethical Leadership', 'Final Project & Certification'] }
            ],
            'hr-and-administration-courses': [
                { week: 1, title: 'HR Fundamentals', topics: ['HR Strategy & Planning', 'Recruitment & Selection', 'Employee Relations', 'Legal Compliance'] },
                { week: 2, title: 'Performance Management', topics: ['Performance Appraisals', 'Goal Setting', 'Development Planning', 'Career Management'] },
                { week: 3, title: 'Compensation & Benefits', topics: ['Salary Structures', 'Benefits Administration', 'Payroll Management', 'Reward Systems'] },
                { week: 4, title: 'Training & Development', topics: ['Learning & Development', 'Training Programs', 'Skills Assessment', 'Succession Planning'] },
                { week: 5, title: 'Administrative Excellence', topics: ['Office Management', 'Documentation', 'Process Improvement', 'Technology Integration'] },
                { week: 6, title: 'Employee Engagement', topics: ['Employee Satisfaction', 'Retention Strategies', 'Workplace Culture', 'Wellness Programs'] },
                { week: 7, title: 'HR Analytics', topics: ['HR Metrics', 'Data Analysis', 'Reporting', 'Predictive Analytics'] },
                { week: 8, title: 'Strategic HR', topics: ['HR Business Partnering', 'Organizational Development', 'Change Management', 'Future of HR'] },
                { week: 9, title: 'Compliance & Risk', topics: ['Employment Law', 'Risk Management', 'Audit Procedures', 'Ethics & Governance'] },
                { week: 10, title: 'Final Project', topics: ['HR Strategy Development', 'Implementation Plan', 'Presentation', 'Certification'] }
            ],
            'personality-development-courses': [
                { week: 1, title: 'Self-Awareness', topics: ['Personal Assessment', 'Strengths & Weaknesses', 'Values & Beliefs', 'Emotional Intelligence'] },
                { week: 2, title: 'Communication Skills', topics: ['Verbal Communication', 'Non-verbal Cues', 'Active Listening', 'Presentation Skills'] },
                { week: 3, title: 'Confidence Building', topics: ['Self-Confidence', 'Overcoming Fears', 'Assertiveness', 'Public Speaking'] },
                { week: 4, title: 'Professional Presence', topics: ['Personal Branding', 'Professional Image', 'Networking Skills', 'Social Media Presence'] },
                { week: 5, title: 'Interpersonal Skills', topics: ['Relationship Building', 'Team Collaboration', 'Conflict Resolution', 'Cultural Sensitivity'] },
                { week: 6, title: 'Career Development', topics: ['Career Planning', 'Goal Setting', 'Skill Development', 'Personal Growth Plan'] }
            ],
            'finance-courses': [
                { week: 1, title: 'Financial Fundamentals', topics: ['Financial Statements', 'Accounting Principles', 'Financial Analysis', 'Budgeting Basics'] },
                { week: 2, title: 'Corporate Finance', topics: ['Capital Structure', 'Investment Analysis', 'Risk Management', 'Valuation Methods'] },
                { week: 3, title: 'Financial Planning', topics: ['Strategic Planning', 'Forecasting', 'Scenario Analysis', 'Performance Metrics'] },
                { week: 4, title: 'Investment Management', topics: ['Portfolio Theory', 'Asset Allocation', 'Risk Assessment', 'Investment Strategies'] },
                { week: 5, title: 'Financial Reporting', topics: ['Reporting Standards', 'Compliance', 'Audit Processes', 'Internal Controls'] },
                { week: 6, title: 'Advanced Analytics', topics: ['Financial Modeling', 'Data Analysis', 'Predictive Analytics', 'Performance Dashboards'] },
                { week: 7, title: 'Treasury Management', topics: ['Cash Management', 'Working Capital', 'Foreign Exchange', 'Interest Rate Risk'] },
                { week: 8, title: 'Mergers & Acquisitions', topics: ['Due Diligence', 'Valuation', 'Integration Planning', 'Post-Merger Management'] },
                { week: 9, title: 'International Finance', topics: ['Global Markets', 'Currency Risk', 'International Trade', 'Cross-border Transactions'] },
                { week: 10, title: 'Financial Technology', topics: ['FinTech Trends', 'Digital Banking', 'Blockchain', 'AI in Finance'] },
                { week: 11, title: 'Ethics & Governance', topics: ['Financial Ethics', 'Corporate Governance', 'Regulatory Compliance', 'Risk Management'] },
                { week: 12, title: 'Final Project', topics: ['Financial Strategy', 'Implementation Plan', 'Presentation', 'Certification'] }
            ],
            'language-courses': [
                { week: 1, title: 'Language Assessment', topics: ['Current Level Evaluation', 'Learning Objectives', 'Study Plan Development', 'Cultural Context'] },
                { week: 2, title: 'Business Communication', topics: ['Professional Vocabulary', 'Business Writing', 'Email Communication', 'Report Writing'] },
                { week: 3, title: 'Presentation Skills', topics: ['Public Speaking', 'Presentation Structure', 'Visual Aids', 'Q&A Handling'] },
                { week: 4, title: 'Negotiation & Meetings', topics: ['Meeting Language', 'Negotiation Techniques', 'Persuasive Communication', 'Cultural Nuances'] },
                { week: 5, title: 'Industry-Specific Language', topics: ['Technical Vocabulary', 'Industry Jargon', 'Professional Terminology', 'Case Studies'] },
                { week: 6, title: 'Cross-Cultural Communication', topics: ['Cultural Awareness', 'Business Etiquette', 'International Relations', 'Global Perspectives'] },
                { week: 7, title: 'Advanced Communication', topics: ['Complex Discussions', 'Critical Thinking', 'Analysis & Synthesis', 'Professional Debates'] },
                { week: 8, title: 'Certification', topics: ['Final Assessment', 'Practical Application', 'Portfolio Review', 'Language Certification'] }
            ],
            'microsoft-office-courses': [
                { week: 1, title: 'Excel Fundamentals', topics: ['Basic Functions', 'Data Entry', 'Formatting', 'Charts & Graphs'] },
                { week: 2, title: 'Advanced Excel', topics: ['Complex Formulas', 'Data Analysis', 'Pivot Tables', 'Macros & Automation'] },
                { week: 3, title: 'PowerPoint Mastery', topics: ['Presentation Design', 'Animations', 'Slide Masters', 'Interactive Elements'] },
                { week: 4, title: 'Word Processing', topics: ['Document Formatting', 'Styles & Templates', 'Collaboration Tools', 'Advanced Features'] },
                { week: 5, title: 'Integration & Workflow', topics: ['Office Integration', 'Data Sharing', 'Collaboration', 'Productivity Tips'] },
                { week: 6, title: 'Certification', topics: ['Practical Projects', 'Skills Assessment', 'Portfolio Creation', 'Microsoft Certification'] }
            ],
            'marketing-and-sales-courses': [
                { week: 1, title: 'Marketing Fundamentals', topics: ['Marketing Strategy', 'Market Research', 'Consumer Behavior', 'Brand Positioning'] },
                { week: 2, title: 'Digital Marketing', topics: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Campaigns'] },
                { week: 3, title: 'Sales Techniques', topics: ['Sales Process', 'Customer Relationship', 'Objection Handling', 'Closing Strategies'] },
                { week: 4, title: 'Customer Analytics', topics: ['Customer Insights', 'Data Analysis', 'Performance Metrics', 'ROI Measurement'] },
                { week: 5, title: 'Marketing Automation', topics: ['CRM Systems', 'Marketing Tools', 'Lead Generation', 'Campaign Management'] },
                { week: 6, title: 'E-commerce & Online Sales', topics: ['Online Platforms', 'Digital Payments', 'Customer Experience', 'Conversion Optimization'] },
                { week: 7, title: 'Content Strategy', topics: ['Content Creation', 'Storytelling', 'Visual Design', 'Content Distribution'] },
                { week: 8, title: 'Brand Management', topics: ['Brand Strategy', 'Brand Identity', 'Brand Communication', 'Brand Measurement'] },
                { week: 9, title: 'International Marketing', topics: ['Global Markets', 'Cultural Adaptation', 'International Strategy', 'Market Entry'] },
                { week: 10, title: 'Final Project', topics: ['Marketing Campaign', 'Implementation Plan', 'Presentation', 'Certification'] }
            ],
            'it-courses': [
                { week: 1, title: 'IT Fundamentals', topics: ['Computer Systems', 'Networking Basics', 'Operating Systems', 'Security Principles'] },
                { week: 2, title: 'Database Management', topics: ['Database Design', 'SQL Programming', 'Data Management', 'Database Security'] },
                { week: 3, title: 'Web Development', topics: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Web Standards'] },
                { week: 4, title: 'System Administration', topics: ['Server Management', 'Network Administration', 'User Management', 'System Monitoring'] },
                { week: 5, title: 'Cybersecurity', topics: ['Security Threats', 'Risk Assessment', 'Security Policies', 'Incident Response'] },
                { week: 6, title: 'Cloud Computing', topics: ['Cloud Platforms', 'Virtualization', 'Cloud Security', 'Migration Strategies'] },
                { week: 7, title: 'Programming Basics', topics: ['Programming Logic', 'Data Structures', 'Algorithm Design', 'Debugging'] },
                { week: 8, title: 'Final Project', topics: ['IT Solution Design', 'Implementation', 'Testing', 'Certification'] }
            ],
            'technical-courses': [
                { week: 1, title: 'Technical Fundamentals', topics: ['Technical Concepts', 'Safety Protocols', 'Equipment Operation', 'Quality Standards'] },
                { week: 2, title: 'Hands-on Training', topics: ['Practical Applications', 'Skill Development', 'Equipment Mastery', 'Safety Procedures'] },
                { week: 3, title: 'Advanced Techniques', topics: ['Specialized Skills', 'Complex Procedures', 'Problem Solving', 'Innovation'] },
                { week: 4, title: 'Quality Control', topics: ['Quality Standards', 'Inspection Procedures', 'Documentation', 'Continuous Improvement'] },
                { week: 5, title: 'Maintenance & Troubleshooting', topics: ['Preventive Maintenance', 'Diagnostic Procedures', 'Repair Techniques', 'Equipment Care'] },
                { week: 6, title: 'Certification', topics: ['Skills Assessment', 'Practical Examination', 'Safety Certification', 'Professional Certification'] }
            ],
            'project-management-courses': [
                { week: 1, title: 'Project Management Fundamentals', topics: ['PMI Framework', 'Project Lifecycle', 'Stakeholder Management', 'Project Charter'] },
                { week: 2, title: 'Project Planning', topics: ['Scope Management', 'Schedule Development', 'Resource Planning', 'Risk Identification'] },
                { week: 3, title: 'Project Execution', topics: ['Team Management', 'Communication Plans', 'Quality Management', 'Procurement'] },
                { week: 4, title: 'Monitoring & Control', topics: ['Performance Measurement', 'Change Management', 'Risk Management', 'Issue Resolution'] },
                { week: 5, title: 'Advanced PM Concepts', topics: ['Agile Methodologies', 'Lean Project Management', 'Six Sigma', 'Portfolio Management'] },
                { week: 6, title: 'Leadership & Communication', topics: ['Project Leadership', 'Team Dynamics', 'Conflict Resolution', 'Stakeholder Engagement'] },
                { week: 7, title: 'PMP Exam Preparation', topics: ['Exam Strategy', 'Practice Tests', 'Knowledge Areas Review', 'Test-taking Techniques'] },
                { week: 8, title: 'Final Certification', topics: ['Final Assessment', 'PMP Application', 'Exam Preparation', 'Certification Achievement'] }
            ]
        };

        return curriculumMap[courseSlug] || curriculumMap['leadership-courses'];
    };

    const curriculum = getCurriculum(slug);

    // Dynamic training methods based on course type
    const getTrainingMethods = (courseSlug: string) => {
        const baseMethods = [
            {
                icon: <Clock className="h-6 w-6" />,
                title: 'Flexible Timing',
                options: [
                    'Weekday Evening: 6:00 PM - 9:00 PM',
                    'Weekend: Saturday 9:00 AM - 4:00 PM',
                    'Intensive: Full Week 9:00 AM - 5:00 PM'
                ]
            },
            {
                icon: <MapPin className="h-6 w-6" />,
                title: 'Location Options',
                options: [
                    'Dubai Business Bay - Main Campus',
                    'Abu Dhabi - Downtown Center',
                    'Online Live Sessions',
                    'Hybrid (In-person + Online)'
                ]
            },
            {
                icon: <Users className="h-6 w-6" />,
                title: 'Class Format',
                options: [
                    'Small Group Sessions (8-12 participants)',
                    'One-on-One Coaching Available',
                    'Corporate Group Training',
                    'Self-Paced with Mentor Support'
                ]
            }
        ];

        // Special training methods for specific courses
        if (courseSlug === 'design-bespoke-or-in-house-corporate-training') {
            return [
                {
                    icon: <Calendar className="h-6 w-6" />,
                    title: 'Custom Scheduling',
                    options: [
                        'Flexible Start Dates',
                        'Accelerated Programs Available',
                        'Evening & Weekend Options',
                        'On-site Delivery'
                    ]
                },
                {
                    icon: <MapPin className="h-6 w-6" />,
                    title: 'Delivery Options',
                    options: [
                        'At Your Location',
                        'Our Training Centers',
                        'Virtual Delivery',
                        'Hybrid Approach'
                    ]
                },
                {
                    icon: <Users className="h-6 w-6" />,
                    title: 'Group Size',
                    options: [
                        'Small Teams (5-10 participants)',
                        'Department-wide (20-50 participants)',
                        'Organization-wide Programs',
                        'Individual Coaching Available'
                    ]
                }
            ];
        }

        return baseMethods;
    };

    const trainingMethods = getTrainingMethods(slug);

    // Dynamic testimonials based on course type
    const getTestimonials = (courseSlug: string) => {
        const testimonialMap: Record<string, any[]> = {
            'design-bespoke-or-in-house-corporate-training': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'HR Director at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The bespoke training program was perfectly tailored to our organization\'s needs. The custom curriculum and on-site delivery made it incredibly convenient for our team.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Learning & Development Manager at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Exceptional custom training that addressed our specific challenges. The instructors adapted perfectly to our industry and company culture.'
                }
            ],
            'public-corporate-training': [
                {
                    name: 'Mohammed Hassan',
                    role: 'Operations Manager at ADNOC',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Great networking opportunities with professionals from different companies. The shared learning experience was invaluable for my career growth.'
                },
                {
                    name: 'Fatima Al-Zahra',
                    role: 'Senior Manager at Deloitte',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The public training format allowed me to learn from diverse perspectives and build a strong professional network across industries.'
                }
            ],
            'management-courses': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'Operations Manager at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'This management course gave me the practical tools I needed to excel in my role. The delegation and communication modules were particularly valuable.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Team Lead at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Excellent balance of theory and practice. I was able to implement the management techniques immediately and saw positive results in my team.'
                }
            ],
            'leadership-courses': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'Operations Manager at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'This course completely transformed my leadership approach. The practical exercises and real-world case studies made all the difference. I was able to implement what I learned immediately in my role.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Team Lead at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Excellent program with outstanding instructors. The curriculum is well-structured and covers everything a modern leader needs to know. Highly recommend to anyone looking to advance their career.'
                }
            ],
            'hr-and-administration-courses': [
                {
                    name: 'Mohammed Hassan',
                    role: 'HR Manager at ADNOC',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Comprehensive HR training that covered everything from recruitment to performance management. The administrative modules were particularly helpful.'
                },
                {
                    name: 'Fatima Al-Zahra',
                    role: 'HR Business Partner at Deloitte',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The strategic HR components and analytics modules gave me the insights I needed to drive better business outcomes.'
                }
            ],
            'personality-development-courses': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'Sales Executive at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'This course boosted my confidence and communication skills significantly. I feel more professional and capable in my interactions.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Marketing Coordinator at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The personality development modules helped me build my personal brand and professional presence. Highly recommend for career advancement.'
                }
            ],
            'finance-courses': [
                {
                    name: 'Mohammed Hassan',
                    role: 'Finance Manager at ADNOC',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Advanced financial concepts were explained clearly with real-world applications. The financial modeling and analytics sections were excellent.'
                },
                {
                    name: 'Fatima Al-Zahra',
                    role: 'Senior Financial Analyst at Deloitte',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Comprehensive coverage of corporate finance and investment management. The case studies and practical exercises were very valuable.'
                }
            ],
            'language-courses': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'International Relations Manager at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The business language focus was perfect for my role. I improved my professional communication skills significantly.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Global Marketing Manager at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Excellent cross-cultural communication training. The cultural awareness components made me more effective in international business.'
                }
            ],
            'microsoft-office-courses': [
                {
                    name: 'Mohammed Hassan',
                    role: 'Administrative Manager at ADNOC',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The advanced Excel and PowerPoint techniques have made me much more efficient at work. Great practical training!'
                },
                {
                    name: 'Fatima Al-Zahra',
                    role: 'Business Analyst at Deloitte',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Comprehensive Office suite training with focus on productivity. The automation and integration features were game-changers.'
                }
            ],
            'marketing-and-sales-courses': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'Marketing Manager at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Modern marketing strategies and digital tools were covered excellently. I implemented several techniques that improved our campaign performance.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Sales Director at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'The sales techniques and customer relationship modules were outstanding. My team\'s performance has improved significantly.'
                }
            ],
            'it-courses': [
                {
                    name: 'Mohammed Hassan',
                    role: 'IT Manager at ADNOC',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Comprehensive IT training covering systems, security, and modern technologies. The cybersecurity modules were particularly valuable.'
                },
                {
                    name: 'Fatima Al-Zahra',
                    role: 'Systems Analyst at Deloitte',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Excellent coverage of database management and cloud computing. The hands-on approach made complex concepts easy to understand.'
                }
            ],
            'technical-courses': [
                {
                    name: 'Ahmed Al-Mansoori',
                    role: 'Technical Supervisor at Emirates Group',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Practical technical training with emphasis on safety and quality. The hands-on approach was perfect for skill development.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Quality Engineer at HSBC',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Excellent technical skills development with focus on quality control and maintenance procedures. Highly practical and relevant.'
                }
            ],
            'project-management-courses': [
                {
                    name: 'Mohammed Hassan',
                    role: 'Project Director at ADNOC',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Comprehensive PMI framework training with excellent exam preparation. The real-world case studies were invaluable for my PMP certification.'
                },
                {
                    name: 'Fatima Al-Zahra',
                    role: 'Senior Project Manager at Deloitte',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
                    rating: 5,
                    comment: 'Outstanding project management training covering both traditional and agile methodologies. The leadership components were particularly strong.'
                }
            ]
        };

        return testimonialMap[courseSlug] || testimonialMap['leadership-courses'];
    };

    const testimonials = getTestimonials(slug);

    return (
        <>
            <Head title={courseData.title}>
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

                {/* Banner Section with Course Image and Name */}
                <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Course Image */}
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={courseData.image}
                                        alt={courseData.title}
                                        className="w-full h-[400px] object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop';
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                                        <div className="flex items-center gap-2">
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-bold text-gray-900">{courseData.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Course Name & Info */}
                            <div className="text-white">
                                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                    <span className="text-sm font-medium">{courseData.level} Level</span>
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    {courseData.title}
                                </h1>
                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    {courseData.description}
                                </p>
                                <div className="flex flex-wrap gap-6 mb-8">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-white/80" />
                                        <span className="text-white/90">{courseData.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-white/80" />
                                        <span className="text-white/90">2,500+ Enrolled</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl font-bold text-white">{courseData.price}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowEnrollModal(true)}
                                    className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                                >
                                    Enroll Now
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Curriculum Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Course <span className="text-blue-900">Curriculum</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive week-by-week breakdown of what you'll learn
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {curriculum.map((week, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-900"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                            {week.week}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {week.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {week.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-blue-900 flex-shrink-0 mt-1" />
                                                <span className="text-gray-700">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Training Methods Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Training <span className="text-blue-900">Methods Available</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the learning format that works best for you
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {trainingMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-900"
                                >
                                    <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mb-6">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        {method.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {method.options.map((option, optionIndex) => (
                                            <li key={optionIndex} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-blue-900 flex-shrink-0 mt-1" />
                                                <span className="text-gray-700">{option}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Student <span className="text-blue-900">Testimonials</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Hear from professionals who have attended this course
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{testimonial.comment}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enrollment CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white">
                    <div className="container mx-auto px-6 lg:px-24 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Leadership Skills?
                        </h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            Join thousands of professionals who have advanced their careers with our expert training programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowEnrollModal(true)}
                                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                            >
                                Enroll in This Course
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <a
                                href="#contact"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200 inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="h-5 w-5" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* Other Courses Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Explore Other <span className="text-blue-900">Courses</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Discover more professional development opportunities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(allCourses)
                                .filter(([courseSlug]) => courseSlug !== slug)
                                .slice(0, 4)
                                .map(([courseSlug, course]) => (
                                    <Link
                                        key={courseSlug}
                                        href={`/courses/${course.slug}`}
                                        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-900"
                                    >
                                        <div className="relative h-32 overflow-hidden">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop';
                                                }}
                                            />
                                            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                                                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                                <span className="font-bold text-gray-900 text-xs">{course.rating}</span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-900 transition-colors line-clamp-2">
                                                {course.title}
                                            </h3>
                                            <div className="flex items-center justify-between text-xs text-gray-600">
                                                <span>{course.duration}</span>
                                                <span className="font-bold text-gray-900">{course.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/courses"
                                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors duration-200 inline-flex items-center gap-2"
                            >
                                View All Courses
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Get in <span className="text-blue-900">Touch</span>
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Have questions? Our team is here to help you succeed.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-xl p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                                            <p className="text-gray-600">Mon-Fri 9am-6pm</p>
                                        </div>
                                    </div>
                                    <a href="tel:+971-4-123-4567" className="text-blue-900 font-bold text-xl hover:underline">
                                        +971-4-123-4567
                                    </a>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                                            <p className="text-gray-600">We'll respond within 24h</p>
                                        </div>
                                    </div>
                                    <a href="mailto:info@btc-training.com" className="text-blue-900 font-bold text-xl hover:underline">
                                        info@btc-training.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

                {/* Enrollment Modal */}
                {showEnrollModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
                            <button
                                onClick={() => setShowEnrollModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enroll in {courseData.title}</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
                                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors duration-200"
                                >
                                    Submit Enrollment Request
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

