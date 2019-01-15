import React, { Component } from 'react';
import { IProduct } from './ProductsData';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { IApplicationState } from './Store';
import { getProducts } from './ProductsActions';
import withLoader from './withLoader';
import ProductsList from './ProductsList';

interface IState {
  products: IProduct[];
  search: string;
  loading: boolean;
}

interface IProps extends RouteComponentProps {
  getProducts: typeof getProducts;
  loading: boolean;
  products: IProduct[];
}

class ProductsPage extends Component<IProps> {
  private _isMounted = false;

  public async componentDidMount() {
    this.props.getProducts();
  }

  public render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get('search') || '';
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>
        <ProductsList
          loading={this.props.loading}
          products={this.props.products}
          search={search}
        />
      </div>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.products.productsLoading,
    products: store.products.products
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProducts: () => dispatch(getProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
