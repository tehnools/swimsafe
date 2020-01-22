import { errorReceived, pending, getDataSucess } from './data';
import getMarkerInfo from '../../utils/getMarkerInfo';
import getIcon from '../../utils/getWaterQualityIcon';

export const MAP_MARKERS_PENDING = 'MAP_MARKERS_PENDING';
export const MAP_MARKERS_SUCCESS = 'MAP_MARKERS_SUCCESS';
const NO_SWIMMING_ALERT_ID = 6331544016781312; // PROD

export function listHazards(hazards) {
  hazards.reduce((results, hazard) => {
    hazard.locations.forEach((location) => {
      results[location.id] = {
        hasNoSwimmingAlert: hazard.alertTypeId === NO_SWIMMING_ALERT_ID
      };
    });
    return results;
  }, {});
}

export function generateMarkers(alerts, locations) {
  const { hazardAlerts, waterQualityAlerts } = alerts;
  const hazards = listHazards(hazardAlerts);
  return (dispatch) => {
    dispatch(pending(MAP_MARKERS_PENDING));
    return locations.reduce((markers, location) => {
      const results = markers;
      const hazard = hazards[location.id];
      let hasHazardAlert = false;
      let hasNoSwimmingAlert = false;
      if (hazard) {
        hasNoSwimmingAlert = hazard.hasNoSwimmingAlert;
        hasHazardAlert = true;
      }
      const mapMarker = getIcon(getMarkerInfo({
        location,
        hasHazardAlert,
        hasNoSwimmingAlert,
        waterQualityAlerts
      }));
      results[location.id] = { mapMarker, hasHazardAlert, hasNoSwimmingAlert };
      return results;
    }, []);
  };
}
