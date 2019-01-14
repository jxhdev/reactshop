import React, { Component } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { IProduct, getProduct } from './ProductsData';
import Product from './Product';

type Props = RouteComponentProps<{ id: string }>;

interface IState {
  product?: IProduct;
  added: boolean;
  loading: boolean;
}

class ProductPage extends Component<Props, IState> {
  _isMounted = true;

  public constructor(props: Props) {
    super(props);
    this._isMounted = false;
    this.state = {
      added: false,
      loading: true
    };
  }

  public async componentDidMount() {
    this._isMounted = true;
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      const product = await getProduct(id);
      if (this._isMounted && product !== null) {
        this.setState({ product, loading: false });
      }
    }
  }

  public componentWillUnmount = () => {
    this._isMounted = false;
  };
  private handleAddClick = () => {
    this.setState({ added: true });
  };

  private navAwayMessage = () => {
    return 'Are you sure you want to leave without buying this product?';
  };

  public render() {
    return (
      <div className="page-container">
        <Prompt when={!this.state.added} message={this.navAwayMessage} />
        {this.state.product || this.state.loading ? (
          <Product
            loading={this.state.loading}
            product={this.state.product}
            inBasket={this.state.added}
            onAddToBasket={this.handleAddClick}
          />
        ) : (
          <p>Product not found!</p>
        )}
      </div>
    );
  }
}

export default ProductPage;
