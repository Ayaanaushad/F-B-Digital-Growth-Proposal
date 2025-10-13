import React from 'react';

const MetricCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
    return (
        <div className="p-6">
            <h3 className="text-xl font-bold font-serif mb-4 text-brand-text">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-brand-text">
                        <svg className="w-5 h-5 mr-3 text-brand-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ImpactCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-brand-border">
            <h3 className="text-xl font-bold font-serif mb-4 text-brand-dark-blue">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-brand-text font-medium">
                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DefiningSuccessSection: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 
                className="text-4xl font-serif font-bold text-brand-dark-blue animate-fadeInUp"
                style={{ animationDelay: '0.1s' }}
            >
                Defining Success the Right Way
            </h2>
            <p 
                className="mt-2 text-lg text-brand-subtle animate-fadeInUp"
                style={{ animationDelay: '0.2s' }}
            >
                From Vanity Metrics to Real Business Impact
            </p>
            <div 
                className="mt-8 text-lg text-brand-text leading-relaxed animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
            >
                <p>
                    Most cafes and restaurants judge online success by likes and followers. But true growth isn’t measured in vanity metrics — it’s measured in footfall, orders, and loyal regulars.
                </p>
            </div>

            <div 
                className="mt-12 grid md:grid-cols-3 gap-8 items-center animate-fadeInUp"
                style={{ animationDelay: '0.4s' }}
            >
                <MetricCard title="Common Online Metrics" items={["Followers", "Likes & Comments", "Collabs with influencers", "Story views"]} />
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 mx-auto transform md:rotate-0 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
                <ImpactCard title="Real Business Impact" items={["Actual discovery / new people walking in", "Increase in footfall", "Offers being redeemed", "Better Google reviews & reputation"]} />
            </div>
        </div>
    );
};

export default DefiningSuccessSection;