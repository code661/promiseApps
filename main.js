requirejs.config({
  baseUrl: './',
  paths: {
    jquery: './libs/jQuery',
    request: './libs/request',
    calender: './components/calender'
  }
})

define(function(require) {
  'use strict';
  var calender = require('calender')

});

