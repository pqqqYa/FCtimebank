// app.js
App({
  onLaunch() {
    //获取当前设备信息
    wx.getSystemInfo({
      success: res => {
        this.globalData.bottomLift = res.screenHeight - res.safeArea.bottom;
      },
      fail(err) {
        console.log(err);
      }
    })
    //导航栏
    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏高度 + 44
    that.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
    that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.menuTop=  menuButtonInfo.top;
    that.globalData.menuHeight = menuButtonInfo.height;
    that.globalData.menuLeft = systemInfo.screenWidth - menuButtonInfo.left + systemInfo.screenWidth - menuButtonInfo.right;
  },
  globalData: {
    bottomLift: 0,
    userID:"",
    userImg:"/images/缺少图片.png",
    userName:"未登录",//昵称
    userMobile:"",//用户电话号码
    userAge:"",//用户年龄
    userSex:"",//男女
    userArea:"",//用户地址
    userProfession:"",//用户职业
    timeCoinNum:"未登录",
    timeNum:"未登录",
    userScore:"未登录",
    userIDcard:"123456789123456789",
    userOrganization:"",
    userInt:"我是志愿者",

    //以下是用户登陆后传来的数据
    ongoingEvent:[],
    pastEvent:[],
    dutyEvent:[],
    tradeHistory:[],
    noticeList:[],
    isLogin:false,

    //导航栏相关
        navBarHeight: 0, // 导航栏高度
        menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
        menuTop: 0, // 胶囊距底部间距（保持底部间距一致）
        menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
        menuLeft: 0 ,
  }
})
