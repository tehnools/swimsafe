export const UNAVAILABLE = 0;
export const GOOD = 1;
export const CAUTION = 2;
export const ALERT = 3;

export default (level, isCriteria, isFreshWater) => {
  if (level === null && level === undefined) return UNAVAILABLE;
  const isSeaWater = isFreshWater === undefined || !isFreshWater;

  if (isCriteria === undefined || !isCriteria) {
    if (isSeaWater) {
      if (level >= 0 && level < 280) {
        return GOOD;
      } if (level >= 280 || level === -1) {
        return CAUTION;
      }
    }
  } else if (isCriteria) {
    if (level >= 0 && level <= 16) {
      return GOOD;
    } if (level > 16 || level === -1) {
      return CAUTION;
    }
  } else if (isFreshWater) {
    if (level >= 0 && level < 550) {
      return GOOD;
    } if (level >= 550) {
      return CAUTION;
    }
  }
  return UNAVAILABLE;
};
