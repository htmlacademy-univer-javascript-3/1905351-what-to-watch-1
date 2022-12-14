import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilmTab,
  changeGenre,
  increaseCardCount,
  loadComments,
  loadFilm,
  loadFilms, loadPromo,
  loadSimilar,
  requireAuthorization,
  resetCardCount,
  resetFilmScreen,
  resetHomeScreen,
  setAvatar,
  setDataLoadedStatus,
  setError
} from './action';
import { filterFilmsByGenre } from '../utils/filter-films-by-genre';
import Films from '../types/Films';
import {
  AuthorizationStatus,
  DEFAULT_GENRE,
  MAX_CARDS_SHOWN
} from '../utils/constants';
import { Comments } from '../types/Comments';
import { Film } from '../types/Film';

type InitialState = {
  error: string | null;
  avatar: string | null;
  film: Film | null;
  promoFilm: Film | null;
  films: Films;
  similar: Films;
  comments: Comments;
  cardCount: number;
  filteredFilms: Films;
  currentGenre: string;
  isDataLoaded: boolean;
  authorizationStatus: string;
  filmPageTab: string;
};

const initState: InitialState = {
  error: null,
  avatar: null,
  film: null,
  promoFilm: null,
  films: [],
  similar: [],
  comments: [],
  cardCount: 0,
  filteredFilms: [],
  currentGenre: DEFAULT_GENRE,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  filmPageTab: 'Overview'
};

export const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(resetHomeScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount =
        state.films.length < MAX_CARDS_SHOWN
          ? state.films.length
          : MAX_CARDS_SHOWN;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = filterFilmsByGenre(
        state.films,
        action.payload.currentGenre
      );

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount =
        filteredFilms.length < MAX_CARDS_SHOWN
          ? filteredFilms.length
          : MAX_CARDS_SHOWN;
    })
    .addCase(increaseCardCount, (state) => {
      state.cardCount =
        state.cardCount + MAX_CARDS_SHOWN < state.filteredFilms.length
          ? state.cardCount + MAX_CARDS_SHOWN
          : state.filteredFilms.length;
    })
    .addCase(resetCardCount, (state) => {
      state.cardCount =
        state.filteredFilms.length < MAX_CARDS_SHOWN
          ? state.filteredFilms.length
          : MAX_CARDS_SHOWN;
    })
    .addCase(resetFilmScreen, (state) => {
      state.filmPageTab = 'Overview';
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.cardCount = MAX_CARDS_SHOWN;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAvatar, (state, action) => {
      state.avatar = action.payload;
      if (state.avatar === null) {
        localStorage.removeItem('avatar');
      } else {
        localStorage.setItem('avatar', state.avatar);
      }
    })
    .addCase(loadPromo, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSimilar, (state, action) => {
      state.similar = action.payload;
    });
});
