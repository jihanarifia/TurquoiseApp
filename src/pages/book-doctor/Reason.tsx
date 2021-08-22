import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../styles/metrics';
import {COLORS, FONT} from '../../utils';
import {strings} from '../../utils/localization';
import {styles as globalStyles} from '../../styles';

const Reason: React.FC<{
  title?: string;
}> = () => {
  return (
    <View style={{marginVertical: metrics.regularRS}}>
      <TouchableWithoutFeedback>
        <View style={styles.reasonContainer}>
          <View style={[styles.col, {width: '10%'}]}>
            <Icon name="search" size={24} color={COLORS.PRIMARY} />
          </View>
          <View style={[styles.col, {width: '40%'}]}>
            <Text style={styles.sectionTitle}>{strings.addReason}</Text>
          </View>
          <TouchableWithoutFeedback>
            <View style={[styles.col, {width: '50%', alignItems: 'flex-end'}]}>
              <View style={[styles.row, styles.timeContainer]}>
                <Clock name="clock" size={18} color={COLORS.WHITE} />
                <Text style={styles.timeText}>{strings.now}</Text>
                <Icon name="chevron-down" size={16} color={COLORS.WHITE} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
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
  timeText: {
    color: COLORS.WHITE,
    fontFamily: FONT.REGULAR,
    fontSize: metrics.smallRS,
    marginHorizontal: metrics.smallRS,
  },
  timeContainer: {
    borderRadius: metrics.borderRadius,
    backgroundColor: COLORS.YELLOW,
    fontFamily: FONT.MEDIUM,
    padding: metrics.extraSmallRS,
  },
  ...globalStyles,
});
