import { MXJSLog } from "mxflutter";
import { ChangeNotifier } from "mxflutter-widgets/cupertino";
import { WeatherModel } from "../../data/models/weather_model";
import { WeatherData } from "../../domain/entities/weather_data";
import { WeatherRepo } from "../../domain/repo";

export class WeatherDetailViewModel extends ChangeNotifier{
    private static _instance: WeatherDetailViewModel;

    public weatherRepo: WeatherRepo;
    public weatherDetail: WeatherData;

    private constructor() {
        super();
        this.weatherRepo = new WeatherRepo();
    }
    
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    async getWeatherData(city: String){
        const queryParameters = {
            'q': city,
            'appid': 'bda1b247c678eecf35c65f615b188b05',
            'units': 'metric'
        };
        MXJSLog.log("get weather data:" + city);
        //const qrParams = new Map<String,String>(Object.entries(queryParameters));
        this.weatherDetail = await this.weatherRepo.getData(queryParameters);
    }

}
