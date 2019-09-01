"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDefaultGhost(target) {
    return new Proxy(target, {
        get: function (obj, prop) {
            return function () {
                let args = arguments;
                return function (defaultData) {
                    let fn = obj[prop];
                    if (fn) {
                        return fn.apply(obj, args);
                    }
                    else {
                        return defaultData;
                    }
                };
            };
        }
    });
}
exports.createDefaultGhost = createDefaultGhost;
