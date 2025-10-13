import React from 'react';

interface Package {
  price: number;
  posts: string;
  stories: string;
  shootDays: string;
  influencers: string;
  boosting: string;
  reach: string;
  engagement: string;
  isPopular?: boolean;
}

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const PackageCard: React.FC<Package> = ({ price, posts, stories, shootDays, influencers, boosting, reach, engagement, isPopular }) => {
    const formattedPrice = new Intl.NumberFormat('en-IN').format(price);

    return (
        <div className={`relative bg-white p-6 rounded-xl border transition-all duration-300 ease-in-out h-full flex flex-col ${isPopular ? 'border-blue-500 shadow-xl' : 'border-brand-border shadow-md'}`}>
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                </div>
            )}
            <div className="flex-grow">
                <h3 className="text-2xl font-bold font-serif text-brand-dark-blue text-center">₹{formattedPrice} <span className="text-base font-normal text-gray-500">/ month</span></h3>
                <div className="border-t my-5"></div>
                <ul className="space-y-3 text-brand-subtle">
                    <li className="flex items-start"><CheckIcon /><span><span className="font-semibold text-brand-text">{posts}</span> social media posts</span></li>
                    <li className="flex items-start"><CheckIcon /><span><span className="font-semibold text-brand-text">{stories}+</span> Instagram stories</span></li>
                    <li className="flex items-start"><CheckIcon /><span><span className="font-semibold text-brand-text">{shootDays}</span> shoot day for photography</span></li>
                    <li className="flex items-start"><CheckIcon /><span><span className="font-semibold text-brand-text">{influencers}</span> influencer collaborations</span></li>
                    <li className="flex items-start"><CheckIcon /><span><span className="font-semibold text-brand-text">{boosting}</span> paid post boosting</span></li>
                </ul>
                <div className="mt-6 pt-5 border-t space-y-4">
                    <div className="text-center">
                        <p className="text-sm text-brand-subtle">Minimum Reach</p>
                        <p className="text-xl font-bold text-brand-dark-blue">{reach}+</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-brand-subtle">Expected Engagement</p>
                        <p className="text-xl font-bold text-brand-dark-blue">{engagement}+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PackagesSection: React.FC = () => {
    const packages: Package[] = [
        { price: 10000, posts: '4', stories: '20', shootDays: '1', influencers: '2', boosting: '1', reach: '15,000', engagement: '350' },
        { price: 15000, posts: '6', stories: '30', shootDays: '1', influencers: '2', boosting: '2', reach: '30,000', engagement: '800', isPopular: true },
        { price: 25000, posts: '10', stories: '30', shootDays: '2', influencers: '4', boosting: '4', reach: '50,000', engagement: '1500' },
    ];

    return (
        <div>
            <div className="text-center max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-4xl font-serif font-bold text-brand-dark-blue">Packages & Deliverables</h2>
                <p className="mt-2 text-lg text-brand-subtle">
                    Choose a plan that scales with your ambition. All-inclusive pricing for transparent results.
                </p>
            </div>
            <div className="mt-12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 items-stretch">
                {packages.map((pkg, index) => (
                    <div key={pkg.price} className="animate-fadeInUp" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
                        <PackageCard {...pkg} />
                    </div>
                ))}
            </div>
             <div className="mt-12 max-w-3xl mx-auto text-center text-xs text-brand-subtle bg-brand-bg-alt p-4 rounded-lg animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <h4 className="font-bold text-sm text-brand-text mb-2">Notes</h4>
                <p className="mb-1">All ad budgets are included in the package price.</p>
                <p>Influencer collaborations follow a barter system where applicable — product cost (if any) to be borne by the cafe/restaurant.</p>
            </div>
        </div>
    );
};

export default PackagesSection;