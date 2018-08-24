define(function(require){

  var instance

  function Dialog({title, content}){
    this.title = title || '这是标题'
    this.content = content || '这是内容'

    this.html = `<div class='dialog-dropback'>
      <div class='container'>
        <div class='head'>${this.title}</div>
        <div class='content'>${this.content}</div>
        <div class='footer'>
          <button class='cancel'>取消</button>
          <button class='confirm'>确认</button>
        </div>
      </div>
    </div>` 
  }

  Dialog.prototype.show = function(){
    var self = this

    if(instance){
      this.destory()
    }
    $(this.html).appendTo($(document.body))
    instance = this

    return new Promise(function(resolve, reject){
      $('.dialog-dropback .cancel').on('click', function(){
        reject()
        self.hide()
      })
      $('.dialog-dropback .confirm').on('click', function(){
        resolve()
        self.hide()
      })
    })
  }

  Dialog.prototype.destory = function(){
    instance = null
    $('.dialog-dropback .cancel').off('click')
    $('.dialog-dropback .confirm').off('click')
    $('.dialog-dropback').remove()
  }

  Dialog.prototype.hide = function(){
    this.destory()
  }

  return function(config){
    return new Dialog(config)
  }
})