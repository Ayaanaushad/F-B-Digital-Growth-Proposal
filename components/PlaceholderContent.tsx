import React from 'react';

interface PlaceholderContentProps {
  title: string;
}

const PlaceholderContent: React.FC<PlaceholderContentProps> = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-serif font-bold text-brand-dark-blue">
        {title}
      </h2>
      <p className="mt-2 text-lg text-brand-subtle">
        Detailed analysis and strategy for this section will be presented here.
      </p>
      <div className="mt-8 text-lg text-brand-text leading-relaxed bg-slate-100 p-8 rounded-lg border border-brand-border">
        <p>
          Content for the <span className="font-semibold">{title}</span> section is being prepared and will be available soon. This area will contain in-depth information, charts, and strategic recommendations tailored to your market dominance goals.
        </p>
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

export default PlaceholderContent;