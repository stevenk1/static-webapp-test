import { Album, Photo } from '../types';

// Generate a set of mock albums
export const mockAlbums: Album[] = [
  {
    id: 'album-1',
    title: 'Summer Vacation',
    coverPhotoId: 'photo-1',
    description: 'Memories from our summer trip to the coast',
    date: '2024-07-15'
  },
  {
    id: 'album-2',
    title: 'Urban Exploration',
    coverPhotoId: 'photo-7',
    description: 'Architectural wonders and city life',
    date: '2024-06-22'
  },
  {
    id: 'album-3',
    title: 'Nature & Wildlife',
    coverPhotoId: 'photo-14',
    description: 'Beautiful landscapes and wildlife encounters',
    date: '2024-05-10'
  },
  {
    id: 'album-4',
    title: 'Family Gatherings',
    coverPhotoId: 'photo-19',
    description: 'Special moments with family',
    date: '2024-04-05'
  }
];

// Generate a set of mock photos with varying dimensions to create an interesting masonry layout
export const mockPhotos: Photo[] = [
  // Album 1: Summer Vacation
  {
    id: 'photo-1',
    url: 'https://images.pexels.com/photos/1249586/pexels-photo-1249586.jpeg',
    title: 'Beach Sunset',
    description: 'Beautiful sunset at the beach',
    date: '2024-07-15',
    location: 'Malibu, CA',
    albumId: 'album-1',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-2',
    url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
    title: 'Ocean Waves',
    description: 'Waves crashing on the shore',
    date: '2024-07-16',
    location: 'Santa Monica, CA',
    albumId: 'album-1',
    width: 800,
    height: 1200
  },
  {
    id: 'photo-3',
    url: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
    title: 'Coastal Highway',
    description: 'Driving along the scenic coastal highway',
    date: '2024-07-17',
    location: 'Big Sur, CA',
    albumId: 'album-1',
    width: 1200,
    height: 600
  },
  {
    id: 'photo-4',
    url: 'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg',
    title: 'Beach Bonfire',
    description: 'Evening bonfire with friends',
    date: '2024-07-18',
    location: 'Ventura, CA',
    albumId: 'album-1',
    width: 900,
    height: 1200
  },
  {
    id: 'photo-5',
    url: 'https://images.pexels.com/photos/1214940/pexels-photo-1214940.jpeg',
    title: 'Surfing Adventure',
    description: 'Learning to surf for the first time',
    date: '2024-07-19',
    location: 'Huntington Beach, CA',
    albumId: 'album-1',
    width: 1200,
    height: 900
  },
  {
    id: 'photo-6',
    url: 'https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg',
    title: 'Sunset Dinner',
    description: 'Dinner at a beach-side restaurant',
    date: '2024-07-20',
    location: 'Laguna Beach, CA',
    albumId: 'album-1',
    width: 800,
    height: 800
  },

  // Album 2: Urban Exploration
  {
    id: 'photo-7',
    url: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
    title: 'City Skyline',
    description: 'Downtown skyline at dusk',
    date: '2024-06-22',
    location: 'New York, NY',
    albumId: 'album-2',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-8',
    url: 'https://images.pexels.com/photos/1157855/pexels-photo-1157855.jpeg',
    title: 'Street Art',
    description: 'Colorful mural in the arts district',
    date: '2024-06-23',
    location: 'Brooklyn, NY',
    albumId: 'album-2',
    width: 800,
    height: 1200
  },
  {
    id: 'photo-9',
    url: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg',
    title: 'City Lights',
    description: 'Night view of the busy streets',
    date: '2024-06-24',
    location: 'Manhattan, NY',
    albumId: 'album-2',
    width: 1200,
    height: 600
  },
  {
    id: 'photo-10',
    url: 'https://images.pexels.com/photos/2901321/pexels-photo-2901321.jpeg',
    title: 'Modern Architecture',
    description: 'Exploring contemporary architectural designs',
    date: '2024-06-25',
    location: 'Chicago, IL',
    albumId: 'album-2',
    width: 900,
    height: 1200
  },
  {
    id: 'photo-11',
    url: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg',
    title: 'Bridge View',
    description: 'Iconic bridge connecting the city',
    date: '2024-06-26',
    location: 'San Francisco, CA',
    albumId: 'album-2',
    width: 1200,
    height: 900
  },
  {
    id: 'photo-12',
    url: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg',
    title: 'Urban Park',
    description: 'Green space in the middle of the city',
    date: '2024-06-27',
    location: 'Boston, MA',
    albumId: 'album-2',
    width: 800,
    height: 800
  },
  {
    id: 'photo-13',
    url: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png',
    title: 'Subway Station',
    description: 'Underground transit hub',
    date: '2024-06-28',
    location: 'New York, NY',
    albumId: 'album-2',
    width: 1200,
    height: 700
  },

  // Album 3: Nature & Wildlife
  {
    id: 'photo-14',
    url: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg',
    title: 'Mountain Range',
    description: 'Majestic mountain vista at dawn',
    date: '2024-05-10',
    location: 'Yosemite National Park, CA',
    albumId: 'album-3',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-15',
    url: 'https://images.pexels.com/photos/802127/pexels-photo-802127.jpeg',
    title: 'Forest Trail',
    description: 'Hiking through the dense forest',
    date: '2024-05-11',
    location: 'Redwood National Park, CA',
    albumId: 'album-3',
    width: 800,
    height: 1200
  },
  {
    id: 'photo-16',
    url: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg',
    title: 'Wildlife Encounter',
    description: 'A deer spotted during our hike',
    date: '2024-05-12',
    location: 'Yellowstone National Park, WY',
    albumId: 'album-3',
    width: 1200,
    height: 600
  },
  {
    id: 'photo-17',
    url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    title: 'Sunset over the Lake',
    description: 'Peaceful evening by the water',
    date: '2024-05-13',
    location: 'Lake Tahoe, CA',
    albumId: 'album-3',
    width: 900,
    height: 1200
  },
  {
    id: 'photo-18',
    url: 'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg',
    title: 'Desert Landscape',
    description: 'Exploring the arid beauty of the desert',
    date: '2024-05-14',
    location: 'Joshua Tree National Park, CA',
    albumId: 'album-3',
    width: 1200,
    height: 900
  },

  // Album 4: Family Gatherings
  {
    id: 'photo-19',
    url: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg',
    title: 'Family Dinner',
    description: 'Annual family reunion dinner',
    date: '2024-04-05',
    location: 'Home',
    albumId: 'album-4',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-20',
    url: 'https://images.pexels.com/photos/34763/baby-sleepy-child-sweet.jpg',
    title: 'Baby\'s First Steps',
    description: 'Milestone moment captured',
    date: '2024-04-06',
    location: 'Home',
    albumId: 'album-4',
    width: 800,
    height: 1200
  },
  {
    id: 'photo-21',
    url: 'https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg',
    title: 'Picnic at the Park',
    description: 'Weekend outing with the whole family',
    date: '2024-04-07',
    location: 'Central Park',
    albumId: 'album-4',
    width: 1200,
    height: 600
  },
  {
    id: 'photo-22',
    url: 'https://images.pexels.com/photos/8260140/pexels-photo-8260140.jpeg',
    title: 'Birthday Celebration',
    description: 'Grandma\'s 80th birthday party',
    date: '2024-04-08',
    location: 'Family Restaurant',
    albumId: 'album-4',
    width: 900,
    height: 1200
  },
  {
    id: 'photo-23',
    url: 'https://images.pexels.com/photos/5604237/pexels-photo-5604237.jpeg',
    title: 'Holiday Gathering',
    description: 'Christmas morning gift exchange',
    date: '2024-04-09',
    location: 'Home',
    albumId: 'album-4',
    width: 1200,
    height: 900
  }
];