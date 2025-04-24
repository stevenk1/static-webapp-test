export interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
  date: string;
  location?: string;
  albumId: string;
  width: number;
  height: number;
}

export interface Album {
  id: string;
  title: string;
  coverPhotoId: string;
  description?: string;
  date: string;
}