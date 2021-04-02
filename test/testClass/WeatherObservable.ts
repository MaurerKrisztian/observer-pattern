import {IObservableClass} from "../../lib/IObservableClass";
import {Observable} from "../../lib/Observable";

export interface IWeatherObservableNotify {
    data: number
    time: Date;
}

export class WeatherObservable implements IObservableClass<IWeatherObservableNotify> {
    observable: Observable<IWeatherObservableNotify> = new Observable<IWeatherObservableNotify>();

    private _temperature: number = 0;
    private _humidity: number = 33;

    setTemperature(t: number) {
        this._temperature = t;
        this.observable.notify({data: this._temperature, time: new Date()}, 'temperature')
    }

    setHumidity(h: number) {
        this._humidity = h;
        this.observable.notify({data: this._humidity, time: new Date()}, 'humidity')
    }
}
