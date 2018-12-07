import axios from "axios";

const ROOT_URL = "http://127.0.0.1:8000/";
const LINKS_ROUTE = ROOT_URL + "links";
const SEARCH_ROUTE = ROOT_URL + "search";

export default class ApiService {
    static links() {
        return axios.get(LINKS_ROUTE).then(response => response.data);
    }

    static search(params) {
        return axios.post(SEARCH_ROUTE, params).then(response => response.data);
    }
}
