import CartActionTypes from './action-types';

const initialState = {
  products: [],
};

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = prevState.products.some(
        product => product.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...prevState,
          products: prevState.products.map(product =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...prevState,
        products: [...prevState.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...prevState,
        products: prevState.products.filter(
          product => product.id !== action.payload
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...prevState,
        products: prevState.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...prevState,
        products: prevState.products
          .map(product =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter(product => product.quantity > 0),
      };

    default:
      return prevState;
  }
};

export default cartReducer;
