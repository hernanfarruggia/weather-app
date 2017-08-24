import angular from 'angular';

import Header from './header/header';
import Icon from './icon/icon';
import NavBottom from './nav-bottom/nav-bottom';
import WeatherContainer from './weather-container/weather-container';
import WeatherMain from './weather-main/weather-main';

let commonModule = angular.module('app.common', [])
.component('header', Header)
.component('icon', Icon)
.component('navBottom', NavBottom)
.component('weatherContainer', WeatherContainer)
.component('weatherMain', WeatherMain)

.name;

export default commonModule;
