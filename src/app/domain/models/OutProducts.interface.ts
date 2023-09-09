export interface OutProducts {
  code: number;
  message: string;
  products: Product[];
}

export interface Product {
  ref: string;
  image: string;
  title: string;
  description: string;
  message: string;
  precie: string;
  sizes: Size[];
}

export enum Size {
  L = "L",
  M = "M",
  S = "S",
  XS = "XS",
  Xl = "XL",
  XXl = "XXL",
}
