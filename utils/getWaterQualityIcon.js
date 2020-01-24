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
    isPermanent,
    waterQualityLevel,
    hasHazardAlert,
    hasNoSwimingAlert
  } = data;
  if (hasHazardAlert) {
    if (hasNoSwimingAlert) return darkSwimingPin;
    return hazardPin;
  }
  switch (waterQualityLevel) {
    case GOOD:
      return safePin;
    case CAUTION:
      if (isPermanent) return darkSwimingPin;
      return unsafePin;
    case ALERT:
      return darkPin;
    default:
      return undefinedPin;
  }
}
