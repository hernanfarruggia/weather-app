class WeatherContainerCtrl {

    constructor(weatherService) {
        this.activeOption = 0;
        this.currentWeather = {};
        this.weatherList = [];

        weatherService.getWeather()
            .then((data) => {
                this.weatherList = data;

                this.actions = _.map(data, (item) => {
                    return {
                        label: item.day,
                        condition: item.condition,
                        cb: this.changeMainView.bind(this)
                    };
                });

                this.handleMainView(0);
            });
    }

    changeMainView (index) {
        this.activeOption = index;
        this.handleMainView(index);
    }

    handleMainView (index) {
        this.currentWeather = this.weatherList[index];
    }
}

WeatherContainerCtrl.$inject = ['weatherService'];

let weatherContainerComponent = {
    bindings: {},
    templateUrl: '/app/common/weather-container/weather-container.html',
    controller: WeatherContainerCtrl
};

export default weatherContainerComponent;
