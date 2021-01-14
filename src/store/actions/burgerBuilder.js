import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};

export const setIngredient = (ingredietns) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredietns,
  };
};

export const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredient = () => {
  return (dispatch) => {
    axios
      .get(
        "https://burger-builder-5da08-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        dispatch(setIngredient(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientFailed());
      });
  };
};
