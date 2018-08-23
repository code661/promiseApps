define(function(require){
  var request = require('request')

  request.getDayInfo()
    .then(function(resp){
      console.log(resp)
    })

  request.getTypeInfo()
    .then(function(resp){
      console.log(resp)
    })
})