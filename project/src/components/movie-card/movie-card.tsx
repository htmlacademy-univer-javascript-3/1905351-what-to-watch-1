import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import VideoPreview from '../video-preview/video-preview';
import { useAppDispatch } from '../../hooks';
import { resetHomeScreen } from '../../store/action';

type MovieCardProps = {
  id: number;
  title: string;
  poster: string;
  videoPreview: string;
  mouseOverHandler: (event: MouseEvent<HTMLDivElement>) => void;
  mouseOutHandler: (event: MouseEvent<HTMLDivElement>) => void;
  isMouseOver: boolean;
};

function MovieCard({
  id,
  title,
  poster,
  videoPreview,
  mouseOverHandler,
  mouseOutHandler,
  isMouseOver
}: MovieCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseOutHandler}
    >
      <div className='small-film-card__image'>
        {isMouseOver ? (
          <VideoPreview poster={poster} videoPreview={videoPreview} />
        ) : (
          <img src={poster} alt={title} width='280' height='175' />
        )}
      </div>
      <h3 className='small-film-card__title'>
        <Link
          to={`/films/${id}`}
          className='small-film-card__link'
          onClick={() => {
            dispatch(resetHomeScreen);
          }}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
