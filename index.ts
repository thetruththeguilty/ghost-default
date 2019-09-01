export function createDefaultGhost(target: any): {
  [index: string]: Function
} {
  return new Proxy(target, {
    get: function (obj, prop) {
      return function (defaultData: any) {
        return function () {
          let fn = obj[prop]
          if (fn) {
            return fn.apply(obj, arguments)
          }
          else {
            return defaultData
          }
        }
      }
    }
  })
}