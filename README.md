# 学习 Promise 的使用
项目使用 [RequireJS](http://requirejs.org/) 来管理模块加载

## 第一个应用场景：Ajax

* `API.js` 模块用于管理所有的 url
* `request.js` 模块用于发送数据请求
* `calender.js` 为页面的一个组件，可以根据数据渲染出需求想要的样式

⭐️ 实现原理: 因为 jQuery 中的 `$.get()` 方法也是通过 Promise 进行了封装，最终返回的是一个Promise对象，因此这样我们就可以将数据请求与数据处理放在不同的模块。维护起来就更加方便了，代码结构也足够清晰。
