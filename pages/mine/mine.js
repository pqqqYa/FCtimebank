// pages/mine/mine.js
import Toast from '@vant/weapp/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    menuTop: app.globalData.menuTop,

    userID:"",
    userImg:"",
    userName:"",
    userMobile:"",
    userAge:"",
    userSex:"",
    userArea:"",
    userProfession:"",

    timeCoinNum:"--",
    timeNum:"--",
    userScore:"--",
    activityNum:"--",
    ongoingEvent:[],
    pastEvent:[],
    dutyEvent:[],
    tradeHistory:[],
    noticeList:[],

    isLogin:false,

    showOngoingEvent: false,
    showPastEvent: false,
    showDutyEvent: false,
    showTradeHistory: false,
  },
  showOngoingEvent(){
    this.setData({ showOngoingEvent: true });
  },
  closeOngoingEvent(){
    this.setData({ showOngoingEvent: false });
  },
  showPastEvent(){
    this.setData({ showPastEvent: true });
  },
  closePastEvent(){
    this.setData({ showPastEvent: false });
  },
  showDutyEvent(){
    this.setData({ showDutyEvent: true });
  },
  closeDutyEvent(){
    this.setData({ showDutyEvent: false });
  },
  showTradeHistory(){
    this.setData({ showTradeHistory: true });
  },
  closeTradeHistory(){
    this.setData({ showTradeHistory: false });
  },


  toCheckActivity(event){
    let participant = JSON.stringify(event.currentTarget.dataset.participant)
    wx.navigateTo({
      url: '/pages/checkActivity/checkActivity?id='+event.currentTarget.dataset.id+'&adminid='+event.currentTarget.dataset.adminid+'&name='+event.currentTarget.dataset.name+'&type='+event.currentTarget.dataset.type+'&nop='+event.currentTarget.dataset.nop+'&atime='+event.currentTarget.dataset.atime+'&ctime='+event.currentTarget.dataset.ctime+'&address='+event.currentTarget.dataset.address+'&price='+event.currentTarget.dataset.price+'&principal='+event.currentTarget.dataset.principal+'&tel='+event.currentTarget.dataset.tel+'&img='+event.currentTarget.dataset.img+'&int='+event.currentTarget.dataset.int+'&participant='+participant+'&state='+event.currentTarget.dataset.state
    })
  },
  toTXN(event){
    wx.navigateTo({
      url: '/pages/txn/txn?img='+event.currentTarget.dataset.img+"&income="+event.currentTarget.dataset.income+"&num="+event.currentTarget.dataset.num+"&state="+event.currentTarget.dataset.state+"&time="+event.currentTarget.dataset.time+"&name="+event.currentTarget.dataset.name+"&payer="+event.currentTarget.dataset.payer+"&payee="+event.currentTarget.dataset.payee+"&tdn="+event.currentTarget.dataset.tdn
    })
  },
  toNotice(event){
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/notice/notice'
      })
    }else{
      Toast.fail('登陆后查看');
    }
    
  },
  toPaypic(){
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/PayPic/Paypic'
      })
    }else{
      Toast.fail('登陆后查看');
    }
  },
  toServicePic(){
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/ServicePic/ServicePic'
      })
    }else{
      Toast.fail('登陆后查看');
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
    this.setData({
      userID:app.globalData.userID,
      userImg:app.globalData.userImg,
      userName:app.globalData.userName,
      userMobile:app.globalData.userMobile,
      userAge:app.globalData.userAge,
      userSex:app.globalData.userSex,
      userArea:app.globalData.userArea,
      userProfession:app.globalData.userProfession,

      ongoingEvent:app.globalData.ongoingEvent,
      pastEvent:app.globalData.pastEvent,
      dutyEvent:app.globalData.dutyEvent,
      tradeHistory:app.globalData.tradeHistory,
      isLogin:app.globalData.isLogin,
      noticeList:app.globalData.noticeList
    })
    if (this.data.isLogin) {
      this.setData({
        activityNum:this.data.pastEvent.length,
        timeCoinNum:app.globalData.timeCoinNum,
        timeNum:app.globalData.timeNum,
        userScore:app.globalData.userScore,
      })
      if (this.data.userScore<0) {
        this.setData({
          userScore:"未评级"
        })
      }
      if (this.data.userScore>0 && this.data.userScore<100 || this.data.userScore ==100) {
        this.setData({
          userScore:"--"
        })
      }
      if (this.data.userScore>100 && this.data.userScore<200 || this.data.userScore ==200) {
        this.setData({
          userScore:"一星"
        })
      }
      if (this.data.userScore>200 && this.data.userScore<300 || this.data.userScore ==300) {
        this.setData({
          userScore:"二星"
        })
      }
      if (this.data.userScore>300 && this.data.userScore<400 || this.data.userScore ==400) {
        this.setData({
          userScore:"三星"
        })
      }
      if (this.data.userScore>400 && this.data.userScore<500 || this.data.userScore ==500) {
        this.setData({
          userScore:"四星"
        })
      }
      if (this.data.userScore>500 && this.data.userScore<600 || this.data.userScore ==600) {
        this.setData({
          userScore:"五星"
        })
      }
    }
    
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