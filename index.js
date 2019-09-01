module.exports = function createDefaultGhost(target) {
  return new Proxy(target, {
    get: function (obj, prop) {
      return function (defaultData) {
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