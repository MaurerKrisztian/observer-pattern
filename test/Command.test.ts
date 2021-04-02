import {Observer1, Observer2, Observer3} from "./testClass/SomeObservers";
import {Observable} from "../lib/Observable";

describe("Observer test", () => {
    const observable = new Observable();

    const observer1 = new Observer1()
    const observer2 = new Observer2()
    const observer3 = new Observer3()

    observable.add(observer1)
    observable.add(observer2)
    observable.add(observer3)

    const testData1 = {channel: 'test', data: {something: 111}}
    const testData2 = {channel: 'test2', data: {somethingElse: 12}}


    test("Observer add test", async () => {

        observable.notify(testData1.data, testData1.channel)

        expect(observer1.lastUpdateData).toBe(testData1.data);
        expect(observer2.lastUpdateData).toBe(testData1.data);
        expect(observer3.lastUpdateData).toBe(testData1.data);

        expect(observer1.lastUpdateChannel).toBe(testData1.channel);
        expect(observer2.lastUpdateChannel).toBe(testData1.channel);
        expect(observer3.lastUpdateChannel).toBe(testData1.channel);
    })

    test("Observer remove test", async () => {

        observable.remove(observer2)
        observable.notify(testData2.data, testData2.channel)

        expect(observer1.lastUpdateData).toBe(testData2.data);
        expect(observer2.lastUpdateData).toBe(testData1.data);
        expect(observer3.lastUpdateData).toBe(testData2.data);

        expect(observer1.lastUpdateChannel).toBe(testData2.channel);
        expect(observer2.lastUpdateChannel).toBe(testData1.channel);
        expect(observer3.lastUpdateChannel).toBe(testData2.channel);

    })
})

