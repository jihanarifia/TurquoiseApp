import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import metrics from '../styles/metrics';
import {COLORS, FONT} from '../utils';

const SwitchBtn: React.FC<{
  textLeft: string;
  textRight: string;
  value: string;
  onChange(value: string): void;
}> = ({textLeft, textRight, onChange, value}) => {
  const [type, setType] = useState(value || textLeft);

  function toggleSwitch(value: string) {
    setType(value);
    onChange(value);
  }

  return (
    <View style={styles.row}>
      <TouchableWithoutFeedback onPress={() => toggleSwitch(textLeft)}>
        <View
          style={[
            styles.col,
            type === textLeft ? styles.activeButton : styles.inactiveButton,
          ]}>
          <Text
            style={type === textLeft ? styles.textActive : styles.textInactive}>
            {textLeft}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSwitch(textRight)}>
        <View
          style={[
            styles.col,
            type === textRight ? styles.activeButton : styles.inactiveButton,
          ]}>
          <Text
            style={
              type === textRight ? styles.textActive : styles.textInactive
            }>
            {textRight}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SwitchBtn;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: metrics.mediumRS,
    borderRadius: metrics.borderRadius,
    backgroundColor: COLORS.LIGHT_BLUE,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  col: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
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
  inactiveButton: {
    padding: metrics.extraSmallRS,
  },
  textActive: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.BOLD,
    fontSize: metrics.mediumRS,
  },
  textInactive: {
    color: COLORS.GREY,
    fontFamily: FONT.REGULAR,
    fontSize: metrics.mediumRS,
  },
});
