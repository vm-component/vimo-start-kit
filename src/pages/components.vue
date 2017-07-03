<template>
    <Page>
        <Header>
            <Navbar>
                <Title>组件</Title>
            </Navbar>
            <Toolbar>
                <!--content-->
                <Segment v-model="fruit">
                    <SegmentButton value="apple">Apple</SegmentButton>
                    <SegmentButton value="orange">Orange</SegmentButton>
                    <SegmentButton value="pear">Pear</SegmentButton>
                </Segment>
            </Toolbar>
        </Header>
        <Content padding class="outer-content">
            <p>当前页面展示组件调用示例:</p>
            <hr>
            <p>Segment选择值: {{fruit}}</p>
            <p>城市选择器选择值: {{selectCity}}</p>
            <Button block @click="showActionSheet()" color="primary">ActionSheet</Button>
            <Button block @click="confirm()">Confirm</Button>
            <Button block @click="chooseCity()">城市选择器</Button>
            <Button block @click="showToast()">Toast</Button>
            <Button block @click="loading()">Loading</Button>
        </Content>
    </Page>
</template>
<script type="text/javascript">
  // 全局组件
  import { ActionSheet } from 'vimo/components/action-sheet'
  import { Alert } from 'vimo/components/alert'
  import { Loading } from 'vimo/components/loading'
  import { Toast } from 'vimo/components/toast'
  import { Segment, SegmentButton } from 'vimo/components/segment'
  import { ChooseCity } from 'vimo/components/choose-city'
  export default{
    name: 'Components',
    data () {
      return {
        fruit: 'orange',
        selectCity: {}
      }
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
      showActionSheet () {
        ActionSheet.present({
          title: '请选择操作',
          subTitle: '注意，选择后不能撤销！',
          enableBackdropDismiss: true,
          buttons: [
            {
              text: '再弹一次',
              role: 'destructive',
              handler: () => {
                ActionSheet.present({
                  title: '请选择操作',
                  subTitle: '注意，选择后不能撤销！',
                  enableBackdropDismiss: true,
                  buttons: [
                    {
                      text: '删除',
                      role: 'destructive',
                      handler: () => {
                        console.log('删除2 clicked')
                      }
                    },
                    {
                      text: '苹果',
                      handler: () => {
                        console.log('苹果 clicked')
                      }
                    },
                    {
                      text: '香蕉',
                      handler: () => {
                        console.log('香蕉 clicked')
                      }
                    },
                    {
                      text: '不确定',
                      role: 'cancel',
                      handler: () => {
                        console.log('不确定 clicked')
                      }
                    }
                  ]
                }).then(function () {
                  console.log('actionsheet2 present')
                })
              }
            },
            {
              text: '翻转',
              handler: () => {
                console.log('翻转 clicked')
              }
            },
            {
              text: '增加',
              handler: () => {
                console.log('增加 clicked')
              }
            },
            {
              text: '取消',
              role: 'cancel',
              handler: () => {
                console.debug('取消 clicked')
              }
            }
          ]
        }).then(function () {
          console.log('请选择操作 present promise')
        })
      },
      confirm () {
        Alert.present({
          title: 'Confirm',
          message: '这个是一个确认对话框, 包含取消按钮.',
          cssClass: 'alertCssOuterMain',
          enableBackdropDismiss: true,
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              icon: 'icon-Destructive',
              cssClass: '',
              handler: () => {
                console.debug('Confirm 取消 click')
              }
            },
            {
              text: '确定',
              role: '',
              handler: () => {
                Alert.dismiss().then(function () {
                  console.debug('Confirm 确定 click')
                })
              }
            }
          ]
        })
      },
      chooseCity () {
        let _this = this
        ChooseCity.present({
          showLocatedCity: true,
          onDismiss (data) {
            if (data) {
              _this.selectCity = data
            }
          }
        })
      },
      showToast () {
        Toast('Toast Bottom Only String', 3000)
      },
      loading () {
        Loading.present({
          content: '正在加载, 2000ms后自动关闭...',
          dismissOnPageChange: false, // url变化后关闭loading(默认)
          showBackdrop: true
        })
        setTimeout(() => {
          Loading.dismiss().then(() => {
            console.debug('dismiss in promise success!')
          })
        }, 2000)
      }
    },
    created () {},
    mounted () {},
    activated () {},
    deactivate () {},
    components: {Segment, SegmentButton},
    destroyed () {}
  }
</script>
<style scoped lang="scss">

</style>
