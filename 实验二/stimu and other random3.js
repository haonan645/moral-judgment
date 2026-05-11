// const commentsData = [
//   {
//     id: 2,
//     user: {
//       name: "爱吃汉堡包",
//       avatar: "avatar1",
//     },
//     content: "职场还是太复杂了。希望能妥善处理。",
//     time: "15分钟前",
//     likes: 24,
//     liked: false,
//   },
//   {
//     id: 1,
//     user: {
//       name: "我不想上班",
//       avatar: "avatar2",
//     },
//     content:
//       "张某过去三年中有多次类似记录啊，因公开贬低下属被书面警告和因语言暴力被约谈。怎么还是屡教不改？",
//     time: "2分钟前",
//     likes: 18,
//     liked: false,
//   },
// ];

const hotSearchData = [
  { rank: 1, topic: "新手机发布", count: "568万" },
  { rank: 2, topic: "电影票房破纪录", count: "432万" },
  { rank: 3, topic: "科技峰会", count: "398万" },
  { rank: 4, topic: "明星演唱会", count: "356万" },
  { rank: 5, topic: "美食节开幕", count: "321万" },
  { rank: 6, topic: "旅游攻略", count: "298万" },
  { rank: 7, topic: "股市分析", count: "267万" },
  { rank: 8, topic: "健身挑战", count: "245万" },
];

const recommendUsers = [
  {
    id: 1,
    name: "科技资讯",
    desc: "每日分享最新科技动态",
  },
  {
    id: 2,
    name: "数码测评",
    desc: "专业数码产品评测",
  },
  {
    id: 3,
    name: "摄影技巧",
    desc: "手机摄影教学分享",
  },
  {
    id: 4,
    name: "游戏攻略",
    desc: "热门游戏技巧分享",
  },
];

const neutralComments = {
  high: [ // 高热度（9-10）：确保能占第1位
    {
      user: "吃瓜群众007",
      content: "路过看看，坐等后续发展，感觉这事会有反转。",
      time: "30分钟前",
      timestamp: 1741579200000,
      likes: 10,
      liked: false,
    },
    {
      user: "熬夜波比大人",
      content: "这事不好说，各有各的原因吧，还是再观望一下。",
      time: "25分钟前",
      timestamp: 1741579500000,
      likes: 9,
      liked: false,
    },
    {
      user: "我说今天不上班",
      content: "第一次刷到，求前因后果，有没有课代表总结？",
      time: "20分钟前",
      timestamp: 1741579800000,
      likes: 10,
      liked: false,
    },
    {
      user: "深海纸鱼",
      content: "先码住。等更多证据出来再评价，现在不好说。",
      time: "35分钟前",
      timestamp: 1741578900000,
      likes: 9,
      liked: false,
    },
    {
      user: "摸鱼打工人",
      content: "这瓜保熟吗，蹲个后续，感觉事情没那么简单。",
      time: "28分钟前",
      timestamp: 1741579320000,
      likes: 10,
      liked: false,
    },
    {
      user: "月下独酌",
      content: "啊这，说不准背后可能还有隐情。",
      time: "29分钟前",
      timestamp: 1741579260000,
      likes: 9,
      liked: false,
    },
    {
      user: "人间凑数选手",
      content: "等一个反转，现在让子弹飞，先看看风向。",
      time: "32分钟前",
      timestamp: 1741579080000,
      likes: 10,
      liked: false,
    },
    {
      user: "astomer_L",
      content: "蹲一个课代表总结，不想看评论区吵架了。",
      time: "6分钟前",
      timestamp: 1741580640000,
      likes: 10,
      liked: false,
    },
  ],
  
  low: [ // 低热度（1-3）：确保能占最后1位
    {
      user: "水问",
      content: "网络上的事看看就好，别太当真，认真就输了。",
      time: "15分钟前",
      timestamp: 1741580100000,
      likes: 1,
      liked: false,
    },
    {
      user: "AAA重卡王师傅",
      content: "不知道具体情况，不随意评价，免得被打脸。",
      time: "10分钟前",
      timestamp: 1741580400000,
      likes: 2,
      liked: false,
    },
    {
      user: "连几又",
      content: "希望能妥善解决，别闹大了，对谁都不好。",
      time: "8分钟前",
      timestamp: 1741580520000,
      likes: 3,
      liked: false,
    },
    {
      user: "牛马悟道场",
      content: "这事跟我没关系，我就是路过看看热闹的。",
      time: "18分钟前",
      timestamp: 1741579920000,
      likes: 1,
      liked: false,
    },
    {
      user: "trainini",
      content: "先留个名，等后续更新了再来看看什么情况。",
      time: "31分钟前",
      timestamp: 1741579140000,
      likes: 1,
      liked: false,
    },
    {
      user: "淮安",
      content: "发生了什么，就是随手刷到点进来看看。",
      time: "23分钟前",
      timestamp: 1741579620000,
      likes: 2,
      liked: false,
    },
    {
      user: "奶茶七分甜",
      content: "不知道说啥，凑个热闹，顺便领个积分。",
      time: "5分钟前",
      timestamp: 1741580700000,
      likes: 2,
      liked: false,
    },
    {
      user: "Q（情绪稳定版）",
      content: "随便看看，不发表意见，怕被网暴。",
      time: "24分钟前",
      timestamp: 1741579560000,
      likes: 1,
      liked: false,
    },
  ],
  
  normal: [ // 普通中性（4-8）：备用，填充中间位置
    {
      user: "就要吃香菜",
      content: "现在的人都太情绪化了，理性讨论不好吗？",
      time: "5分钟前",
      timestamp: 1741580700001,
      likes: 4,
      liked: false,
    },
    {
      user: "懒得起名",
      content: "坐等官方回应或者知情人爆料，别让我失望。",
      time: "3分钟前",
      timestamp: 1741580820000,
      likes: 5,
      liked: false,
    },
    {
      user: "橘子汽水",
      content: "信息太少，没法判断，再等等看有没有后续。",
      time: "32分钟前",
      timestamp: 1741579080001,
      likes: 4,
      liked: false,
    },
    {
      user: "周一不想动",
      content: "这瓜先吃着，看后续发展，希望别烂尾。",
      time: "30分钟前",
      timestamp: 1741579200001,
      likes: 6,
      liked: false,
    },
    {
      user: "熬夜小冠军",
      content: "感觉会反转，现在下结论还太早了。",
      time: "14分钟前",
      timestamp: 1741580160000,
      likes: 6,
      liked: false,
    },
    {
      user: "是陆不是路",
      content: "不好评价，再看看吧，谁知道真相是什么。",
      time: "28分钟前",
      timestamp: 1741579320001,
      likes: 2,
      liked: false,
    },
    {
      user: "迷路的小鹿",
      content: "不了解内情，不站队，免得被打脸。",
      time: "25分钟前",
      timestamp: 1741579500001,
      likes: 3,
      liked: false,
    },
    {
      user: "今日微凉",
      content: "这事我也刷到了，等后续更新再来看。",
      time: "24分钟前",
      timestamp: 1741579560001,
      likes: 5,
      liked: false,
    },
    {
      user: "花心超人",
      content: "蹲一个真相，这瓜我吃定了，谁也别拦我。",
      time: "21分钟前",
      timestamp: 1741579740001,
      likes: 4,
      liked: false,
    },
    {
      user: "风清扬",
      content: "感觉两边都有问题，没有谁是绝对无辜的。",
      time: "20分钟前",
      timestamp: 1741579800001,
      likes: 8,
      liked: false,
    },
    {
      user: "赖床第一名",
      content: "刚刷到，发生了什么，谁能给我补个课。",
      time: "18分钟前",
      timestamp: 1741579920001,
      likes: 2,
      liked: false,
    },
    {
      user: "别吵我睡觉",
      content: "这事我刷到好几个版本了，不知道哪个是真的。",
      time: "16分钟前",
      timestamp: 1741580040001,
      likes: 5,
      liked: false,
    },
    {
      user: "summerday",
      content: "不太信一面之词，再等等看有没有实锤。",
      time: "15分钟前",
      timestamp: 1741580100001,
      likes: 4,
      liked: false,
    },
    {
      user: "狂飙为我从天落",
      content: "不敢随便评价，现在网上反转太多了。",
      time: "12分钟前",
      timestamp: 1741580280000,
      likes: 2,
      liked: false,
    },
    {
      user: "瑜策一生推",
      content: "感觉缺少关键信息，没法做出准确判断。",
      time: "9分钟前",
      timestamp: 1741580460001,
      likes: 3,
      liked: false,
    },
    {
      user: "有人玩迪斯科吗",
      content: "不太关心这事，就是点进来随便看看。",
      time: "8分钟前",
      timestamp: 1741580520001,
      likes: 1,
      liked: false,
    },
    {
      user: "今日超开心",
      content: "现在网上反转太多了，等实锤出来了再说吧。",
      time: "7分钟前",
      timestamp: 1741580580001,
      likes: 7,
      liked: false,
    },
    {
      user: "Celestial",
      content: "这事都能闹得挺大啊，上热搜了，太奇怪了。",
      time: "5分钟前",
      timestamp: 1741580700002,
      likes: 6,
      liked: false,
    },
    {
      user: "momo干事",
      content: "还有这种事？第一次听说，涨见识了。",
      time: "4分钟前",
      timestamp: 1741580760001,
      likes: 3,
      liked: false,
    },
    {
      user: "求你了学会吧",
      content: "先观望，不站队，等更多信息出来再说。",
      time: "3分钟前",
      timestamp: 1741580820001,
      likes: 2,
      liked: false,
    },
    {
      user: "用户9527",
      content: "这事儿我好像在哪见过，既视感很强。",
      time: "2分钟前",
      timestamp: 1741580880000,
      likes: 3,
      liked: false,
    },
    {
      user: "优秀本秀",
      content: "感觉会是个大瓜，先关注了，等后续。",
      time: "1分钟前",
      timestamp: 1741580940000,
      likes: 7,
      liked: false,
    },
    {
      user: "网海小透明",
      content: "评论区比内容精彩，我是来看评论的。",
      time: "刚刚",
      timestamp: 1741581000001,
      likes: 8,
      liked: false,
    },
    {
      user: "star~",
      content: "已关注，等后续更新，希望别让我失望。",
      time: "刚刚",
      timestamp: 1741581000002,
      likes: 3,
      liked: false,
    },
    {
      user: "今日超疲惫",
      content: "不太像真的，感觉像是编的故事。",
      time: "37分钟前",
      timestamp: 1741578780001,
      likes: 2,
      liked: false,
    },
    {
      user: "愤怒的葡萄",
      content: "这种事儿见多了，见怪不怪了都。",
      time: "35分钟前",
      timestamp: 1741578900001,
      likes: 3,
      liked: false,
    },
    {
      user: "牛马人牛马魂",
      content: "有没有课代表总结一下，不想看长文。",
      time: "33分钟前",
      timestamp: 1741579020001,
      likes: 8,
      liked: false,
    },
    {
      user: "困困的我",
      content: "等一个反转再评价，现在下结论太早了。",
      time: "29分钟前",
      timestamp: 1741579260001,
      likes: 4,
      liked: false,
    },
    {
      user: "Apen Air",
      content: "这事儿我刷到过，好几个版本了都。",
      time: "27分钟前",
      timestamp: 1741579380001,
      likes: 2,
      liked: false,
    },
    {
      user: "清醒梦出逃",
      content: "怎么还没实锤，等得花儿都谢了。",
      time: "26分钟前",
      timestamp: 1741579440001,
      likes: 5,
      liked: false,
    },
    {
      user: "荒誕记",
      content: "吃瓜群众已就位，就等后续了。",
      time: "25分钟前",
      timestamp: 1741579500002,
      likes: 6,
      liked: false,
    },
    {
      user: "奶茶配猫",
      content: "感觉评论区有知道内幕的，求爆料。",
      time: "24分钟前",
      timestamp: 1741579560002,
      likes: 4,
      liked: false,
    },
    {
      user: "关注塔菲喵",
      content: "蹲一个后续更新，有结果了踢我。",
      time: "22分钟前",
      timestamp: 1741579680001,
      likes: 4,
      liked: false,
    },
    {
      user: "白岛春之祭",
      content: "这事儿有后续吗，等了好久了。",
      time: "21分钟前",
      timestamp: 1741579740002,
      likes: 3,
      liked: false,
    },
    {
      user: "蜗牛狂奔",
      content: "感觉网上真真假假，分不清哪个是真的。",
      time: "20分钟前",
      timestamp: 1741579800002,
      likes: 5,
      liked: false,
    },
    {
      user: "默言",
      content: "等一个官方说法，不信小道消息。",
      time: "19分钟前",
      timestamp: 1741579860001,
      likes: 6,
      liked: false,
    },
    {
      user: "今天天气超棒",
      content: "路过吃瓜，顺便看看评论区怎么吵。",
      time: "15分钟前",
      timestamp: 1741580100002,
      likes: 4,
      liked: false,
    },
    {
      user: "无名之辈",
      content: "感觉这事儿会火，先占个位子。",
      time: "14分钟前",
      timestamp: 1741580160001,
      likes: 5,
      liked: false,
    },
    {
      user: "慌哒哒哒",
      content: "先看看风向，不急着站队。",
      time: "13分钟前",
      timestamp: 1741580220001,
      likes: 3,
      liked: false,
    },
    {
      user: "strabber",
      content: "这瓜有点意思，我一时吃不完。",
      time: "11分钟前",
      timestamp: 1741580340001,
      likes: 7,
      liked: false,
    },
    {
      user: "会呼吸的肉",
      content: "感觉有人在带节奏，评论区不对劲。",
      time: "9分钟前",
      timestamp: 1741580460002,
      likes: 6,
      liked: false,
    },
    {
      user: "冲浪达人",
      content: "等一个石锤，没证据前不轻易下结论。",
      time: "8分钟前",
      timestamp: 1741580520002,
      likes: 5,
      liked: false,
    },
    {
      user: "账号已出售",
      content: "这事儿我吃瓜吃过了，没啥意思。",
      time: "7分钟前",
      timestamp: 1741580580002,
      likes: 3,
      liked: false,
    },
    {
      user: "我爱hollowknight",
      content: "怎么还没新进展，急死我了。",
      time: "6分钟前",
      timestamp: 1741580640001,
      likes: 4,
      liked: false,
    },
    {
      user: "不想上班啦",
      content: "蹲一个，有结果了踢我一下。",
      time: "5分钟前",
      timestamp: 1741580700003,
      likes: 2,
      liked: false,
    },
    {
      user: "困到不行",
      content: "吃瓜中，别打扰我吃瓜。",
      time: "4分钟前",
      timestamp: 1741580760002,
      likes: 3,
      liked: false,
    },
    {
      user: "猫喝奶茶",
      content: "等当事人回应，现在都是猜测。",
      time: "36分钟前",
      timestamp: 1741578840001,
      likes: 4,
      liked: false,
    },
    {
      user: "小鱼干还在吗",
      content: "没有前因后果，没法判断对错。",
      time: "10分钟前",
      timestamp: 1741580400001,
      likes: 2,
      liked: false,
    },
    {
      user: "海若蓝",
      content: "等子弹飞一会儿，现在别急着下结论。",
      time: "10分钟前",
      timestamp: 1741580400002,
      likes: 9,
      liked: false,
    },
    {
      user: "暖暖",
      content: "感觉两边都有一定道理，但都不完全对。",
      time: "28分钟前",
      timestamp: 1741579320002,
      likes: 3,
      liked: false,
    },
    {
      user: "月夜无竹柏",
      content: "等一个完整时间线，现在信息太碎片了。",
      time: "2分钟前",
      timestamp: 1741580880001,
      likes: 5,
      liked: false,
    },
    {
      user: "晚风习习",
      content: "评论区吵起来了？我就看看不说话。",
      time: "20分钟前",
      timestamp: 1741579800003,
      likes: 4,
      liked: false,
    },
    {
      user: "汽水不要水",
      content: "等一个石锤，现在说什么都太早。",
      time: "8分钟前",
      timestamp: 1741580520003,
      likes: 5,
      liked: false,
    },
    {
      user: "最爱猫猫",
      content: "路过吃瓜，不参与评论，怕被骂。",
      time: "15分钟前",
      timestamp: 1741580100003,
      likes: 4,
      liked: false,
    },
    {
      user: "快雪时晴",
      content: "先观望，不站队，看看风向再说。",
      time: "3分钟前",
      timestamp: 1741580820002,
      likes: 2,
      liked: false,
    },
    {
      user: "取名困难户",
      content: "没有证据前不乱说，免得被打脸。",
      time: "1分钟前",
      timestamp: 1741580940001,
      likes: 4,
      liked: false,
    },
    {
      user: "软糖小熊",
      content: "吃瓜吃到自己家，没想到会刷到这个。",
      time: "34分钟前",
      timestamp: 1741578960001,
      likes: 6,
      liked: false,
    },
    {
      user: "晴朗无事可",
      content: "吃瓜吃瓜，今天又是吃瓜的一天。",
      time: "8分钟前",
      timestamp: 1741580520004,
      likes: 4,
      liked: false,
    },
    {
      user: "谁说摇滚有问题",
      content: "信息太少不评价，再等等看。",
      time: "16分钟前",
      timestamp: 1741580040002,
      likes: 2,
      liked: false,
    },
    {
      user: "谁也不是",
      content: "刷到好几次了，这瓜挺火啊。",
      time: "17分钟前",
      timestamp: 1741579980001,
      likes: 3,
      liked: false,
    },
    {
      user: "宇宙第一大反派",
      content: "先观察观察，不急着发表意见。",
      time: "15分钟前",
      timestamp: 1741580100004,
      likes: 2,
      liked: false,
    },
    {
      user: "北小北",
      content: "评论区有人知道内幕吗，求私信。",
      time: "13分钟前",
      timestamp: 1741580220002,
      likes: 5,
      liked: false,
    },
    {
      user: "摸爬滚打四十年",
      content: "这瓜保熟吗，不会是假瓜吧？",
      time: "12分钟前",
      timestamp: 1741580280001,
      likes: 8,
      liked: false,
    },
    {
      user: "开心就好",
      content: "不敢随便评价，怕被网暴。",
      time: "12分钟前",
      timestamp: 1741580280002,
      likes: 2,
      liked: false,
    },
  ],
};

const experimentStimuli = [
  
  // 事件1：职场欺凌
  {
    id: 1,
    title: "职场八卦君",
    content: "某公司部门的主管李某，因工作对接分歧，开会时当众对同事王某发表极具攻击性的过激言语，直言其“工作能力极差” “如同傻子一样” “可以直接滚出去”，并伴随持续性的人身辱骂和人格攻击，甚至有出手打人的冲动。当时全部门二十余名员工均在场，被辱骂的王某当场面色惨白、手足无措，会后独自躲在厕所崩溃痛哭。听说部门内的多名员工因受不了该主管的恶劣言行，已有离职打算。",
    materialType: "careharm",
    date: "25-12-24 11:13",
    attribution: {
      behavior: [
        { content: "李某之前在公司就多次因琐碎小事与同事发生激烈争吵，还频繁公开地对下属发表侮辱性言论，脾气特别差。", likes: 5, time: "38分钟前", timestamp: 1741578720000, user: "Asescer", liked: false },
        { content: "听说李某是出了名的脾气暴躁、心胸狭隘，此前多次因言语冲突与其他部门闹矛盾，甚至影响了部门间合作。", likes: 7, time: "35分钟前", timestamp: 1741578900000, user: "说出吾名吓汝一跳", liked: false },
        { content: "这主管以前待的公司里，也有人爆料过他长期在工作中辱骂下属、言语霸凌同事，不是一次两次了。", likes: 4, time: "32分钟前", timestamp: 1741579080000, user: "打工不如打同事", liked: false },
        { content: "查了一下他在行业圈里口碑很差，公司内好多人都被他无端指责、怼骂过，没人愿意和他合作，想不到是怎么当上主管的。", likes: 6, time: "30分钟前", timestamp: 1741579200000, user: "笨蛋001", liked: false }
      ],
      experience: [
        { content: "李某好像从小成长在矛盾激化、争吵不断的家庭环境里，父母沟通偏激、不会温和引导，他根本没学会正确的相处方式。", likes: 5, time: "37分钟前", timestamp: 1741578780000, user: "干饭第一名", liked: false },
        { content: "有认识的人说他最近在闹离婚，孩子抚养权也争不到，婚姻破裂让他长期处于情绪崩溃、极度烦躁的状态。", likes: 8, time: "34分钟前", timestamp: 1741578960000, user: "和他爆了", liked: false },
        { content: "听说李某最近工作压力超大。领导催得紧，工作任务又重，他天天加班，精神紧绷才忍不住发火的。", likes: 3, time: "31分钟前", timestamp: 1741579140000, user: "今天你打卡了吗", liked: false },
        { content: "唉，李某之前遭遇过领导长达两年的严重职场PUA，导致他有一定心理创伤，沟通方式也变得极端。", likes: 4, time: "28分钟前", timestamp: 1741579320000, user: "股神墨菲特", liked: false }
      ]
    }
  },
  
  // 事件2：校园霸凌
  {
    id: 2,
    title: "校园秘事集中站",
    content: "某高中学生刘某在班级群持续数月发布同学陈某的丑照，对其图片恶意拼接，并配文“大家集体孤立这个怪人，谁跟他玩谁就是同类”，从最初的恶意玩笑，演变成全班孤立：陈某被排挤在集体活动之外。也因此严重失眠、出现神经性食欲减退，连续数月情绪低落，成绩从班级前5大幅跌至倒数，甚至产生厌学、逃避校园的心理。老师找刘某谈话时，他仍轻描淡写称“就是闹着玩，他自己玻璃心”。",
    materialType: "careharm",
    date: "25-12-23 09:45",
    attribution: {
      behavior: [
        { content: "刘某初中时就爱欺负同学、甚至有多次霸凌行为，当时老师也找他谈过话，可是没什么用。", likes: 6, time: "36分钟前", timestamp: 1741578840000, user: "聋是帝王之征啊", liked: false },
        { content: "记得刘某家长来学校沟通的次数可多了，因为他经常故意推搡同学把人弄伤。", likes: 4, time: "33分钟前", timestamp: 1741579020000, user: "霸凌者凌迟", liked: false },
        { content: "听他同班同学说，他平时就喜欢嘲笑和贬低别人，说不过时就会动手，反正不是第一次干这种事。", likes: 7, time: "29分钟前", timestamp: 1741579260000, user: "困困的", liked: false },
        { content: "我认识一个朋友，之前也是因为长期遭受刘某的嘲笑和霸凌，不堪其扰才选择转学。", likes: 3, time: "26分钟前", timestamp: 1741579440000, user: "IKUN", liked: false }
      ],
      experience: [
        { content: "刘某的父母常年在外打工，他从小跟随年迈的爷爷奶奶长大，缺乏一些有效的教育和管教。", likes: 5, time: "35分钟前", timestamp: 1741578900000, user: "老街坊", liked: false },
        { content: "他邻居说他小时候也被一直大孩子欺负、霸凌，之后可能学会了这种方式来保护自己。", likes: 6, time: "32分钟前", timestamp: 1741579080000, user: "凉川琥珀", liked: false },
        { content: "刘某成绩不好，位于班级倒数，老师总公开批评和否定他。所以可能在用这种方式获得存在感。", likes: 4, time: "28分钟前", timestamp: 1741579320000, user: "晚安小鱼", liked: false },
        { content: "刘某的家庭经济条件很差，经常由于穿得破烂被同学嘲笑与排挤，所以现在反过来欺负人。", likes: 3, time: "25分钟前", timestamp: 1741579500000, user: "记得回消息", liked: false }
      ]
    }
  },
  
  // 事件3：家庭暴力
  {
    id: 3,
    title: "你的情感树洞",
    content: "朋友与其丈夫李某吵架时，丈夫暴怒之下狠狠扇其多个耳光，周某当场脸颊红肿、嘴角破皮出血，耳膜出现短暂性耳鸣。之后，周某又因丈夫的暴力推搡，导致手臂骨折、多处软组织挫伤。虽然丈夫事后道歉声称“一时冲动没控制住，下次不再犯”，平日里也比较温和，但一发生争吵就容易情绪失控，尽管他之前没动过手，可还是让人害怕。周某因担心年幼孩子的成长环境，一直深陷离婚的纠结与恐惧中。",
    materialType: "careharm",
    date: "25-12-24 15:11",
    attribution: {
      behavior: [
        { content: "周某丈夫与其前女友谈恋爱时，好像曾因争吵对前女友动过手，对方当时就果断分手了。", likes: 7, time: "34分钟前", timestamp: 1741578960000, user: "天下最好闺闺", liked: false },
        { content: "真的，李某脾气一直很差，每次与他人吵架都会情绪失控、控制不住自己摔砸东西。", likes: 5, time: "31分钟前", timestamp: 1741579140000, user: "跨过乌云和月亮", liked: false },
        { content: "他家里人说他从小就性格蛮横，喜欢动手，跟弟弟打架从来不让着。", likes: 4, time: "27分钟前", timestamp: 1741579380000, user: "Neonbloud", liked: false },
        { content: "有同事多次见过他因工作分歧当众发火、拍桌子辱骂同事，认为这人情绪管理有问题。", likes: 6, time: "24分钟前", timestamp: 1741579560000, user: "念念事", liked: false }
      ],
      experience: [
        { content: "听说李某父亲常年对母亲实施暴力殴打，他从小目睹父亲的暴力行为，错误地认为争吵和动手是正常相处方式。", likes: 8, time: "33分钟前", timestamp: 1741579020000, user: "小蝾螈", liked: false },
        { content: "李某小时候被送去寄宿学校，长期被高年级学生欺负和霸凌，因此导致内心产生暴力倾向和心理创伤。", likes: 4, time: "29分钟前", timestamp: 1741579260000, user: "4四肆four", liked: false },
        { content: "李某任职的那家公司出了名的常年加班无休假，工作繁重困难，且最近公司大规模裁员，李某长期高压禁闭，难免情绪失控。", likes: 5, time: "26分钟前", timestamp: 1741579440000, user: "考研天选人", liked: false },
        { content: "这人好像先天存在躁郁症倾向，再加上周围没人能理解和支持，病情越来越重，完全无法自主控制情绪。", likes: 3, time: "22分钟前", timestamp: 1741579680000, user: "数羊也失眠", liked: false }
      ]
    }
  },
  
  // 事件4：虐待动物
  {
    id: 4,
    title: "猫猫保护协会",
    content: "某小区门口，一男子蓄意脚踹、踢打流浪幼猫，幼猫被踹至墙角后仍不罢休，又强行抓住猫的身体向数米高的围墙处猛扔。幼猫摔落后重重砸在地面，浑身抽搐、口吐白沫，失去自主活动能力，该男子却在一旁放声大笑，似乎还在全程拍摄视频。知情人说，他的朋友圈配文更是神奇：“抓了个小东西取乐，就是该死的啊”。有小区居民认出该男子为3号楼的租客，平时都宅在家里不出门。",
    materialType: "careharm",
    date: "25-12-24 19:12",
    attribution: {
      behavior: [
        { content: "小区保安说他之前就多次在小区内脚踢、追打流浪狗，被业主投诉过好几次，但仍我行我素。", likes: 6, time: "32分钟前", timestamp: 1741579080000, user: "十七的雨季", liked: false },
        { content: "有邻居见过他经常用石子砸猫，驱逐恐吓它们，当时还觉得这人怪怪的。", likes: 5, time: "28分钟前", timestamp: 1741579320000, user: "一只可爱的可爱", liked: false },
        { content: "该男子的朋友圈长期发布厌恶、攻击猫狗的视频，直言“流浪动物又脏又烦人，就该被清理”", likes: 7, time: "25分钟前", timestamp: 1741579500000, user: "whywhywhy？", liked: false },
        { content: "有认识他的租房中介说，上一家房东正是因为发现他在家中虐待动物、行为残忍，才将他赶走。", likes: 4, time: "21分钟前", timestamp: 1741579740000, user: "今天你喜欢小猫了吗", liked: false }
      ],
      experience: [
        { content: "他小时候养过对他有重要意义的宠物鸟，被野猫偷袭咬死，这一经历让其内心产生强烈的怨恨。", likes: 5, time: "30分钟前", timestamp: 1741579200000, user: "风味冰淇淋", liked: false },
        { content: "男子小时候被流浪狗咬过，脸上现在还有深深的疤，所以看见这些无主的猫狗就难以自制地讨厌。", likes: 6, time: "27分钟前", timestamp: 1741579380000, user: "不做冤大头", liked: false },
        { content: "这个人精神状态不好，好像患有精神疾病。处于发病期无法控制自己，做什么都不能以常理判断。", likes: 3, time: "23分钟前", timestamp: 1741579620000, user: "阿由you", liked: false },
        { content: "该男子好像长期遭遇他人欺负排挤，屡屡受挫，心理变得更扭曲，过激伤害行为也容易反复出现。", likes: 4, time: "19分钟前", timestamp: 1741579860000, user: "绛雪生凉", liked: false }
      ]
    }
  },

  
  // 事件5：考试作弊
  {
    id: 5,
    title: "学园百晓生",
    content: "学校期末考试，某学生吴某明目张胆抄袭邻座同学的答题卡，不仅抄录客观题答案，还有意照搬主观题内容，被监考老师当场抓包，直接没收他的试卷并记录作弊行为。但吴某拒不承认作弊事实，态度蛮横，与老师进行激烈争吵，辩称“是自己独立作答，只是一不小心扫到别人的答案，内容相似完全是巧合”。目前学校还在通过监控录像，调查相关事实。",
    materialType: "faircheat",
    date: "25-12-26 17:56",
    attribution: {
      behavior: [
        { content: "吴某平时作业经常直接抄同学的，甚至连简单的课堂作业都不愿独立完成，老师说过好几次都不改。", likes: 5, time: "29分钟前", timestamp: 1741579260000, user: "吃面会流泪", liked: false },
        { content: "他上学期选修课便因偷偷夹带小抄、抄袭他人答案被老师当场发现，给了警告处分。", likes: 7, time: "26分钟前", timestamp: 1741579440000, user: "八号胡同", liked: false },
        { content: "室友说吴某其平时从不进行课程复习，上课经常缺勤、睡觉，每次考试都想着怎么抄。", likes: 4, time: "23分钟前", timestamp: 1741579620000, user: "白日梦想家", liked: false },
        { content: "同班同学都知道吴某爱作弊，每次考试时都会刻意远离吴某就坐，或者通过遮盖试卷来避免该行为。", likes: 6, time: "20分钟前", timestamp: 1741579800000, user: "燕北斋", liked: false }
      ],
      experience: [
        { content: "吴某家庭条件不好，父母务农收入极不稳定，连基本学费有时都凑不齐。他不擅长学习，只能作弊获得奖学金来缓解困难。", likes: 5, time: "28分钟前", timestamp: 1741579320000, user: "泪水打湿猪脚饭", liked: false },
        { content: "听说他父母要求每次考试都必须名列前茅，考差了便说教和殴打，吴某长期处于这种教育下，无法改变且身心疲倦。", likes: 8, time: "24分钟前", timestamp: 1741579560000, user: "珠珠好喝", liked: false },
        { content: "我认识他，为减轻父母的经济负担，课余和周末几乎都在兼职工作，甚至多次连课都不上，因此根本不会什么知识点。", likes: 4, time: "21分钟前", timestamp: 1741579740000, user: "死亡是秋夜", liked: false },
        { content: "这个孩子好像家里出事了，父母都重病住院，家庭急需用钱再加上各种担心，根本没什么精力管学业。", likes: 3, time: "18分钟前", timestamp: 1741579920000, user: "伍陆柒", liked: false }
      ]
    }
  },
  
  // 事件6：商业欺诈
  {
    id: 6,
    title: "不正常网购研究所",
    content: "某网店售卖知名品牌日用品，商品标题醒目标注“品牌正品原价3999元，限时亏本特价199元，假一赔十，正版无欺”，消费者收到货后发现，商品为明显的劣质仿冒品，做工粗糙、用料劣质，与正品品质天差地别。经品牌官方核实，该品牌从未生产过此款产品，所谓的2999元全是网店凭空编造，就是为了让人觉得捡了大便宜。目前该网店评论区已有上千条投诉，然而网店仍没有任何回应。",
    materialType: "faircheat",
    date: "25-12-23 11:44",
    attribution: {
      behavior: [
        { content: "听说他家店此前便因虚假宣传被人多次投诉，平台也处理过几次，但店主始终无视，继续欺诈。", likes: 6, time: "27分钟前", timestamp: 1741579380000, user: "为什么你不买", liked: false },
        { content: "同行都知道他家标价一直虚高，就是为了让人觉得便宜，这是他一贯的经营套路。", likes: 7, time: "24分钟前", timestamp: 1741579560000, user: "辽北著名老吃家", liked: false },
        { content: "老顾客来评论。这家店三年前就用过同样的宣传套路，现在没想到又换了一种产品。", likes: 5, time: "20分钟前", timestamp: 1741579800000, user: "猛回头", liked: false },
        { content: "这家网店的评论区里好多人都说被骗过，这家店就是惯犯，应该得到制裁！", likes: 4, time: "17分钟前", timestamp: 1741579980000, user: "bluemascett", liked: false }
      ],
      experience: [
        { content: "店主的亲弟弟好像确诊重病，急需巨额费用，但他因无担保贷不了款，也无亲友愿意借钱，走投无路了只得借此筹款。", likes: 5, time: "26分钟前", timestamp: 1741579440000, user: "想而不能", liked: false },
        { content: "我记得这家店的供应商好像背着店主提供假货，现在又携款跑路。店主垫付的大量货款无法追回，资金链断裂，生计十分困难。", likes: 6, time: "22分钟前", timestamp: 1741579680000, user: "越轨的尖叫", liked: false },
        { content: "店主自身缺乏电商基础，听说进货、标价和运营规划都是找的不知名且便宜的代运营公司，事后被投诉才发现坑惨了。", likes: 3, time: "19分钟前", timestamp: 1741579860000, user: "御前带刀糕手", liked: false },
        { content: "这家店是不是轻信某品牌“电商加盟招商”广告，缴纳高额加盟费后，被招商方哄骗要求这样做的，有些可怜。", likes: 4, time: "15分钟前", timestamp: 1741580100000, user: "谋杀绿脚趾", liked: false }
      ]
    }
  },
  
  // 事件7：剽窃他人成果
  {
    id: 7,
    title: "学术圈的那点事",
    content: "研究生院郑某在核心期刊投稿的小论文中，大段整段的复制粘贴了另一位同学还未正式发表的学术论文核心内容，抄袭篇幅占其论文的60%以上。被抄袭的同学发现后找郑某对质，郑某只称“仅是参考借鉴，忘记标注引用出处”，但实则被抄内容均为该同学耗时一年多完成的原创性研究成果。然而郑某导师得知后，仅让其师兄帮忙修改论文重新投稿，未做出任何形式的批评、处分，也未向被抄袭同学致歉。",
    materialType: "faircheat",
    date: "25-12-25 07:22",
    attribution: {
      behavior: [
        { content: "听说郑某本科阶段的毕业论文，便存在多处大段复制粘贴他人研究成果的严重抄袭行为，但仍然顺利毕业。", likes: 7, time: "25分钟前", timestamp: 1741579500000, user: "福寿禄", liked: false },
        { content: "有同学说，他此前向期刊投稿的多篇小论文，均是拼凑和抄袭别人的研究成果。", likes: 5, time: "22分钟前", timestamp: 1741579680000, user: "至十一点", liked: false },
        { content: "他学术研究过程中，写东西从来不查文献的，就是直接复制粘贴，也不愿意去考证。", likes: 6, time: "19分钟前", timestamp: 1741579860000, user: "账号已注销", liked: false },
        { content: "匿一下。本院的都知道他长期的学术不端，只是碍于某些原因没人去举报。", likes: 4, time: "16分钟前", timestamp: 1741580040000, user: "聋子听见哑巴说", liked: false }
      ],
      experience: [
        { content: "能理解。他的导师根本就是个甩手掌柜，只知道不断催稿，又不提供任何帮助和资源，郑某就像瞎子走路一样。", likes: 5, time: "24分钟前", timestamp: 1741579560000, user: "夜除非", liked: false },
        { content: "听说他之前写的论文直接被退稿，导师又规定没有论文不能毕业，给了短短半个月期限，他走投无路只得抄袭。", likes: 7, time: "20分钟前", timestamp: 1741579800000, user: "追忆似水年华", liked: false },
        { content: "他导师就是默许和支持抄袭的，郑某导师选错了，之后只能一条路走到黑，这就是可怜的研究生。", likes: 4, time: "17分钟前", timestamp: 1741579980000, user: "watchwomen", liked: false },
        { content: "郑某研究需要的核心实验数据，导师答应帮忙对接却一直推脱不做。没数据没资源怎么写论文，不投河就算不错的。", likes: 6, time: "14分钟前", timestamp: 1741580160000, user: "我是海贼", liked: false }
      ]
    }
  },
  
  // 事件8：职场晋升不公
  {
    id: 8,
    title: "职场吐槽大会",
    content: "某公司核心部门主管岗位空缺，两名候选人参与竞争。候选人钱某为公司入职六年的老员工，业绩连续五年稳居部门前三，工作兢兢业业，且具备丰富的团队管理经验，部门同事均认可其能力；候选人孙某为入职仅一年的新人，工作能力一般，团队管理经验不多。最终公司却宣布孙某晋升主管。听说孙某为公司高管层某人的直系亲属，借此提拔上来的。消息出来后，部门内十余名老员工都气得想辞职，公司内部工作氛围也受到严重影响。",
    materialType: "faircheat",
    date: "25-12-24 14:36",
    attribution: {
      behavior: [
        { content: "孙某进公司就是靠关系的，刻意避免正常筛选流程，本身没什么实力，但仍然想留在岗位上。", likes: 6, time: "23分钟前", timestamp: 1741579620000, user: "总是记不住形容词", liked: false },
        { content: "姓孙的平时工作能推就推，有时本职工作都不愿意做，却没有什么惩罚。大家私下都叫她关系户。", likes: 8, time: "20分钟前", timestamp: 1741579800000, user: "一颗松子", liked: false },
        { content: "之前有几次核心项目，孙某未参与任何实际工作，却仍去借助亲戚高管的权力进入到成果署名中。", likes: 5, time: "17分钟前", timestamp: 1741579980000, user: "约翰布鲁斯", liked: false },
        { content: "她明知道靠关系是不对的，但是心安理得地不断享受关系带来的特权，私下还说这也是本事。", likes: 4, time: "14分钟前", timestamp: 1741580160000, user: "穿越拿铁海", liked: false }
      ],
      experience: [
        { content: "孙某是单亲妈妈，孩子才六岁，父母又生重病。高管亲戚知道她急需大量用钱，所以私自破格提拔的。", likes: 7, time: "22分钟前", timestamp: 1741579680000, user: "哦对的对的对吗", liked: false },
        { content: "孙某自己好像对这件事情都不知情，晋升完全是高层亲属单方面决定。她现在也很害怕。", likes: 5, time: "19分钟前", timestamp: 1741579860000, user: "防腐剂也会腐烂", liked: false },
        { content: "没钱又没本事，家里再有些重大困难，孙某也挺可怜的。公司也关照她，优先晋升的高工资或许能缓解问题。", likes: 4, time: "16分钟前", timestamp: 1741580040000, user: "话痨找我玩", liked: false },
        { content: "听同事说她一个人在异地打拼，无依无靠，也没什么能力找工作，不晋升下次被裁员的就是她，亲戚也是帮她了一把。", likes: 3, time: "13分钟前", timestamp: 1741580220000, user: "线充大王", liked: false }
      ]
    }
  }
];

const experimentStages = {
  // 研究3： behavior + 高流畅
  firstTrail: {
    materialType: ["careharm", "faircheat"],
    attributionType: "behavior",
    attributionNum: 4, // 高流畅
    totalComments: 10,
    neutralNum: 6,
    trialCount: 8
  },
  // 研究3： behavior + 低流畅
  secondTrail: {
    materialType: ["careharm", "faircheat"],
    attributionType: "behavior",
    attributionNum: 1, // 低流畅
    totalComments: 10,
    neutralNum: 9,
    trialCount: 8
  },
  // 研究3： experience + 高流畅
  thirdTrail: {
    materialType: ["careharm", "faircheat"],
    attributionType: "experience",
    attributionNum: 4,
    totalComments: 10,
    neutralNum: 6,
    trialCount: 8
  },
  // 研究3： experience + 低流畅
  forthTrail: {
    materialType: ["careharm", "faircheat"],
    attributionType: "experience",
    attributionNum: 1,
    totalComments: 10,
    neutralNum: 9,
    trialCount: 8
  },

};

window.neutralComments = neutralComments;
window.experimentStimuli = experimentStimuli;
window.hotSearchData = hotSearchData;
window.recommendUsers = recommendUsers;
window.experimentStages = experimentStages;