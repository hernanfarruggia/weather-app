import angular from 'angular';

import WeatherService from './weather/weather';

let servicesModule = angular.module('app.services', [])
.factory('weatherService', WeatherService)

.name;

export default servicesModule;
