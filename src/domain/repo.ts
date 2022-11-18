import { Dio } from "mxflutter-dio";
import { WeatherModel } from "../data/models/weather_model";
import { MXJSLog } from 'mxflutter';
import { WeatherData } from "./entities/weather_data";
import { NetworkConfig } from "../config/network_config";



export class WeatherRepo{
    dio: any;

    constructor(){
        this.dio = Dio();
    }

    async getData(params: any): Promise<WeatherData> {
        try {
            MXJSLog.log("get data");
            let response = await this.dio.get(NetworkConfig.WEATHER_BASE_URL, {
                queryParameters: params,
            });
            MXJSLog.log("await Dio.get(urlStr):request() :" + JSON.stringify(response.data));
            let weatherResponse: WeatherModel = response.data;
            return this.entityFromModel(weatherResponse);
          } catch (e) {
            MXJSLog.log("testDio() error:" + e);
            return e;
          }
    }

    entityFromModel(weather: WeatherModel): WeatherData{
        let weatherData = new WeatherData(weather.weather[0].id, weather.weather[0].description, weather.weather[0].icon, weather.main.temp, weather.wind.speed, weather.main.humidity, weather.name);
        return weatherData;
    }

}