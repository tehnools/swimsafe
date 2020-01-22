import React from 'react';
import North from '../components/common/images/windIcons/North';
import greyDroplet from '../resources/images/svg/water_quality_grey.svg';
import waveUnavailable from '../resources/images/svg/swell_unavailable_icon.svg';
import tempUnavailable from '../resources/images/svg/water_temp_unavailable.svg';
import East from '../components/common/images/windIcons/East';
import West from '../components/common/images/windIcons/West';
import South from '../components/common/images/windIcons/South';
import NorthNorthEast from '../components/common/images/windIcons/NorthNorthEast';
import NorthNorthWest from '../components/common/images/windIcons/NorthNorthWest';
import NorthEast from '../components/common/images/windIcons/NorthEast';
import NorthWest from '../components/common/images/windIcons/NorthWest';
import EastNorthEast from '../components/common/images/windIcons/EastNorthEast';
import WestNorthWest from '../components/common/images/windIcons/WestNorthWest';
import Unavailable from '../components/common/images/windIcons/Unavailable';
import SouthEast from '../components/common/images/windIcons/SouthEast';
import SouthWest from '../components/common/images/windIcons/SouthWest';
import SouthSouthWest from '../components/common/images/windIcons/SouthSouthWest';
import SouthSouthEast from '../components/common/images/windIcons/SouthSouthEast';
import WestSouthWest from '../components/common/images/windIcons/WestSouthWest';
import EastSouthEast from '../components/common/images/windIcons/EastSouthEast';
import SwellHeightIcon from '../resources/images/svg/swell_icon.svg';
import LowTemp from '../resources/images/svg/water_temp_low.svg';
import MidTemp from '../resources/images/svg/water_temp_mid.svg';
import HighTemp from '../resources/images/svg/water_temp_high.svg';
import HotTemp from '../resources/images/svg/water_temp_hot.svg';
import cloud from '../resources/images/svg/weather_cloud.svg';
import rain from '../resources/images/svg/weather_rain.svg';
import storm from '../resources/images/svg/weather_storm.svg';
import sun from '../resources/images/svg/weather_sun.svg';
import snow from '../resources/images/svg/weather_snow.svg';
import fog from '../resources/images/svg/weather_fog.svg';
import showers from '../resources/images/svg/weather_showers.svg';
import windy from '../resources/images/svg/weather_windy.svg';
import weatherUnavailable from '../resources/images/svg/weather_unavailable.svg';

const sunnyKeyWords = ['sunny', 'mostly sunny', 'partly sunny', 'clear', 'mostly clear'];
const cloudyKeyWords = ['intermittent clouds', 'hazy sunshine', 'mostly cloudy', 'cloudy', 'dreary (overcast)', 'dreary', 'overcast', 'hazy moonlight', 'partly cloudy'];
const rainKeyWords = ['rain', 'freezing rain'];
const showerKeyWords = ['mostly cloudy w/ showers', 'partly sunny w/ showers', 'showers', 'partly cloudy w/ showers'];
const snowKeyWords = ['snow', 'flurries', 'mostly cloudy w/ flurries', 'partly sunny w/ flurries', 'mostly cloudy w/ snow', 'ice', 'sleet', 'rain and snow'];
const stormKeyWords = ['t-storms', 'mostly cloudy w/ t-storms', 'partly sunny w/ t-storms', 'partly cloudy w/ t-storms', 'thunderstorms'];

export function getWaterTempIcon(temp) {
  const lowTemp = temp <= 10;
  const midTemp = temp > 10 && temp <= 14;
  const highTemp = temp > 14 && temp <= 18;
  if (lowTemp) {
    return <img src={LowTemp} alt="low temperature" />;
  } if (midTemp) {
    return <img src={MidTemp} alt="medium temperature" />;
  } if (highTemp) {
    return <img src={HighTemp} alt="high temperature" />;
  }
  return <img src={HotTemp} alt="hot temperature" />;
}

export function getWeatherIcon(phrase) {
  const iconPhrase = getIconPhrase(phrase).toLowerCase();
  switch (iconPhrase) {
    case 'cloudy':
      return <img src={cloud} alt="clouds" />;
    case 'sunny':
      return <img src={sun} alt="sun" />;
    case 'rain':
      return <img src={rain} alt="rain" />;
    case 'showers':
      return <img src={showers} alt="shower" />;
    case 'snow':
      return <img src={snow} alt="snowfall" />;
    case 'storm':
      return <img src={storm} alt="storm" />;
    case 'fog':
      return <img src={fog} alt="" />;
    case 'windy':
      return <img src={windy} alt="" />;
    default:
      return <img src={weatherUnavailable} alt="" />;
  }
}

export function getIconPhrase(phrase) {
  if (phrase) {
    const phraseLowerCase = phrase.toLowerCase();
    if (sunnyKeyWords.indexOf(phraseLowerCase) > -1) {
      return 'Sunny';
    } if (cloudyKeyWords.indexOf(phraseLowerCase) > -1) {
      return 'Cloudy';
    } if (rainKeyWords.indexOf(phraseLowerCase) > -1) {
      return 'Rain';
    } if (showerKeyWords.indexOf(phraseLowerCase) > -1) {
      return 'Showers';
    } if (snowKeyWords.indexOf(phraseLowerCase) > -1) {
      return 'Snow';
    } if (stormKeyWords.indexOf(phraseLowerCase) > -1) {
      return 'Storm';
    } if (phraseLowerCase === 'fog') {
      return 'Fog';
    } if (phraseLowerCase === 'windy') {
      return 'Windy';
    } if (phraseLowerCase === 'unavailable') {
      return 'Unavailable';
    }
  }
  return 'Unavailable';
}

export function getWaveHeightIcon(angle) {
  return (
    <div style={{ transform: `rotate(${angle}deg)` }}><img src={SwellHeightIcon} alt="" /></div>
  );
}

export function getWindIcon(direction) {
  switch (direction) {
    case 'N':
      return <North customClass="n.blue" backgroundColor="#001930" />;
    case 'NE':
      return <NorthEast customClass="ne.blue" backgroundColor="#001930" />;
    case 'NW':
      return <NorthWest customClass="nw.blue" backgroundColor="#001930" />;
    case 'NNE':
      return <NorthNorthEast customClass="nne.blue" backgroundColor="#001930" />;
    case 'NNW':
      return <NorthNorthWest customClass="nnw.blue" backgroundColor="#001930" />;
    case 'ENE':
      return <EastNorthEast customClass="ene.blue" backgroundColor="#001930" />;
    case 'WNW':
      return <WestNorthWest customClass="wnw.blue" backgroundColor="#001930" />;
    case 'W':
      return <West customClass="w.blue" backgroundColor="#001930" />;
    case 'E':
      return <East customClass="e.blue" backgroundColor="#001930" />;
    case 'S':
      return <South customClass="s.blue" backgroundColor="#001930" />;
    case 'SE':
      return <SouthEast customClass="se.blue" backgroundColor="#001930" />;
    case 'SW':
      return <SouthWest customClass="sw.blue" backgroundColor="#001930" />;
    case 'SSW':
      return <SouthSouthWest customClass="ssw.blue" backgroundColor="#001930" />;
    case 'SSE':
      return <SouthSouthEast customClass="sse.blue" backgroundColor="#001930" />;
    case 'WSW':
      return <WestSouthWest customClass="wsw.blue" backgroundColor="#001930" />;
    case 'ESE':
      return <EastSouthEast customClass="ese.blue" backgroundColor="#001930" />;
    default:
      return <Unavailable customClass="ese.blue" backgroundColor="#001930" />;
  }
}

export function renderUnavailableForecasts(key, forecastType, forecastArray) {
  for (let i = 5; i <= 21; i += 2) {
    if (forecastType === 'water') {
      forecastArray.push(<td key={`water.unavailable.${key}.${i}`}>
        <img src={greyDroplet} alt="" />
      </td>);
    } else if (forecastType === 'wind') {
      forecastArray.push(<td key={`wind.unavailable.${key}.${i}`}>
        {getWindIcon(null, null)}
        {' '}
Unavailable
      </td>);
    } else if (forecastType === 'waveHeight') {
      forecastArray.push(<td key={`waveHeight.unavailable.${key}.${i}`}>
        <img
          src={waveUnavailable}
          alt=""
        />
Unavailable
      </td>);
    } else if (forecastType === 'waterTemp') {
      forecastArray.push(<td key={`waterTemp.unavailable.${key}.${i}`}>
        <img
          src={tempUnavailable}
          alt=""
        />
Unavailable
      </td>);
    } else if (forecastType === 'weather') {
      forecastArray.push(<td key={`weather.unavailable.${key}.${i}`}>
        <img
          src={weatherUnavailable}
          alt=""
        />
                         </td>);
    }
  }
}
