import diagnoseEntries from '../../data/diagnoseData';
import patientEntries from '../../data/patients';
import { Diagnose, NonSensitivePatientData } from '../types';

const getAllDiagnoseData = (): Diagnose[] => {
  return diagnoseEntries.map(({code, name, latin}) => ({
    code, name, latin
  }));
};

const getAllPatientData = () :NonSensitivePatientData[] => {
  return patientEntries.map(({
    id,
    name,
    dateOfBirth,
    gender,
    occupation}) => ({  id,
      name,
      dateOfBirth,
      gender,
      occupation}));
};

const addDiary = () => {
  return [];
};

export default {
  addDiary,
  getAllDiagnoseData,
  getAllPatientData
};