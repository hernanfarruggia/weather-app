import './weather-main.scss';

class WeatherMainCtrl {

    constructor() {

    }
}

let weatherMainComponent = {
    bindings: {
        info: '<'
    },
    templateUrl: '/app/common/weather-main/weather-main.html',
    controller: WeatherMainCtrl
};

export default weatherMainComponent;
