export interface Patients {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[]
}

export interface Entry {
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other"
}


export type NewPatient = Omit<Patients, 'id'>;

export type NonSensitivePatientData = Omit<Patients, 'ssn' | 'entries'>;