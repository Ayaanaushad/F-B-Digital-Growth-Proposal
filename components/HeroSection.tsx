import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const MetricCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
    return (
        <div className="p-6">
            <h3 className="text-xl font-bold font-serif mb-4 text-gray-700">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ImpactCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold font-serif mb-4 text-brand-dark">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-800 font-medium">
                        <svg className="w-5 h-5 mr-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const HeroSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');

    return (
        <section ref={ref} className={`py-16 md:py-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">Defining Success the <span className="text-brand-gold">Right Way</span></h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    Most cafes and restaurants judge online success by likes and followers. But true growth isn’t measured in vanity metrics — it’s measured in footfall, orders, and loyal regulars.
                </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                <MetricCard title="Common Online Metrics" items={["Followers", "Likes & Comments", "Collabs with influencers", "Story views"]} />
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold mx-auto transform md:rotate-0 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
                <ImpactCard title="Real Business Impact" items={["Actual discovery / new people walking in", "Increase in footfall", "Offers being redeemed", "Better Google reviews & reputation"]} />
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
                <p className="text-2xl font-serif text-gray-800">
                    So, the real question is — where do you want to be?
                </p>
                <p className="mt-2 text-gray-500">
                    Once that’s clear, the strategy writes itself.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;