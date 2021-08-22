import {Types} from '../action';
import {IData} from '../types';

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
  selectedSymptompsReasons: [],
};

const reducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case Types.CHOOSE_PATIENT:
      let selectedPatient;
      let idx: number = state.selectedPatient.findIndex(
        (x: IData) => x === action.payload,
      );

      if (idx >= 0) {
        selectedPatient = state.selectedPatient.filter(
          (x: IData) => x !== action.payload,
        );
      } else {
        selectedPatient = [...state.selectedPatient, action.payload];
      }
      return {...state, selectedPatient: selectedPatient};

    case Types.SWITCH_TYPE:
      return {...state, type: action.payload};

    case Types.CHOOSE_SYMPTOMPS:
      let symptompsList, selectedSymptom;

      selectedSymptom = [
        ...state.selectedSymptompsReasons,
        {...action.payload, isReason: false},
      ];
      symptompsList = state.symptompsList.filter(
        (x: IData) => x.name !== action.payload?.name,
      );
      return {
        ...state,
        symptompsList: symptompsList,
        selectedSymptompsReasons: selectedSymptom,
      };

    case Types.CHOOSE_REASON:
      let reasonList, selectedReason;

      selectedReason = [
        ...state.selectedSymptompsReasons,
        {...action.payload, isReason: true},
      ];
      reasonList = state.reasonList.filter(
        (x: IData) => x.name !== action.payload?.name,
      );

      return {
        ...state,
        reasonList: reasonList,
        selectedSymptompsReasons: selectedReason,
      };

    case Types.REMOVE_SELECTED_SYMPTOMPS_REASON:
      let selectedData = state.selectedSymptompsReasons.filter(
        (x: IData) => x !== action.payload,
      );

      let reason = state.reasonList;
      let symptomp = state.symptompsList;

      if (action.payload.id) {
        if (action.payload.isReason) {
          reason = [...state.reasonList, action.payload];
        } else {
          symptomp = [...state.symptompsList, action.payload];
        }
      }

      return {
        ...state,
        symptompsList: symptomp,
        selectedSymptompsReasons: selectedData,
        reasonList: reason,
      };

    case Types.ADD_REASON:
      let addData = [
        ...state.selectedSymptompsReasons,
        {name: action.payload, isReason: false},
      ];
      return {
        ...state,
        selectedSymptompsReasons: addData,
      };
    default:
      return state;
  }
};
export default reducer;
