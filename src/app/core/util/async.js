import axios from 'axios';
import {navigateTo, ERROR_URL} from '../util/helpers/urlConfig';
import { clearAuthData, setErrorStatus } from '../actions/application';

class AuthenticationError extends Error {
    constructor(details, ...args) {
        super(...args);
        this.details = details;
    }
}
class PermissionError extends Error {
    constructor(details, ...args) {
        super(...args);
        this.details = details;
        navigateTo(ERROR_URL);
    }
}

export const getError = (response) => {
    return dispatch => {
        dispatch(setErrorStatus(response.status));

        switch(response.status) {
            case 401:
                dispatch(clearAuthData());
                return new AuthenticationError({ details: response.data });
            case 403:
                return new PermissionError({ details: response.data });
            case 404:
            case 502:
                navigateTo(ERROR_URL);
                break;
            case 400:
                return response.status;
            default:
                return new Error('Unhandled AJAX error');
        }
    };
};

export const getRequestHeaders = auth => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.token}`
        }
    };
};

const basicRequestHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getData = ({ url, auth, dispatch }) => {
    return axios
        .get(url, getRequestHeaders(auth))
        .then(response => response.data)
        .catch(error => {
            throw getError(error.response)(dispatch);
            //throw error.response.data || error;
        });
};

export const postData = ({ url, data, auth, dispatch }) => {
    return axios
        .post(url, data, getRequestHeaders(auth))
        .then(response => response.data)
        .catch(error => {
            throw getError(error.response)(dispatch);
            //throw error.response.data || error;
        });
};

export const deleteData = ({ url, auth, dispatch }) => {
    return axios
        .delete(url, getRequestHeaders(auth))
        .then(response => response.data)
        .catch(error => {
            throw getError(error.response)(dispatch);
            //throw error.response.data || error;
        });
};

export const putData = ({ url, data, auth, dispatch }) => {
    return axios
        .put(url, data, getRequestHeaders(auth))
        .then(response => response.data)
        .catch(error => {
            throw getError(error.response)(dispatch);
            //throw error.response.data || error;
        });
};



const getRequestFileHeaders = (auth) => {
    return {
        headers: {
            'Content-Type': 'multipart/form-data;',
            'authorization': `JWT ${auth.token}`
        }
    };
};

export const postFileData = ({ url, data, auth, dispatch }) => {
    return axios
        .post(url, data, getRequestFileHeaders(auth))
        .then(response => response.data)
        .catch(error => {
            throw getError(error.response)(dispatch);
        });
};

export const getDataWithoutAuthHeaders = ({ url }) => {
    return axios
        .get(url)
        .then(response => response.data);
};

export const postDataWithoutAuthHeaders = ({ url, data }) => {
    return axios
        .post(url, data, basicRequestHeaders)
        .then(response => response.data)
        .catch(error => {
            //throw getError(error.response)(dispatch);
            throw error.response.data || error;
        });
};
