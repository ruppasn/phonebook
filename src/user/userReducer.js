import { FETCH_USERS_SUCCESS } from "./userActionTypes";

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}