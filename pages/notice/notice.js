// pages/notice/notice.js
import Toast from '@vant/weapp/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeList:"",
    showNotice:false,

    index:"",
    name:"",
    detail:"",
    time:"",
    star:false,
  },
  openNotice(event){
    this.setData({
      index:event.currentTarget.dataset.index,
    })
    let index = event.currentTarget.dataset.index
    let List = this.data.noticeList
    let name = List[index].name
    let detail = List[index].detail
    let time = List[index].time
    let star = List[index].star
    List[index].read=true
    this.setData({
      name:name,
      detail:detail,
      time:time,
      star:star,
      noticeList:List,
      showNotice:true,
    })
    if (this.data.message!=="") {
      this.setData({
        consultTime:"1"
      })
    }
  },
  closeNotice(event){
    this.setData({
      showNotice:false,
      index:"",
      name:"",
      detail:"",
      time:"",
    })
  },
  starNotice(event){
    let index = this.data.index
    let List = this.data.noticeList
    List[index].star=!List[index].star
    let star = List[index].star
    this.setData({
      noticeList:List,
      star:star
    })
  },
  replyNotice(event){
    let index = this.data.index
    let List = this.data.noticeList
    List[index].message=message
    this.setData({
      noticeList:List
    })
    Toast.success('已回复咨询');
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      noticeList:app.globalData.noticeList
    })
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