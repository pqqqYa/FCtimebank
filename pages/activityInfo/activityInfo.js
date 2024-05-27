// pages/activityInfo/activityInfo.js
import Toast from '@vant/weapp/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stateText:"--",
    steps1: [
      {
        text: '发起活动',
        desc: '活动已发起，等待系统审核，活动开始前可以对活动进行编辑。',
      },
      {
        text: '审核通过',
        desc: '活动通过系统审核',
      },
      {
        text: '活动开始报名',
        desc: '该活动已开启报名！',
      },
      {
        text: '活动开始',
        desc: '活动已开始！',
      },
      {
        text: '活动进行中',
        desc: '活动正在进行中！',
      },
      {
        text: '活动结束',
        desc: '活动已结束',
      },
      {
        text: '活动反馈',
      },
    ],
    steps2: [
      {
        text: '规划中',
        desc: '活动已发起，等待系统审核，活动开始前可以对活动进行编辑。',
      },
      {
        text: '报名中',
        desc: '活动通过系统审核',
      },
      {
        text: '报名成功',
        desc: '请仔细阅读活动详细信息',
      },
      {
        text: '活动开始',
        desc: '活动已开始',
      },
      {
        text: '活动进行中',
        desc: '请努力完成活动哦！',
      },
      {
        text: '活动结束',
        desc: '活动已结束',
      },
      {
        text: '时间币已到账',
        desc: '辛苦啦，请收下您的报酬',
      },
    ],
    state:"",
    showState:false,
    
    id:"",
    AdminID:"",
    name:"",
    type:"",
    nop:"",
    aTime:"",
    cTime:"",
    address:"",
    price:"",
    principal:"",//负责人
    tel:"",//联系电话
    img:"",//活动图片
    int:"",//活动介绍
    participant:[],//活动参加的志愿者的数据
    isfull:"0",

    hasLogin:false,
    logTime:"0",//临时记录一下是否重复登陆bindtap(event){}里面会判断
    showService:false,
    message:"",

    bottomLift: app.globalData.bottomLift
  },

  //报名按钮按下后
  bindtap(event) {
    if (this.data.isfull=="0") {
      if (this.data.logTime=="0") {
        if (this.data.hasLogin) {
          this.setData({
            logTime:"1"
          })
          if (this.data.nop-this.data.participant.length-this.data.logTime==0) {
            this.setData({
              isfull:"1"
            })
          }
          Toast.success('报名成功');
        }
        if (!this.data.hasLogin) {
          Toast.fail('请登录后报名');
        }
      }else{
        Toast.fail('请勿重复报名');
      }  
    }else if (this.data.isfull=="1") {
      Toast.fail('参与人数已满');
    }else{
      Toast.fail('活动已结束');
    }
    
  },
  openService(event){
    if (this.data.hasLogin) {
      wx.makePhoneCall({
        phoneNumber: this.data.tel,
      })
    }else{
      Toast.fail('请登录后咨询');
    }
  },
  showState(){
    this.setData({ showState: true });
  },
  closeState(){
    this.setData({ showState: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    this.setData({
      //页面加载时在全局变量里面获取用户是否登陆
      hasLogin:app.globalData.isLogin,
      //获取acList传来的单个活动的数据
      id:options.id,
      AdminID:options.adminid,
      name:options.name,
      type:options.type,
      nop:options.nop,
      aTime:options.atime,
      cTime:options.ctime,
      address:options.address,
      price:options.price,
      principal:options.principal,
      tel:options.tel,
      img:options.img,
      int:options.int,
      participant:JSON.parse(options.participant),
      isfull:options.isfull,
      state:options.state,
    })
    if (this.data.state == 0) {
      this.setData({stateText:"规划中"})
    }
    if (this.data.state == 1) {
      this.setData({stateText:"报名中"})
    }
    if (this.data.state == 2) {
      this.setData({stateText:"报名成功"})
    }
    if (this.data.state == 3) {
      this.setData({stateText:"活动开始"})
    }
    if (this.data.state == 4) {
      this.setData({stateText:"活动进行中"})
    }
    if (this.data.state == 5) {
      this.setData({stateText:"活动结束"})
    }
    if (this.data.state == 6) {
      this.setData({stateText:"时间币已到账"})
    }
    //当传递来的participant数据为空，即没有人参与的时候
    let arr = this.data.participant[0]
    if (arr.userID=="") {
      this.setData({
        participant:[]
      })
    }

    
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