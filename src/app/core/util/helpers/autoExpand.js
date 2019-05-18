export const autoExpand = function (field) {

    // Reset field height
    field.style.height = '42px';

    // Get the computed styles for the element
    const computed = window.getComputedStyle(field);

    // Calculate the height
    const height = parseInt(computed.getPropertyValue('padding-top'), 10)
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + field.scrollHeight;

    field.style.height = height + 'px';
};