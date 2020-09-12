// 1.创建Express实例
const Vue = require("vue");
const server = require("express")();
// 2.读取模版
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync("./template.html", "utf-8"),
});
// 3.处理GET请求
server.get("*", (req, res) => {
  res.set({ "Content-type": "text/html;charset=utf-8" });
  const app = new Vue({
    data: {
      title: "当前位置：",
      url: req.url,
    },
    template: "<div>{{title}} {{url}}</div>",
  });
  // 4.将vue实例渲染为html并输出
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end("err:" + err);
      return
    }
    res.end(html);
  })
})
server.listen(8080, function () {
  console.log("express server启动成功");
});
