export const Types = {
  CHOOSE_PATIENT: 'CHOOSE_PATIENT',
};

export const TransactionActions = {
  choosePatient: (data: object) => ({
    type: Types.CHOOSE_PATIENT,
    payload: data,
  }),
};
