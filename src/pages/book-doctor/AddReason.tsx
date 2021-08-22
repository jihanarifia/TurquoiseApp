import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../styles/metrics';
import {COLORS, FONT} from '../../utils';
import {strings} from '../../utils/localization';
import {styles as globalStyles} from '../../styles';
import ModalBottom from '../../components/ModalBottom';
import SelectedSymptompsReason from './SelectedSymptompsReason';
import Section from '../../components/Section';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {BookDoctorActions} from '../../redux/action';
import {bindActionCreators} from 'redux';

interface RootState {
  reasonList: any;
  selectedSymptompsReasons: any;
}

const Reason: React.FC = () => {
  const [showReason, setShowReason] = React.useState(false);
  const [showSchedule, setShowSchedule] = React.useState(false);
  const [input, setInput] = React.useState('');

  const state = useSelector((state: RootState) => ({
    reasonList: state.reasonList,
    selectedSymptompsReasons: state.selectedSymptompsReasons,
  }));

  const action = bindActionCreators(BookDoctorActions, useDispatch());

  const ModalReason = () => {
    return (
      <ModalBottom
        visible={showReason}
        title={strings.symptompsAndCondition}
        desc={strings.symptompsAndConditionDesc}
        onRequestClose={() => {
          setShowReason(false);
        }}>
        <View>
          <TextInput
            value={input}
            placeholder={strings.placeholderSymptomp}
            onChangeText={setInput}
            style={[
              styles.cardShadow,
              {backgroundColor: COLORS.LIGHT_BLUE, width: metrics.width * 0.87},
            ]}
          />
          {state.selectedSymptompsReasons.length > 0 && (
            <Section title={strings.selectedSymptomps}>
              <SelectedSymptompsReason />
            </Section>
          )}

          {state.reasonList.length > 0 && (
            <Section title={strings.chooseYourSymptomps}>
              <View style={styles.listRowContainer}>
                {state.reasonList.map((item: any, index: number) => {
                  return (
                    <Button
                      key={index}
                      title={item.name}
                      iconName={'add'}
                      onPress={() => action.chooseReason(item)}
                    />
                  );
                })}
              </View>
            </Section>
          )}
        </View>
      </ModalBottom>
    );
  };

  const ModalSchedule = () => {
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
        </View>
      </ModalBottom>
    );
  };

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
      <ModalReason />
      <ModalSchedule />
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
  dateText: {
    color: COLORS.GREY,
    fontFamily: FONT.BOLD,
    fontSize: metrics.regularRS,
    textAlign: 'center',
  },
  dateContainer: {
    backgroundColor: COLORS.BACKGROUND_SCREEN,
  },
  ...globalStyles,
});
