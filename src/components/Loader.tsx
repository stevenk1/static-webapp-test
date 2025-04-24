import React from 'react';

type LoaderProps = {
  size?: 'small' | 'medium' | 'large';
};

const Loader: React.FC<LoaderProps> = ({ size = 'medium' }) => {
  const sizeMap = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 border-gray-900 ${sizeMap[size]}`}></div>
    </div>
  );
};

export default Loader;