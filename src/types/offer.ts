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

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer = {
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
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

