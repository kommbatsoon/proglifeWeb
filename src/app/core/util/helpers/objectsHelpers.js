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

// get value of the deep nested object property by string of props path, divided by "."
// e.g. obj = { a: { b: 1, c : { d : 3, e : 4}, f: 5 } }
// str = 'a.c.d'
// getNestedObjectValue(obj, str) // return 3
export const getNestedObjectValue = (obj, str) => {
    return str.split('.').reduce(function(o, x) { return o[x];}, obj);
};

// sort array of objects by property, "-" before property (e.g. '-value') - sorts in descending order
export const dynamicSort = property => {
    let sortOrder = 1;
    if(property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        const val1 = getNestedObjectValue(a, property);
        const val2 = getNestedObjectValue(b, property);
        let result = (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;
        return result * sortOrder;
    };
};

export const generateId = () => Date.now();
