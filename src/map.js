import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import countriesLayer from "./borders/borders-low.json";
// import l from 'leaflet-providers';

const countryStyle = {
  // "fillColor": "#fd6800",
  "fillOpacity": 0.5,
  "color": "#fd6800",
  "opacity": 0.2,
  "weight": 1.0,
  // "stroke": false,
};

const WorldLayers = (props) => {
  return [
    <TileLayer
      key="map"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
    />,
    <GeoJSON key="borders" data={countriesLayer} style={(feature) => {
      if (feature.properties.name === "Germany") return { ...countryStyle, "color": "#11ff11" };
      else return countryStyle;
  }}/>,
  ];
};

export const WorldMapWrapper = (props) => {
  return (
    <MapContainer
      className="map"
      center={[0, 0]}
      zoom={3}
      minZoom={3}
      maxBoundsViscosity={1}
      scrollWheelZoom={false}
      attributionControl={false}
      maxBounds={[
        [
          [-60, -180],
          [84, 180],
        ],
      ]}
    >
      <WorldLayers />
    </MapContainer>
  );
};
