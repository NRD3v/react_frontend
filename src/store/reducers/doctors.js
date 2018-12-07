import {actionsTypes} from "../actions/doctors";

const initialState = {
    list: []
};

export const doctors = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FETCH_DOCTORS:
            state = {
                ...state,
                list: action.payload
            };
            break;
        case actionsTypes.RESET_DOCTORS:
            state = {
                ...state,
                list: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
