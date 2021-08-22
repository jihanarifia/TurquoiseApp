import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/header';
import Reason from './Reason';
import Section from '../../components/Section';
import SwitchBtn from '../../components/SwitchBtn';
import {BookDoctorActions} from '../../redux/action';
import {styles} from '../../styles';
import metrics from '../../styles/metrics';
import {COLORS} from '../../utils';
import {strings} from '../../utils/localization';

interface RootState {
  isOn: boolean;
  loading: boolean;
  patienceList: any;
  symptomps: any;
}

const mapState = (state: RootState) => ({
  patienceList: state.patienceList,
  symptomps: state.symptomps,
});

const mapDispatch = {
  choosePatient: BookDoctorActions.choosePatient,
  switchType: BookDoctorActions.switchType,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  title: string;
};

const BookDoctorScreen = (props: Props) => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    <View style={styles.container}>
      <Header title={props.title} />
      <SwitchBtn
        textLeft={strings.doctor}
        textRight={strings.videoConsult}
        onChange={value => props.switchType(value)}
      />

      <Section title={strings.choosePatient}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.addButton}>
            <TouchableOpacity
              style={[
                styles.cardShadow,
                {paddingHorizontal: metrics.getWidthFromDP('8')},
              ]}>
              <Text style={styles.nameTxt}>{strings.add}</Text>
            </TouchableOpacity>
          </View>
          {props.patienceList.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                style={[styles.cardShadow, styles.borderActive]}
                key={index}>
                <Text style={styles.nameTxt}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Section>

      <Reason />
      <Section title={strings.selectedSymptompsAndReason}>
        <View style={styles.listRowContainer}>
          {props.symptomps.map((item: any, index: number) => {
            return (
              <Button
                key={index}
                title={item.name}
                backgroundColor={COLORS.PRIMARY}
                textColor={COLORS.WHITE}
                iconName={'add'}
                // onPress={}
              />
            );
          })}
        </View>
      </Section>
      <Section title={strings.selectedYourSymptompsAndReason}>
        <View style={styles.listRowContainer}>
          {props.symptomps.map((item: any, index: number) => {
            return (
              <Button
                key={index}
                title={item.name}
                iconName={'checkmark-sharp'}
                // onPress={}
              />
            );
          })}
        </View>
      </Section>
    </View>
  </ScrollView>
);

export default connector(BookDoctorScreen);
