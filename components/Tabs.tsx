import React from 'react';

interface IconProps {
  className?: string;
}

const SuccessIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const StrategyIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const PackagesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);


interface Tab {
  label: string;
  icon: React.ReactElement<IconProps>;
}

const TABS: Tab[] = [
  { label: 'Defining Success', icon: <SuccessIcon /> },
  { label: 'How We Get There', icon: <StrategyIcon /> },
  { label: 'Packages & Deliverables', icon: <PackagesIcon /> },
];

interface TabsProps {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-bg-alt p-1.5 rounded-xl shadow-inner inline-flex items-center justify-center space-x-2 w-full">
            {TABS.map((tab) => {
                const isActive = activeTab === tab.label;
                return (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-blue-500 ${isActive ? 'bg-white shadow-md text-brand-dark-blue' : 'text-brand-subtle hover:bg-slate-200/60 hover:text-brand-text'}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {React.cloneElement(tab.icon, { className: 'w-5 h-5' })}
                        <span className={`text-sm font-medium ${isActive ? 'font-semibold' : ''}`}>{tab.label}</span>
                    </button>
                );
            })}
        </div>
    </div>
  );
};

export default Tabs;
