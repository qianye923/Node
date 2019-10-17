//  引入 入request-promise模块  fs模块  cheerio 模块  已经路径
 
 const rq=require("request-promise"),
  fs=require("fs"),
  cheerio=require("cheerio"), // 这个作用就是把获取的页面转成可操作的Dom; 用于服务器端对Dom 的操作;可使用jq的方法;
  url="./image/"
const   downloadPath;



module.exports={
    async getPage(url){
         let Data={
             url:url,
             res：rq({url:url})
         }
        return data;  // 返回的是url喝获取的页面;
    }
     getUrl:(data)=>{
        const cheerio = require('cheerio');
        const $ = cheerio.load(data.res);   // 此时吧需要爬虫的页面转化成可操作的Dom；
         let list=[];
        $("#pins li a").children().each((index,item)=>{
           let obj={
               name:item.arreibs.alt,
               url:item.parent.attribs.href
           }
           list.push(obj)
        })
       return list;
     }
}


//  判断是否存在此文件夹 如果没有就创建
 getTitle(obj){
    downloadPath= downloadPath+obj.name;
     if(!fs.existsSync(downloadPath)){
          fs.mkdirSync(downloadPath);
          console.log("文件路径存在");
          return true
     }else{
         console.log("文件路径已经存在")
          return false;
     }

 }

 getImagesNum(res,name){
    if (res) {
        let $ = cheerio.load(res);
        let len = $(".pagenavi")
          .find("a")
          .find("span").length;
        if (len == 0) {
          fs.rmdirSync(`${depositPath}${name}`); //删除无法下载的文件夹
          return 0;
        }
        let pageIndex = $(".pagenavi")
          .find("a")
          .find("span")[len - 2].children[0].data;
        return pageIndex; //返回图片总数
      }
 }

 async downloadImage(data,index){
     if(data.res){
          var $=cheerio.load(data.res);
          if ($(".main-image").find("img")[0]) {
            let imgSrc = $(".main-image").find("img")[0].attribs.src; //图片地址
            let headers = {
              Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
              "Accept-Encoding": "gzip, deflate",
              "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
              "Cache-Control": "no-cache",
              Host: "i.meizitu.net",
              Pragma: "no-cache",
              "Proxy-Connection": "keep-alive",
              Referer: data.url,
              "Upgrade-Insecure-Requests": 1,
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.19 Safari/537.36"
            }; //反防盗链
            await rp({
                url: imgSrc,
                resolveWithFullResponse: true,
                headers
              }).pipe(fs.createWriteStream(`${downloadPath}/${index}.jpg`)); //下载
              console.log(`${downloadPath}/${index}.jpg下载成功`);
            } else {
              console.log(`${downloadPath}/${index}.jpg加载失败`);
            }
          }
     }
 }





 const baseUrl="http://www.mzitu.com/page/"
  let start=1,end =10;
const main=(url)=>{
    let list = [],
    index = 0;
  const data = await model.getPage(url);
  list = model.getUrl(data);  // 获取的图片的链接数组
  downLoadImages(list, index);//下载

 }

 const downLoadImages = async (list, index) => {
    if (index == list.length) {
      start++;
      if (start < end) {
        main(basicPath + start);//进行下一页图片组的爬取。
      }
      return false;
    }
    if (model.getTitle(list[index])) {
      let item = await model.getPage(list[index].url),//获取图片所在网页的url
        imageNum = model.getImagesNum(item.res,list[index].name);//获取这组图片的数量 item.res获取的网页   list[index].name图片网页的名字后面作为文件夹名字
      for (var i = 1; i <= imageNum; i++) {
        let page = await model.getPage(list[index].url + `/${i}`);//遍历获取这组图片每一张所在的网页
        await model.downloadImage(page, i);//下载
      }
      index++;
      downLoadImages(list, index);//循环完成下载下一组
    } else {
      index++;
      downLoadImages(list, index);//下载下一组
    }
  };
  
  main(basicPath + start);
  