import { ProductType } from 'types/Product.types';

export const calculateTotalPriceOfProducts = (
  products: ProductType[]
): number => {
  return products.reduce((acc, product) => acc + product.price, 0);
};
