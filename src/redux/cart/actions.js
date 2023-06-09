import CartActionTypes from './action-types';

export const addProductToCart = payload => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = payload => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductToCart = payload => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductToCart = payload => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
