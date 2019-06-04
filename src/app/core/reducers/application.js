import {AVAILABLE_LANGUAGES} from '../../util/languages';
import {RUSSIAN_CONFIG} from '../../util/languages/ru';
import {ENGLISH_CONFIG} from '../../util/languages/en';

export const SET_ACTIVE_ROUTE = 'ui/application/SET_ACTIVE_ROUTE';
export const SET_ACTIVE_LANGUAGE = 'ui/application/SET_ACTIVE_LANGUAGE';

/*
 * State: {
 *      users: Array, users list
 *      isLoading: <boolean>, if data is fetching
 *      isInvalidate: <boolean>, if fetch of data is needed
 *      error: <String>, string representation of the error
 * }
 */

const initialState = {
    users: [
        {id: '1', name: 'Grace Carter', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558360241/avatar10_wdbwxi.jpg'},
        {id: '2', name: 'Toni Brown', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558360238/avatar8_qylvwr.jpg'},
        {id: '3', name: 'James Arthur', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558359995/avatar1_q61oct.jpg'},
        {id: '4', name: 'Anna Lipa', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558359988/avatar2_rq1mmc.jpg'},
        {id: '5', name: 'Mark Johnson', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558359959/avatar5_gvxkim.jpg'},
        {id: '6', name: 'Danielaa Ramirez', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558360237/avatar6_r36yfi.jpg'},
        {id: '7', name: 'Jessie Reyez', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558360238/avatar7_ql3afn.jpg'},
        {id: '8', name: 'Frank Bans', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558359983/avatar4_jgzgip.jpg'},
        {id: '9', name: 'Madalena Hutton', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558360238/avatar9_uxw9xv.jpg'},
        {id: '10', name: 'Jorja James', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1558360221/avatar3_ejemhe.jpg'}
    ],
    activeRoute: '',
    activeLanguage: AVAILABLE_LANGUAGES[0],
    textConfig: RUSSIAN_CONFIG,
    isLoading: false,
    isInvalidate: false,
    error: ''
};

const getLanguageById = (id) => AVAILABLE_LANGUAGES.find(el => el.id === id);

const application = (state = initialState, action = {}) => {
    switch (action.type){
        case SET_ACTIVE_ROUTE:
            return {
                ...state,
                activeRoute: action.data || ''
            };
        case SET_ACTIVE_LANGUAGE:
            return {
                ...state,
                activeLanguage: getLanguageById(action.data),
                textConfig: action.data === 1 ? RUSSIAN_CONFIG : ENGLISH_CONFIG
            };

        default: return state;
    }
};

export default application;