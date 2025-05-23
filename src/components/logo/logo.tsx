import {Link} from 'react-router-dom';

const Logo = (): JSX.Element => (
  <div className="header__left">
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
    </Link>
  </div>
);

export default Logo;
