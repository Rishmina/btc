import { Head } from '@inertiajs/react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import CourseDetails from '@/components/CourseDetails';
import CourseCalendar from '@/components/CourseCalendar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import UpskillModal from '@/components/UpskillModal';
import { useDelayedModal } from '@/hooks/useDelayedModal';

export default function Home() {
    const { isOpen, closeModal } = useDelayedModal(600000); // 10 minutes delay

    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
                <meta name="description" content="Besherr Adi Professional Training Consultancy - Empowering professionals with world-class training programs in leadership, project management, digital marketing, and more." />
                <meta name="keywords" content="professional training, leadership development, project management, digital marketing, data analytics, career advancement" />
            </Head>

            <div className="min-h-screen bg-white">
                <Header />
                <HeroBanner />
                <AboutSection />
                <CourseDetails />
                <CourseCalendar />
                <Testimonials />
                <Footer />
                
                {/* Delayed Upskill Modal */}
                <UpskillModal isOpen={isOpen} onClose={closeModal} />
            </div>
        </>
    );
}
