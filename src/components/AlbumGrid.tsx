import React from 'react';
import { Album, Photo } from '../types';
import { usePhotoContext } from '../context/PhotoContext';
import Loader from './Loader';

type AlbumCardProps = {
  album: Album;
  coverPhoto?: Photo;
  onClick: () => void;
};

const AlbumCard: React.FC<AlbumCardProps> = ({ album, coverPhoto, onClick }) => {
  return (
    <div 
      className="group cursor-pointer rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        {coverPhoto ? (
          <img 
            src={coverPhoto.url} 
            alt={album.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Cover Image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{album.title}</h3>
        <p className="text-sm text-gray-500">{new Date(album.date).toLocaleDateString()}</p>
        {album.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{album.description}</p>
        )}
      </div>
    </div>
  );
};

const AlbumGrid: React.FC = () => {
  const { albums, photos, loading, setCurrentView, setCurrentAlbum } = usePhotoContext();

  const handleAlbumClick = (album: Album) => {
    setCurrentAlbum(album);
    setCurrentView('photos');
  };

  // Find cover photo for each album
  const getAlbumCoverPhoto = (album: Album): Photo | undefined => {
    return photos.find(photo => photo.id === album.coverPhotoId);
  };

  if (loading) {
    return <Loader size="large" />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map(album => (
          <AlbumCard 
            key={album.id} 
            album={album} 
            coverPhoto={getAlbumCoverPhoto(album)}
            onClick={() => handleAlbumClick(album)}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;