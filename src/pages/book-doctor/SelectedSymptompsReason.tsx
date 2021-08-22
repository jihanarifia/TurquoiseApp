import React from 'react';
import {View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import Button from '../../components/Button';
import {BookDoctorActions} from '../../redux/action';
import {styles} from '../../styles';
import {COLORS} from '../../utils';

interface RootState {
  isOn: boolean;
  loading: boolean;
  selectedSymptompsReason: any;
  symptomps: any;
}

const mapState = (state: RootState) => ({
  selectedSymptompsReason: state.selectedSymptompsReason,
  symptomps: state.symptomps,
});

const mapDispatch = {
  choosePatient: BookDoctorActions.choosePatient,
  switchType: BookDoctorActions.switchType,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const SelectedSymptompsReason = (props: Props) => (
  <View style={styles.listRowContainer}>
    {props.symptomps.map((item: any, index: number) => {
      return (
        <Button
          key={index}
          title={item.name}
          backgroundColor={COLORS.PRIMARY}
          textColor={COLORS.WHITE}
          iconName={'checkmark-sharp'}
          onPress={() => {}}
        />
      );
    })}
  </View>
);

export default connector(SelectedSymptompsReason);
