import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import {COLORS} from '../utils';
import Logo from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import metrics from '../styles/metrics';

const Header: React.FC<{
  title: string;
}> = ({title}) => {
  return (
    <View style={styles.row}>
      <View style={[styles.col, {width: '15%'}]}>
        <Icon name="arrow-back" size={24} color={COLORS.PRIMARY} />
      </View>
      <View style={[styles.col, {width: '75%'}]}>
        <Text style={[styles.headerTitle]}>{title}</Text>
      </View>
      <View style={[styles.col, {width: '10%'}]}>
        <Logo
          name="stethoscope"
          size={metrics.getResponsiveSize('4')}
          color={COLORS.PRIMARY}
        />
      </View>
    </View>
  );
};

export default Header;
