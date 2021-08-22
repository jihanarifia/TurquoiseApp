import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const percentageCalculation = (max: number, val: number) => max * (val / 100);

const getWidthFromDP = (widthPercentage: string) => {
  const percentageDesired = parseFloat(widthPercentage);
  const widthPercentageToDP = PixelRatio.roundToNearestPixel(
    percentageCalculation(width, percentageDesired),
  );

  return widthPercentageToDP;
};

const getHeightFromDP = (heightPercentage: string) => {
  const percentageDesired = parseFloat(heightPercentage);
  const heightPercentageToDP = PixelRatio.roundToNearestPixel(
    percentageCalculation(height, percentageDesired),
  );

  return heightPercentageToDP;
};

const getResponsiveSize = (val: any | number) => {
  const percentageDesired = parseFloat(val);
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    percentageDesired,
  );
};

const container = {
  flex: 1,
  marginTop: 8,
  marginBottom: 8,
};

export default {
  borderRadius: 15,

  // Distrance base (padding, margin)
  extraSmallSize: getWidthFromDP('1%'),
  smallSize: getWidthFromDP('2%'),
  mediumSize: getWidthFromDP('3%'),
  largeSize: getWidthFromDP('4%'),
  extraLargeSize: getWidthFromDP('5%'),

  // Dimension base (fontSize, height, width)
  extraSmallRS: getResponsiveSize(1),
  smallRS: getResponsiveSize(1.4),
  regularRS: getResponsiveSize(1.8),
  mediumRS: getResponsiveSize(2),
  largeRS: getResponsiveSize(2.2),
  extraLargeRS: getResponsiveSize(3),

  // extraSmallRS: getResponsiveSize(1),
  // smallRS: getResponsiveSize(1.3),
  // regularRS: getResponsiveSize(1.6),
  // mediumRS: getResponsiveSize(1.9),
  // largeRS: getResponsiveSize(2.2),
  // extraLargeRS: getResponsiveSize(2.5),

  getWidthFromDP,
  getHeightFromDP,
  getResponsiveSize,
  container,

  width,
  height,
};
