const CheckEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export const IsValidEmail = email => CheckEmail.test(email);