import * as React from 'react';
import { IProduct } from './ProductsData';
import Tabs from './Tabs';

interface IProps {
  product: IProduct;
  inBasket: boolean;
  onAddToBasket: () => void;
}

const Product: React.FunctionComponent<IProps> = props => {
  const product = props.product;
  const handleAddClick = () => {
    props.onAddToBasket();
  };
  return (
    <>
      <h1>{product.name}</h1>
      <Tabs>
        <Tabs.Tab
          name="Description"
          initialActive={true}
          heading={() => <b>Description</b>}
        >
          <p>{product.description}</p>

          <p className="product-price">
            {new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency'
            }).format(product.price)}
          </p>
          {!props.inBasket && (
            <button onClick={handleAddClick}>Add to basket</button>
          )}
        </Tabs.Tab>
        <Tabs.Tab
          name="Reviews"
          initialActive={false}
          heading={() => 'Reviews'}
        >
          <div>
            <ul className="product-reviews">
              {product.reviews.map(review => (
                <li key={review.reviewer} className="product-reviews-item">
                  <i>"{review.comment}"</i> - {review.reviewer}
                </li>
              ))}
            </ul>
          </div>
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default Product;
