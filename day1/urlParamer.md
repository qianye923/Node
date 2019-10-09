## 参考文档
    https://www.cnblogs.com/ostrich-sunshine/p/6741180.html


### url请求是包含的  参数的获取的方式


  GET方式发送的url    （req.query的方式）包含在路由中每个查询字符串参数属性的对象。如果没有，默认为{}
                
     /search?q=tobi+ferret 
           req.query.q  => "tobi ferret"


     /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
         req.query.order    // => "desc"
         req.query.shoe.color    // => "blue"
         req.query.shoe.type  // => "converse"


包含映射到指定的路线“参数”属性的对象。

    route/user/：name  那么“name”属性可作为req.params.name。该对象默认为{}。

        /user/tj
        req.params.name//    =>   "tj"


req.query与req.params的区别

req.params包含路由参数（在URL的路径部分），而req.query包含URL的查询参数（在URL的？后的参数）