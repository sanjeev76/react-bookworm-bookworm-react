import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

// thunk action is just a function that returns another function 
// will made API request, all our api request will store in one api oject
// it will return the promice and the data that return the serer
// dispatche redux ation that will change reducers in redux store
export const login = credentials => dispatch =>
 api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));