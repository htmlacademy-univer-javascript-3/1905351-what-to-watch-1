import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import PageHeader from '../../components/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import { useEffect, useState } from 'react';
import { AuthorizationStatus, MOVIE_PAGE_TABS } from '../../utils/constants';
import MovieInformation from '../../components/movie-information/movie-information';
import SimilarFilmList from '../../components/similar-film-list/similar-film-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-page/loading-screen';
import {
  fetchCommentsByID,
  fetchFilmByID,
  fetchSimilarByID
} from '../../store/api-actions';
import { setDataLoadedStatus } from '../../store/action';

function MoviePage(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(MOVIE_PAGE_TABS[0]);
  const id = Number(useParams().id);
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similar);
  const isLoading = useAppSelector((state) => state.isDataLoaded);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDataLoadedStatus(true));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));
    dispatch(setDataLoadedStatus(false));
  }, [id, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <PageHeader />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film.genre}</span>
                <span className='film-card__year'>{film.released}</span>
              </p>

              <div className='film-card__buttons'>
                <Link
                  to={`/player/${id}`}
                  className='btn btn--play film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  className='btn btn--list film-card__button'
                  type='button'
                  to={'/mylist'}
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </Link>
                {authStatus === AuthorizationStatus.Auth && (
                  <Link
                    to={`/films/${id}/review`}
                    className='btn film-card__button'
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img
                src={film.posterImage}
                alt={`${film.name} poster`}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <MovieTabs currentTab={currentTab} updateTab={setCurrentTab} />

              <MovieInformation currentTab={currentTab} film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <SimilarFilmList similarFilms={similarFilms} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MoviePage;
