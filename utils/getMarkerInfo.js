import moment from 'moment-timezone';
import GetWaterQualityLevel from '../constants/getWaterQualityLevel';
import * as Time from '../constants/time';

const timeZone = 'Pacific/Auckland';

export function getQualityByTag(waterQualityValue, tags) {
  if (tags) {
    if (tags.find((tag) => tag === 'criteria_model')) {
      return GetWaterQualityLevel(waterQualityValue, true);
    }
    if (tags.find((tag) => tag === 'fresh_water')) {
      return GetWaterQualityLevel(0, null, true);
    }
  }
  return GetWaterQualityLevel(waterQualityValue);
}

export function waterQualityViaAlerts(alerts, locationId) {
  const result = alerts
    .find(
      (alert) => alert
        .locations
        .find(
          (location) => location.id === locationId
        )
    );
  if (result) {
    const alertRangeToday = Time.getAlertRange(result.to);
    if (
      alertRangeToday.isMorning
     || alertRangeToday.isAfternoon
      || alertRangeToday.isEvening) {
      return Number(result.value);
    }
  }
  return null;
}

export default function getMarkerInfo(data) {
  const {
    location,
    defaultWaterQualityLevel,
    waterQualityAlerts,
    hasNoSwimingAlert,
    hasHazardAlert
  } = data;
  let waterQualityValue = null;
  const { currentWaterQuality, forecast } = location;
  if (currentWaterQuality) {
    waterQualityValue = currentWaterQuality.value;
  } else if (location.forecast) {
    const todayForecast = forecast.today.water;
    const now = moment.tz(timeZone);
    Object.keys(todayForecast).forEach((key) => {
      if (Number(key) === now.hour() || now.hour() + 1 === Number(key)) {
        waterQualityValue = todayForecast[key].value;
      }
    });
  }

  let waterQualityLevel;
  if (waterQualityAlerts) {
    waterQualityLevel = waterQualityViaAlerts(
      waterQualityAlerts,
      location.tags
    );
  } else {
    waterQualityLevel = getQualityByTag(waterQualityValue, location.tags);
  }

  if (defaultWaterQualityLevel !== undefined) waterQualityLevel = defaultWaterQualityLevel;
  if (location.isPermanent && location.permanentWaterQuality >= 280) waterQualityLevel = 2;

  return ({
    location,
    waterQualityLevel,
    hasHazardAlert,
    hasNoSwimingAlert
  });
}
