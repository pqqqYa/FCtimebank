// pages/acList/acList.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      option1: [
        { text: '全部培训', value: 0 },
        { text: '平台使用', value: 1 },
        { text: '公益活动', value: 2 },
        { text: '公益服务', value: 3 },
        { text: '关爱服务', value: 4 },
        { text: '家政服务', value: 5 },
        { text: '上门服务', value: 6 },
        { text: '培训教育', value: 7 },
        { text: '文体艺术', value: 8 },
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
    fakeTrainList:[],
    fakeTrainList1:
    [
      {id:'1',AdminID:'10088',name:'跨文化沟通与交流',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/4 - 2024/3/5',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'跨文化沟通与交流培训是一种旨在提升参与者在不同文化背景下进行有效沟通和交流能力的培训活动',price:'6',principal:'符方直',tel:'17333417112',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'2',AdminID:'10086',name:'活动安全教育',state:'1',type:'公益活动',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'活动安全教育是指通过一系列有组织、有计划的教育活动，向人们传授在特定活动或场合中的安全知识和技能，以提高他们的安全意识和自我保护能力',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'3',AdminID:'10090',name:'人际沟通技巧',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人际沟通技巧培训是一种旨在提升个人在人际交往中有效沟通能力的培训活动',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'4',AdminID:'10092',name:'环保意识与行动',state:'1',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'环保意识与行动培训是一种综合性的教育活动，旨在提升个体或群体对环境保护的认识和重视，并激发其积极采取环保行动的意愿和能力',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'5',AdminID:'10089',name:'团队冲突解决',state:'1',type:'培训教育',nop:'8',aTime:'2024/3/5 - 2024/3/6',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'团队冲突解决培训是一种专为团队成员设计的培训活动，旨在帮助他们掌握解决冲突的技巧和方法，从而增强团队的合作与和谐氛围',price:'7',principal:'祝川伦',tel:'15922832561',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'6',AdminID:'10085',name:'家政培训',state:'1',type:'家政服务',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'培训内容包括但不限于专业知识培训、职业道德教育、环境卫生保洁服务、日常烹饪、居家安全与抢救等多个方面',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'7',AdminID:'10087',name:'宣传文案撰写培训',state:'1',type:'公益服务',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'宣传文案撰写培训旨在帮助参与者掌握撰写高质量宣传文案的技巧和方法，以提升品牌形象、吸引目标受众并达成宣传目标',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'8',AdminID:'10091',name:'社区安全常识与预防',state:'1',type:'公益活动',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'社区安全常识与预防培训是一项至关重要的活动，旨在提高社区居民的安全意识和防范能力，确保他们的生命和财产安全',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'9',AdminID:'10093',name:'志愿者服务的心理调适',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/9 - 2024/3/10',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'帮助志愿者更好地应对服务过程中可能出现的心理挑战和压力',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'10',AdminID:'10094',name:'志愿者服务的道德规范与行为准则',state:'1',type:'培训教育',nop:'0',aTime:'2024/3/10 - 2024/3/11',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'志愿者服务的道德规范与行为准则涵盖了多个方面，旨在确保志愿者在提供服务的过程中，能够遵循一定的道德标准和行为规范，为服务对象提供高质量的服务',price:'8',principal:'柳城靖',tel:'14771408927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'11',AdminID:'10050',name:'健康饮食与营养知识培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/12 - 2024/3/12',cTime:'09:00-12:00',address:'四川省成都市武侯区锦绣路1号',int:'健康饮食与营养知识培训是一种教育活动，旨在帮助人们了解并掌握健康饮食和营养学的基础知识，以改善饮食习惯，促进身体健康',price:'6',principal:'林溪靖',tel:'14724343554',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'12',AdminID:'10051',name:'跨文化沟通与谈判技巧培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/13 - 2024/3/13',cTime:'15:00-17:00',address:'四川省绵阳市涪城区跃进路北段66号',int:'跨文化沟通与谈判技巧培训是一种综合性的教育活动，旨在帮助参与者提升在跨文化背景下进行有效沟通和谈判的能力',price:'7',principal:'竹海靖',tel:'15935687412',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'13',AdminID:'10052',name:'团队建设与拓展训练',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/13 - 2024/3/13',cTime:'15:00-17:00',address:'四川省自贡市自流井区丹桂大街288号',int:'团队建设是指为了实现团队绩效及产出最大化而进行的一系列结构设计及人员激励等团队优化行为',price:'8',principal:'松涛靖',tel:'18223456789',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'14',AdminID:'10053',name:'个人形象与礼仪塑造培训',state:'1',type:'上门服务',nop:'6',aTime:'2024/3/14 - 2024/3/14',cTime:'15:00-17:00',address:'四川省泸州市龙马潭区龙马大道三段1号',int:'个人形象与礼仪塑造培训是一种旨在提升个人外在形象与内在修养的教育活动',price:'6',principal:'梅溪靖',tel:'17798765432',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'15',AdminID:'10054',name:'情绪管理与压力调节',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/14 - 2024/3/14',cTime:'15:00-17:00',address:'四川省德阳市旌阳区泰山北路二段80号',int:'情绪管理与压力调节培训是一种旨在帮助个人提升情绪管理能力和有效应对压力的教育活动',price:'8',principal:'孟柏轩',tel:'13812345678',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'16',AdminID:'10055',name:'老年人社交与人际交往技巧培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/15 - 2024/3/15',cTime:'15:00-17:00',address:'四川省广元市利州区利州东路二段238号',int:'老年人社交与人际交往技巧培训是一种专门为老年人设计的教育活动，旨在提升他们在社交和人际交往方面的能力和技巧',price:'6',principal:'韩竹韵',tel:'14709876543',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'17',AdminID:'10056',name:'旅游安全与文明出行培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/15 - 2024/3/15',cTime:'15:00-17:00',address:'四川省遂宁市船山区渠河中路618号',int:'旅游安全与文明出行培训是一种综合性的教育活动，旨在提高旅游者在旅行过程中的安全意识和文明素养，确保他们能够平安、愉快并充满意义地完成旅程',price:'9',principal:'陶菊雅',tel:'15087654321',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'18',AdminID:'10057',name:'手工艺制作与创意工坊',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省内江市东兴区汉安大道西段988号',int:'手工艺制作与创意工坊培训是一种综合性的培训活动，旨在通过教授手工艺制作技能和培养创新思维，提升学员的创意实践能力和艺术修养',price:'7',principal:'高柳风',tel:'14712308927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'19',AdminID:'10058',name:'健身与舞蹈活动培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路158号',int:'健身与舞蹈活动培训是一种结合健身和舞蹈元素的综合性培训活动，旨在通过舞蹈的动作和节奏，促进身体的锻炼和健康提升',price:'7',principal:'程松涛',tel:'12271408923',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'20',AdminID:'10059',name:'书法绘画艺术修养班',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号',int:'书法绘画艺术修养班是一个旨在提升学员书法和绘画艺术修养的培训课程',price:'9',principal:'罗竹君',tel:'15471408989',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'21',AdminID:'10060',name:'数字技能与智能设备应用培训',state:'1',type:'上门服务',nop:'6',aTime:'2024/3/17 - 2024/3/17',cTime:'15:00-17:00',address:'四川省宜宾市翠屏区安阜街道振兴大道东段9号',int:'数字技能与智能设备应用培训是一种综合性的教育活动，旨在提升个体的数字技能水平，并教授如何有效应用智能设备',price:'6',principal:'陆梅然',tel:'14771454927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'22',AdminID:'10061',name:'养生与营养知识讲座',state:'1',type:'公益活动',nop:'6',aTime:'2024/3/17 - 2024/3/17',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'养生与营养知识讲座是一个旨在提高听众养生意识和营养知识水平的活动',price:'10',principal:'谢兰仲',tel:'14771408926',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'23',AdminID:'10062',name:'心理健康与调适培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省雅安市雨城区青江街道沙湾路266号',int:'心理健康与调适培训是一种旨在提升个体心理健康水平，增强心理调适能力的教育活动',price:'11',principal:'邓梧华',tel:'13578901234',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'24',AdminID:'10063',name:'健康管理与疾病预防培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省广安市前锋区前锋镇广前大道168号',int:'培训通常包括健康管理理念、疾病预防策略、健康风险评估与健康干预等内容，旨在帮助人们更好地管理和维护自己的健康',price:'6',principal:'姚柳然',tel:'18567890123',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'25',AdminID:'10064',name:'养老生活技能培训',state:'1',type:'关爱服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省巴中市巴州区回风街道巴中大道616号',int:'养老生活技能培训是指针对老年人或养老护理工作者进行的一系列技能教育和培训活动，旨在提高他们在养老生活中的自理能力、社交能力、生活质量以及应对日常挑战的能力',price:'7',principal:'谢枫华',tel:'17345678901',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'26',AdminID:'10066',name:'园艺与花艺文化',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省眉山市东坡区通惠街道文忠街198号',int:'园艺与花艺文化培训是一种综合性的教育活动，旨在传授园艺知识和花艺技巧，同时培养对园艺与花艺文化的理解和欣赏',price:'8',principal:'魏竹君',tel:'18976785435',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'27',AdminID:'10067',name:'书法与国画创作',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/19 - 2024/3/19',cTime:'19:00-21:00',address:'四川省资阳市雁江区狮子山街道车城大道三段398号',int:'书法与国画创作培训是专门针对想要深入学习书法和国画技巧的人群所设立的教育课程',price:'9',principal:'侯梅轩',tel:'15467954354',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'28',AdminID:'10068',name:'摄影艺术与美景捕捉课程',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/20 - 2024/3/20',cTime:'19:00-21:00',address:'四川省阿坝藏族羌族自治州马尔康市马尔康镇达萨街393号',int:'该课程旨在通过理论讲解和实践操作，帮助学员掌握摄影的基本知识和技能，提升对自然美景的观察力和艺术表现力',price:'6',principal:'齐柏风',tel:'17896229801',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'29',AdminID:'10069',name:'应急自救与防灾减灾培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/20 - 2024/3/21',cTime:'19:00-21:00',address:'四川省甘孜藏族自治州康定市炉城镇沿河西路1号',int:'应急自救与防灾减灾培训是一种旨在提高公众在面对突发灾害事件时的自我保护能力和防灾减灾意识的培训活动',price:'9',principal:'赵竹韵',tel:'19988776589',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'30',AdminID:'10070',name:'诗词朗诵与欣赏培训',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省凉山彝族自治州西昌市长安街道航天大道三段27号',int:'诗词朗诵与欣赏培训旨在提高学员对诗词的深入理解与表达能力，同时陶冶情操，提升文学素养',price:'8',principal:'傅梧华',tel:'15438906964',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'31',AdminID:'10071',name:'平台使用说明手册',state:'1',type:'平台使用',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'帮助用户了解基础操作到高级功能的全方位内容,提供详尽的指导和帮助',price:'8',principal:'程上梭',tel:'15438906964',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
      {id:'32',AdminID:'10072',name:'平台指南',state:'1',type:'平台使用',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'帮助用户更好的操作平台',price:'8',principal:'陶雅苏',tel:'15268523519',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
  ],
  fakeTrainList2:[
    {id:'14',AdminID:'10053',name:'个人形象与礼仪塑造培训',state:'1',type:'上门服务',nop:'6',aTime:'2024/3/14 - 2024/3/14',cTime:'15:00-17:00',address:'四川省泸州市龙马潭区龙马大道三段1号',int:'个人形象与礼仪塑造培训是一种旨在提升个人外在形象与内在修养的教育活动',price:'6',principal:'梅溪靖',tel:'17798765432',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'4',AdminID:'10092',name:'环保意识与行动',state:'1',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'环保意识与行动培训是一种综合性的教育活动，旨在提升个体或群体对环境保护的认识和重视，并激发其积极采取环保行动的意愿和能力',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'2',AdminID:'10086',name:'活动安全教育',state:'1',type:'公益活动',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'活动安全教育是指通过一系列有组织、有计划的教育活动，向人们传授在特定活动或场合中的安全知识和技能，以提高他们的安全意识和自我保护能力',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'6',AdminID:'10085',name:'家政培训',state:'1',type:'家政服务',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'培训内容包括但不限于专业知识培训、职业道德教育、环境卫生保洁服务、日常烹饪、居家安全与抢救等多个方面',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'24',AdminID:'10063',name:'健康管理与疾病预防培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省广安市前锋区前锋镇广前大道168号',int:'培训通常包括健康管理理念、疾病预防策略、健康风险评估与健康干预等内容，旨在帮助人们更好地管理和维护自己的健康',price:'6',principal:'姚柳然',tel:'18567890123',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'11',AdminID:'10050',name:'健康饮食与营养知识培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/12 - 2024/3/12',cTime:'09:00-12:00',address:'四川省成都市武侯区锦绣路1号',int:'健康饮食与营养知识培训是一种教育活动，旨在帮助人们了解并掌握健康饮食和营养学的基础知识，以改善饮食习惯，促进身体健康',price:'6',principal:'林溪靖',tel:'14724343554',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'19',AdminID:'10058',name:'健身与舞蹈活动培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路158号',int:'健身与舞蹈活动培训是一种结合健身和舞蹈元素的综合性培训活动，旨在通过舞蹈的动作和节奏，促进身体的锻炼和健康提升',price:'7',principal:'程松涛',tel:'12271408923',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'1',AdminID:'10088',name:'跨文化沟通与交流',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/4 - 2024/3/5',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'跨文化沟通与交流培训是一种旨在提升参与者在不同文化背景下进行有效沟通和交流能力的培训活动',price:'6',principal:'符方直',tel:'17333417112',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'12',AdminID:'10051',name:'跨文化沟通与谈判技巧培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/13 - 2024/3/13',cTime:'15:00-17:00',address:'四川省绵阳市涪城区跃进路北段66号',int:'跨文化沟通与谈判技巧培训是一种综合性的教育活动，旨在帮助参与者提升在跨文化背景下进行有效沟通和谈判的能力',price:'7',principal:'竹海靖',tel:'15935687412',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'16',AdminID:'10055',name:'老年人社交与人际交往技巧培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/15 - 2024/3/15',cTime:'15:00-17:00',address:'四川省广元市利州区利州东路二段238号',int:'老年人社交与人际交往技巧培训是一种专门为老年人设计的教育活动，旨在提升他们在社交和人际交往方面的能力和技巧',price:'6',principal:'韩竹韵',tel:'14709876543',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'17',AdminID:'10056',name:'旅游安全与文明出行培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/15 - 2024/3/15',cTime:'15:00-17:00',address:'四川省遂宁市船山区渠河中路618号',int:'旅游安全与文明出行培训是一种综合性的教育活动，旨在提高旅游者在旅行过程中的安全意识和文明素养，确保他们能够平安、愉快并充满意义地完成旅程',price:'9',principal:'陶菊雅',tel:'15087654321',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'31',AdminID:'10071',name:'平台使用说明手册',state:'1',type:'平台使用',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'帮助用户了解基础操作到高级功能的全方位内容,提供详尽的指导和帮助',price:'8',principal:'程上梭',tel:'15438906964',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'32',AdminID:'10072',name:'平台指南',state:'1',type:'平台使用',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'帮助用户更好的操作平台',price:'8',principal:'陶雅苏',tel:'15268523519',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'15',AdminID:'10054',name:'情绪管理与压力调节',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/14 - 2024/3/14',cTime:'15:00-17:00',address:'四川省德阳市旌阳区泰山北路二段80号',int:'情绪管理与压力调节培训是一种旨在帮助个人提升情绪管理能力和有效应对压力的教育活动',price:'8',principal:'孟柏轩',tel:'13812345678',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'3',AdminID:'10090',name:'人际沟通技巧',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人际沟通技巧培训是一种旨在提升个人在人际交往中有效沟通能力的培训活动',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'8',AdminID:'10091',name:'社区安全常识与预防',state:'1',type:'公益活动',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'社区安全常识与预防培训是一项至关重要的活动，旨在提高社区居民的安全意识和防范能力，确保他们的生命和财产安全',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'28',AdminID:'10068',name:'摄影艺术与美景捕捉课程',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/20 - 2024/3/20',cTime:'19:00-21:00',address:'四川省阿坝藏族羌族自治州马尔康市马尔康镇达萨街393号',int:'该课程旨在通过理论讲解和实践操作，帮助学员掌握摄影的基本知识和技能，提升对自然美景的观察力和艺术表现力',price:'6',principal:'齐柏风',tel:'17896229801',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'30',AdminID:'10070',name:'诗词朗诵与欣赏培训',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省凉山彝族自治州西昌市长安街道航天大道三段27号',int:'诗词朗诵与欣赏培训旨在提高学员对诗词的深入理解与表达能力，同时陶冶情操，提升文学素养',price:'8',principal:'傅梧华',tel:'15438906964',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'18',AdminID:'10057',name:'手工艺制作与创意工坊',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省内江市东兴区汉安大道西段988号',int:'手工艺制作与创意工坊培训是一种综合性的培训活动，旨在通过教授手工艺制作技能和培养创新思维，提升学员的创意实践能力和艺术修养',price:'7',principal:'高柳风',tel:'14712308927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'20',AdminID:'10059',name:'书法绘画艺术修养班',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号',int:'书法绘画艺术修养班是一个旨在提升学员书法和绘画艺术修养的培训课程',price:'9',principal:'罗竹君',tel:'15471408989',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'27',AdminID:'10067',name:'书法与国画创作',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/19 - 2024/3/19',cTime:'19:00-21:00',address:'四川省资阳市雁江区狮子山街道车城大道三段398号',int:'书法与国画创作培训是专门针对想要深入学习书法和国画技巧的人群所设立的教育课程',price:'9',principal:'侯梅轩',tel:'15467954354',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'21',AdminID:'10060',name:'数字技能与智能设备应用培训',state:'1',type:'上门服务',nop:'6',aTime:'2024/3/17 - 2024/3/17',cTime:'15:00-17:00',address:'四川省宜宾市翠屏区安阜街道振兴大道东段9号',int:'数字技能与智能设备应用培训是一种综合性的教育活动，旨在提升个体的数字技能水平，并教授如何有效应用智能设备',price:'6',principal:'陆梅然',tel:'14771454927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'5',AdminID:'10089',name:'团队冲突解决',state:'1',type:'培训教育',nop:'8',aTime:'2024/3/5 - 2024/3/6',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'团队冲突解决培训是一种专为团队成员设计的培训活动，旨在帮助他们掌握解决冲突的技巧和方法，从而增强团队的合作与和谐氛围',price:'7',principal:'祝川伦',tel:'15922832561',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'13',AdminID:'10052',name:'团队建设与拓展训练',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/13 - 2024/3/13',cTime:'15:00-17:00',address:'四川省自贡市自流井区丹桂大街288号',int:'团队建设是指为了实现团队绩效及产出最大化而进行的一系列结构设计及人员激励等团队优化行为',price:'8',principal:'松涛靖',tel:'18223456789',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'23',AdminID:'10062',name:'心理健康与调适培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省雅安市雨城区青江街道沙湾路266号',int:'心理健康与调适培训是一种旨在提升个体心理健康水平，增强心理调适能力的教育活动',price:'11',principal:'邓梧华',tel:'13578901234',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'7',AdminID:'10087',name:'宣传文案撰写培训',state:'1',type:'公益服务',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'宣传文案撰写培训旨在帮助参与者掌握撰写高质量宣传文案的技巧和方法，以提升品牌形象、吸引目标受众并达成宣传目标',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'25',AdminID:'10064',name:'养老生活技能培训',state:'1',type:'关爱服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省巴中市巴州区回风街道巴中大道616号',int:'养老生活技能培训是指针对老年人或养老护理工作者进行的一系列技能教育和培训活动，旨在提高他们在养老生活中的自理能力、社交能力、生活质量以及应对日常挑战的能力',price:'7',principal:'谢枫华',tel:'17345678901',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'22',AdminID:'10061',name:'养生与营养知识讲座',state:'1',type:'公益活动',nop:'6',aTime:'2024/3/17 - 2024/3/17',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'养生与营养知识讲座是一个旨在提高听众养生意识和营养知识水平的活动',price:'10',principal:'谢兰仲',tel:'14771408926',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'29',AdminID:'10069',name:'应急自救与防灾减灾培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/20 - 2024/3/21',cTime:'19:00-21:00',address:'四川省甘孜藏族自治州康定市炉城镇沿河西路1号',int:'应急自救与防灾减灾培训是一种旨在提高公众在面对突发灾害事件时的自我保护能力和防灾减灾意识的培训活动',price:'9',principal:'赵竹韵',tel:'19988776589',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'26',AdminID:'10066',name:'园艺与花艺文化',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省眉山市东坡区通惠街道文忠街198号',int:'园艺与花艺文化培训是一种综合性的教育活动，旨在传授园艺知识和花艺技巧，同时培养对园艺与花艺文化的理解和欣赏',price:'8',principal:'魏竹君',tel:'18976785435',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'10',AdminID:'10094',name:'志愿者服务的道德规范与行为准则',state:'1',type:'培训教育',nop:'0',aTime:'2024/3/10 - 2024/3/11',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'志愿者服务的道德规范与行为准则涵盖了多个方面，旨在确保志愿者在提供服务的过程中，能够遵循一定的道德标准和行为规范，为服务对象提供高质量的服务',price:'8',principal:'柳城靖',tel:'14771408927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'9',AdminID:'10093',name:'志愿者服务的心理调适',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/9 - 2024/3/10',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'帮助志愿者更好地应对服务过程中可能出现的心理挑战和压力',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
  ],
  fakeTrainList3:[
    {id:'32',AdminID:'10072',name:'平台指南',state:'1',type:'平台使用',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'帮助用户更好的操作平台',price:'8',principal:'陶雅苏',tel:'15268523519',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'31',AdminID:'10071',name:'平台使用说明手册',state:'1',type:'平台使用',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'帮助用户了解基础操作到高级功能的全方位内容,提供详尽的指导和帮助',price:'8',principal:'程上梭',tel:'15438906964',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'30',AdminID:'10070',name:'诗词朗诵与欣赏培训',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/24 - 2024/3/24',cTime:'19:00-21:00',address:'四川省凉山彝族自治州西昌市长安街道航天大道三段27号',int:'诗词朗诵与欣赏培训旨在提高学员对诗词的深入理解与表达能力，同时陶冶情操，提升文学素养',price:'8',principal:'傅梧华',tel:'15438906964',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'29',AdminID:'10069',name:'应急自救与防灾减灾培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/20 - 2024/3/21',cTime:'19:00-21:00',address:'四川省甘孜藏族自治州康定市炉城镇沿河西路1号',int:'应急自救与防灾减灾培训是一种旨在提高公众在面对突发灾害事件时的自我保护能力和防灾减灾意识的培训活动',price:'9',principal:'赵竹韵',tel:'19988776589',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'28',AdminID:'10068',name:'摄影艺术与美景捕捉课程',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/20 - 2024/3/20',cTime:'19:00-21:00',address:'四川省阿坝藏族羌族自治州马尔康市马尔康镇达萨街393号',int:'该课程旨在通过理论讲解和实践操作，帮助学员掌握摄影的基本知识和技能，提升对自然美景的观察力和艺术表现力',price:'6',principal:'齐柏风',tel:'17896229801',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'27',AdminID:'10067',name:'书法与国画创作',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/19 - 2024/3/19',cTime:'19:00-21:00',address:'四川省资阳市雁江区狮子山街道车城大道三段398号',int:'书法与国画创作培训是专门针对想要深入学习书法和国画技巧的人群所设立的教育课程',price:'9',principal:'侯梅轩',tel:'15467954354',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'26',AdminID:'10066',name:'园艺与花艺文化',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省眉山市东坡区通惠街道文忠街198号',int:'园艺与花艺文化培训是一种综合性的教育活动，旨在传授园艺知识和花艺技巧，同时培养对园艺与花艺文化的理解和欣赏',price:'8',principal:'魏竹君',tel:'18976785435',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'25',AdminID:'10064',name:'养老生活技能培训',state:'1',type:'关爱服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省巴中市巴州区回风街道巴中大道616号',int:'养老生活技能培训是指针对老年人或养老护理工作者进行的一系列技能教育和培训活动，旨在提高他们在养老生活中的自理能力、社交能力、生活质量以及应对日常挑战的能力',price:'7',principal:'谢枫华',tel:'17345678901',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'24',AdminID:'10063',name:'健康管理与疾病预防培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省广安市前锋区前锋镇广前大道168号',int:'培训通常包括健康管理理念、疾病预防策略、健康风险评估与健康干预等内容，旨在帮助人们更好地管理和维护自己的健康',price:'6',principal:'姚柳然',tel:'18567890123',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'23',AdminID:'10062',name:'心理健康与调适培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/18 - 2024/3/18',cTime:'19:00-21:00',address:'四川省雅安市雨城区青江街道沙湾路266号',int:'心理健康与调适培训是一种旨在提升个体心理健康水平，增强心理调适能力的教育活动',price:'11',principal:'邓梧华',tel:'13578901234',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'22',AdminID:'10061',name:'养生与营养知识讲座',state:'1',type:'公益活动',nop:'6',aTime:'2024/3/17 - 2024/3/17',cTime:'19:00-21:00',address:'四川省达州市通川区西外镇凤凰大道88号',int:'养生与营养知识讲座是一个旨在提高听众养生意识和营养知识水平的活动',price:'10',principal:'谢兰仲',tel:'14771408926',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'21',AdminID:'10060',name:'数字技能与智能设备应用培训',state:'1',type:'上门服务',nop:'6',aTime:'2024/3/17 - 2024/3/17',cTime:'15:00-17:00',address:'四川省宜宾市翠屏区安阜街道振兴大道东段9号',int:'数字技能与智能设备应用培训是一种综合性的教育活动，旨在提升个体的数字技能水平，并教授如何有效应用智能设备',price:'6',principal:'陆梅然',tel:'14771454927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'20',AdminID:'10059',name:'书法绘画艺术修养班',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省南充市顺庆区人民南路148号',int:'书法绘画艺术修养班是一个旨在提升学员书法和绘画艺术修养的培训课程',price:'9',principal:'罗竹君',tel:'15471408989',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'19',AdminID:'10058',name:'健身与舞蹈活动培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省乐山市市中区柏杨中路158号',int:'健身与舞蹈活动培训是一种结合健身和舞蹈元素的综合性培训活动，旨在通过舞蹈的动作和节奏，促进身体的锻炼和健康提升',price:'7',principal:'程松涛',tel:'12271408923',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'18',AdminID:'10057',name:'手工艺制作与创意工坊',state:'1',type:'文体艺术',nop:'6',aTime:'2024/3/16 - 2024/3/16',cTime:'15:00-17:00',address:'四川省内江市东兴区汉安大道西段988号',int:'手工艺制作与创意工坊培训是一种综合性的培训活动，旨在通过教授手工艺制作技能和培养创新思维，提升学员的创意实践能力和艺术修养',price:'7',principal:'高柳风',tel:'14712308927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'17',AdminID:'10056',name:'旅游安全与文明出行培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/15 - 2024/3/15',cTime:'15:00-17:00',address:'四川省遂宁市船山区渠河中路618号',int:'旅游安全与文明出行培训是一种综合性的教育活动，旨在提高旅游者在旅行过程中的安全意识和文明素养，确保他们能够平安、愉快并充满意义地完成旅程',price:'9',principal:'陶菊雅',tel:'15087654321',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'16',AdminID:'10055',name:'老年人社交与人际交往技巧培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/15 - 2024/3/15',cTime:'15:00-17:00',address:'四川省广元市利州区利州东路二段238号',int:'老年人社交与人际交往技巧培训是一种专门为老年人设计的教育活动，旨在提升他们在社交和人际交往方面的能力和技巧',price:'6',principal:'韩竹韵',tel:'14709876543',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'15',AdminID:'10054',name:'情绪管理与压力调节',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/14 - 2024/3/14',cTime:'15:00-17:00',address:'四川省德阳市旌阳区泰山北路二段80号',int:'情绪管理与压力调节培训是一种旨在帮助个人提升情绪管理能力和有效应对压力的教育活动',price:'8',principal:'孟柏轩',tel:'13812345678',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'14',AdminID:'10053',name:'个人形象与礼仪塑造培训',state:'1',type:'上门服务',nop:'6',aTime:'2024/3/14 - 2024/3/14',cTime:'15:00-17:00',address:'四川省泸州市龙马潭区龙马大道三段1号',int:'个人形象与礼仪塑造培训是一种旨在提升个人外在形象与内在修养的教育活动',price:'6',principal:'梅溪靖',tel:'17798765432',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'13',AdminID:'10052',name:'团队建设与拓展训练',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/13 - 2024/3/13',cTime:'15:00-17:00',address:'四川省自贡市自流井区丹桂大街288号',int:'团队建设是指为了实现团队绩效及产出最大化而进行的一系列结构设计及人员激励等团队优化行为',price:'8',principal:'松涛靖',tel:'18223456789',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'12',AdminID:'10051',name:'跨文化沟通与谈判技巧培训',state:'1',type:'公益服务',nop:'6',aTime:'2024/3/13 - 2024/3/13',cTime:'15:00-17:00',address:'四川省绵阳市涪城区跃进路北段66号',int:'跨文化沟通与谈判技巧培训是一种综合性的教育活动，旨在帮助参与者提升在跨文化背景下进行有效沟通和谈判的能力',price:'7',principal:'竹海靖',tel:'15935687412',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'11',AdminID:'10050',name:'健康饮食与营养知识培训',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/12 - 2024/3/12',cTime:'09:00-12:00',address:'四川省成都市武侯区锦绣路1号',int:'健康饮食与营养知识培训是一种教育活动，旨在帮助人们了解并掌握健康饮食和营养学的基础知识，以改善饮食习惯，促进身体健康',price:'6',principal:'林溪靖',tel:'14724343554',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'10',AdminID:'10094',name:'志愿者服务的道德规范与行为准则',state:'1',type:'培训教育',nop:'0',aTime:'2024/3/10 - 2024/3/11',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'志愿者服务的道德规范与行为准则涵盖了多个方面，旨在确保志愿者在提供服务的过程中，能够遵循一定的道德标准和行为规范，为服务对象提供高质量的服务',price:'8',principal:'柳城靖',tel:'14771408927',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'9',AdminID:'10093',name:'志愿者服务的心理调适',state:'1',type:'培训教育',nop:'6',aTime:'2024/3/9 - 2024/3/10',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'帮助志愿者更好地应对服务过程中可能出现的心理挑战和压力',price:'10',principal:'田瑜雅',tel:'13661526654',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'8',AdminID:'10091',name:'社区安全常识与预防',state:'1',type:'公益活动',nop:'7',aTime:'2024/3/7 - 2024/3/8',cTime:'09:00-12:00',address:'四川省成都市成华区建设南支路4号',int:'社区安全常识与预防培训是一项至关重要的活动，旨在提高社区居民的安全意识和防范能力，确保他们的生命和财产安全',price:'11',principal:'叶琳意',tel:'18410711075',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'7',AdminID:'10087',name:'宣传文案撰写培训',state:'1',type:'公益服务',nop:'5',aTime:'2024/3/3 - 2024/3/4',cTime:'09:00-12:00',address:'四川省成都市武侯区武侯祠大街231号附1号',int:'宣传文案撰写培训旨在帮助参与者掌握撰写高质量宣传文案的技巧和方法，以提升品牌形象、吸引目标受众并达成宣传目标',price:'11',principal:'甄松仲',tel:'15059507665',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'6',AdminID:'10085',name:'家政培训',state:'1',type:'家政服务',nop:'12',aTime:'2024/3/1 - 2024/3/2',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'培训内容包括但不限于专业知识培训、职业道德教育、环境卫生保洁服务、日常烹饪、居家安全与抢救等多个方面',price:'10',principal:'柏炎高',tel:'15088398469',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'5',AdminID:'10089',name:'团队冲突解决',state:'1',type:'培训教育',nop:'8',aTime:'2024/3/5 - 2024/3/6',cTime:'09:00-12:00',address:'四川省成都市锦江区春熙路街道',int:'团队冲突解决培训是一种专为团队成员设计的培训活动，旨在帮助他们掌握解决冲突的技巧和方法，从而增强团队的合作与和谐氛围',price:'7',principal:'祝川伦',tel:'15922832561',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'4',AdminID:'10092',name:'环保意识与行动',state:'1',type:'公益服务',nop:'11',aTime:'2024/3/8 - 2024/3/9',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'环保意识与行动培训是一种综合性的教育活动，旨在提升个体或群体对环境保护的认识和重视，并激发其积极采取环保行动的意愿和能力',price:'12',principal:'卓娣然',tel:'17253304960',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'3',AdminID:'10090',name:'人际沟通技巧',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/6 - 2024/3/7',cTime:'09:00-12:00',address:'四川省成都市青羊区少城路12号',int:'人际沟通技巧培训是一种旨在提升个人在人际交往中有效沟通能力的培训活动',price:'8',principal:'宗伊芊',tel:'16511617808',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'2',AdminID:'10086',name:'活动安全教育',state:'1',type:'公益活动',nop:'2',aTime:'2024/3/2 - 2024/3/3',cTime:'09:00-12:00',address:'四川省成都市青羊区青龙街82号',int:'活动安全教育是指通过一系列有组织、有计划的教育活动，向人们传授在特定活动或场合中的安全知识和技能，以提高他们的安全意识和自我保护能力',price:'12',principal:'霍尉连',tel:'15996614284',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
    {id:'1',AdminID:'10088',name:'跨文化沟通与交流',state:'1',type:'关爱服务',nop:'1',aTime:'2024/3/4 - 2024/3/5',cTime:'09:00-12:00',address:'四川省成都市新都区新都大道8号',int:'跨文化沟通与交流培训是一种旨在提升参与者在不同文化背景下进行有效沟通和交流能力的培训活动',price:'6',principal:'符方直',tel:'17333417112',img:'/images/讲解.png',participant:[{userID:"",userName:"",hasEnroll:"",hasSignin:""}],isfull:0},
  ]
  },
  totrainInfo(event){
    let participant = JSON.stringify(event.currentTarget.dataset.participant)
    wx.navigateTo({
      url: '/pages/trainInfo/trainInfo?id='+event.currentTarget.dataset.id+'&adminid='+event.currentTarget.dataset.adminid+'&name='+event.currentTarget.dataset.name+'&type='+event.currentTarget.dataset.type+'&nop='+event.currentTarget.dataset.nop+'&atime='+event.currentTarget.dataset.atime+'&ctime='+event.currentTarget.dataset.ctime+'&address='+event.currentTarget.dataset.address+'&price='+event.currentTarget.dataset.price+'&principal='+event.currentTarget.dataset.principal+'&tel='+event.currentTarget.dataset.tel+'&img='+event.currentTarget.dataset.img+'&int='+event.currentTarget.dataset.int+'&participant='+participant+'&isfull='+event.currentTarget.dataset.isfull+'&state='+event.currentTarget.dataset.state
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
        fakeTrainList:this.data.fakeTrainList1
      })
    }else if (event.detail == "b") {
      this.setData({
        fakeTrainList:this.data.fakeTrainList2
      })
    }else if (event.detail == "c") {
      this.setData({
        fakeTrainList:this.data.fakeTrainList3
      })
    }else if (event.detail == "d") {
      this.setData({
        fakeTrainList:this.data.fakeTrainList1
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      fakeTrainList:this.data.fakeTrainList1
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