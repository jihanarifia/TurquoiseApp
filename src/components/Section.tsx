import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionTitleContainer}>
        <Text style={[styles.sectionTitle]}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Section;
