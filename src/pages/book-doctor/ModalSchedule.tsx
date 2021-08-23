import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import metrics from '../../styles/metrics';
import {strings} from '../../utils/localization';
import {styles} from '../../styles';
import ModalBottom from '../../components/ModalBottom';
import {useDispatch, useSelector} from 'react-redux';
import {BookDoctorActions} from '../../redux/action';
import {bindActionCreators} from 'redux';
// import RNDateTimeSelector from 'react-native-date-time-scroll-picker';

interface RootState {
  reasonList: any;
  selectedSymptompsReasons: any;
}

// const dataSet = {
//   data: {
//     firstColumn: [...Array(6).keys()].map((item, idx) => {
//       return {value: item, index: idx};
//     }),
//     secondColumn: [...Array(60).keys()].map((item, idx) => {
//       return {value: item, index: idx};
//     }),
//     thirdColumn: [...Array(60).keys()].map((item, idx) => {
//       return {value: item, index: idx};
//     }),
//   },
//   initials: [1, 2, 5],
// };

const ModalSchedule: React.FC<{
  showSchedule: boolean;
  setShowSchedule(value: boolean): void;
}> = ({showSchedule, setShowSchedule}) => {
  const state = useSelector((state: RootState) => ({
    reasonList: state.reasonList,
    selectedSymptompsReasons: state.selectedSymptompsReasons,
  }));

  const action = bindActionCreators(BookDoctorActions, useDispatch());

  return (
    <ModalBottom
      visible={showSchedule}
      title={strings.scheduleAppointment}
      desc={strings.scheduleAppointmentDesc}
      onRequestClose={() => {
        setShowSchedule(false);
      }}>
      <View style={styles.row}>
        <View style={[styles.col, {width: '50%', alignItems: 'center'}]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{maxHeight: metrics.height * 0.4}}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Sat</Text>
              <Text style={styles.dateText}>13, Agustus 2021</Text>
            </View>
          </ScrollView>
        </View>

        <View style={[styles.col, {width: '50%', alignItems: 'center'}]}>
          <Text style={styles.dateText}>1:00 - 2:00</Text>
        </View>
        {/* <RNDateTimeSelector
          dataSet={dataSet}
          onValueChange={value => {
            console.log(' On value Change : --->  ', value);
          }}
        /> */}
      </View>
    </ModalBottom>
  );
};
export default ModalSchedule;
