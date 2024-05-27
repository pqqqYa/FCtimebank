// pages/txn/txn.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"",
    income:"",
    num:"",
    state:"",
    time:"",
    name:"",
    payer:"",
    payee:"",
    tdn:"",

    state_b:"",
    showquestion:false,
    message:"",
    showType: false,
    fieldValue: '',
    options:[
      {
        text: '时间币问题',
        value: '1000',
        children: [
          { text: '时间币数量错误', value: '1001' },
          { text: '时间币未按时到帐', value: '1002' },
        ],
      },
      {
        text: '其他问题',
        value: '2000',
        children: [
          { text: '其他', value: '2001' },
        ],
      }
    ],
  },
  question(event){
    this.setData({
      showquestion:!this.data.showquestion
    })
  },
  closequestion(evet){
    this.setData({
      showquestion:!this.data.showquestion,
      message:"",
      fieldValue:""
    })
  },
  closequestion_b(evet){
    if (this.data.fieldValue!="" && this.data.message!="") {
      this.setData({
        showquestion:!this.data.showquestion,
        message:"",
        fieldValue:""
      })
      Toast.success('反馈已提交\n请等候通知');
    }else{
      this.setData({
        showquestion:!this.data.showquestion,
      })
      Toast.fail('请完整填写');
    }
  },
  clickType() {
    this.setData({
      showType: true,
    });
  },
  closeType() {
    this.setData({
      showType: false,
    });
  },
  finishType(e) {
    const { selectedOptions, value } = e.detail;
    const fieldValue = selectedOptions
        .map((option) => option.text || option.name)
        .join('/');
    this.setData({
      fieldValue,
      type: value,
      showType: false,
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      img:options.img,
      income:options.income,
      num:options.num,
      state:options.state,
      time:options.time,
      name:options.name,
      payer:options.payer,
      payee:options.payee,
      tdn:options.tdn
    })
    if (this.data.state=="0") {
      this.setData({
        state_b:"未完成"
      })
    }else if (this.data.state=="1") {
      this.setData({
        state_b:"已完成"
      })
    }else{
      this.setData({
        state_b:"账单异常"
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