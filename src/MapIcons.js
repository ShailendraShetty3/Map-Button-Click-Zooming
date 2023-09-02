import React from "react";
import L from "leaflet";

import StormWaterDrain from "./Images/stormWaterDrain.png";
import Manhole from "./Images/manhole.png";
import SewageChamber from "./Images/sewageChamber.png";
import WaterSupplyValve from "./Images/waterSupplyValve.png";
import ElectricPole from "./Images/electricPoleIcon.png";
import StreetLight from "./Images/streetLightIcon.png";
import Cyclone from "./Images/cyclone.png";
import FireSensor from "./Images/fireSensor.svg";
import PanicSensor from "./Images/panicSensor.png";
import WaterSensor from './Images/waterSensorIcon.svg';
import CCTVICON from './Images/cctvIcon.svg';
import FireStation from './Images/fireStation.png';
import MedicalFacility from './Images/HospitalIcon.png';
import Evacuation from './Images/evacuationCenter.png';

//alert
import alertAir from './Images/redAirSensor.png';
import redStreetLight from './Images/redStreetLight.png';

//
import AirSensorIcon from "./Images/AirSensor.png";

export const customIcon = new L.Icon({
  iconUrl: AirSensorIcon,
  iconSize: [22, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

//// Alert air Quality
export const AlertAirQuality = new L.Icon({
  iconUrl: alertAir,
  iconSize: [25, 35],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  className: 'blinking-icon',
});

export const StormWaterDrainIcon = new L.Icon({
  iconUrl: StormWaterDrain,
  iconSize: [10, 10],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const manHoleIcon = new L.Icon({
  iconUrl: Manhole,
  iconSize: [10, 10],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const SewageChamberIcon = new L.Icon({
  iconUrl: SewageChamber,
  iconSize: [15, 15],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const WaterSupplyValveIcon = new L.Icon({
  iconUrl: WaterSupplyValve,
  iconSize: [10, 10],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const StreetLightIcon = new L.Icon({
  iconUrl: StreetLight,
  iconSize: [18, 18],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

///red street light

export const RedStreetLight = new L.Icon({
  iconUrl: redStreetLight,
  iconSize: [23, 23],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  className: 'blinking-icon',
});

export const ElectricPoleIcon = new L.Icon({
  iconUrl: ElectricPole,
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});


export const CycloneIcon = new L.Icon({
  iconUrl: Cyclone,
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});


export const FireSensorIcon = new L.Icon({
  iconUrl: FireSensor,
  iconSize: [22, 25],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

//blinking fire sensor
export const BlinkingFireSensor = new L.Icon({
  iconUrl: FireSensor,
  iconSize: [23, 23],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  className: 'blinking-icon',
});

export const PanicSensorIcon = new L.Icon({
  iconUrl: PanicSensor,
  iconSize: [30, 28],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});


export const WaterSensorIcon = new L.Icon({
  iconUrl: WaterSensor,
  iconSize: [22, 25],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const CCTVIcon = new L.Icon({
  iconUrl: CCTVICON,
  iconSize: [22, 25],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});


export const FireStationIcon = new L.Icon({
  iconUrl: FireStation,
  iconSize: [28, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const MedicalFacilityIcon = new L.Icon({
  iconUrl: MedicalFacility,
  iconSize: [28, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

export const EvacuationIcon = new L.Icon({
  iconUrl: Evacuation,
  iconSize: [22, 25],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});



const blinkingAnimation = `
  @keyframes blink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;