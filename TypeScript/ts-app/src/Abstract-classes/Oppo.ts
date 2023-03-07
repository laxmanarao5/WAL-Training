import { BBKEle } from "./BBKEle";

export abstract class Oppo extends BBKEle
{
    makeBattery(): void {
        console.log("Battery ready");     
    }
}