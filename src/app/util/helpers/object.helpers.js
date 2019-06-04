export const areObjectsEqual = (obj1, obj2) =>{
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const cloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export const getObjectKeysList = (obj) => {
    return Object.keys(obj);
};

export const generateId = () => Date.now();
