define(function (require) {
  var imgLoader = require('./libs/imgLoader')
  var $ = require('jquery')

  var imgCenter = function (domList, mode) {
    domList.forEach(function (item) {
      var img = item.children[0]
      var itemW = item.offsetWidth
      var itemH = item.offsetHeight
      var itemR = itemW / itemH

      imgLoader(img).then(function () {
        
        var imgW = img.naturalWidth
        var imgH = img.naturalHeight
        var imgR = imgW / imgH

        var resultMode = null

        switch (mode) {
          case 'aspectFill':
            resultMode = imgR > 1 ? 'aspectFill-x' : 'aspectFill-y'
            break;
          case 'wspectFill':
            resultMode = itemR > imgR ? 'aspectFill-x' : 'aspectFill-y'
          default:
            break;
        }

        $(img).addClass(resultMode)
      })
    })
  }
  return imgCenter
})