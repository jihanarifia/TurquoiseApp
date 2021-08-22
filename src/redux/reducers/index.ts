import {Types} from '../action';

const initialState = {
  selectedPatient: [],
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
  symptompsList: [
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
  reasonList: [
    {
      id: 1,
      name: 'forget',
    },
    {
      id: 2,
      name: 'empty',
    },
    {
      id: 3,
      name: 'your',
    },
    {
      id: 4,
      name: 'vacuum',
    },
    {
      id: 5,
      name: 'bags',
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
      console.log(action.payload)
      let selectedPatient;
      let idx: number = state.selectedPatient.findIndex(
        (x: any) => x === action.payload,
      );

      if (idx >= 0) {
        selectedPatient = state.selectedPatient.filter(
          (x: any) => x !== action.payload,
        );
      } else {
        selectedPatient = [...state.selectedPatient, action.payload];
      }
      return {...state, selectedPatient: selectedPatient};
    case Types.SWITCH_TYPE:
      return {...state, type: action.payload};
    default:
      return state;
  }
};
export default reducer;
