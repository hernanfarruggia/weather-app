import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

import Common from './common/common';
import Components from './components/components';
import Services from './services/services';

import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    ngSanitize,
    uiRouter,
    Common,
    Components,
    Services
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });
})

.component('app', AppComponent);
