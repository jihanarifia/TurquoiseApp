import React from 'react';
import {TextInput, View} from 'react-native';

import metrics from '../../styles/metrics';
import {COLORS} from '../../utils';
import {strings} from '../../utils/localization';
import {styles} from '../../styles';
import ModalBottom from '../../components/ModalBottom';
import SelectedSymptompsReason from './SelectedSymptompsReason';
import Section from '../../components/Section';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {BookDoctorActions} from '../../redux/action';
import {bindActionCreators} from 'redux';

interface RootState {
  reasonList: any;
  selectedSymptompsReasons: any;
}

const ModalReason: React.FC<{
  showReason: boolean;
  setShowReason(value: boolean): void;
}> = ({showReason, setShowReason}) => {
  const [input, setInput] = React.useState('');

  const state = useSelector((state: RootState) => ({
    reasonList: state.reasonList,
    selectedSymptompsReasons: state.selectedSymptompsReasons,
  }));

  const action = bindActionCreators(BookDoctorActions, useDispatch());

  return (
    <ModalBottom
      visible={showReason}
      title={strings.symptompsAndCondition}
      desc={strings.symptompsAndConditionDesc}
      onRequestClose={() => {
        setShowReason(false);
      }}>
      <View>
        <TextInput
          value={input}
          placeholder={strings.placeholderSymptomp}
          onChangeText={setInput}
          style={[
            styles.cardShadow,
            {backgroundColor: COLORS.LIGHT_BLUE, width: metrics.width * 0.87},
          ]}
        />
        {state.selectedSymptompsReasons.length > 0 && (
          <Section title={strings.selectedSymptomps}>
            <SelectedSymptompsReason />
          </Section>
        )}

        {state.reasonList.length > 0 && (
          <Section title={strings.chooseYourSymptomps}>
            <View style={styles.listRowContainer}>
              {state.reasonList.map((item: any, index: number) => {
                return (
                  <Button
                    key={index}
                    title={item.name}
                    iconName={'add'}
                    onPress={() => action.chooseReason(item)}
                  />
                );
              })}
            </View>
          </Section>
        )}
      </View>
    </ModalBottom>
  );
};
export default ModalReason;
