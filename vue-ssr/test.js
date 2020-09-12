// 1.创建vue实例
const Vue = require("vue")
const app = new Vue({
  template: "<div>SSR的简单使用</div>",
});
// 2.创建一个renderer渲染器
const renderer = require("vue-server-renderer").createRenderer()
// 3.将vue实例渲染为html
renderer.renderToString(app, (err, html) => {
  if (err) {
    throw err;
  }
  console.log(html);
});
