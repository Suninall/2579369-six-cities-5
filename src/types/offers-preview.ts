import { CityName } from '../const/const';

export type Location = {
  latitude: number;
  longitude:number;
  zoom:number;
}

export type City = {
  name:CityName;
  location:Location;
}


export type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium : boolean;
  rating: number;
  previewImage: string;
}

export type OffersPreview = OfferPreview[];
