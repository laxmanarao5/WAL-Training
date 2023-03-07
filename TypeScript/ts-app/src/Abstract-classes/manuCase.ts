import { Oppo } from "./Oppo";

export abstract class manuCase extends Oppo{
    makeCase(): void {
        console.log("Case ready");    
    }
}