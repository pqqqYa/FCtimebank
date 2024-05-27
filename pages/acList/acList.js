// pages/acList/acList.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      option1: [
        { text: '全部活动', value: 0 },
        { text: '公益活动', value: 1 },
        { text: '公益服务', value: 2 },
        { text: '关爱服务', value: 3 },
        { text: '家政服务', value: 4 },
        { text: '上门服务', value: 5 },
        { text: '培训教育', value: 6 },
        { text: '文体艺术', value: 7 },
        { text: '专业技术', value: 8 },
        { text: '其他', value: 9 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '距离最近', value: 'b' },
        { text: '浏览最多', value: 'c' },
        { text: '开始先后', value: 'd' },
      ],
      value1: 0,
      value2: 'a',
      text1:"",
      text2:"",

    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
    menuLeft: app.globalData.menuLeft,

    isSearch:false,  
    inSearch:false,  
    mytext:"",

    //静态展示的假数据
    fakeacList:[],
    fakeacList1:
    [
      {id:'1',AdminID:'10085',name:'禁毒宣传活动',state:'1',type:'公益活动',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'前往社区服务点参加禁毒宣传活动，负责传单派发，知识讲解等',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'2',AdminID:'10086',name:'陪伴老人体检',state:'1',type:'关爱服务',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'陪伴1名老人前往第三人民医院进行全身体检',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'3',AdminID:'10087',name:'新家具安装',state:'1',type:'家政服务',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'1套沙发，3个衣柜和1个床架的组装',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'4',AdminID:'10088',name:'代买蔬菜',state:'1',type:'上门服务',nop:'1',aTime:'2024/3/4 - 2024/3/5',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'代买午餐使用蔬菜（一颗萝卜，一头蒜，一颗西兰花，2斤蒜苔）',price:'6',principal:'符方直',tel:'17333417112',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'5',AdminID:'10089',name:'辅导小学数学作业',state:'1',type:'上门服务',nop:'8',aTime:'2024/3/5 - 2024/3/6',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'辅导小学三年级数学作业',price:'7',principal:'祝川伦',tel:'15922832561',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'6',AdminID:'10090',name:'人民公园陪练晨跑',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人民公园陪练晨跑',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'7',AdminID:'10091',name:'社区服务点卫生打扫',state:'1',type:'公益服务',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'前往社区服务点进行大扫除，具体安排听从现场工作人员',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'8',AdminID:'10092',name:'社区活动物资搬运',state:'1',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'社区文艺活动物资搬运',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'9',AdminID:'10093',name:'社区街道清扫',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/9 - 2024/3/10',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'社区街道清扫',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'10',AdminID:'10094',name:'探访孤寡老人',state:'1',type:'关爱服务',nop:'5',aTime:'2024/3/10 - 2024/3/11',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'探访8位孤寡老人，慰问物品由社区提供',price:'8',principal:'柳城靖',tel:'14771408927',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'11',AdminID:'10050',name:'健康知识讲座',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/10 - 2024/4/11',cTime:'19:00-21:00',address:'四川省成都市青羊区一环路南二段230号',int:'邀请专业医生或健康讲师，为社区居民举办健康知识讲座，讲解常见的疾病预防和保健知识。同时，我们还将提供免费的健康咨询和体检服务，让居民更好地了解自己的身体状况。',price:'5',principal:'张婉琳',tel:'13883801234',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'12',AdminID:'10051',name:'文化讲堂',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/10 - 2024/3/11',cTime:'19:00-21:00',address:'四川省成都市武侯区南门街道希望路28号',int:'帮助老人了解文化知识,提高居民素质',price:'6',principal:'陈煜轩',tel:'15665612345',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'13',AdminID:'10052',name:'洗剪吹',state:'1',type:'关爱服务',nop:'6',aTime:'2024/4/11 - 2024/4/11',cTime:'19:00-21:00',address:'四川省绵阳市涪城区东湖街道湖滨路15号',int:'为老人提供免费的理发,洗头,吹发服务',price:'5',principal:'李欣怡',tel:'18998923456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'14',AdminID:'10053',name:'健康运动会',state:'1',type:'关爱服务',nop:'6',aTime:'2024/4/12 - 2024/4/12',cTime:'19:00-21:00',address:'四川省乐山市市中区中心街道中山路60号',int:'组织各类体育比赛和健身活动，促进居民身体健康。',price:'7',principal:'刘思睿',tel:'17777734567',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'15',AdminID:'10054',name:'农业技术培训班',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/13 - 2024/4/13',cTime:'19:00-21:00',address:'四川省南充市顺庆区南湖街道湖心路45号',int:'为农民提供现代农业技术培训和指导，促进农业生产发展',price:'4',principal:'郭涵瑜',tel:'14554545678',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'16',AdminID:'10055',name:'政策宣讲会',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/14 - 2024/4/14',cTime:'19:00-21:00',address:'四川省遂宁市船山区渠河中路66号',int:'宣讲党的方针政策，帮助居民了解国家发展动态。',price:'6',principal:'高晨熙',tel:'19009078901',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'17',AdminID:'10056',name:'健康义诊',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/15 - 2024/4/15',cTime:'19:00-21:00',address:'四川省乐山市市中区柏杨西路888号',int:'为居民提供免费的健康咨询和检查服务。',price:'3',principal:'马文昊',tel:'17171790123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'18',AdminID:'10057',name:'公益志愿行',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/16 - 2024/4/16',cTime:'19:00-21:00',address:'四川省南充市顺庆区人民南路三段138号',int:'参与环境保护、社区服务等公益活动',price:'4',principal:'黄雅琪',tel:'13567890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'19',AdminID:'10058',name:'家电维修服务',state:'1',type:'家政服务',nop:'6',aTime:'2024/4/17 - 2024/4/17',cTime:'19:00-21:00',address:'四川省自贡市自流井区五星街中华路237号',int:'为居民提供家电维修服务，解决家电故障问题',price:'5',principal:'赵梓轩',tel:'15987654321',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'20',AdminID:'10059',name:'清洁家园行动',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/18 - 2024/4/18',cTime:'15:00-17:00',address:'四川省成都市武侯区一环路南一段16号附3号',int:'组织并帮助居民进行环境清洁，维护社区卫生。',price:'8',principal:'周宇翔',tel:'18234567890',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'21',AdminID:'10060',name:'社区文艺晚会',state:'1',type:'文体艺术',nop:'6',aTime:'2024/4/29 - 2024/4/29',cTime:'15:00-17:00',address:'四川省绵阳市涪城区花园南街66号绵阳中学家属院1栋2单元',int:'举办文艺演出和体育活动，丰富居民文化生活',price:'6',principal:'邓悦彤',tel:'17709876543',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'22',AdminID:'10061',name:'卫生知识讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/28 - 2024/4/28',cTime:'15:00-17:00',address:'四川省自贡市自流井区丹桂大街236号东方广场A座12楼',int:'宣讲公共卫生知识，提高居民卫生意识。',price:'9',principal:'林煜铭',tel:'14512345678',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'23',AdminID:'10062',name:'家政服务进社区',state:'1',type:'家政服务',nop:'6',aTime:'2024/4/27 - 2024/4/27',cTime:'15:00-17:00',address:'四川省攀枝花市东区攀枝花大道东段491号攀枝花学院北苑5号楼',int:'提供家庭清洁、照料老人等服务，满足居民家政需求',price:'10',principal:'徐芷涵',tel:'13890123456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'24',AdminID:'10063',name:'代买代送服务',state:'1',type:'上门服务',nop:'6',aTime:'2024/4/26 - 2024/4/26',cTime:'15:00-17:00',address:'四川省泸州市江阳区康城路二段8号泸州万达广场B座1804室',int:'为居民提供代买日常用品、代送快递等服务。',price:'6',principal:'贾晨阳',tel:'15067890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'25',AdminID:'10064',name:'家庭教育讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/25 - 2024/4/25',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路377号希望城A区6栋1单元',int:'为家长提供家庭教育指导和建议，促进孩子健康成长。',price:'4',principal:'梁静雅',tel:'18876543210',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'26',AdminID:'10065',name:'书法绘画培训班',state:'1',type:'文体艺术',nop:'6',aTime:'2024/4/24 - 2024/4/24',cTime:'15:00-17:00',address:'四川省广元市利州区利州东路二段58号万源新城C区10号楼',int:'教授书法和绘画技巧，培养居民艺术兴趣。',price:'8',principal:'许梓涵',tel:'17345678901',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'27',AdminID:'10066',name:'法律咨询服务',state:'1',type:'专业技术',nop:'6',aTime:'2024/4/23- 2024/4/23',cTime:'15:00-17:00',address:'四川省遂宁市船山区渠河中路99号遂宁万达广场1号楼',int:'为居民提供法律咨询和法律援助服务，维护居民合法权益。',price:'7',principal:'郑思琪',tel:'13987654321',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'28',AdminID:'10067',name:'健康饮食讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/22 - 2024/4/22',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路308号世豪广场3期7号楼',int:'讲解健康饮食知识，指导居民合理搭配饮食。',price:'6',principal:'罗文昊',tel:'19867890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'29',AdminID:'10068',name:'家电安全使用培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/21 - 2024/4/21',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路311号希望城A区4栋2单元',int:'向居民普及家电安全使用知识，预防家电事故的发生。',price:'5',principal:'高雅婷',tel:'15877890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'30',AdminID:'10069',name:'垃圾分类宣传周',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/20 - 2024/4/21',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号南充摩尔百货A座20楼',int:'通过宣传周活动，向居民普及垃圾分类知识，促进环保意识的提升。',price:'8',principal:'黄浩宇',tel:'17080890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
    ],
  fakeacList2:
    [
      {id:'24',AdminID:'10063',name:'代买代送服务',state:'1',type:'上门服务',nop:'6',aTime:'2024/4/26 - 2024/4/26',cTime:'15:00-17:00',address:'四川省泸州市江阳区康城路二段8号泸州万达广场B座1804室',int:'为居民提供代买日常用品、代送快递等服务。',price:'6',principal:'贾晨阳',tel:'15067890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'4',AdminID:'10088',name:'代买蔬菜',state:'1',type:'上门服务',nop:'1',aTime:'2024/3/4 - 2024/3/5',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'代买午餐使用蔬菜（一颗萝卜，一头蒜，一颗西兰花，2斤蒜苔）',price:'6',principal:'符方直',tel:'17333417112',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'27',AdminID:'10066',name:'法律咨询服务',state:'1',type:'专业技术',nop:'6',aTime:'2024/4/23- 2024/4/23',cTime:'15:00-17:00',address:'四川省遂宁市船山区渠河中路99号遂宁万达广场1号楼',int:'为居民提供法律咨询和法律援助服务，维护居民合法权益。',price:'7',principal:'郑思琪',tel:'13987654321',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'5',AdminID:'10089',name:'辅导小学数学作业',state:'1',type:'上门服务',nop:'8',aTime:'2024/3/5 - 2024/3/6',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'辅导小学三年级数学作业',price:'7',principal:'祝川伦',tel:'15922832561',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'18',AdminID:'10057',name:'公益志愿行',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/16 - 2024/4/16',cTime:'19:00-21:00',address:'四川省南充市顺庆区人民南路三段138号',int:'参与环境保护、社区服务等公益活动',price:'4',principal:'黄雅琪',tel:'13567890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'29',AdminID:'10068',name:'家电安全使用培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/21 - 2024/4/21',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路311号希望城A区4栋2单元',int:'向居民普及家电安全使用知识，预防家电事故的发生。',price:'5',principal:'高雅婷',tel:'15877890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'19',AdminID:'10058',name:'家电维修服务',state:'1',type:'家政服务',nop:'6',aTime:'2024/4/17 - 2024/4/17',cTime:'19:00-21:00',address:'四川省自贡市自流井区五星街中华路237号',int:'为居民提供家电维修服务，解决家电故障问题',price:'5',principal:'赵梓轩',tel:'15987654321',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'25',AdminID:'10064',name:'家庭教育讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/25 - 2024/4/25',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路377号希望城A区6栋1单元',int:'为家长提供家庭教育指导和建议，促进孩子健康成长。',price:'4',principal:'梁静雅',tel:'18876543210',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'23',AdminID:'10062',name:'家政服务进社区',state:'1',type:'家政服务',nop:'6',aTime:'2024/4/27 - 2024/4/27',cTime:'15:00-17:00',address:'四川省攀枝花市东区攀枝花大道东段491号攀枝花学院北苑5号楼',int:'提供家庭清洁、照料老人等服务，满足居民家政需求',price:'10',principal:'徐芷涵',tel:'13890123456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'17',AdminID:'10056',name:'健康义诊',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/15 - 2024/4/15',cTime:'19:00-21:00',address:'四川省乐山市市中区柏杨西路888号',int:'为居民提供免费的健康咨询和检查服务。',price:'3',principal:'马文昊',tel:'17171790123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'28',AdminID:'10067',name:'健康饮食讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/22 - 2024/4/22',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路308号世豪广场3期7号楼',int:'讲解健康饮食知识，指导居民合理搭配饮食。',price:'6',principal:'罗文昊',tel:'19867890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'14',AdminID:'10053',name:'健康运动会',state:'1',type:'关爱服务',nop:'6',aTime:'2024/4/12 - 2024/4/12',cTime:'19:00-21:00',address:'四川省乐山市市中区中心街道中山路60号',int:'组织各类体育比赛和健身活动，促进居民身体健康。',price:'7',principal:'刘思睿',tel:'17777734567',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'11',AdminID:'10050',name:'健康知识讲座',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/10 - 2024/4/11',cTime:'19:00-21:00',address:'四川省成都市青羊区一环路南二段230号',int:'邀请专业医生或健康讲师，为社区居民举办健康知识讲座，讲解常见的疾病预防和保健知识。同时，我们还将提供免费的健康咨询和体检服务，让居民更好地了解自己的身体状况。',price:'5',principal:'张婉琳',tel:'13883801234',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'1',AdminID:'10085',name:'禁毒宣传活动',state:'1',type:'公益活动',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'前往社区服务点参加禁毒宣传活动，负责传单派发，知识讲解等',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'30',AdminID:'10069',name:'垃圾分类宣传周',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/20 - 2024/4/21',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号南充摩尔百货A座20楼',int:'通过宣传周活动，向居民普及垃圾分类知识，促进环保意识的提升。',price:'8',principal:'黄浩宇',tel:'17080890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'15',AdminID:'10054',name:'农业技术培训班',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/13 - 2024/4/13',cTime:'19:00-21:00',address:'四川省南充市顺庆区南湖街道湖心路45号',int:'为农民提供现代农业技术培训和指导，促进农业生产发展',price:'4',principal:'郭涵瑜',tel:'14554545678',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'2',AdminID:'10086',name:'陪伴老人体检',state:'1',type:'关爱服务',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'陪伴1名老人前往第三人民医院进行全身体检',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'20',AdminID:'10059',name:'清洁家园行动',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/18 - 2024/4/18',cTime:'15:00-17:00',address:'四川省成都市武侯区一环路南一段16号附3号',int:'组织并帮助居民进行环境清洁，维护社区卫生。',price:'8',principal:'周宇翔',tel:'18234567890',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'6',AdminID:'10090',name:'人民公园陪练晨跑',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人民公园陪练晨跑',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'7',AdminID:'10091',name:'社区服务点卫生打扫',state:'1',type:'公益服务',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'前往社区服务点进行大扫除，具体安排听从现场工作人员',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'8',AdminID:'10092',name:'社区活动物资搬运',state:'1',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'社区文艺活动物资搬运',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'9',AdminID:'10093',name:'社区街道清扫',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/9 - 2024/3/10',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'社区街道清扫',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'21',AdminID:'10060',name:'社区文艺晚会',state:'1',type:'文体艺术',nop:'6',aTime:'2024/4/29 - 2024/4/29',cTime:'15:00-17:00',address:'四川省绵阳市涪城区花园南街66号绵阳中学家属院1栋2单元',int:'举办文艺演出和体育活动，丰富居民文化生活',price:'6',principal:'邓悦彤',tel:'17709876543',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'26',AdminID:'10065',name:'书法绘画培训班',state:'1',type:'文体艺术',nop:'6',aTime:'2024/4/24 - 2024/4/24',cTime:'15:00-17:00',address:'四川省广元市利州区利州东路二段58号万源新城C区10号楼',int:'教授书法和绘画技巧，培养居民艺术兴趣。',price:'8',principal:'许梓涵',tel:'17345678901',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'10',AdminID:'10094',name:'探访孤寡老人',state:'1',type:'关爱服务',nop:'5',aTime:'2024/3/10 - 2024/3/11',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'探访8位孤寡老人，慰问物品由社区提供',price:'8',principal:'柳城靖',tel:'14771408927',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'22',AdminID:'10061',name:'卫生知识讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/28 - 2024/4/28',cTime:'15:00-17:00',address:'四川省自贡市自流井区丹桂大街236号东方广场A座12楼',int:'宣讲公共卫生知识，提高居民卫生意识。',price:'9',principal:'林煜铭',tel:'14512345678',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'12',AdminID:'10051',name:'文化讲堂',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/10 - 2024/3/11',cTime:'19:00-21:00',address:'四川省成都市武侯区南门街道希望路28号',int:'帮助老人了解文化知识,提高居民素质',price:'6',principal:'陈煜轩',tel:'15665612345',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'13',AdminID:'10052',name:'洗剪吹',state:'1',type:'关爱服务',nop:'6',aTime:'2024/4/11 - 2024/4/11',cTime:'19:00-21:00',address:'四川省绵阳市涪城区东湖街道湖滨路15号',int:'为老人提供免费的理发,洗头,吹发服务',price:'5',principal:'李欣怡',tel:'18998923456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'3',AdminID:'10087',name:'新家具安装',state:'1',type:'家政服务',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'1套沙发，3个衣柜和1个床架的组装',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'16',AdminID:'10055',name:'政策宣讲会',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/14 - 2024/4/14',cTime:'19:00-21:00',address:'四川省遂宁市船山区渠河中路66号',int:'宣讲党的方针政策，帮助居民了解国家发展动态。',price:'6',principal:'高晨熙',tel:'19009078901',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
    ],
    fakeacList3:
    [
      {id:'30',AdminID:'10069',name:'垃圾分类宣传周',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/20 - 2024/4/21',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号南充摩尔百货A座20楼',int:'通过宣传周活动，向居民普及垃圾分类知识，促进环保意识的提升。',price:'8',principal:'黄浩宇',tel:'17080890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'29',AdminID:'10068',name:'家电安全使用培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/21 - 2024/4/21',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路311号希望城A区4栋2单元',int:'向居民普及家电安全使用知识，预防家电事故的发生。',price:'5',principal:'高雅婷',tel:'15877890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'28',AdminID:'10067',name:'健康饮食讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/22 - 2024/4/22',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路308号世豪广场3期7号楼',int:'讲解健康饮食知识，指导居民合理搭配饮食。',price:'6',principal:'罗文昊',tel:'19867890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'27',AdminID:'10066',name:'法律咨询服务',state:'1',type:'专业技术',nop:'6',aTime:'2024/4/23- 2024/4/23',cTime:'15:00-17:00',address:'四川省遂宁市船山区渠河中路99号遂宁万达广场1号楼',int:'为居民提供法律咨询和法律援助服务，维护居民合法权益。',price:'7',principal:'郑思琪',tel:'13987654321',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'26',AdminID:'10065',name:'书法绘画培训班',state:'1',type:'文体艺术',nop:'6',aTime:'2024/4/24 - 2024/4/24',cTime:'15:00-17:00',address:'四川省广元市利州区利州东路二段58号万源新城C区10号楼',int:'教授书法和绘画技巧，培养居民艺术兴趣。',price:'8',principal:'许梓涵',tel:'17345678901',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'25',AdminID:'10064',name:'家庭教育讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/25 - 2024/4/25',cTime:'15:00-17:00',address:'四川省德阳市旌阳区庐山北路377号希望城A区6栋1单元',int:'为家长提供家庭教育指导和建议，促进孩子健康成长。',price:'4',principal:'梁静雅',tel:'18876543210',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'24',AdminID:'10063',name:'代买代送服务',state:'1',type:'上门服务',nop:'6',aTime:'2024/4/26 - 2024/4/26',cTime:'15:00-17:00',address:'四川省泸州市江阳区康城路二段8号泸州万达广场B座1804室',int:'为居民提供代买日常用品、代送快递等服务。',price:'6',principal:'贾晨阳',tel:'15067890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'23',AdminID:'10062',name:'家政服务进社区',state:'1',type:'家政服务',nop:'6',aTime:'2024/4/27 - 2024/4/27',cTime:'15:00-17:00',address:'四川省攀枝花市东区攀枝花大道东段491号攀枝花学院北苑5号楼',int:'提供家庭清洁、照料老人等服务，满足居民家政需求',price:'10',principal:'徐芷涵',tel:'13890123456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'22',AdminID:'10061',name:'卫生知识讲座',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/28 - 2024/4/28',cTime:'15:00-17:00',address:'四川省自贡市自流井区丹桂大街236号东方广场A座12楼',int:'宣讲公共卫生知识，提高居民卫生意识。',price:'9',principal:'林煜铭',tel:'14512345678',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'21',AdminID:'10060',name:'社区文艺晚会',state:'1',type:'文体艺术',nop:'6',aTime:'2024/4/29 - 2024/4/29',cTime:'15:00-17:00',address:'四川省绵阳市涪城区花园南街66号绵阳中学家属院1栋2单元',int:'举办文艺演出和体育活动，丰富居民文化生活',price:'6',principal:'邓悦彤',tel:'17709876543',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'20',AdminID:'10059',name:'清洁家园行动',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/18 - 2024/4/18',cTime:'15:00-17:00',address:'四川省成都市武侯区一环路南一段16号附3号',int:'组织并帮助居民进行环境清洁，维护社区卫生。',price:'8',principal:'周宇翔',tel:'18234567890',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'19',AdminID:'10058',name:'家电维修服务',state:'1',type:'家政服务',nop:'6',aTime:'2024/4/17 - 2024/4/17',cTime:'19:00-21:00',address:'四川省自贡市自流井区五星街中华路237号',int:'为居民提供家电维修服务，解决家电故障问题',price:'5',principal:'赵梓轩',tel:'15987654321',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'18',AdminID:'10057',name:'公益志愿行',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/16 - 2024/4/16',cTime:'19:00-21:00',address:'四川省南充市顺庆区人民南路三段138号',int:'参与环境保护、社区服务等公益活动',price:'4',principal:'黄雅琪',tel:'13567890123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'17',AdminID:'10056',name:'健康义诊',state:'1',type:'公益服务',nop:'6',aTime:'2024/4/15 - 2024/4/15',cTime:'19:00-21:00',address:'四川省乐山市市中区柏杨西路888号',int:'为居民提供免费的健康咨询和检查服务。',price:'3',principal:'马文昊',tel:'17171790123',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'16',AdminID:'10055',name:'政策宣讲会',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/14 - 2024/4/14',cTime:'19:00-21:00',address:'四川省遂宁市船山区渠河中路66号',int:'宣讲党的方针政策，帮助居民了解国家发展动态。',price:'6',principal:'高晨熙',tel:'19009078901',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'15',AdminID:'10054',name:'农业技术培训班',state:'1',type:'培训教育',nop:'6',aTime:'2024/4/13 - 2024/4/13',cTime:'19:00-21:00',address:'四川省南充市顺庆区南湖街道湖心路45号',int:'为农民提供现代农业技术培训和指导，促进农业生产发展',price:'4',principal:'郭涵瑜',tel:'14554545678',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'14',AdminID:'10053',name:'健康运动会',state:'1',type:'关爱服务',nop:'6',aTime:'2024/4/12 - 2024/4/12',cTime:'19:00-21:00',address:'四川省乐山市市中区中心街道中山路60号',int:'组织各类体育比赛和健身活动，促进居民身体健康。',price:'7',principal:'刘思睿',tel:'17777734567',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'13',AdminID:'10052',name:'洗剪吹',state:'1',type:'关爱服务',nop:'6',aTime:'2024/4/11 - 2024/4/11',cTime:'19:00-21:00',address:'四川省绵阳市涪城区东湖街道湖滨路15号',int:'为老人提供免费的理发,洗头,吹发服务',price:'5',principal:'李欣怡',tel:'18998923456',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'12',AdminID:'10051',name:'文化讲堂',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/10 - 2024/3/11',cTime:'19:00-21:00',address:'四川省成都市武侯区南门街道希望路28号',int:'帮助老人了解文化知识,提高居民素质',price:'6',principal:'陈煜轩',tel:'15665612345',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'11',AdminID:'10050',name:'健康知识讲座',state:'1',type:'公益活动',nop:'6',aTime:'2024/4/10 - 2024/4/11',cTime:'19:00-21:00',address:'四川省成都市青羊区一环路南二段230号',int:'邀请专业医生或健康讲师，为社区居民举办健康知识讲座，讲解常见的疾病预防和保健知识。同时，我们还将提供免费的健康咨询和体检服务，让居民更好地了解自己的身体状况。',price:'5',principal:'张婉琳',tel:'13883801234',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'10',AdminID:'10094',name:'探访孤寡老人',state:'1',type:'关爱服务',nop:'5',aTime:'2024/3/10 - 2024/3/11',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'探访8位孤寡老人，慰问物品由社区提供',price:'8',principal:'柳城靖',tel:'14771408927',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'9',AdminID:'10093',name:'社区街道清扫',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/9 - 2024/3/10',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'社区街道清扫',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'8',AdminID:'10092',name:'社区活动物资搬运',state:'1',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'社区文艺活动物资搬运',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'7',AdminID:'10091',name:'社区服务点卫生打扫',state:'1',type:'公益服务',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'前往社区服务点进行大扫除，具体安排听从现场工作人员',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'6',AdminID:'10090',name:'人民公园陪练晨跑',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人民公园陪练晨跑',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'5',AdminID:'10089',name:'辅导小学数学作业',state:'1',type:'上门服务',nop:'8',aTime:'2024/3/5 - 2024/3/6',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'辅导小学三年级数学作业',price:'7',principal:'祝川伦',tel:'15922832561',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'4',AdminID:'10088',name:'代买蔬菜',state:'1',type:'上门服务',nop:'1',aTime:'2024/3/4 - 2024/3/5',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'代买午餐使用蔬菜（一颗萝卜，一头蒜，一颗西兰花，2斤蒜苔）',price:'6',principal:'符方直',tel:'17333417112',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'3',AdminID:'10087',name:'新家具安装',state:'1',type:'家政服务',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'1套沙发，3个衣柜和1个床架的组装',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'2',AdminID:'10086',name:'陪伴老人体检',state:'1',type:'关爱服务',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'陪伴1名老人前往第三人民医院进行全身体检',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
      {id:'1',AdminID:'10085',name:'禁毒宣传活动',state:'1',type:'公益活动',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'前往社区服务点参加禁毒宣传活动，负责传单派发，知识讲解等',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/郊游.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:"0"},
    ]
  },
  toActivityInfo(event){
    let participant = JSON.stringify(event.currentTarget.dataset.participant)
    wx.navigateTo({
      url: '/pages/activityInfo/activityInfo?id='+event.currentTarget.dataset.id+'&adminid='+event.currentTarget.dataset.adminid+'&name='+event.currentTarget.dataset.name+'&type='+event.currentTarget.dataset.type+'&nop='+event.currentTarget.dataset.nop+'&atime='+event.currentTarget.dataset.atime+'&ctime='+event.currentTarget.dataset.ctime+'&address='+event.currentTarget.dataset.address+'&price='+event.currentTarget.dataset.price+'&principal='+event.currentTarget.dataset.principal+'&tel='+event.currentTarget.dataset.tel+'&img='+event.currentTarget.dataset.img+'&int='+event.currentTarget.dataset.int+'&participant='+participant+'&isfull='+event.currentTarget.dataset.isfull+'&state='+event.currentTarget.dataset.state
    })
  },
  toaddAC(){
    wx.navigateTo({
      url: '/pages/addAc/addAc',
    })
  },
  toSearch(){
    this.setData({
      isSearch:true
    })
  },
  toList1(){
    this.setData({
      isSearch:false,
      mytext:"",
      inSearch:false,
    })
  },
  toList2(){
    if (this.data.mytext=="") {
      this.setData({
        isSearch:false,
        mytext:"",
        inSearch:false,
      })
    }
  },
  inSearch(){
    this.setData({
      inSearch:true
    })
  },
  change1(event){
    this.setData({
      text1:this.data.option1[event.detail].text
    })
    if (this.data.text1 == "全部培训") {
      this.setData({
        text1:""
      })
    }
  },
  change2(event){
    if (event.detail == "a") {
      this.setData({
        fakeacList:this.data.fakeacList1
      })
    }else if (event.detail == "b") {
      this.setData({
        fakeacList:this.data.fakeacList2
      })
    }else if (event.detail == "c") {
      this.setData({
        fakeacList:this.data.fakeacList3
      })
    }else if (event.detail == "d") {
      this.setData({
        fakeacList:this.data.fakeacList1
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      fakeacList:this.data.fakeacList1
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