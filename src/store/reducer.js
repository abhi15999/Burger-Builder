import * as actionTypes from "./actions";

const INGREDIENT_PRICE = {
  salad: 50,
  cheese: 70,
  meat: 60,
  bacon: 80,
};

const initialState = {
  ingredients: {
    cheese: 0,
    meat: 0,
    bacon: 0,
    salad: 0,
  },
  totalPrice: 25,
  purchasable:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]:
            state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
