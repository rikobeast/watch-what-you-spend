import Card from 'components/Card';
import React, { useMemo } from 'react';
import Product from './Product';
import { ProductType } from 'types/Product.types';
import { transformCurrency } from 'utils/transformCurrency';

export interface DetailedDayInformationProps {
  products: ProductType[];
  total: number;
}

const DetailedDayInformation: React.FC<DetailedDayInformationProps> = ({
  products,
  total,
}) => {
  const totalPrice = useMemo(() => transformCurrency(total), [total]);
  const hasProducts = useMemo(() => products.length > 0, [products]);

  return (
    <div className="p-2 sm:p-0">
      <Card className="sm:ml-2 p-2">
        <div className="flex flex-col p-1 ">
          <h1 className="text-sm text-lg text-center p-4 font-bold ">
            Expenses for the selected day
          </h1>
          <div
            className={`${
              hasProducts ? `border-b-4` : `border-0`
            } border-dark-primary`}
          >
            {products.map((product) => (
              <Product
                key={`${product.name}-${product.id}`}
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
              />
            ))}
          </div>
          {products && products.length ? (
            <div className="text-md font-bold text-right py-3 px-5">{`Total: ${totalPrice} BGN`}</div>
          ) : (
            <div className="text-center border-t border-dark-primary pt-3">
              No expenses for the current day
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default DetailedDayInformation;
