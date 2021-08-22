import React, {FC} from 'react';
import {Text, View, StyleSheet, Modal, ScrollView} from 'react-native';
import {COLORS, FONT} from '../utils';
import {styles as globalStyles} from '../styles';
import {strings} from '../utils/localization';
import metrics from '../styles/metrics';
import Button from './Button';

type Props = {
  visible: boolean;
  onRequestClose(): void;
  title: string;
  desc?: string;
};

const ModalBottom: FC<Props> = ({
  visible,
  onRequestClose,
  title,
  desc,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View>
              <Text style={[styles.sectionTitle, {fontFamily: FONT.BOLD}]}>
                {title}
              </Text>
              {desc && (
                <Text style={[styles.sectionTitle, {fontFamily: FONT.REGULAR}]}>
                  {desc}
                </Text>
              )}
            </View>
            <View style={{marginVertical: metrics.mediumRS}}>{children}</View>
          </ScrollView>
          <Button
            title={strings.done}
            onPress={() => {
              onRequestClose();
            }}
            style={styles.button}
            styleText={{fontSize: metrics.largeRS}}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    maxHeight: metrics.height * 0.75,
    paddingHorizontal: metrics.largeRS,
    paddingVertical: metrics.extraLargeRS,

    borderTopLeftRadius: metrics.borderRadius,
    borderTopRightRadius: metrics.borderRadius,
    backgroundColor: COLORS.BACKGROUND_SCREEN,
    bottom: 0,
    position: 'absolute',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '95%',
    paddingVertical: metrics.regularRS,
  },
  ...globalStyles,
});

export default ModalBottom;
