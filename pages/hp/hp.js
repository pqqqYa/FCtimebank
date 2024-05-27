// pages/hp/hp.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
  
    fakeActivityList:
    [
      {id:'6',AdminID:'10090',name:'人民公园陪练晨跑',state:'1',type:'陪练代练',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人民公园陪练晨跑',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'2',AdminID:'10086',name:'陪伴老人体检',state:'1',type:'体检陪伴',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'陪伴1名老人前往第三人民医院进行全身体检',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'3',AdminID:'10087',name:'新家具安装',state:'1',type:'家具类维修',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'1套沙发，3个衣柜和1个床架的组装',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
    ],
    fakeTrainList:
    [
      {id:'6',AdminID:'10090',name:'家政培训',state:'1',type:'培训',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'家政培训',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'2',AdminID:'10086',name:'活动安全教育',state:'1',type:'培训',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'活动安全教育',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'3',AdminID:'10087',name:'宣传文案撰写培训',state:'1',type:'培训',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'宣传文案撰写培训',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
    ],
  },
  toActivityInfo(event){
    let participant = JSON.stringify(event.currentTarget.dataset.participant)
    wx.navigateTo({
      url: '/pages/activityInfo/activityInfo?id='+event.currentTarget.dataset.id+'&adminid='+event.currentTarget.dataset.adminid+'&name='+event.currentTarget.dataset.name+'&type='+event.currentTarget.dataset.type+'&nop='+event.currentTarget.dataset.nop+'&atime='+event.currentTarget.dataset.atime+'&ctime='+event.currentTarget.dataset.ctime+'&address='+event.currentTarget.dataset.address+'&price='+event.currentTarget.dataset.price+'&principal='+event.currentTarget.dataset.principal+'&tel='+event.currentTarget.dataset.tel+'&img='+event.currentTarget.dataset.img+'&int='+event.currentTarget.dataset.int+'&participant='+participant+'&isfull='+event.currentTarget.dataset.isfull+'&state='+event.currentTarget.dataset.state
    })
  },
  toAclist(){
    wx.switchTab({
      url: '/pages/acList/acList',
    })
  },
  toTrainlist(){
    wx.switchTab({
      url: '/pages/train/train',
    })
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