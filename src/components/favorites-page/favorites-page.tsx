import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Card from '../card/card';
import getFavoritiesByCity from '../../utils/favorities-by-city';
import { useAppSelector } from '../hooks';
import { offersPreview } from '../../mock/offers-preview';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { fillingOffers } from '../store/action';


const FavoritesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fillingOffers(offersPreview));
  }, [dispatch]);


  const offers = useAppSelector((state) => state.offers);
  const allFavoritesOffers = offers.filter((offer) => offer.isFavorite);

  const favoritesByCity = getFavoritiesByCity(offers);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{allFavoritesOffers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(
                ([city, groupedFavorities]) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedFavorities.filter((offer) => offer.isFavorite).map((offer) => (

                        <Card offer={offer} key={offer.id} block="favorites"/>
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
        </Link>
      </footer>
    </div>
  );
};
export default FavoritesPage;
