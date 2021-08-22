import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../styles/metrics';
import {COLORS} from '../../utils';
import {strings} from '../../utils/localization';
import {styles as globalStyles} from '../../styles';
import ModalReason from './ModalReason';
import ModalSchedule from './ModalSchedule';

interface RootState {
  reasonList: any;
  selectedSymptompsReasons: any;
}

const Reason: React.FC = () => {
  const [showReason, setShowReason] = React.useState(false);
  const [showSchedule, setShowSchedule] = React.useState(false);

  return (
    <View style={{marginVertical: metrics.regularRS}}>
      <View style={styles.reasonContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            setShowReason(true);
          }}>
          <View style={[styles.col, {width: '50%'}]}>
            <View style={[styles.row]}>
              <Icon
                name="search"
                size={24}
                color={COLORS.PRIMARY}
                style={{marginRight: metrics.smallRS}}
              />
              <Text style={styles.sectionTitle}>{strings.addReason}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setShowSchedule(true);
          }}>
          <View style={[styles.col, {width: '50%', alignItems: 'flex-end'}]}>
            <View style={[styles.row, styles.timeContainer]}>
              <Clock name="clock" size={18} color={COLORS.WHITE} />
              <Text style={styles.timeText}>{strings.now}</Text>
              <Icon name="chevron-down" size={16} color={COLORS.WHITE} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ModalReason setShowReason={setShowReason} showReason={showReason} />
      <ModalSchedule
        setShowSchedule={setShowSchedule}
        showSchedule={showSchedule}
      />
    </View>
  );
};

export default Reason;

const styles = StyleSheet.create({
  reasonContainer: {
    flexDirection: 'row',
    borderRadius: metrics.borderRadius,
    backgroundColor: COLORS.LIGHT_BLUE,
    padding: metrics.extraSmallRS,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  activeButton: {
    backgroundColor: COLORS.WHITE,
    padding: metrics.extraSmallRS,
    borderRadius: metrics.borderRadius,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ...globalStyles,
});
