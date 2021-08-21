import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Section from '../../components/header';
import {styles} from '../../styles';

function BookDoctorScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
      </View>
    </ScrollView>
  );
}

export default BookDoctorScreen;
