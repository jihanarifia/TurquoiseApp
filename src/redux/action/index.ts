import { IData } from "../types";

export const Types = {
  CHOOSE_PATIENT: 'CHOOSE_PATIENT',
  ADD_PATIENT: 'ADD_PATIENT',
  SWITCH_TYPE: 'SWITCH_TYPE',
  CHOOSE_SYMPTOMPS: 'CHOOSE_SYMPTOMPS',
  CHOOSE_REASON: 'CHOOSE_REASON',
  ADD_REASON: 'ADD_REASON',
  REMOVE_SELECTED_SYMPTOMPS_REASON: 'REMOVE_SELECTED_SYMPTOMPS_REASON',
  BOOK_DOCTOR: 'BOOK_DOCTOR',
};

export const BookDoctorActions = {
  choosePatient: (data: IData) => ({
    type: Types.CHOOSE_PATIENT,
    payload: data,
  }),
  addPatient: (data: string) => ({
    type: Types.ADD_PATIENT,
    payload: data,
  }),
  switchType: (data: string) => ({
    type: Types.SWITCH_TYPE,
    payload: data,
  }),
  chooseSymptomps: (data: IData) => ({
    type: Types.CHOOSE_SYMPTOMPS,
    payload: data,
  }),
  chooseReason: (data: IData) => ({
    type: Types.CHOOSE_REASON,
    payload: data,
  }),
  addReason: (data: string) => ({
    type: Types.ADD_REASON,
    payload: data,
  }),
  removeSelectedSymptompsReason: (data: IData) => ({
    type: Types.REMOVE_SELECTED_SYMPTOMPS_REASON,
    payload: data,
  }),
  bookDoctor: (data: any) => ({
    type: Types.BOOK_DOCTOR,
    payload: data,
  }),
};
