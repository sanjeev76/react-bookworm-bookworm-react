/*Reducdr is a function that take state and return a new state */
import { combineReducers } from "redux"; /* combine multiple reducers into one */

export default combineReducers({
    user: () => ({}) /* user we enter the first entity in our store, we can store here email and JWT, we can inspect in browser */
});
