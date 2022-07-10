import React, { useMemo } from 'react';
import { transformCurrency } from 'utils/transformCurrency';

export interface ProductProps {
  productId: number;
  productName: string;
  productPrice: number;
}

const Product: React.FC<ProductProps> = ({
  productId,
  productName,
  productPrice,
}) => {
  const price = useMemo(() => transformCurrency(productPrice), [productPrice]);
  return (
    <div className="flex items-center justify-between py-2 px-5 text-md font-bold first:border-t last:border-0 border-b border-dark-primary">
      <p>{productId}.</p>
      <p>{productName}</p>
      <p>{price} BGN</p>
    </div>
  );
};

export default Product;
