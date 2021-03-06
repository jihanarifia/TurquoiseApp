import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BookDoctorActions} from '../../redux/action';
import {styles} from '../../styles';
import metrics from '../../styles/metrics';
import {strings} from '../../utils/localization';
import ModalPatient from './ModalPatient';

interface RootState {
  patientList: any;
  selectedPatient: any;
}

const ChoosePatient = () => {
  const [showPatient, setShowPatient] = React.useState(false);

  const state = useSelector((state: RootState) => ({
    patientList: state.patientList,
    selectedPatient: state.selectedPatient,
  }));

  const action = bindActionCreators(BookDoctorActions, useDispatch());

  function getselectedPatient(name: string): boolean {
    let pIdx: number = state.selectedPatient.findIndex(
      (x: any) => x.name === name,
    );

    return pIdx >= 0 ? true : false;
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.addButton}>
        <TouchableOpacity
          onPress={() => setShowPatient(true)}
          style={[
            styles.cardShadow,
            {paddingHorizontal: metrics.getWidthFromDP('8')},
          ]}>
          <Text style={styles.nameTxt}>{strings.add}</Text>
        </TouchableOpacity>
      </View>
      {state.patientList.map((item: any, index: number) => {
        let selected = getselectedPatient(item.name);
        return (
          <TouchableOpacity
            onPress={() => action.choosePatient(item)}
            style={[styles.cardShadow, selected && styles.borderActive]}
            key={index}>
            <Text style={styles.nameTxt}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}

      <ModalPatient setShowPatient={setShowPatient} showPatient={showPatient} />
    </ScrollView>
  );
};
export default ChoosePatient;
