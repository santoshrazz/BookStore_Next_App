export interface PRODUCT {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  rating: Rate;
}

interface Rate {
  rate: number;
  count: number;
}
