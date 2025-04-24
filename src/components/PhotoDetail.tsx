import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, X } from 'lucide-react';
import { usePhotoContext } from '../context/PhotoContext';
import Loader from './Loader';

const PhotoDetail: React.FC = () => {
  const { currentPhoto, photos, currentAlbum, setCurrentView, setCurrentPhoto } = usePhotoContext();
  const [infoVisible, setInfoVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get album photos to enable navigation
  const albumPhotos = photos.filter(photo => currentAlbum && photo.albumId === currentAlbum.id);
  
  // Find current photo index
  const currentIndex = currentPhoto ? albumPhotos.findIndex(photo => photo.id === currentPhoto.id) : -1;
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCurrentView('photos');
      } else if (e.key === 'ArrowRight') {
        navigateToNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        navigateToPrevPhoto();
      } else if (e.key === 'i') {
        setInfoVisible(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, albumPhotos]);
  
  // Reset loading state when photo changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentPhoto]);
  
  const navigateToNextPhoto = () => {
    if (currentIndex < albumPhotos.length - 1) {
      setCurrentPhoto(albumPhotos[currentIndex + 1]);
    }
  };
  
  const navigateToPrevPhoto = () => {
    if (currentIndex > 0) {
      setCurrentPhoto(albumPhotos[currentIndex - 1]);
    }
  };
  
  const closePhotoDetail = () => {
    setCurrentView('photos');
  };
  
  const toggleInfo = () => {
    setInfoVisible(prev => !prev);
  };
  
  if (!currentPhoto) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <Loader size="large" />
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black z-20 flex flex-col">
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-30 bg-gradient-to-b from-black/60 to-transparent">
        <button 
          onClick={closePhotoDetail}
          className="text-white p-2 rounded-full hover:bg-black/20 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center">
          <button 
            onClick={toggleInfo}
            className="text-white p-2 rounded-full hover:bg-black/20 transition-colors"
          >
            <Info size={24} />
          </button>
        </div>
      </div>
      
      {/* Main Photo */}
      <div className="flex-1 flex items-center justify-center p-4">
        {isLoading && <Loader size="large" />}
        <img 
          src={currentPhoto.url} 
          alt={currentPhoto.title} 
          className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        {currentIndex > 0 && (
          <button 
            onClick={navigateToPrevPhoto}
            className="bg-black/30 hover:bg-black/50 p-2 m-2 rounded-full transition-colors"
          >
            <ChevronLeft size={30} color="white" />
          </button>
        )}
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        {currentIndex < albumPhotos.length - 1 && (
          <button 
            onClick={navigateToNextPhoto}
            className="bg-black/30 hover:bg-black/50 p-2 m-2 rounded-full transition-colors"
          >
            <ChevronRight size={30} color="white" />
          </button>
        )}
      </div>
      
      {/* Info Panel */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md text-white p-4 transform transition-transform duration-300 ${
          infoVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <h2 className="text-xl font-medium mb-2">{currentPhoto.title}</h2>
        {currentPhoto.description && (
          <p className="text-gray-300 mb-2">{currentPhoto.description}</p>
        )}
        <div className="flex justify-between text-sm text-gray-400">
          <span>{new Date(currentPhoto.date).toLocaleDateString()}</span>
          {currentPhoto.location && <span>{currentPhoto.location}</span>}
        </div>
      </div>
      
      {/* Photo Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {albumPhotos.length}
      </div>
    </div>
  );
};

export default PhotoDetail;