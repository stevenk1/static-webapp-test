import React from 'react';
import { Camera } from 'lucide-react';
import { usePhotoContext } from '../context/PhotoContext';

const Header: React.FC = () => {
  const { currentView, currentAlbum, navigateToAlbums } = usePhotoContext();
  
  // Determine the title based on the current view
  const getTitle = () => {
    if (currentView === 'albums') return 'Photo Albums';
    if (currentView === 'photos' && currentAlbum) return currentAlbum.title;
    if (currentView === 'photoDetail') return 'Photo Detail';
    return 'Photo Albums';
  };
  
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera size={28} className="text-gray-800" />
          <h1 className="text-xl font-medium text-gray-800">Memories</h1>
        </div>
        
        <div className="flex items-center">
          {currentView !== 'albums' && (
            <button 
              onClick={navigateToAlbums}
              className="text-sm py-1 px-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-800"
            >
              Back to Albums
            </button>
          )}
          <h2 className="text-lg font-medium ml-4 text-gray-700">{getTitle()}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;