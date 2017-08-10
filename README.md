# vimo-start-kit

这个项目是Vimo框架的种子项目，目前项目已集成Vimo框架及必要的配置文件，业务在此基础上开发即可。

## 目录
```
| - build           构建工具配置	
| - config          构建工具配置	
| - dist            打包后的文件夹
| - src             业务相关
| --- assets        资源文件
| --- components    业务部分
| --- config        配置
| ----- app-configs.js       业务配置
| ----- platform-configs.js  平台配置
| --- router        路由
| - static          静态资源
| - package.json    应用配置

```


## 如何开始

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

## Vimo版本

Vimo组件库和项目是分离的，因此如果版本有问题可以升级或者回退，下面是改变版本的方法。

```bash
npm install vimo@x.x.x --save
```



## 关于主题


### 默认主题

Vimo使用的样式源自IONIC，并且自带`IOS `和`MaterialDesign`两个风格的样式，可以根据业务风格选择其一。

目前组件的主题是与组件相结合的，故不需要额外引入样式。在业务中根据`mode`变量开启，默认使用系统对应样式，比如IOS下使用`ios `主题，安卓下使用`md `主题。

### 组件样式使用Less开发

如果基础变量不满足业务，可以使用`modifyVars `的方式选择一种风格来覆盖变量，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。在具体工程实践中，可以在 `package.theme` 引入变量对象或者变量文件的位置。

此外还可以在业务中覆盖组件样式的方式，这里需要注意样式的生效优先级。



## 如何安装


```javascript
import vimo from 'vimo'
Vue.use(vimo, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
  router: router
})
```

对应的属性说明： 

- custConf： 应用配置
- pltConf： 平台配置
- router： 路由实例


## 应用配置(custConf)

对于vimo-start-kit项目，文件在：```./src/config/app-configs.js```。

这个文件是用于存放应用层级的配置，主要存放合成变量，例如示例：

```js
export default {
  getMemberUrl: window.domain + '/member',
  getShopUrl (plt) {
  	if (plt.is('wechat')) {
  		return window.domain + '/wechat/shop'
  	} else {
  		return window.domain + '/other/shop'
  	}
  }
};
```

变量获取后将缓存在配置对象中，包括需要函数计算后的变量，比如```getShopUrl```。

业务中通过下面的方式获取配置值。

```js
this.$config.get('getMemberUrl')
this.$config.get('getShopUrl')
```

这样做的优势在于能获取较为复杂的变量，比如变量获取前需要函数处理。

此外，```custConf```可能存储平台的初始化设置，比如：

- mode：主题样式
- backButtonText：返回按钮文字
- pageTransition：页面切换转场动画
- ....

[其余配置参考各类设备别的```setting```属性](https://github.com/DTFE/vimo/blob/master/components/base/platform-default-configs.js)，示例如下：

```javascript
export default {
  platforms: {
    ios: {
      settings: {
		pageTransition: 'fade-right-transition'
      }
    },
    android: {
      settings: {
		pageTransition: 'zoom-transition'
      }
    },
    wechat: {
      settings: {
		mode:'md',
		customerSetting: 'Hello Wechat!',
		hideNavBar: true
      }
    },
    alipay: {
      settings: {
		mode:'ios',
		hideNavBar: true
      }
    }
  }
}
```

上述配置说明：

- 微信平台：使用md主题
- 支付宝平台：使用ios主题
- 如果是IOS设备使用：```fade-right-transition```转场动画
- 如果是Android设备使用：```zoom-transition```转场动画
- ```customerSetting```这个属性只能在微信平台能拿到值

## 平台配置

关于platform-configs.js

Vimo是能感知用户的使用平台的，因此不同平台的初始化可以分开进行，当平台初始化完毕后需要根据平台进行配置，比如微信JSSDK需要完成config配置，这部分可在`bridgeReady`钩子中进行，变量`plt`是当前平台的实例。

此外，对于自有平台，也可以在此注册。

```js
export default {
	wechat:{
		bridgeReady(plt){
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
	}
}

```

