import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose
} from 'redux';

import thunk from 'redux-thunk';

import { productsReducer } from './ProductsReducer';
import { IProductsState } from './ProductsTypes';
import { IBasketState } from './BasketTypes';
import { basketReducer } from './BasketReducer';

export interface IApplicationState {
  products: IProductsState;
  basket: IBasketState;
}

const rootReducer = combineReducers<IApplicationState>({
  basket: basketReducer,
  products: productsReducer
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}
