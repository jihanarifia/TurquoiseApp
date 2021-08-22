export const Types = {
  CHOOSE_PATIENT: 'CHOOSE_PATIENT',
  SWITCH_TYPE: 'SWITCH_TYPE',
};

export const BookDoctorActions = {
  choosePatient: (data: object) => ({
    type: Types.CHOOSE_PATIENT,
    payload: data,
  }),
  switchType: (data: string) => ({
    type: Types.SWITCH_TYPE,
    payload: data,
  }),
};
