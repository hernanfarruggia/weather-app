import _ from 'lodash';

class WeatherService {

    constructor ($http) {
        this.$http = $http;
    }

    getWeather () {
        return this.$http.get('http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b1b15e88fa797225412429c1c50c122a1')
            .then((response) => {
                const weatherList = response.data.list.slice(0, 3);

                return _.map(weatherList, (item) => {
                    const date = item.dt_txt.substr(0, 10).trim();
                    const day = new Date(date).toString().substr(0, 3);

                    return {
                        day,
                        condition: item.weather[0].main,
                        temp: {
                            max: item.main.temp_max,
                            min: item.main.temp_min
                        }
                    };
                });
            })
            .catch((error) => {
                const mockData = [{
                    day: 'Mon',
                    condition: 'Clouds',
                    temp: {
                        max: 75,
                        min: 50
                    }
                }, {
                    day: 'Tue',
                    condition: 'Clear',
                    temp: {
                        max: 85,
                        min: 67
                    }
                }, {
                    day: 'Wed',
                    condition: 'Rain',
                    temp: {
                        max: 72,
                        min: 56
                    }
                }];

                return mockData;
            });
    }

    static weatherServiceFactory ($http) {
        return new WeatherService($http);
    }
}

WeatherService.weatherServiceFactory.$inject = ['$http'];

export default WeatherService.weatherServiceFactory;