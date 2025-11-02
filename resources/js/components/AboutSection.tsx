import { Button } from './ui/button';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Content */}
                    <div className="mb-8">
                        <p className="text-sm font-medium text-green-600 mb-3">About BTC</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Business Training Center<br />
                            Excellence In Professional<br />
                            Education Since 2008
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
                            Business Training Center (BTC) is a premier accounting and finance training institute 
                            located in the heart of Dubai. With over 15 years of experience, we have successfully 
                            trained thousands of professionals in various accounting certifications and software applications.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                            Our expert instructors bring real-world experience to the classroom, ensuring that 
                            our students receive practical, industry-relevant training that prepares them for 
                            successful careers in accounting and finance.
                        </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2" style={{ color: '#031773' }}>15+</div>
                            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2" style={{ color: '#031773' }}>5000+</div>
                            <div className="text-sm text-gray-600 font-medium">Students Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2" style={{ color: '#031773' }}>95%</div>
                            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2" style={{ color: '#031773' }}>20+</div>
                            <div className="text-sm text-gray-600 font-medium">Expert Instructors</div>
                        </div>
                    </div>
                    
                    <Button className="px-8 py-3 font-semibold whitespace-nowrap">
                        Learn More About Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
