import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

//this is an async action
export const initIngredients = () => {
  return (dispatch, getState) => {
    //dispatch is available via redux-thunk
    axios
      .get("https://my-react-burger-ff0f1.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data)); //dispatch another sync action
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
