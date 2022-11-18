import { MXJSLog } from "mxflutter";

class WeatherData{
    city: String;
    windSpeed: number;
    id: number;
    descriptions: string;
    icon: string;
    temperature: number;
    humidity: number;
    
    constructor(id: number, description: string, icon: string, temperature: number, windSpeed: number, humidity: number, city: String){
        this.id = id;
        this.descriptions = description;
        this.icon = icon;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.humidity = humidity;
        this.city = city;
    }
}

export {WeatherData}