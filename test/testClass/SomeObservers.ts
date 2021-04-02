import {IObserver} from "../../lib/IObserver";
import {IWeatherObservableNotify} from "./WeatherObservable";

export class Observer1 implements IObserver<IWeatherObservableNotify> {
    lastUpdateData: any;
    lastUpdateChannel: any;

    update(data: IWeatherObservableNotify, channel?: string): void {
        this.lastUpdateChannel = channel;
        this.lastUpdateData = data;

        console.log(`Observer1: channel ${channel} data: `, data)
    }

}


export class Observer2 implements IObserver<IWeatherObservableNotify> {
    lastUpdateData: any;
    lastUpdateChannel: any;

    update(data: IWeatherObservableNotify, channel?: string): void {
        this.lastUpdateChannel = channel;
        this.lastUpdateData = data;

        console.log(`Observer2: channel ${channel} data: `, data)
    }

}


export class Observer3 implements IObserver<IWeatherObservableNotify> {
    lastUpdateData: any;
    lastUpdateChannel: any;

    update(data: IWeatherObservableNotify, channel?: string): void {
        this.lastUpdateChannel = channel;
        this.lastUpdateData = data;

        console.log(`Observer3: channel ${channel} data: `, data)
    }

}
