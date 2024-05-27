// pages/userInfo/userInfo.js
import Toast from '@vant/weapp/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userID:"",
    userImg:"",
    userName:"",
    userMobile:"",
    userAge:"",
    userSex:"",
    userArea:"",
    userProfession:"",
    userIDcard:"",
    userOrganization:"",
    userInt:"",

    testName:"",
    testMobile:"",
    testArea:"",
    testProfession:"",
    testIDcard:"",
    testOrganization:"",
    testInt:"",

    isLogin:false,
  },
  isChange(){
    this.setData({
      isChange:true
    })
    console.log("11")
  },
  login(){
    if (
      this.data.userName===this.data.testName &&
      this.data.userMobile===this.data.testMobile && 
      this.data.userArea===this.data.testArea && 
      this.data.userProfession===this.data.testProfession&& 
      this.data.userIDcard===this.data.testIDcard&& 
      this.data.userOrganization===this.data.testOrganization&& 
      this.data.userInt===this.data.testInt
      ) {
      Toast('未修改信息');
      
      
    }else{
      app.globalData.userName=this.data.userName
      app.globalData.userMobile=this.data.userMobile
      app.globalData.userArea=this.data.userArea
      app.globalData.userProfession=this.data.userProfession
      app.globalData.userInt=this.data.userInt
      Toast.success('信息修改完成');
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
      userIDcard:app.globalData.userIDcard,
      userOrganization:app.globalData.userOrganization,
      userInt:app.globalData.userInt,

      testName:app.globalData.userName,
      testMobile:app.globalData.userMobile,
      testArea:app.globalData.testArea,
      testProfession:app.globalData.testProfession,
      testIDcard:app.globalData.testIDcard,
      testOrganization:app.globalData.testOrganization,
      testInt:app.globalData.testInt,

      isLogin:app.globalData.isLogin
    })
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