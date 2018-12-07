import ApiService from "../../services/ApiService";

export const actionsTypes = {
    FETCH_LINKS: "FETCH_LINKS",
    HIGHLIGHT_LINK: "HIGHLIGHT_LINK",
    RESET_HIGHLIGHT: "RESET_HIGHLIGHT",
    SELECT_CITY: "SELECT_CITY",
    SELECT_PRACTICE: "SELECT_PRACTICE"
};

export const fetchLinks = () => dispatch => {
    ApiService.links().then(payload => {
        dispatch({type: actionsTypes.FETCH_LINKS, payload})
    });
};

export const highlightLink = (payload) => dispatch => {
    dispatch({type: actionsTypes.HIGHLIGHT_LINK, payload})
};

export const resetHighlightedLink = (payload) => dispatch => {
    dispatch({type: actionsTypes.RESET_HIGHLIGHT, payload})
};

export const selectCity = (payload) => dispatch => {
    dispatch({type: actionsTypes.SELECT_CITY, payload})
};

export const selectPractice = (payload) => dispatch => {
    dispatch({type: actionsTypes.SELECT_PRACTICE, payload})
};
