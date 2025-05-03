"use client";

import React from 'react';
import { Input } from '@/components/ui/input';

const CollegiateCompetitiveBallroomPage = () => {
  // "use client" is a directive that tells Next.js to render this component on the client-side.
  // We need this because we'll be adding interactive elements like a search bar.
  return (
    <div>
      <h1>Collegiate Competitive Ballroom</h1>
      {/* Search Bar Component */}
      <Input 
        placeholder='Search for a competitor'
        className='w-full max-w-md mb-4'
        type='text'
      />
      {/* Table Component */}
    </div>
  );
};

export default CollegiateCompetitiveBallroomPage;
