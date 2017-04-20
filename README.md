# vimo-start-kit

这个项目是Vimo框架的种子项目，目前项目已集成Vimo框架及必要的配置文件，业务在此基础上开发即可。

## 目录
```
| - build					构建工具配置	
| - config					构建工具配置	
| - dist					打包后的文件夹
| - src						业务相关
| --- assets				资源文件
| --- components			业务部分
| --- config				配置
| ----- app-configs.js		业务配置
| ----- platform-configs.js 平台配置
| --- router				路由
| --- theme 				主题样式
| - static 					静态资源

```





## 开始

``` bash
# 安装依赖
npm install

# 开启开发模式，服务在 localhost:8080
npm run dev

# 项目的打包发布
npm run build

# 项目的打包发布查看每个包的分析报告
npm run build --report
```

## 对升级Vimo

```
npm install vimo@x.x.x --save
```

## 关于主题

目前主题是与组件相结合的，分为ios和md两个样式主题。可选择其一之后再此基础上修改样式开发。

## 关于app-configs.js

这个文件是用于存放应用层级的配置，主要存放合成变量，例如示例：

```js
export default {
  getMemberUrl: window.domain + '/member'
};
```

元变量存放在window上，或者别的变量上便于修改。

业务中通过下面的方式获取配置值。

```js
this.$config.get('getMemberUrl')
```

## 关于platform-configs.js

Vimo是能感知用户的使用平台的，因此不同平台的初始化可以分开进行，当平台初始化完毕后需要根据平台进行配置，比如微信JSSDK需要完成config配置，这部分可在`onBridgeReady`钩子中进行，变量`plt`是当前平台的实例。

```js
onBridgeReady(plt){
  // 业务中这样调用：this.$platform.do('chooseImage',function(result){})
  plt.registerMethod('chooseImage', function (callback) {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        callback && callback(localIds)
      }
    })
  })

}
```


## 下一步的计划

因为组件的样式就和人的衣服一样，总是在变，但是在vue文件中抽离样式又违背了vue大一统的思想，因此后续会将整个Vimo项目引入而不是使用npm安装，前提是组件不能有太多bug。



