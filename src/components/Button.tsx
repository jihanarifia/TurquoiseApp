import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles';
import metrics from '../styles/metrics';
import {COLORS} from '../utils';

const Button: React.FC<{
  title: string;
  backgroundColor?: string;
  textColor?: string;
  iconName?: string;
  style?: object;
  styleText?: object;
  onPress(): void;
}> = ({
  title,
  backgroundColor,
  textColor,
  iconName,
  onPress,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.cardShadow,
        {
          paddingHorizontal: metrics.smallRS,
          paddingVertical: metrics.extraSmallRS,
          backgroundColor: backgroundColor || COLORS.WHITE,
        },
        style,
      ]}
      onPress={() => onPress()}>
      <Text
        style={[
          styles.sectionTitle,
          {color: textColor || COLORS.PRIMARY, textAlign: 'center'},
          styleText,
        ]}>
        {title}
        {iconName && (
          <Icon
            name={iconName}
            size={16}
            color={textColor || COLORS.PRIMARY}
            style={{marginLeft: metrics.extraSmallSize}}
          />
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
