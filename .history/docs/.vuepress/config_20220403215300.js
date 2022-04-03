module.exports = {
  // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  title: "link's website",
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  description: "this is link's website / 这里是林刻的网站",
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签，
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // 指定用于 dev server 的主机名。
  host: "0.0.0.0",
  // 指定 dev server 的端口。
  port: "8081",
  // 指定客户端文件的临时目录
  temp: "/path/to/@vuepress/core/.temp",
  // 指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析
  dest: ".vuepress/dist",
  // 提供多语言支持的语言配置。具体细节请查看
  locales: undefined,
};
