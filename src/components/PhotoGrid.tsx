import React, { useRef, useEffect } from 'react';
import { Photo } from '../types';
import { usePhotoContext } from '../context/PhotoContext';
import Loader from './Loader';

type PhotoCardProps = {
  photo: Photo;
  onClick: () => void;
};

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  // Calculate aspect ratio for masonry layout
  const aspectRatio = photo.height / photo.width;
  
  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md bg-white"
      onClick={onClick}
      style={{ gridRowEnd: `span ${Math.ceil(aspectRatio * 10)}` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={photo.url} 
          alt={photo.title} 
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-medium">{photo.title}</h3>
            <p className="text-sm text-white/80">{new Date(photo.date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhotoGrid: React.FC = () => {
  const { currentAlbum, photos, loading, setCurrentView, setCurrentPhoto } = usePhotoContext();
  const gridRef = useRef<HTMLDivElement>(null);
  
  const albumPhotos = photos.filter(photo => currentAlbum && photo.albumId === currentAlbum.id);

  const handlePhotoClick = (photo: Photo) => {
    setCurrentPhoto(photo);
    setCurrentView('photoDetail');
  };

  // Reset scroll position when component mounts
  useEffect(() => {
    if (gridRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  if (loading) {
    return <Loader size="large" />;
  }

  if (albumPhotos.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-xl text-gray-600">No photos in this album</h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" ref={gridRef}>
      <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[20px] gap-4">
        {albumPhotos.map(photo => (
          <PhotoCard 
            key={photo.id} 
            photo={photo} 
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;