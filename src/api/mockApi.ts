import { mockAlbums, mockPhotos } from './mockData';
import { Album, Photo } from '../types';

// Add artificial delay to simulate network requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Fetch all albums
  async getAlbums(): Promise<Album[]> {
    await delay(800);
    return [...mockAlbums];
  },

  // Fetch a single album by ID
  async getAlbum(id: string): Promise<Album | undefined> {
    await delay(600);
    return mockAlbums.find(album => album.id === id);
  },

  // Fetch all photos
  async getAllPhotos(): Promise<Photo[]> {
    await delay(1000);
    return [...mockPhotos];
  },

  // Fetch photos by album ID
  async getPhotosByAlbum(albumId: string): Promise<Photo[]> {
    await delay(800);
    return mockPhotos.filter(photo => photo.albumId === albumId);
  },

  // Fetch a single photo by ID
  async getPhoto(id: string): Promise<Photo | undefined> {
    await delay(500);
    return mockPhotos.find(photo => photo.id === id);
  }
};