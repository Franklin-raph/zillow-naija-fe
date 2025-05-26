import React from 'react';

const AgentCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Profile Image Skeleton */}
      <div className="w-[80px] h-[80px] bg-gray-300 rounded-full mb-[-40px] ml-2"></div>
      
      {/* Card Container */}
      <div className="shadow-lg rounded-lg px-4 pb-4 pt-[3rem] border">
        {/* Name Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        
        {/* Location Skeleton */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        
        {/* Email Skeleton */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-40"></div>
        </div>
        
        {/* Member Since Skeleton */}
        <div className="h-3 bg-gray-300 rounded w-28 mt-3 mb-3"></div>
        
        {/* Bottom Section with Rating and Button */}
        <div className="flex items-center justify-between mt-3">
          {/* Rating Skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-300 rounded w-6"></div>
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
          </div>
          
          {/* Button Skeleton */}
          <div className="h-3 bg-gray-300 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default AgentCardSkeleton;