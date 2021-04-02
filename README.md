# Observer-pattern

```typescript

// interfaces
export interface IObserver<DataTypes> {
    update(data: DataTypes, channel?: string): void
}

export interface IObservable<T> {
    add(observer: IObserver<T>): void

    remove(observer: IObserver<T>): void

    notify(data: T, channel?: string): void
}

export interface IObservableClass<DataTypes> { // DataTypes - what thype of data will send the observer?
    observable: Observable<DataTypes>
}

// -------------------------------------

const observable = new Observable();

const observer1 = new Observer1()
const observer2 = new Observer2()
const observer3 = new Observer3()

observable.add(observer1)
observable.add(observer2)
observable.add(observer3)

// send data to observer1, observer2, observer3
observable.notify({temperatureData: 30, time: new Date()}, 'temperature') // data: DataTypes, channel: string 

observable.remove(observer2)

// send data to observer1, observer3
observable.notify({temperatureData: 12, time: new Date()}, 'temperature')


```

### Example usage:

```typescript

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

```
