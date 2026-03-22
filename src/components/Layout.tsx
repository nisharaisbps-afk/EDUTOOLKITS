import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AdPlaceholder } from './AdPlaceholder';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdPlaceholder label="Global Bottom Banner" format="skyscraper" />
      </div>
      <Footer />
    </div>
  );
};
