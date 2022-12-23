import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../utils/constants';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatar = useAppSelector((state) => state.avatar);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className='user-block'>
        <li className='user-block__item'>
          <Link className='user-block__link' to={`${AppRoute.Login}`}>
            Login
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className='user-block'>
      <li className='user-block__item'>
        <div className='user-block__avatar'>
          <img src={avatar || ''} alt='User avatar' width='63' height='63' />
        </div>
      </li>
      <li className='user-block__item'>
        <Link
          to={AppRoute.Home}
          className='user-block__link'
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
