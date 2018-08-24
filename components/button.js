define(function(require) {
  var Dialog = require('./dialog')

  $('.aspect').on('click',function(){
    Dialog({
      title: '友情提示',
      content: '外面空气不太好，你确认要出门吗？'
    }).show().then(function(){
      console.log('点击了确认')
    }).catch(function(){
      console.log('点击了取消')
    })
  })
})