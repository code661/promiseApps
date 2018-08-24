requirejs.config({
  baseUrl: './',
  paths: {
    jquery: './libs/jQuery',
    request: './libs/request',
    calender: './components/calender',
    imgCenter: './components/imgCenter'
  }
})

define(function(require) {
  var $ = require('jquery')
  var calender = require('calender')
  var imgCenter = require('imgCenter')
  require('./components/button')

  var domList = document.querySelectorAll('.img-center')
  imgCenter(domList, 'aspectFill')
});

