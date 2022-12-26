export const MOVIE_PAGE_TABS = ['Overview', 'Details', 'Reviews'];

export enum AppRoute {
  Home = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films',
  Review = '/review',
  Player = '/player'
}

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoutes {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments'
}

export const DEFAULT_GENRE = 'All genres';
export const MAX_CARDS_SHOWN = 8;
export const SHOW_ERROR_TIME = 4000;
