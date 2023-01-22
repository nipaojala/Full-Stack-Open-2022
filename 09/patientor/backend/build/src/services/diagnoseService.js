"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnoseData_1 = __importDefault(require("../../data/diagnoseData"));
const patients_1 = __importDefault(require("../../data/patients"));
const getAllDiagnoseData = () => {
    return diagnoseData_1.default.map(({ code, name, latin }) => ({
        code, name, latin
    }));
};
const getAllPatientData = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({ id,
        name,
        dateOfBirth,
        gender,
        occupation }));
};
const addDiary = () => {
    return [];
};
exports.default = {
    addDiary,
    getAllDiagnoseData,
    getAllPatientData
};
