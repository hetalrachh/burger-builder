import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-orders";

//sync action creator
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

//sync action creator
export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

//since our async code does not return any action create below action which dispatches a new action
export const purchaseBurgerStart = () => {
  return { type: actionTypes.PURCHASE_BURGER_START };
};

//async action creator, available by redux-thunk
export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData)); //response.data.name is the id of the order
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      }); //orders = node name
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

//action creators for fetch orders
export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

//async action creator to fetch orders
export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart()); //to show spinner
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"'; //filtering orders
    axios
      .get("orders.json" + queryParams)
      .then(response => {
        console.log(response);
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }

        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
