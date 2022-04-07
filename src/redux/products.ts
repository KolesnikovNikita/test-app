import Product from '../interface/Product'
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_ERROR = 'SET_ERROR';

interface State {
  list: Product[]
}

export type ProductState = {
  list: Product[]
}

const initialState = {
  list: []
}

export const setProductAction = (payload: Product[]) => {
  return {
    type: SET_PRODUCTS,
    payload
  }
}

type setErrorLoadingAction = {
  type: typeof SET_PRODUCTS,
  payload: Product[]
}


type setProductsAction = {
  type: typeof SET_ERROR,
  error: boolean
}

type Action = setProductsAction | setErrorLoadingAction

export const products = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case SET_PRODUCTS: {
      return {
        list: action.payload
      }
    }
    case SET_ERROR: {
      return {
        error: action.error
      }
    }
    default:
      return state;
  }
}