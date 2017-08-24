import angular from 'angular';

import Home from './home/home';

let componentModule = angular.module('app.components', [])
.component('home', Home)

.name;

export default componentModule;
