import MovieCard from '../movie-card/movie-card';
import { Film } from '../../types/Film';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

function FilmList(): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);
  const films = useAppSelector((state) => state.shownFilms);

  const changeActiveCard = (filmId: number) => {
    if (activeCard !== filmId) {
      setActiveCard(filmId);
    }
  };

  return (
    <div className='catalog__films-list'>
      {films.map((film: Film) => (
        <MovieCard
          key={film.id}
          id={film.id}
          title={film.name}
          poster={film.posterImage}
          videoPreview={film.previewVideoLink}
          isMouseOver={activeCard === film.id}
          mouseOverHandler={() => changeActiveCard(film.id)}
          mouseOutHandler={() => changeActiveCard(-1)}
        />
      ))}
    </div>
  );
}

export default FilmList;
