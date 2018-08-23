define(function () {
  var imgLoader = function (img) {
    return new Promise(function (resolve, reject) {

      if (img.complete) {
        resolve()
      } else {
        img.onload = function (event) {
          console.log('do')
          resolve(event)
        }
        img.onerror = function (err) {
          reject(err)
        }
      }
    })
  }
  return imgLoader
})