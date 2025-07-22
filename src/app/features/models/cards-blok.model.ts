export interface Options {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  price: number;
  discountPrice?: number;
  discountLabel?: string;
  image: string;
}
