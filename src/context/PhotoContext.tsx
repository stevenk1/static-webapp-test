import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Album, Photo } from '../types';
import { api } from '../api/mockApi';

type ViewType = 'albums' | 'photos' | 'photoDetail';

interface PhotoContextType {
  albums: Album[];
  photos: Photo[];
  currentView: ViewType;
  currentAlbum: Album | null;
  currentPhoto: Photo | null;
  loading: boolean;
  error: string | null;
  setCurrentView: (view: ViewType) => void;
  setCurrentAlbum: (album: Album | null) => void;
  setCurrentPhoto: (photo: Photo | null) => void;
  navigateToAlbums: () => void;
  refreshData: () => Promise<void>;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentView, setCurrentView] = useState<ViewType>('albums');
  const [currentAlbum, setCurrentAlbum] = useState<Album | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on mount
  useEffect(() => {
    refreshData();
  }, []);

  // Function to refresh data from API
  const refreshData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [albumsData, photosData] = await Promise.all([
        api.getAlbums(),
        api.getAllPhotos()
      ]);
      
      setAlbums(albumsData);
      setPhotos(photosData);
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to navigate back to albums view
  const navigateToAlbums = () => {
    setCurrentView('albums');
    setCurrentAlbum(null);
    setCurrentPhoto(null);
  };

  const value = {
    albums,
    photos,
    currentView,
    currentAlbum,
    currentPhoto,
    loading,
    error,
    setCurrentView,
    setCurrentAlbum,
    setCurrentPhoto,
    navigateToAlbums,
    refreshData
  };

  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
};

export const usePhotoContext = () => {
  const context = useContext(PhotoContext);
  if (context === undefined) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};