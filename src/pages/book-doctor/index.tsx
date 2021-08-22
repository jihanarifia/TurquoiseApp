import React from 'react';
import {ScrollView, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/header';
import AddReason from './AddReason';
import Section from '../../components/Section';
import SwitchBtn from '../../components/SwitchBtn';
import {BookDoctorActions} from '../../redux/action';
import {styles} from '../../styles';
import metrics from '../../styles/metrics';
import {strings} from '../../utils/localization';
import SelectedSymptompsReason from './SelectedSymptompsReason';
import {COLORS} from '../../utils';
import ChoosePatient from './ChoosePatient';

interface RootState {
  type: string;
  patienceList: any;
  symptompsList: any;
  selectedPatient: any;
  selectedSymptompsReasons: any;
}

const mapState = (state: RootState) => ({
  patienceList: state.patienceList,
  selectedPatient: state.selectedPatient,
  symptomps: state.symptompsList,
  selectedSymptompsReasons: state.selectedSymptompsReasons,
  type: state.type,
});

const mapDispatch = {
  choosePatient: BookDoctorActions.choosePatient,
  switchType: BookDoctorActions.switchType,
  chooseSymptomps: BookDoctorActions.chooseSymptomps,
  bookDoctor: BookDoctorActions.bookDoctor,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  title: string;
};

const BookDoctorScreen = (props: Props) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Header title={props.title} />
        <SwitchBtn
          textLeft={strings.doctor}
          textRight={strings.videoConsult}
          value={props.type}
          onChange={value => props.switchType(value)}
        />

        <Section title={strings.choosePatient}>
          <ChoosePatient />
        </Section>

        <AddReason />

        {props.selectedSymptompsReasons.length > 0 && (
          <Section title={strings.selectedSymptompsAndReason}>
            <SelectedSymptompsReason />
          </Section>
        )}

        {props.symptomps.length > 0 && (
          <Section title={strings.selectedYourSymptompsAndReason}>
            <View style={styles.listRowContainer}>
              {props.symptomps.map((item: any, index: number) => {
                return (
                  <Button
                    key={index}
                    title={item.name}
                    iconName={'add'}
                    onPress={() => props.chooseSymptomps(item)}
                  />
                );
              })}
            </View>
          </Section>
        )}

        <Button
          title={strings.next}
          onPress={() => {
            // props.bookDoctor({
            //   type,
            //   SelectedSymptompsReason,
              // schedule,
            // });
          }}
          style={styles.buttonSubmit}
          backgroundColor={COLORS.PRIMARY}
          textColor={COLORS.WHITE}
          styleText={{fontSize: metrics.largeRS}}
        />
      </View>
    </ScrollView>
  );
};

export default connector(BookDoctorScreen);
