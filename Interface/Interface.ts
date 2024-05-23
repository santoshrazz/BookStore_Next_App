export interface PRODUCT {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  rating: Rate;
}

export interface PRODUCT_CATEGORY {
  title: string;
  subtitile: string;
  image: string;
  startPrice: number;
  redirectURL: string;
}
interface Rate {
  rate: number;
  count: number;
}
