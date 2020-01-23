import hazardPin from '../resources/images/2018png/orange_pin.png';
import darkSwimingPin from '../resources/images/2018png/dark_swim.png';
import safePin from '../resources/images/2018png/green_pin.png';
import unsafePin from '../resources/images/2018png/red_pin.png';
import darkPin from '../resources/images/2018png/dark_pin.png';
import undefinedPin from '../resources/images/2018png/grey_pin.png';
import {
  GOOD, CAUTION, ALERT
} from '../constants/getWaterQualityLevel';

export default function getIcon(data) {
  const {
    name,
    isPermanent,
    waterQualityLevel,
    hasHazardAlert,
    hasNoSwimingAlert
  } = data;
  // console.log(name,
  //   waterQualityLevel,
  //   hasHazardAlert,
  //   hasNoSwimingAlert);

  if (hasHazardAlert) {
    console.log('noSwim');
    if (hasNoSwimingAlert) return darkSwimingPin;
    console.log('hazard alert');
    return hazardPin;
  }
  switch (waterQualityLevel) {
    case GOOD:
      console.log('safe');
      return safePin;
    case CAUTION:
      console.log('unsafe');
      if (isPermanent) return darkSwimingPin;
      return unsafePin;
    case ALERT:
      console.log('dark');
      return darkPin; // dark pin
    default:
      console.log('undefied');
      return undefinedPin;
  }
}
