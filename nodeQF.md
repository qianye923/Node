【B 站视屏】链接地址 https://www.bilibili.com/video/av59502024/?p=3
day1——1008 p1-p7
day2——1009 p10-

## js 运行环境

- 浏览器
  - 基本语法
  - dom
  - bom
  - ajax -系统文件数据库（不是语言不能，而是出于安全考虑, 如果网页的 js 直接操作电脑系统， 将会很可怕）
- 服务器
  - 基本语法
  - 能操作数据库
  - 能操作本地文件

### nvm node 版本管理

       切换node的版本

错误处理 try catch 这个是异步的错误回调优先

### node 运行环境 REPL

## 模块化

- 内置模块
  > 文件操作
- 第三方模块
- 自定义模块

## node【p10】 nodemailer 插件方式 用 node 发送邮件

      01 https://www.npmjs.com/package/nodemailer => 点击 docs 查看实例
      在main.js 文件夹中

## 用 node.js 写爬虫案例【参考地址 https://www.cnblogs.com/lunlunshiwo/archive/2018/03/19/8597812.html】

> 1 获取目标网站 eg：www.mzitu.com/12568 选择要进行爬取的网址
> 2 分析网站内容
> 3 获取有效信息 下载或者其他操作

    + 爬虫总体的思路 ：
        >>  发送请求-->获取页面-->解析页面-->下载内容-->存储内容

        +  发送请求  request-promise插件
        +  解析页面  Cheerio插件
        +   fs模块进行创建文件夹以及下载文件
          >> 　1.fs.mkdirSync(downloadPath)：查看是否存在这个文件夹。　
               2.fs.mkdirSync(downloadPath)：创建文件夹。
               3.fs.createWriteStream(`${downloadPath}/${index}.jpg`):写入文件

## 【 day14】 express 的使用

ajax 2007.8 月

后端 api 接口 http：//www.baidu.com/user/login?user=123&ps=456

前端 1.写界面 2.请求数据 3.数据处理
后端 1.写 api

node 框架 express koa

    模块第三方的引用    从当前的目录查找node_modules  一级一级向上查找  （链想到全局安装）


## 【服务器相关】
   
     服务器  1 就是一台电脑   2.服务器软件(apache  tomcat iis ngnix node)  3 服务器ip（cmd->ipconfig）和端口号;

+ ip就是确定服务器主机的位置
+ port  端口
+ pathname 语义化
+ method get post


##  api接口书写[p17]

  - get   req.query
  - post    req.body 需要body-parser 插件进行解析
     + 注意数据格式  json  x-www-from-urencode   formdata   这3中格式 


##    express-midelware 中间键【注意一定要nex()】
    
   一般情况下  我们请求数据的时候 会带个随机数，就是我们所说的token;  那么每次我们接受请求的时候  每个方法都要先进行判断
   此时  我们可以用中间键 进入页面就要处理   
   + nex() 表示时候可以往后执行
   + '/' 这个参数是可以省略的


   + app.use('/',function(req,res,nex)=>{
           let {token}=req.query;
           if(token){
                 next()     // 可以执行js后面的代码
             }else{
                   res.send("请求中没有token参数")    // 无法执行当前js后面的代码
           }
   })


##  静态资源目录 static  [p 19]
      指定一个目录  目录可以被访问  类似于apache 中的www 目录
     const express = require("express");
     const path = require("path");
      const app = express();

      const url = path.join(__dirname, "./static")  //拼接路径
      app.use(express.static(url))




# [17-21] 完成


## 异步回调[p 21]

异步操作需要保持一定的执行顺序   回调函数的嵌套 ==> 导致回调地狱

解决回调地狱的方式:  (7种)
  +  promise
  +  asyc/await
  +  蓝鸟插件



https://www.jianshu.com/p/03ae3a684645   参考地址

Promise.reject(new Error('error'));
等同于
new Promise(function(resolve,reject){
  reject(new Error('error'));
})

  Promise.reject(new Error('error'));
等同于
new Promise(function(resolve,reject){
  reject(new Error('error'));
})