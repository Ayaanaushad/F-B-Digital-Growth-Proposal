import React from 'react';

interface StrategyItemProps {
  title: string;
  description: string;
}

const StrategyItem: React.FC<StrategyItemProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-brand-border shadow-sm">
      <h3 className="font-serif text-xl font-bold text-brand-dark-blue">{title}</h3>
      <p className="mt-2 text-brand-subtle leading-relaxed">{description}</p>
    </div>
  );
};

const StrategySection: React.FC = () => {
    const strategies = [
        { title: 'Instagram Marketing (Organic + Paid)', description: 'Consistent feed + strategic boosting to reach people actually nearby.' },
        { title: 'In-House Branding Support', description: 'Ensuring the physical space matches the online identity — familiarity builds loyalty.' },
        { title: 'Offer-Driven Engagement Loops', description: 'Special perks for those who interact online → directly driving store visits.' },
        { title: 'Niche Food Influencer Collaborations', description: 'Right creators, not just big names — selected on local relevance, not follower count.' },
        { title: 'Daily Story Activity', description: 'Staying visible daily without being repetitive — menus, behind-the-scenes, live updates, polls.' },
    ];

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-brand-dark-blue">
                How We Get There
            </h2>
            <p className="mt-2 text-lg text-brand-subtle">
                A 5-Point Plan to Move from Online Views to Offline Visits
            </p>
             <div className="mt-10 grid gap-6 sm:grid-cols-1">
                {strategies.map(strategy => (
                    <StrategyItem key={strategy.title} {...strategy} />
                ))}
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default StrategySection;
