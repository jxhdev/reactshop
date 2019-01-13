import * as React from 'react';
import { IProduct } from './ProductsData';
import { Link } from 'react-router-dom';
import withLoader from './withLoader';

interface IProps {
  products: IProduct[];
  search: string;
  loading: boolean;
}

const ProductList: React.FunctionComponent<IProps> = props => {
  const { products, search } = props;
  return (
    <ul className="product-list">
      {products.map(product => {
        if (
          !search ||
          (search &&
            product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        ) {
          return (
            <li key={product.id} className="product-list-item">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default withLoader(ProductList);
