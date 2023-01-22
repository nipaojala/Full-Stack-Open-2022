"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const express_1 = __importDefault(require("express"));
const diagnoseService_1 = __importDefault(require("../services/diagnoseService"));
const router = express_1.default.Router();
const utils_1 = __importDefault(require("../utils/utils"));
router.get('/', (_req, res) => {
    res.send(diagnoseService_1.default.getAllPatientData());
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = (0, utils_1.default)(req.body);
        const addedPatient = diagnoseService_1.default.addPatient(newPatientEntry);
        res.json(addedPatient);
    }
    catch (error) {
        let errorMessage = "Something went wrong.";
        if (error instanceof Error) {
            errorMessage += ` Error: ${error.message}`;
        }
        res.status(400).send(errorMessage);
    }
});
exports.default = router;
