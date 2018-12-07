import {actionsTypes} from "../actions/links";

const initialState = {
    list: {},
    highlightedLink: null,
    selectedCity: null,
    selectedPractice: null
};

export const links = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FETCH_LINKS:
            state = {
                ...state,
                list: action.payload
            };
            break;
        case actionsTypes.HIGHLIGHT_LINK:
            state = {
                ...state,
                highlightedLink: action.payload
            };
            break;
        case actionsTypes.RESET_HIGHLIGHT:
            state = {
                ...state,
                highlightedLink: action.payload
            };
            break;
        case actionsTypes.SELECT_CITY:
            state = {
                ...state,
                selectedCity: action.payload
            };
            break;
        case actionsTypes.SELECT_PRACTICE:
            state = {
                ...state,
                selectedPractice: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
