"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BBKEle = void 0;
const Mobile_1 = require("./Mobile");
class BBKEle extends Mobile_1.Mobile {
    makePCB() {
        console.log("PCB ready");
    }
    makeCamera() {
        console.log("Camera Ready");
    }
}
exports.BBKEle = BBKEle;
