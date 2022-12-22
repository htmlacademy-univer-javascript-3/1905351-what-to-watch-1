import { createAction } from '@reduxjs/toolkit';

export const resetHomeScreen = createAction('main/resetState');
export const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');
export const filterByGenre = createAction('main/filterByGenre');

export const resetFilmScreen = createAction('film/resetState');
export const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');