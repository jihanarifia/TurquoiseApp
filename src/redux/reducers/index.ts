import {Types} from '../action';

const initialState = {
  selectedPatient: true,
};

const reducer = (
  state = initialState,
  action: {type: string; payload: object},
) => {
  switch (action.type) {
    case Types.CHOOSE_PATIENT:
      return {...state, selectedPatient: !state.selectedPatient};
    default:
      return state;
  }
};
export default reducer;
