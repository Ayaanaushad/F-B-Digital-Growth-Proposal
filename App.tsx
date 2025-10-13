import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DefiningSuccessSection from './components/DefiningSuccessSection';
import StrategySection from './components/StrategySection';
import PackagesSection from './components/PackagesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Defining Success');

  const renderContent = () => {
    switch (activeTab) {
      case 'Defining Success':
        return <DefiningSuccessSection />;
      case 'How We Get There':
        return <StrategySection />;
      case 'Packages & Deliverables':
        return <PackagesSection />;
      default:
        return <DefiningSuccessSection />;
    }
  };

  return (
    <div className="bg-brand-bg text-brand-text font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <main className="py-12 flex-grow">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className="mt-12 container mx-auto px-4 sm:px-6 lg:px-8">
            {renderContent()}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;