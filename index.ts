export function createDefaultGhost(target: any): {
  [index: string]: Function
} {
  return new Proxy(target, {
    get: function (obj, prop) {
      return function () {
        let args = arguments
        return function (defaultData: any) {
          let fn = obj[prop]
          if (fn) {
            return fn.apply(obj, args)
          }
          else {
            return defaultData
          }
        }
      }
    }
  })
}