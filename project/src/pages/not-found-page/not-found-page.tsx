import { Link } from 'react-router-dom';
import './not-found-page.styles.css';
import UserBlock from '../../components/user-block/user-block';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <header className='page-header header'>
        <div className='logo'>
          <Link to='/' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </Link>
        </div>

        <UserBlock />
      </header>

      <div className='error-page'>
        <section className='error-section'>
          <div className='error-container'>
            <div className='error-code'>404.</div>
            <div className='error-message'>PAGE NOT FOUND</div>
          </div>
          <div className='description'>
            Looks like this page went on a movie shoot.
          </div>
          <Link to='/' className='go-home-button'>
            GO HOME
          </Link>
        </section>
        <footer className='footer'>
          <div className='logo'>
            <Link to='/' className='logo__link logo__link--light'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </Link>
          </div>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default NotFoundPage;
