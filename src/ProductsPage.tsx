import React, { Component } from 'react';
import { IProduct, getProducts } from './ProductsData';
import { Link, RouteComponentProps } from 'react-router-dom';
import withLoader from './withLoader';
import ProductList from './ProductList';

interface IState {
  products: IProduct[];
  search: string;
  loading: boolean;
}

class ProductsPage extends Component<RouteComponentProps, IState> {
  private _isMounted = false;
  public constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      products: [],
      search: '',
      loading: true
    };
    this._isMounted = false;
  }

  public async componentDidMount() {
    this._isMounted = true;
    const products = await getProducts();
    if (this._isMounted && products !== null) {
      this.setState({
        products,
        loading: false
      });
    }
  }

  public componnentWillUnmount() {
    this._isMounted = false;
  }

  public static getDerivedStateFromProps(
    props: RouteComponentProps,
    state: IState
  ) {
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get('search');
    return {
      products: state.products,
      search
    };
  }

  public render() {
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>
        <ProductList
          loading={this.state.loading}
          products={this.state.products}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default ProductsPage;
