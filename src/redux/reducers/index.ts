import {Types} from '../action';

const initialState = {
  selectedPatient: true,
  patienceList: [
    {
      name: 'Yarik Nikolenko',
    },
    {
      name: 'Julien Jiwaarga',
    },
    {
      name: 'Sarasvati',
    },
  ],
  symptomps: [
    {
      id: 1,
      name: 'symptomp1',
    },
    {
      id: 2,
      name: 'symptomp2',
    },
    {
      id: 3,
      name: 'symptomp3',
    },
    {
      id: 4,
      name: 'sympt',
    },
    {
      id: 5,
      name: 'sympt2',
    },
  ],
  type: '',
};

const reducer = (
  state = initialState,
  action: {type: string; payload: object},
) => {
  switch (action.type) {
    case Types.CHOOSE_PATIENT:
      return {...state, selectedPatient: !state.selectedPatient};
    case Types.SWITCH_TYPE:
      return {...state, type: action.payload};
    default:
      return state;
  }
};
export default reducer;
