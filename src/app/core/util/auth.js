export const getAuthToken = () => {
    const token = getTokenLocalStorage() ? getTokenLocalStorage() : getTokenCookie();
    return (token && token !== ' ') ? token : '';
};

export const setAuthToken = (token) => {
    localStorage.setItem('token', token);
};
export const getTokenLocalStorage = () => {
    return localStorage.getItem('token');
};
export const clearAuthToken = () => {
    localStorage.removeItem('permissions');
    return localStorage.removeItem('token');
};

export const setTokenCookie = (data) => {
    document.cookie = `token=${data}`;
};
export const getTokenCookie = () => {
    const token = getCookie('token');
    return token || '';
};

export const clearCookie = () => {
    document.cookie = 'token=';
};

export const getCookie = (param) => {
    const name = `${param}=`;
    const cookieContent = document.cookie.split(';');
    for(let i = 0; i < cookieContent.length; i++) {
        let c = cookieContent[i];
        while (c.charAt(0) === ' ') { c = c.substring(1); }
        if (c.indexOf(name) === 0) { return c.substring(name.length, c.length); }
    }
    return ' ';
};