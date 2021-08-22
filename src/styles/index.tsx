import {StyleSheet} from 'react-native';
import {COLORS, FONT} from '../utils';
import metrics from './metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.regularRS,
    backgroundColor: COLORS.BACKGROUND_SCREEN,
    height: metrics.height,
  },
  sectionContainer: {
    marginVertical: metrics.mediumSize,
  },
  sectionTitleContainer: {
    marginBottom: metrics.extraSmallRS,
  },
  sectionTitle: {
    fontSize: metrics.regularRS,
    color: COLORS.DARK_GREY,
    fontFamily: FONT.MEDIUM,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  cardShadow: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: metrics.extraLargeRS,
    paddingVertical: metrics.smallRS,
    borderRadius: metrics.borderRadius,
    margin: metrics.extraSmallRS,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  borderActive: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 1.5,
    borderRadius: metrics.borderRadius,
  },
  headerTitle: {
    fontSize: metrics.largeRS,
    color: COLORS.DARK_GREY,
    fontFamily: FONT.BOLD,
  },
  row: {
    flexDirection: 'row',
    padding: metrics.extraSmallSize,
  },
  col: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: metrics.mediumRS,
    color: COLORS.GREY,
    fontFamily: FONT.MEDIUM,
  },
  addButton: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 1.5,
    borderRadius: metrics.borderRadius,
    borderStyle: 'dashed',
  },
  listRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
  },
  buttonSubmit: {
    position: 'absolute',
    bottom: 0,
    width: metrics.width * 0.9,
    alignSelf: 'center',
    marginBottom: metrics.regularRS,
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
});

export {styles};
