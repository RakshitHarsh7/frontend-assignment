import React from 'react';
import maincontent from '../assets/maincontent.svg'

const MainContent = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center text-white bg-black p-8">
      <div className="mb-8">
        <img src={maincontent} alt="Sales Pipeline" className="w-32 h-32 mx-auto" />
      </div>
      <h2 className="text-2xl font-bold mb-4">It's the beginning of a legendary sales pipeline</h2>
      <p className="text-gray-400">When you have inbound E-mails you'll see them here</p>
    </div>
  );
};

export default MainContent;
