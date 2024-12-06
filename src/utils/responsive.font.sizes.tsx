import { Dimensions, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

// Based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function responsiveFontSize(fontSize: number) {
  const newSize = fontSize * scale 
  return Math.round(PixelRatio.roundToNearestPixel(newSize)); 
}