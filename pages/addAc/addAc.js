// pages/addAc/addAc.js
import Toast from '@vant/weapp/toast/toast';
var app = getApp()
Page({
  //活动类型级联选择点击标签时触发
  clickType() {
    this.setData({
      showType: true,
    });
  },
  //活动类型级联选择点击关闭图标时触发
  closeType() {
    this.setData({
      showType: false,
    });
  },
  //活动类型级联选择全部选项选择完成后触发
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
  onChangeNop(event){
    this.setData({
      nop:event.detail
    })
  },
  displayActivityTime() {
    this.setData({ showActivityTime: true });
  },
  closeActivityTime() {
    this.setData({ showActivityTime: false });
  },
  formatDate(dateActivityTime) {
    dateActivityTime = new Date(dateActivityTime);
    return `${dateActivityTime.getYear() + 1900}/${dateActivityTime.getMonth() + 1}/${dateActivityTime.getDate()}`;
  },
  confirmActivityTime(event) {
    const [start, end] = event.detail;
    this.setData({
      showActivityTime: false,
      dateActivityTime: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },
  inputStartTime(event) {
    this.setData({
      startTime: event.detail,
      endTime: event.detail,
    });
  },

  showPopup1() {
    this.setData({ showPopup1: true });
  },
  closePopup1() {
    this.setData({ showPopup1: false });
  },
  inputEndTime(event) {
    this.setData({
      endTime: event.detail,
    });
  },

  showPopup2() {
    this.setData({ showPopup2: true });
  },
  closePopup2() {
    this.setData({cTime:this.data.startTime+"-"+this.data.endTime})
    this.setData({ showPopup2: false });
  },
  startTimeConfirm(){
    this.setData({ showPopup1: false });
    this.setData({ showPopup2: true });
  },
  cTimeClear(){//清空开展时间
    this.setData({ endTime: '12:00' });
    this.setData({ startTime: '12:00' });
    this.setData({ showPopup1: false });
    this.setData({ showPopup2: false });
  },
  onChangePrice(event){
    this.setData({
      price:event.detail
    })
  },
  clearAddAC(){
    this.setData({
      name:'',type:'',nop:1,dateActivityTime: '',cTime:"",startTime: '12:00',endTime: '12:00',address:'',price:'',principal:'',tel:'',imgList:[],fieldValue:'',int:''
    })
    Toast('清除成功');
  },
  upLoadActivity(){
    if (this.data.AdminID=="") {
      Toast.fail('请登陆后上传');
    }else{
      if (this.data.name!="" && this.data.type!="" && this.data.dateActivityTime!="" && this.data.cTime!="" && this.data.address!="" && this.data.principal!="" && this.data.tel!="" && this.data.int!="") {
        Toast.success('活动创建成功\n等待系统审核');
        this.setData({
          name:'',type:'',nop:1,dateActivityTime: '',cTime:"",startTime: '12:00',endTime: '12:00',address:'',price:'',principal:'',tel:'',imgList:[],fieldValue:'',AdminID:'',int:''
        })
      }else{
        Toast.fail('请填写完整信息后上传');
      }
    }
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    AdminID:"",//管理员ID，直接就是创建者的ID
    name: '',//活动名称
    type: '',//活动类型
    nop:1,//参加人数
    dateActivityTime: '',//活动时间
    cTime:"",//开展时间
    startTime: '12:00',//开始时间
    endTime: '12:00',//结束时间
    address:'',//活动地点
    price:'',//时间币报酬
    principal:'',//负责人名称
    tel:'',//联系方式
    imgList:[],
    int:'',
    options:[//活动类型选择，value为返回值，可以是number也可以是string
      {
        text: '公益活动',
        value: '1000',
        children: [
          { text: '教育文化', value: '1001' },
          { text: '生活服务', value: '1002' },
          { text: '健身体育', value: '1003' },
          { text: '生产发展', value: '1004' },
          { text: '理论宣讲', value: '1005' },
          { text: '科技科普', value: '1006' },
          { text: '医疗健康', value: '1007' },
        ],
      },
      {
        text: '公益服务',
        value: '2000',
        children: [
          { text: '公益宣传', value: '2001' },
          { text: '维修养护', value: '2002' },
          { text: '环境清洁', value: '2003' },
          { text: '文体活动', value: '2004' },
          { text: '公共卫生', value: '2005' },
          { text: '问卷调查', value: '2006' },
          { text: '方案征集', value: '2007' },
        ],
      },
      {
        text: '关爱服务',
        value: '3000',
        children: [
          { text: '户外陪伴', value: '3001' },
          { text: '体检陪伴', value: '3002' },
          { text: '康复训练', value: '3003' },
          { text: '探访', value: '3004' },
        ],
      },
      {
        text: '家政服务',
        value: '4000',
        children: [
          { text: '清洁卫生', value: '4001' },
          { text: '买菜做饭', value: '4002' },
          { text: '衣帽养护', value: '4003' },
          { text: '家装养护类', value: '4004' },
        ],
      },
      {
        text: '上门服务',
        value: '5000',
        children: [
          { text: '日杂商品速递', value: '5001' },
          { text: '美容化妆', value: '5002' },
          { text: '订餐送餐', value: '5003' },
          { text: '家事料理', value: '5004' },
          { text: '代驾拼车', value: '5005' },
          { text: '家电类维修', value: '5006' },
          { text: '家具类维修', value: '5007' },
          { text: '水道类维修', value: '5008' },
        ],
      },
      {
        text: '培训教育',
        value: '6000',
        children: [
          { text: '', value: '600' },
          { text: '', value: '600' },
          { text: '', value: '600' },
          { text: '', value: '600' },
          { text: '', value: '600' },
          { text: '', value: '600' },
        ],
      },
      {
        text: '文体艺术',
        value: '7000',
        children: [
          { text: '字画装裱', value: '7001' },
          { text: '文玩印章', value: '7002' },
          { text: '乐器维修', value: '7003' },
          { text: '服装道具', value: '7004' },
          { text: '书法绘画', value: '7005' },
          { text: '陪练代练', value: '7006' },
        ],
      },
      {
        text: '专业技术',
        value: '8000',
        children: [
          { text: '财务理财', value: '8001' },
          { text: '建筑装修', value: '8002' },
          { text: '农牧渔业', value: '8003' },
          { text: '计算机相关', value: '8004' },
          { text: '美工设计', value: '8005' },
          { text: '专业写作', value: '8006' },
          { text: '法律援助', value: '8007' },
          { text: '其它行业', value: '8008' },
        ],
      },
      {
        text: '其他',
        value: '9000',
        children: [
          { text: '其他', value: '9001' },
        ],
      },
      
    ],
    showType: false,//活动类型弹出层是否出现
    showActivityTime: false,//活动时间弹出层是否出现
    fieldValue: '',//活动类型文本框内容
    showPopup1: false,//开始时间弹出层是否出现
    minHour1: 0,
    maxHour1: 23,
    showPopup2: false,//结束时间弹出层是否出现
    minHour2: 0,
    maxHour2: 23,
    bottomLift: app.globalData.bottomLift
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
      AdminID:app.globalData.userID
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