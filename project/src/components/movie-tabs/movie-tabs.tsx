import { MOVIE_PAGE_TABS } from '../../utils/constants';
import { changeFilmTab } from '../../store/action';
import { useAppDispatch } from '../../hooks';

type MovieTabsProps = {
  currentTab: string;
  updateTab: (a: string) => void;
};

function MovieTabs({ currentTab, updateTab }: MovieTabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <nav className='film-nav film-card__nav'>
      <ul className='film-nav__list'>
        {MOVIE_PAGE_TABS.map((tab) => (
          <li
            key={tab}
            className={`film-nav__item ${
              currentTab === tab ? 'film-nav__item--active' : ''
            }`}
          >
            <a
              href='/'
              className='film-nav__link'
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({ currentTab: tab }));
                updateTab(tab);
              }}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MovieTabs;
