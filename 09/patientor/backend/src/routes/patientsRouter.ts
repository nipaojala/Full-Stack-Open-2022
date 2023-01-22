/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import diagnoseService from '../services/diagnoseService';
const router = express.Router();

import toNewPatient from '../utils/utils';

router.get('/', (_req, res) => {
  res.send(diagnoseService.getAllPatientData());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);
    const addedPatient = diagnoseService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }
    res.status(400).send(errorMessage);
  }
  });

export default router;