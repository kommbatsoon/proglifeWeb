import {SET_ACTIVE_ROUTE, SET_ACTIVE_LANGUAGE} from '../reducers/application';

export const setActiveRoute = (data) => ({type: SET_ACTIVE_ROUTE, data});

export const setActiveLanguage = (data) => ({type: SET_ACTIVE_LANGUAGE, data});
