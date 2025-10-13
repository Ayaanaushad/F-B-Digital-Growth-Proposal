import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-brand-border bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <img 
            src="https://static.wixstatic.com/media/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png/v1/fill/w_186,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png" 
            alt="Logo"
            className="h-14 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;