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

export default function getMarkerInfo({
  location: {
    name,
    isPermanent,
    forecast,
    tags,
    currentWaterQuality,
    permanentWaterQuality
  },
  defaultWaterQualityLevel,
  waterQualityAlerts,
  hasNoSwimingAlert,
  hasHazardAlert
}) {
  let waterQualityValue = null;
  if (currentWaterQuality) {
    waterQualityValue = currentWaterQuality.value;
  } else if (forecast) {
    const todayForecast = forecast.today.water;
    const now = moment.tz(timeZone);
    Object.keys(todayForecast).forEach((key) => {
      if (Number(key) === now.hour() || now.hour() + 1 === Number(key)) {
        waterQualityValue = todayForecast[key].value;
      }
    });
  }

  if (isPermanent) {
    waterQualityValue = permanentWaterQuality;
  }

  let waterQualityLevel;
  if (waterQualityAlerts) {
    console.log(name, 'by alert');

    waterQualityLevel = waterQualityViaAlerts(
      waterQualityAlerts,
      tags
    );
  } else {
    console.log(name, 'by tag');

    waterQualityLevel = getQualityByTag(waterQualityValue, tags);
  }
  console.log('1', name, waterQualityLevel);

  if (defaultWaterQualityLevel !== undefined) waterQualityLevel = defaultWaterQualityLevel;
  if (isPermanent && permanentWaterQuality >= 280) waterQualityLevel = 2;

  return ({
    name,
    isPermanent,
    waterQualityLevel,
    hasHazardAlert,
    hasNoSwimingAlert
  });
}
