// pages/activityInfo/activityInfo.js
import Dialog from '@vant/weapp/dialog/dialog';
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
        text: '活动完结',
        desc: '时间币已支付',
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
    evaluate:"",
    evaluate2:"",

    acState:"0",
    showState:false,
    showChange:false,
    starNum:3,

    id:"",
    AdminID:"",
    name:"",
    type:"",
    nop:"",
    aTime:"",
    cTime:"",
    address:"",
    price:"",
    principal:"",
    tel:"",
    img:"",
    int:"",
    participant:[],

    userID:"",
    showEnroll:false,
    showSignin:false,
    showEvaluate:false,
    showEvaluate2:false,
    Payword:"",


    bottomLift: app.globalData.bottomLift,

    showService:false,
    message:"",

    userImg:[],
    Fname:"",
    Fprice:"",
    Fnop:"",
    Ftype:"",
    FaTime:"",
    FcTime:"",
    Faddress:"",
    Fint:"",
    Fprincipal:"",
    Ftel:"",
  },
  changestarNum(event) {
    this.setData({
      value: event.detail,
    });
  },
  showState(){
    this.setData({ showState: true });
  },
  closeState(){
    this.setData({ showState: false });
  },
  changeEvaluate(event) {
    console.log(event.detail);
  },
  changeEvaluate2(event) {
    console.log(event.detail);
  },
  showEnroll(){
    this.setData({ showEnroll: true });
  },
  closeEnroll(){
    this.setData({ showEnroll: false });
  },
  showEvaluate(){
    this.setData({ showEvaluate: true });
  },
  closeEvaluate(){
    this.setData({ showEvaluate: false });
  },
  showEvaluate2(){
    this.setData({ showEvaluate2: true });
  },
  closeEvaluate2(){
    if (this.data.Payword == "123") {
      this.setData({ 
        showEvaluate2: false,
        evaluate2:"",
        Payword:"",
        state:6,
        stateText:"活动完结"
      });
      Toast('支付完成');
    }else if (this.data.Payword != "123") {
      Toast('密码错误支付失败');
    }
  },

  showSignin(){
    this.setData({ showSignin: true });
  },
  closeSignin(){
    this.setData({ showSignin: false });
  },
  showChange(){
    this.setData({ showChange: true });
  },
  closeChange(){
    this.setData({ showChange: false });
  },
  leaveActivity(){
    Dialog.confirm({
      title: '确认活动请假？申请后无法撤回！'
    })
      .then(() => {
        app.globalData.ongoingEvent=
      [
        {id:'1',AdminID:'10085',name:'社区活动物资搬运',state:'4',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'社区文艺活动物资搬运',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
        {id:'1',AdminID:'10085',name:'社区服务点卫生打扫',state:'4',type:'公益服务',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'前往社区服务点进行大扫除，具体安排听从现场工作人员',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      ],
        wx.navigateBack({
          delta: 1
        });      
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  },
  delActivity(){
    Dialog.confirm({
      title: '确认删除活动？删除后无法恢复！'
    })
      .then(() => {
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
        ]
        wx.navigateBack({
          delta: 1
        });      
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  },
  changeActivity(){
    Dialog.confirm({
      title: '确认修改活动内容？'
    })
      .then(() => {
          if (this.data.Fname != this.data.name ||this.data.Fprice != this.data.price ||this.data.Fnop != this.data.nop ||this.data.Ftype != this.data.type ||this.data.FaTime != this.data.aTime || this.data.FcTime != this.data.cTime || this.data.Faddress != this.data.address || this.data.Fint != this.data.int ||this.data.Fprincipal != this.data.principal ||this.data.Ftel != this.data.tel) {
          this.setData({ 
            showChange: false ,
            name:this.data.Fname,
            price:this.data.Fprice,
            nop:this.data.Fnop,
            type:this.data.Ftype,
            aTime:this.data.FaTime,
            cTime:this.data.FcTime,
            address:this.data.Faddress,
            int:this.data.Fint,
            principal:this.data.Fprincipal,
            tel:this.data.Ftel,
          });
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
            {
              id:'28',AdminID:'12345',state:'1',
              name:this.data.name,
              type:this.data.type,
              nop:this.data.nop,
              aTime:this.data.aTime,
              cTime:this.data.cTime,
              address:this.data.address,
              price:this.data.price,
              principal:this.data.principal,
              tel:this.data.tel,
              img:"/images/郊游.png",
              int:this.data.int,
              participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
          ]
          Toast('修改提交成功 \n 等待系统审核');
          }else{
            Toast('未修改信息');
          }
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  },
  delEvaluate(){
    Dialog.confirm({
      title: '确认提交评价？'
    })
      .then(() => {
        this.setData({ 
          showEvaluate: false,  
           evaluate:""
        });
         
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  },
  openService(event){
    wx.makePhoneCall({
      phoneNumber: this.data.tel,
    })
  },

  isEnroll(e){
    let index = e.currentTarget.dataset.index
    let List = this.data.participant
    let TF = List[index].hasEnroll
    if (!TF) {
      Dialog.confirm({
        title: '确认录取'+e.currentTarget.dataset.name+'?'
      })
        .then(() => {     
          List[index].hasEnroll = !TF
          this.setData({
            participant:List
          })
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }else{
      Toast('已录取');
    }
    
  },

  isSignin(e){
    let index = e.currentTarget.dataset.index
    let List = this.data.participant
    let TF0 = List[index].hasEnroll//是否录取
    let TF1 = List[index].hasSignin//是否签到
    if (!TF0) {
      Toast.fail('暂未录取\n无法签到');
    }else{
      if (!TF1) {
        Dialog.confirm({
          title: '确认签到'+e.currentTarget.dataset.name+'?'
        })
          .then(() => {     
            List[index].hasSignin = !TF1
            this.setData({
              participant:List
            })
            // on confirm
          })
          .catch(() => {
            // on cancel
          });
      }else{
        Toast('已签到');
      }
    }
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userID:app.globalData.userID,

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
      state:options.state,

      Fname:options.name,
      Fprice:options.price,
      Fnop:options.nop,
      Ftype:options.type,
      FaTime:options.atime,
      FcTime:options.ctime,
      Faddress:options.address,
      Fint:options.int,
      Fprincipal:options.principal,
      Ftel:options.tel,
    })
    if (this.data.state == 0) {
      this.setData({stateText:"发起活动"})
    }
    if (this.data.state == 0) {
      this.setData({stateText:"等待系统审核"})
    }
    if (this.data.state == 1) {
      this.setData({stateText:"等待开始报名"})
    }
    if (this.data.state == 2) {
      this.setData({stateText:"报名中"})
    }
    if (this.data.state == 3) {
      this.setData({stateText:"活动中"})
    }
    if (this.data.state == 4) {
      this.setData({stateText:"活动中"})
    }
    if (this.data.state == 5) {
      this.setData({stateText:"活动结束"})
    }
    if (this.data.state == 6) {
      this.setData({stateText:"活动完结"})
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

  },

})