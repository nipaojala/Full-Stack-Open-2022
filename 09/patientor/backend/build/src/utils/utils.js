"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatient = (object) => {
    const newEntry = {
        name: parse(object.name),
        ssn: parse(object.ssn),
        dateOfBirth: parseDate(object.dateOfBirth),
        occupation: parse(object.occupation),
        gender: parseGender(object.gender),
        entries: []
    };
    return newEntry;
};
const parse = (comment) => {
    if (!comment || !isString(comment)) {
        throw new Error('Incorrect or missing comment');
    }
    return comment;
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(types_1.Gender).includes(param);
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
exports.default = toNewPatient;
