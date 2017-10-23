/**
 * Created by Hsiang on 2017/3/20.
 *
 * # 应用层级的配置
 *
 * 包括domain/url/AK/ssecretID等
 *
 * 主要存放合成变量
 */
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
        hideNavBar: true
      }
    },
    alipay: {
      settings: {
        hideNavBar: true
      }
    },
    dingtalk: {
      settings: {
        hideNavBar: true
      }
    },
    qq: {
      settings: {
        hideNavBar: true
      }
    }
  },
  domain: 'http://localhost:3000'
}
