import diagnoseEntries from '../../data/diagnoseData';
import patientEntries from '../../data/patients';
import { Diagnose, NonSensitivePatientData, Patients, NewPatient} from '../types';
import { v4 as uuidv4 } from 'uuid';

const patients: Array<Patients> = patientEntries;

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

const addPatient = (entry: NewPatient): Patients => {

    const newPatientId = uuidv4();

    const newPatientEntry: Patients =  {
      id: newPatientId, // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      ...entry
    };
    patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  addPatient,
  getAllDiagnoseData,
  getAllPatientData
};