import React from 'react';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-border"></div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-brand-subtle space-y-4 md:space-y-0">
          <p className="text-center md:text-left">&copy; 2025 AD-Ityaadi Creative Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="tel:8100108145" className="flex items-center hover:text-brand-text transition-colors">
              <PhoneIcon />
              <span className="ml-2">8100 108 145</span>
            </a>
            <a href="mailto:info@adityaadi.in" className="flex items-center hover:text-brand-text transition-colors">
              <MailIcon />
              <span className="ml-2">info@adityaadi.in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;