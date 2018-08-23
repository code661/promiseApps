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
  'use strict';
  var calender = require('calender')
  var imgCenter = require('imgCenter')

  var domList = document.querySelectorAll('.img-center')
  imgCenter(domList, 'aspectFill')
});

