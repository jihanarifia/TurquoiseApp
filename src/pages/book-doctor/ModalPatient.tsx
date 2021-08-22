import React from 'react';
import {TextInput, View} from 'react-native';

import metrics from '../../styles/metrics';
import {COLORS} from '../../utils';
import {strings} from '../../utils/localization';
import {styles} from '../../styles';
import ModalBottom from '../../components/ModalBottom';
import {useDispatch, useSelector} from 'react-redux';
import {BookDoctorActions} from '../../redux/action';
import {bindActionCreators} from 'redux';

interface RootState {
  reasonList: any;
  selectedSymptompsReasons: any;
}

const ModalPatient: React.FC<{
  showPatient: boolean;
  setShowPatient(value: boolean): void;
}> = ({showPatient, setShowPatient}) => {
  const [input, setInput] = React.useState('');

  const state = useSelector((state: RootState) => ({
    reasonList: state.reasonList,
    selectedSymptompsReasons: state.selectedSymptompsReasons,
  }));

  const action = bindActionCreators(BookDoctorActions, useDispatch());

  function _handleSubmit() {
    if (input) {
      setShowPatient(false);
      action.addPatient(input);
      setInput('');
    } else {
      setShowPatient(false);
    }
  }
  return (
    <ModalBottom
      visible={showPatient}
      title={strings.addPatient}
      onRequestClose={() => _handleSubmit()}>
      <View>
        <TextInput
          value={input}
          placeholder={strings.patientName}
          onChangeText={setInput}
          onSubmitEditing={() => _handleSubmit()}
          style={[
            styles.cardShadow,
            {backgroundColor: COLORS.LIGHT_BLUE, width: metrics.width * 0.87},
          ]}
        />
      </View>
    </ModalBottom>
  );
};
export default ModalPatient;
