import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import Cards from '../cards-list/cards-list';
import { OfferPreview } from '../../types/offers-preview';
import { addPluralEnding } from '../../utils/common';
import { AppRoute} from '../../const/const';
import { useState, useMemo } from 'react';
import Map from '../map/map';
import CityList from './city-list';
import { Cities } from '../../mock/cities';
import { useAppSelector } from '../hooks';
import { offersPreview } from '../../mock/offers-preview';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { fillingOffers} from '../store/action';
import Sorting from './sorting';
import sort from '../../utils/sort';

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillingOffers(offersPreview));
  }, [dispatch]);

  const activeCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const activeSort = useAppSelector((state) => state.sort);
  const filteredOffers = allOffers.filter((offer) => offer.city.name === activeCity);
  const allFavoritesOffers = allOffers.filter((offer) => offer.isFavorite);
  const cityInfotmation = Cities.find((city) => city.name === activeCity) || Cities[0];

  const [activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);
  const sortedOffers = useMemo(() => sort[activeSort](filteredOffers), [filteredOffers,activeSort]);

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={`${AppRoute.Favorites}`}>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={Cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} place{addPluralEnding(filteredOffers.length)} to stay in Amsterdam</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <Cards offers = {sortedOffers} setActiveCard={setActiveCard}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city= {cityInfotmation} offers={filteredOffers} activeCardId={activeCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

};
export default MainPage;
