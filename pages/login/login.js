// pages/login/login.js
import Toast from '@vant/weapp/toast/toast';
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    FuserID:"123",
    FpassWord:"123",
    
    showlogin:true,
    showsignin:false,
    showforget:false,
    showsms:false,

    menuTop: app.globalData.menuTop,

    userID:"",
    passWord:"",
    userName:"",

    tel:"",
    sms:"",
    time:60000,
    passWord1:"",
    passWord2:"",
    IDcard:"",
    em1:"",
    em2:"",
    em3:"",
  },
  login(){
    
    if (this.data.userID=="" && this.data.passWord=="") {
      Toast('请输入账号');
    }
    if (this.data.userID=="" && this.data.passWord!="") {
      Toast('请输入账号');
    }
    if (this.data.userID!="" && this.data.passWord=="") {
      Toast('请输入密码');
    }
    if (this.data.userID!=this.data.FuserID || this.data.passWord!=this.data.FpassWord && this.data.userID!="" && this.data.passWord!="") {
      Toast('账号或密码错误');
    }
    if (this.data.userID==this.data.FuserID && this.data.passWord==this.data.FpassWord) {
      app.globalData.isLogin="ture"
      app.globalData.userID="12345"
      app.globalData.userImg="/images/logo.png"
      app.globalData.userName="易达三"
      app.globalData.userMobile="17395783027"
      app.globalData.userAge="35"
      app.globalData.userSex="男"
      app.globalData.userArea="四川省成都市新都区新都大道8号"
      app.globalData.userProfession="工程师"

      app.globalData.userIDcard="123456789123456789"
      app.globalData.userOrganization=""
      app.globalData.userInt="我是志愿者"

      app.globalData.timeCoinNum="25"
      app.globalData.timeNum="6"
      app.globalData.userScore="450"

      app.globalData.ongoingEvent=
      [
        {id:'1',AdminID:'10085',name:'禁毒宣传活动',type:'公益宣传',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'前往社区服务点参加禁毒宣传活动，负责传单派发，知识讲解等',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"1",state:"2"},
        {id:'1',AdminID:'10085',name:'社区活动物资搬运',state:'4',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'社区文艺活动物资搬运',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
        {id:'1',AdminID:'10085',name:'社区服务点卫生打扫',state:'4',type:'公益服务',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'前往社区服务点进行大扫除，具体安排听从现场工作人员',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      ],
      app.globalData.pastEvent=[
        {id:'10086',AdminID:'12345',name:'文化讲堂',state:'4',type:'培训教育',nop:'3',aTime:'2024/3/10 - 2024/3/11',cTime:'19:00-21:00',address:'四川省成都市武侯区南门街道希望路28号',int:'帮助老人了解文化知识,提高居民素质',price:'6',principal:'陈煜轩',tel:'15665612345',img:'/images/郊游.png',
        participant:[
          {
            userID:"12234",
            userName:"高晨熙",
            hasEnroll:true,
            hasSignin:true
          },
          {
            userID:"12334",
            userName:"黄雅琪",
            hasEnroll:true,
            hasSignin:true
          },
          {
            userID:"12344",
            userName:"林煜铭",
            hasEnroll:true,
            hasSignin:true
          }
        ],
        isfull:"0",
        state:"5"},

        {id:'10086',AdminID:'10053',name:'社区街道清扫',type:'环境清洁',nop:'6',aTime:'2024/2/12 - 2024/2/13',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'社区街道清扫',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"2",state:"6"},
        {id:'10086',AdminID:'10053',name:'健康运动会',state:'4',type:'关爱服务',nop:'6',aTime:'2024/4/12 - 2024/4/12',cTime:'19:00-21:00',address:'四川省乐山市市中区中心街道中山路60号',int:'组织各类体育比赛和健身活动，促进居民身体健康。',price:'7',principal:'刘思睿',tel:'17777734567',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0",state:"6"},
        {id:'10086',AdminID:'10052',name:'洗剪吹',state:'4',type:'关爱服务',nop:'6',aTime:'2024/4/11 - 2024/4/11',cTime:'19:00-21:00',address:'四川省绵阳市涪城区东湖街道湖滨路15号',int:'为老人提供免费的理发,洗头,吹发服务',price:'5',principal:'李欣怡',tel:'18998923456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0",state:"6"},
      ]
      app.globalData.dutyEvent=[
        {
          id:'10086',
          AdminID:'12345',
          name:'文化讲堂',
          type:'培训教育',
          nop:'5',
          aTime:'2024/3/10 - 2024/3/11',
          cTime:'19:00-21:00',
          address:'四川省成都市武侯区南门街道希望路28号',
          int:'帮助老人了解文化知识,提高居民素质',
          price:'6',
          principal:'陈煜轩',
          tel:'15665612345',
          img:'/images/郊游.png',
          participant:[
          {
            userID:"12234",
            userName:"高晨熙",
            hasEnroll:true,
            hasSignin:true
          },
          {
            userID:"12334",
            userName:"黄雅琪",
            hasEnroll:true,
            hasSignin:true
          },
          {
            userID:"12344",
            userName:"林煜铭",
            hasEnroll:true,
            hasSignin:true
          }
        ],
        isfull:"0",
        state:"5"},
        {
          id:4,
          AdminID:12345,
          name:"社区宣传海报张贴",
          type:"公益服务",//活动类型
          nop:"5",//参加人数
          aTime:"2024/3/3 - 2024/3/4",
          cTime:"09:00:00-12:00:00",
          address:"四川省成都市新都区新都大道8号",
          price:"40",
          principal:"易达三",//负责人
          tel:"17395038756",//联系电话
          img:"/images/郊游.png",
          int:"我是活动介绍",
          participant:[
            {
              userID:"12234",
              userName:"霍尉连",
              hasEnroll:false,
              hasSignin:false
            },
            {
              userID:"12334",
              userName:"甄松仲",
              hasEnroll:false,
              hasSignin:false
            },
            {
              userID:"12344",
              userName:"祝川伦",
              hasEnroll:false,
              hasSignin:false
            }
          ],
          isfull:"1",
          state:"4"
        },
        {id:'29',AdminID:'12345',name:'家电安全使用培训',state:'2',type:'培训教育',nop:'6',aTime:'2024/4/21 - 2024/4/21',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路311号希望城A区4栋2单元',int:'向居民普及家电安全使用知识，预防家电事故的发生。',price:'5',principal:'高雅婷',tel:'15877890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
        {id:'30',AdminID:'12345',name:'垃圾分类宣传周',state:'2',type:'公益活动',nop:'6',aTime:'2024/4/20 - 2024/4/21',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号南充摩尔百货A座20楼',int:'通过宣传周活动，向居民普及垃圾分类知识，促进环保意识的提升。',price:'8',principal:'黄浩宇',tel:'17080890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
        {id:'28',AdminID:'12345',name:'健康饮食讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/22 - 2024/4/22',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路308号世豪广场3期7号楼',int:'讲解健康饮食知识，指导居民合理搭配饮食。',price:'6',principal:'罗文昊',tel:'19867890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      ]
      app.globalData.tradeHistory=[
        {
          img:"/images/logo.png",
          income:"+",
          num:"5",
          state:"1",
          time:"2024-02-09 17:26:00",
          name:"新用户初始金",
          payer:"帆长时间银行",//付款人
          payee:"易达三",//收款方
          tdn:"23849273651289473621598473692874"//订单号28位
        },
        {
          img:"/images/logo.png",
          income:"+",
          num:"10",
          state:"1",
          time:"2024-02-11 12:26:00",
          name:"志愿者测试通过奖励",
          payer:"帆长时间银行",
          payee:"易达三",
          tdn:"56987432198765432198765432109876"
        },
        {
          img:"/images/郊游.png",
          income:"-",
          num:"9",
          state:"1",
          time:"2024-03-10 12:01:00",
          name:"社区活动培训",
          payer:"田瑜雅",
          payee:"易达三",
          tdn:"98765432109876543210987654321098"
        },
        {
          img:"/images/logo.png",
          income:"+",
          num:"11",
          state:"1",
          time:"2024-02-11 12:26:00",
          name:"分发宣传资料",
          payer:"高雅婷",
          payee:"易达三",
          tdn:"56987432198765432198765432109876"
        },
        {
          img:"/images/logo.png",
          income:"-",
          num:"11",
          state:"1",
          time:"2024-02-11 12:26:00",
          name:"家政服务培训",
          payer:"陈煜轩",
          payee:"易达三",
          tdn:"56987432198765432198765432109876"
        },
        {
          img:"/images/logo.png",
          income:"+",
          num:"12",
          state:"1",
          time:"2024-02-11 12:26:00",
          name:"禁毒教育",
          payer:"高雅婷",
          payee:"易达三",
          tdn:"56987432198765432198765432109876"
        },
      ],
      app.globalData.noticeList=[
        {
          img:"/images/郊游.png",
          name:"已通过报名",
          detail:"已通过您【新家具安装】活动的参与报名，请按时参加活动。",
          time:"2024-03-01 12:20:00",
          read:false,
          os:false,
          star:false,
        },{
          img:"/images/郊游.png",
          name:"已通过报名",
          detail:"已通过您【陪老人体检】活动的参与报名，请按时参加活动。",
          time:"2024-02-29 11:26:00",
          read:false,
          os:false,
          star:false,
        },{
          img:"/images/郊游.png",
          name:"已通过报名",
          detail:"已通过您【禁毒宣传活动】活动的参与报名，请按时参加活动。",
          time:"2024-02-28 12:26:00",
          read:false,
          os:false,
          star:false,
        },
        {
          img:"/images/logo.png",
          name:"恭喜通过志愿者测试",
          detail:"恭喜您通过志愿者测试，您的志愿者测试奖励将在1小时之内发送到您的账户，请注意查收。",
          time:"2024-02-11 12:26:00",
          read:true,
          os:true,
          star:false,
        },{
          img:"/images/logo.png",
          name:"欢迎新用户加入帆长时间银行",
          detail:"欢迎新用户加入帆长时间银行，我们深感荣幸与喜悦。在这里，您将开启一段全新的时间管理之旅，体验前所未有的便捷与高效。帆长时间银行致力于为您提供最优质的服务，让您的时间得到更合理的规划与利用。我们深知时间对于每个人的重要性，因此我们将竭尽全力，为您创造一个安全、可靠、高效的时间管理平台。期待与您携手共进，共创美好未来！",
          time:"2024-02-09 08:00:00",
          read:true,
          os:true,
          star:true,
        }
      ]
      wx.navigateBack({
        delta: 1
      });
    }
  
  },
  tosignin(){
    this.setData({
      showlogin:false,
      showsignin:true,
    })
  },
  toforget(){
    this.setData({
      showlogin:false,
      showforget:true,
    })
  },
  backlogin1(){
    this.setData({
      showlogin:true,
      showsignin:false,
    })
  },
  backlogin2(){
    this.setData({
      showlogin:true,
      showforget:false,
    })
  },
  forget(){
    if (this.data.tel !=""&& this.data.sms !=""&& this.data.passWord1 !=""&& this.data.passWord2 !=""&& this.data.IDcard !="" && this.data.em1 ==""&& this.data.em2 ==""&& this.data.em3 =="" ) {
      this.setData({
        FpassWord:this.data.passWord1,
        FuserID:this.data.tel
      })
      this.setData({
        showlogin:true,
        showforget:false,
        tel:"",
        sms:"",
        passWord1:"",
        passWord2:"",
        IDcard:"",
        em1:"",
        em2:"",
        em3:"",
      })
      Toast('密码已重置');
    }
  },
  signin(){
    if (this.data.tel !=""&& this.data.sms !=""&& this.data.passWord1 !=""&& this.data.passWord2 !=""&& this.data.IDcard !="" && this.data.em1 ==""&& this.data.em2 ==""&& this.data.em3 =="" ) {
      this.setData({
        FpassWord:this.data.passWord1,
        FuserID:this.data.tel
      })
      this.setData({
        showlogin:true,
        showsignin:false,
        tel:"",
        sms:"",
        passWord1:"",
        passWord2:"",
        IDcard:"",
        em1:"",
        em2:"",
        em3:"",
      })
      Toast('注册成功');
    }

  },
  showSms(){
    this.setData({
      showsms:false
    })
  },
  toSms(){
    if (this.data.tel == "") {
      Toast('请输入手机号！');
    }else if (this.data.tel != "" && this.data.tel.length == 11 && !this.data.showsms) {
      Toast('验证码已发送');
      this.setData({
        showsms:true
      })
    }else if (this.data.tel != "" && this.data.tel.length != 11) {
      Toast('请输入正确手机号！');
    }
  },
  checktel(){
    if (this.data.tel.length == 11) {
      this.setData({
        em1:""
      })
    }
    if (this.data.tel.length != 11) {
      this.setData({
        em1:"手机号格式错误"
      })
    }
  },
  checkpassword(){
    if (this.data.passWord1 != this.data.passWord2) {
      this.setData({
        em2:"请输入相同密码"
      })
    }else if (this.data.passWord1 == this.data.passWord2) {
      this.setData({
        em2:""
      })
    }
  },
  checkIDcard(){
    if (this.data.IDcard.length == 18) {
      this.setData({
        em3:""
      })
    }
    if (this.data.IDcard.length != 18) {
      this.setData({
        em3:"身份证格式错误"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})