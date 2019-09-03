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
/**
 * Get the value at path of object.
 * If the resolved values is undefined, the defaultValue is returnted in its place.
 *
 * @param {any} value The object to query.
 * @param {string} path The path of the property to get.
 * @param {T} defaultValue The value returned for undefined resolved values.
 */
function get(value, path, defaultValue) {
    return path
        .replace(/\[(\w+)\]/g, '.$1')
        .split('.')
        .reduce((p, k) => {
        if (p && typeof p[k] !== 'undefined') {
            return p[k];
        }
        return defaultValue;
    }, value);
}
exports.get = get;
