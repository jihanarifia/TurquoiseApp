import { IData } from "../types";

export const Types = {
  CHOOSE_PATIENT: 'CHOOSE_PATIENT',
  SWITCH_TYPE: 'SWITCH_TYPE',
  CHOOSE_SYMPTOMPS: 'CHOOSE_SYMPTOMPS',
  CHOOSE_REASON: 'CHOOSE_REASON',
  REMOVE_SELECTED_SYMPTOMPS_REASON: 'REMOVE_SELECTED_SYMPTOMPS_REASON',
};

export const BookDoctorActions = {
  choosePatient: (data: IData) => ({
    type: Types.CHOOSE_PATIENT,
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
  removeSelectedSymptompsReason: (data: IData) => ({
    type: Types.REMOVE_SELECTED_SYMPTOMPS_REASON,
    payload: data,
  }),
};
