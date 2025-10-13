import React from 'react';

const ExecutiveSummary: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-brand-dark-blue">
                Executive Summary
            </h2>
            <p className="mt-2 text-lg text-brand-subtle">
                A 30,000-Foot View of the Digital Landscape
            </p>
            <div className="mt-8 text-lg text-brand-text leading-relaxed space-y-4">
                <p>
                    Omni Astra Pvt. Ltd. stands as a prestigious and trusted brand with strong authority in its space. However, your digital identity does not yet reflect the same level of influence and excellence. This gap limits growth and engagement opportunities. With the right digital transformation, your online presence can truly mirror the strength and stature your brand already commands.
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

export default ExecutiveSummary;
