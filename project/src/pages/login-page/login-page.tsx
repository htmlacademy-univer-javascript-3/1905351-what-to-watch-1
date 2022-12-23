import { Link, useNavigate } from 'react-router-dom';
import PageFooter from '../../components/page-footer/page-footer';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/AuthData';
import { useRef } from 'react';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../utils/constants';

function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoute.Home);
  };

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <Link to='/' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </Link>
        </div>

        <h1 className='page-title user-page__title'>Sign in</h1>
      </header>

      <div className='sign-in user-page__content'>
        <form action='#' className='sign-in__form'>
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input
                className='sign-in__input'
                type='email'
                placeholder='Email address'
                name='user-email'
                id='user-email'
                ref={emailRef}
              />
              <label
                className='sign-in__label visually-hidden'
                htmlFor='user-email'
              >
                Email address
              </label>
            </div>
            <div className='sign-in__field'>
              <input
                className='sign-in__input'
                type='password'
                placeholder='Password'
                name='user-password'
                id='user-password'
                ref={passwordRef}
              />
              <label
                className='sign-in__label visually-hidden'
                htmlFor='user-password'
              >
                Password
              </label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button
              className='sign-in__btn'
              type='submit'
              onClick={(evt) => {
                evt.preventDefault();

                if (emailRef.current !== null && passwordRef.current !== null) {
                  onSubmit({
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                  });
                }
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
}

export default LoginPage;
