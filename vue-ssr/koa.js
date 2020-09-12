// 1.创建koa实例
const Vue = require("vue");
const Koa = require("koa");
const app = new Koa();
// 2.读取模版
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync("./template.html", "utf-8"),
});
// 3.添加中间件处理所有请求
app.use(async (ctx, next) => {
  const vm = new Vue({
    data: {
      title: "当前位置",
      url: ctx.url,
    },
    template: "<div>{{title}} {{url}}</div>",
  });
  // 4.将vm渲染为html
  renderer.renderToString(vm, (err, html) => {
    if (err) {
      ctx.status(500).end("err:" + err);
      return;
    }
    ctx.body=html;
  });
});
app.listen(8081, function () {
    console.log("koa server启动成功");
  });
