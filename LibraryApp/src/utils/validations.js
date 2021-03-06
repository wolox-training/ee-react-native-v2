const emailRegex = /^[-_. a-z A-Z 0-9]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/i;
const passwordRegex = /((?:[a-z][a-z]*[0-9]+[a-z0-9]*))/;

export const isEmailValid = email => emailRegex.test(email);

export const isPasswordValid = password => passwordRegex.test(password);
