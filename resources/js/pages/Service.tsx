import { Head, Link, usePage } from '@inertiajs/react';

interface PageProps {
    slug: string;
}

const SERVICE_TITLES: Record<string, string> = {
    'design-bespoke-or-in-house-corporate-training': 'Design Bespoke or In‑House Corporate Training',
    'public-corporate-training': 'Public Corporate Training',
    'management-courses': 'Management Courses',
    'leadership-courses': 'Leadership Courses',
    'hr-and-administration-courses': 'HR & Administration Courses',
    'personality-development-courses': 'Personality Development Courses',
    'finance-courses': 'Finance Courses',
    'language-courses': 'Language Courses',
    'microsoft-office-courses': 'Microsoft Office Courses',
    'marketing-and-sales-courses': 'Marketing & Sales Courses',
    'it-courses': 'IT Courses',
    'technical-courses': 'Technical Courses',
    'project-management-courses': 'Project Management Courses',
};

export default function Service() {
    const { props } = usePage<PageProps>();
    const slug = (props as any).slug as string;
    const title = SERVICE_TITLES[slug] ?? 'Our Services';

    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-white">
                <header className="bg-blue-900 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                        <p className="mt-3 text-white/80 max-w-3xl">Explore how BTC can help your team upskill with practical, industry-focused training designed for results.</p>
                    </div>
                </header>

                <main className="container mx-auto px-6 py-12">
                    <section className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
                            <p className="text-gray-700 leading-relaxed">
                                This page will be tailored with detailed content for "{title}" including curriculum, delivery modes, schedules, and outcomes.
                                Tell me what sections you want (syllabus, duration, fee, FAQs, brochure download, enquiry form), and I’ll wire them up.
                            </p>
                        </div>
                        <aside className="space-y-4">
                            <div className="rounded-lg border border-gray-200 p-5">
                                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                                <p className="text-gray-600 mb-4">Speak to an expert advisor to plan the right training for you.</p>
                                <Link href="#contact" className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">Contact Us</Link>
                            </div>
                        </aside>
                    </section>
                </main>
            </div>
        </>
    );
}
