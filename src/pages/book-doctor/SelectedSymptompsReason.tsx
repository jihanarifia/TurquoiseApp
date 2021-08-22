import React from 'react';
import {View} from 'react-native';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../../components/Button';
import {BookDoctorActions} from '../../redux/action';
import {styles} from '../../styles';
import {COLORS} from '../../utils';

interface RootState {
  selectedSymptompsReasons: any;
}

const SelectedSymptompsReason = () => {
  const state = useSelector((state: RootState) => ({
    selectedSymptompsReasons: state.selectedSymptompsReasons,
  }));
  const action = bindActionCreators(BookDoctorActions, useDispatch());
  return (
    <>
      <View style={styles.listRowContainer}>
        {state.selectedSymptompsReasons.map((item: any, index: number) => {
          return (
            <Button
              key={index}
              title={item.name}
              backgroundColor={COLORS.PRIMARY}
              textColor={COLORS.WHITE}
              iconName={'checkmark-sharp'}
              onPress={() => action.removeSelectedSymptompsReason(item)}
            />
          );
        })}
      </View>
    </>
  );
};
export default SelectedSymptompsReason;
