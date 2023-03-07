import { Mobile } from "./Mobile";

export abstract class BBKEle extends Mobile{
    makePCB():void{
        console.log("PCB ready");   
    }
    makeCamera(): void {
        console.log("Camera Ready");
        
    }
}