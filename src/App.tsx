import React from 'react';
import { PhotoProvider, usePhotoContext } from './context/PhotoContext';
import Header from './components/Header';
import AlbumGrid from './components/AlbumGrid';
import PhotoGrid from './components/PhotoGrid';
import PhotoDetail from './components/PhotoDetail';

// Main content component that renders the appropriate view
const MainContent: React.FC = () => {
  const { currentView } = usePhotoContext();

  return (
    <main className="min-h-screen bg-gray-50">
      {currentView === 'albums' && <AlbumGrid />}
      {currentView === 'photos' && <PhotoGrid />}
      {currentView === 'photoDetail' && <PhotoDetail />}
    </main>
  );
};

// Root component
function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <MainContent />
      </div>
    </PhotoProvider>
  );
}

export default App;