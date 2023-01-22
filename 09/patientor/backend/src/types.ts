export interface Patients {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: string;
  occupation: string;
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

// export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type NonSensitivePatientData = Omit<Patients, 'ssn'>;