import ApiService from "../../services/ApiService";

export const actionsTypes = {
    FETCH_DOCTORS: "FETCH_DOCTORS",
    RESET_DOCTORS: "RESET_DOCTORS"
};

export const fetchDoctors = (params) => dispatch => {
    ApiService.search(params).then(payload => {
        dispatch({type: actionsTypes.FETCH_DOCTORS, payload})
    });
};

export const resetDoctors = (payload) => dispatch => {
    dispatch({type: actionsTypes.RESET_DOCTORS, payload})
};
