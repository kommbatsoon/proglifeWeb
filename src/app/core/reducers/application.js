export const SET_ACTIVE_ROUTE = 'ui/application/SET_ACTIVE_ROUTE';

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
        {id: '1', name: 'Viktor', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556216139/jpgImage_u9r5vj.jpg'},
        {id: '2', name: 'Frank', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556217455/jpegImage_h9tmbd.jpg'},
        {id: '3', name: 'Tod', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556119102/test_uj972t.png'},
        {id: '4', name: 'Oleg', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556262312/download_ygqqq3.png'},
        {id: '5', name: 'Reigar', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556216139/jpgImage_u9r5vj.jpg'},
        {id: '6', name: 'Tornmud', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556216139/jpgImage_u9r5vj.jpg'},
        {id: '7', name: 'Volodya', avatar: 'https://res.cloudinary.com/di1vjlhyo/image/upload/v1556217455/jpegImage_h9tmbd.jpg'}
    ],
    activeRoute: '',
    isLoading: false,
    isInvalidate: false,
    error: ''
};

const application = (state = initialState, action = {}) => {
    switch (action.type){
        case SET_ACTIVE_ROUTE:
            return {
                ...state,
                activeRoute: action.data
            };

        default: return state;
    }
};

export default application;