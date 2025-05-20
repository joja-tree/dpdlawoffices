import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-serif font-bold text-white mb-2">
          <span className="text-blue-600">DPD</span> Law Offices
        </h2>
        <p className="text-slate-400">Loading your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;