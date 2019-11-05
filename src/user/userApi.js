import * as request from "../utils/fetchWrapper";

const baseURL = 'https://jsonplaceholder.typicode.com/users'

const headers = {
    'Accept': 'application/json',
    "Content-type": "application/json; charset=UTF-8"
}

export function fetchUsers() {
    return request.getJson(baseURL, headers);
}