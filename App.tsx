
import React, { useState } from 'react';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Calendar } from './components/Calendar';
import { PhoneIcon, MailIcon, UsersIcon, SendIcon, HeartIcon } from './components/Icons';

const App: React.FC = () => {
    const [problem, setProblem] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const handleProblemSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(problem.trim() === '') return;
        console.log("Problem submitted:", problem);
        setMessageSent(true);
        setProblem('');
        setTimeout(() => setMessageSent(false), 5000);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Hero Section */}
            <header 
                className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Aaftab Ahmad Sahab</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Your Guide Through Life's Challenges & Educational Journey.
                    </p>
                    <p className="mt-2 text-lg text-blue-400">Software Engineer | Mentor | Motivator</p>
                    <div className="mt-8 flex justify-center gap-4">
                       <a href="#connect"><Button>Connect Now</Button></a>
                       <a href="#about"><Button variant="secondary">Learn More</Button></a>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-20">
                {/* About Section */}
                <section id="about" className="mb-24 text-center">
                    <h2 className="text-4xl font-bold text-blue-400 mb-6">My Mission</h2>
                    <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                        <img src="https://picsum.photos/seed/aaftab/150/150" alt="Aaftab Ahmad Sahab" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"/>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            My name is Aaftab Ahmad Sahab, and I'm a third-year Software Engineering student at Galgotia College of Engineering Technology. I believe that every student has immense potential, but sometimes life's problems and the influence of inauthentic people can cloud our path. My goal is to create a space where you can find clarity, motivation, and practical solutions. I'm here to help you navigate your academic and personal life, build resilience, and forge a path to success with confidence. This is a free initiative to build a strong, supportive community.
                        </p>
                    </div>
                </section>

                {/* Connect Section */}
                <section id="connect" className="mb-24">
                    <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">How to Connect</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <Card title="Share Your Thoughts" icon={<SendIcon />}>
                            <p className="text-gray-400 mb-4">Have a specific problem or an idea to share? Send it directly to me. I'll personally review it and get back to you with suggestions.</p>
                            <form onSubmit={handleProblemSubmit}>
                                <textarea
                                    value={problem}
                                    onChange={(e) => setProblem(e.target.value)}
                                    className="w-full h-32 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                                    placeholder="Describe your situation, challenge, or idea here..."
                                ></textarea>
                                <Button type="submit" className="mt-4 w-full">Send Message</Button>
                                {messageSent && <p className="text-green-400 mt-4 text-center">Your message has been sent successfully!</p>}
                            </form>
                        </Card>
                        <Card title="Direct Contact & Sessions" icon={<UsersIcon />}>
                           <p className="text-gray-400 mb-6">Reach out directly or schedule a time to talk. We can connect one-on-one or you can join a group motivation session.</p>
                           <div className="space-y-4">
                               <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
                                    <PhoneIcon className="w-6 h-6 text-blue-400"/>
                                    <a href="tel:9919329280" className="text-lg hover:text-blue-300 transition-colors">9919329280</a>
                               </div>
                               <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
                                    <MailIcon className="w-6 h-6 text-blue-400"/>
                                    <a href="mailto:aaftabahmad2509@gmail.com" className="text-lg hover:text-blue-300 transition-colors">aaftabahmad2509@gmail.com</a>
                               </div>
                           </div>
                           <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <Button className="w-full text-center" onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}>
                                   Schedule 1-on-1
                                </Button>
                                <Button variant="secondary" className="w-full text-center">Join Group Session</Button>
                           </div>
                        </Card>
                    </div>
                </section>

                {/* Calendar Section */}
                <section id="calendar" className="mb-24">
                    <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Book an Appointment</h2>
                     <Card title="My Availability" icon={<Calendar />}>
                        <p className="text-gray-400 mb-6 text-center">Select a date to request a free one-on-one session. I'll confirm via email.</p>
                        <Calendar />
                    </Card>
                </section>
                
                {/* Donation Section */}
                <section id="support" className="text-center">
                    <h2 className="text-4xl font-bold text-blue-400 mb-6">Support the Foundation</h2>
                    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                        <HeartIcon className="w-12 h-12 mx-auto text-pink-500 mb-4"/>
                        <p className="text-lg text-gray-300 mb-6">
                            My services are completely free. However, if you find value in this mission and wish to help it grow, you can contribute. Every donation helps in reaching more students and widening our impact.
                        </p>
                        <div className="flex justify-center mb-6">
                            <img src="https://picsum.photos/seed/qr/200/200" alt="Donation QR Code" className="rounded-lg border-4 border-gray-600"/>
                        </div>
                        <Button variant="special">Donate to the Cause</Button>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-gray-800/50 border-t border-gray-700 mt-20 py-8">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Aaftab Ahmad Sahab. All rights reserved.</p>
                    <p className="mt-2">A mission to guide, motivate, and empower.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="mailto:aaftabahmad2509@gmail.com" className="hover:text-blue-400 transition-colors"><MailIcon className="w-6 h-6"/></a>
                        <a href="tel:9919329280" className="hover:text-blue-400 transition-colors"><PhoneIcon className="w-6 h-6"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
