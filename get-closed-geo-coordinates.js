const degreeToRadian = require('./degree-to-radian');

const getClosedGeoCordintaes = (pLatitude, pLongitude, pDistanceInMeters) => {
  const latRadian = degreeToRadian(pLatitude);

  const degLatKm = 110.574235;
  const degLongKm = 110.572833 * Math.cos(latRadian);
  const deltaLat = pDistanceInMeters / 1000.0 / degLatKm;
  const deltaLong = pDistanceInMeters / 1000.0 / degLongKm;

  const topLat = pLatitude + deltaLat;
  const bottomLat = pLatitude - deltaLat;
  const leftLng = pLongitude - deltaLong;
  const rightLng = pLongitude + deltaLong;

  const northWestCoords = `${topLat},${leftLng}`;
  const northEastCoords = `${topLat},${rightLng}`;
  const southWestCoords = `${bottomLat},${leftLng}`;
  const southEastCoords = `${bottomLat},${rightLng}`;

  const boundingBox = [
    northWestCoords,
    northEastCoords,
    southWestCoords,
    southEastCoords,
  ];

  return boundingBox;
};

module.exports = getClosedGeoCordintaes;
