import React from 'react';
import { WritingTools } from './WritingTools';
import { UtilityTools } from './UtilityTools';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AllTools = () => {
  return (
    <div className="pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <AdPlaceholder label="Adsterra Top Banner" />
      </div>
      <WritingTools />
      <div className="max-w-7xl mx-auto px-4">
        <AdPlaceholder label="Adsterra Middle Banner" />
      </div>
      <UtilityTools />
    </div>
  );
};
