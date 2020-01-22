import { listLocations } from '../../api/locations.api';
import listAlerts from '../../api/alerts.api';
import getMarkerInfo from '../../utils/getMarkerInfo';
import getWaterQualityIcon from '../../utils/getWaterQualityIcon';

export const LIST_LOCATIONS_PENDING = 'LIST_LOCATIONS_PENDING';
export const LIST_LOCATIONS_SUCCESS = 'LIST_LOCATIONS_SUCCESS';
export const GET_ALERTS_SUCCESS = 'GET_ALERTS_SUCCESS';
export const GET_LOCATION_PENDING = 'GET_LOCATION_PENDING';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_ALERTS_PENDING = 'GET_ALERTS_PENDING';
export const ALERTS_ERROR = 'ALERTS_ERROR';
export const LOCATIONS_ERROR = 'LOCATIONS_ERROR';

export const mapData = (hashMap, obj) => {
  hashMap[obj.id] = obj;
  return hashMap;
};

export function getLocations() {
  return async (dispatch) => {
    try {
      dispatch(pending(LIST_LOCATIONS_PENDING));
      const locations = await listLocations();
      if (locations) {
        const mappedLocations = locations
          .data
          .reduce(mapData, {});
        dispatch(getDataSucess(LIST_LOCATIONS_SUCCESS, 'locations', mappedLocations));
      }
    } catch (error) {
      dispatch(errorReceived(LOCATIONS_ERROR, error));
    }
  };
}

export function sortAlerts(alerts) {
  const hazardAlerts = []; const waterQualityAlerts = [];
  alerts.forEach((alert) => {
    if (alert.alertType === 'water_quality') {
      waterQualityAlerts.push(alert);
    } else if (alert.alertType === 'hazards') {
      hazardAlerts.push(alert);
    }
  });
  return { hazardAlerts, waterQualityAlerts };
}

export function getAlerts() {
  return async (dispatch) => {
    let alerts;
    dispatch(pending(GET_ALERTS_PENDING));
    try {
      alerts = await listAlerts();
      dispatch(
        getDataSucess(
          GET_ALERTS_SUCCESS, 'alerts', sortAlerts(alerts.data.items)
        )
      );
    } catch (error) {
      dispatch(errorReceived(ALERTS_ERROR, error));
    }
  };
}

export function errorReceived(type, error) {
  return {
    type,
    error
  };
}

export function pending(type) {
  return {
    type
  };
}

export function getDataSucess(type, key, res) {
  return {
    type,
    [key]: res
  };
}
