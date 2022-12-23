import { PromoFilm } from '../types/PromoFilm';

const promoMovie: PromoFilm = {
  id: 9,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  videoLink:
    'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink:
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description:
    'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: ['Bill Murray'],
  runTime: 99,
  genre: 'Drama',
  released: 2014,
  isFavorite: false
};

export default promoMovie;
