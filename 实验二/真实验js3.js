var jsPsych = initJsPsych({
  on_finish: function () {
    // jsPsych.data.displayData();
    // jsPsych.data.get().localSave("csv", "data.csv");
  },
});


var timeline = [];


var BrowserCheck = {
  type: jsPsychBrowserCheck,
  minimum_width: 1000,
  minimum_height: 600,
  window_resize_message:
    "你的浏览器窗口过小，请调大显示窗口或者切换电脑再作答，感谢配合。<br/>点击下方按钮即可结束实验。",
  resize_fail_button_text: "结束实验",
  exclusion_message: () => {
    return "感谢参与！请调大显示窗口作答。";
  },
  record_data: false,
};


timeline.push(BrowserCheck);


const sub_ID = jsPsych.randomization.randomID(13);
jsPsych.data.addProperties({ sub_ID: sub_ID });


function exitExperiment() {
  const confirmExit = confirm("确认要退出本次实验吗？退出后当前进度将不保存。");
  if (confirmExit) {
    jsPsych.data.clear();
    localStorage.removeItem("jspsych-data");
    try {
      window.close();
      setTimeout(() => {
        alert("若页面未自动关闭，请手动关闭浏览器窗口即可。");
        window.location.href = "about:blank";
      }, 500);
    } catch (e) {
      alert("退出失败，请手动关闭浏览器窗口即可。");
      window.location.href = "about:blank";
    }
  }
}


var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p style="font-size:30px">您好，欢迎参加本次实验！这是一项关于网络社媒使用体验与认知偏好的研究。</p>
             <p style="font-size:30px">在研究中，您将浏览某一社交媒体网络平台上的相关内容，可能是一些文字信息、图片素材等。</p>
             <p style="font-size:30px">您需要按照指示在网页上回答相应问题，且您所有的数据都会被保密处理。</p>
             <p style="font-size:30px"><span style="font-weight:bold">注意：</span>我们不会收集任何有关您的个人私密信息！</p>
             <p style="font-size:30px">您的参与是自愿的，您可以随时通过关闭浏览器窗口或程序退出研究。</p>
             <p style="font-size:30px">如果您有任何问题、意见或疑虑，请联系本实验负责人。</p>
             <br>
             <p style="font-size:30px">若您已阅读和理解上述内容，并同意参与此次在线研究，请点击下方按钮进行下一步。</p>
             `,
  choices: [
    '<span style="font-weight:bold;font-family:">我已知晓</span>',
    '<span style="font-weight:bold;font-family:">退出实验</span>',
  ],
  record_data: true,
  enable_button_after: 15000,
  on_finish: function (data) {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) {
      docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
    if (data.response === 1) {
      exitExperiment();
    }
  },
};


timeline.push(welcome);


var gender = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:30px;font-weight:bold">请选择你的性别</p>',
  choices: [
    '<span style="font-size:25px;font-family:宋体;font-weight:bold">男</span>',
    '<span style="font-size:25px;font-family:宋体;font-weight:bold">女</span>',
  ],
  post_trial_gap: 600,
  data: {
    task: "demographics",
    varname: "gender",
  },
  on_finish: function (data) {
    if (data.response == 0) {
      data.response = "男";
    } else {
      data.response = "女";
    }
    data.gender = data.response ;
  },
};


timeline.push(gender);


var age = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<p style="font-size:30px;font-weight:bold">请输入你的年龄</p>',
  post_trial_gap: 600,
  html: `<p>
            <input name="Q0"
            type="number"
            placeholder="12-99"
            min=12
            max=99
            oninput = "if(value.length>2) value = value.slice(0, 2)"
            required
            style ="width:100px;height:20px;font-size:15px"/>
            </p>`,
  button_label: "继续",
  data: {
    task: "demographics",
    varname: "age",
  },
   on_finish: function (data) {
    data.age = data.response.Q0;
  }, 
};


timeline.push(age);


var instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p style="font-size:30px;font-weight:bold">接下来的实验都将于全屏环境下进行，<span style="font-weight:bold;color:red">请不要随意退出全屏，以免实验失败</span>！</p>
             <p style="font-size:30px;font-weight:bold">本次任务中，你会体验某个网络社交平台并浏览其中的一些帖子，之后你会回答相关问题。</p>
              <p style="font-size:30px;font-weight:bold">请注意：<span style="font-weight:bold;color:red">你需要认真浏览帖子内容和相应的评论回复</span>，这对你有很大的帮助。</p>
             <p style="font-size:30px;font-weight:bold">你只需要根据平台内容，做出最真实的回答。点击下方按钮开始实验。</p>
             <p style="font-size:30px"></p>
             `,
  choices: ['<span style="font-weight:bold;font-family:">点击开始实验</span>'],
  record_data: false,
  enable_button_after: 8000,
  //   on_load: function() {
  //   // 初始禁用按钮
  //   var buttons = document.querySelectorAll('.jspsych-btn');
  //   buttons.forEach(button => {
  //     button.disabled = true;
  //     button.style.opacity = '0.6';
  //     button.style.cursor = 'not-allowed';
  //   });
    
  //   // 启用按钮
  //   setTimeout(function() {
  //     buttons.forEach(button => {
  //       button.disabled = false;
  //       button.style.opacity = '1';
  //       button.style.cursor = 'pointer';
  //     });
  //   }, 8000);
  // },
  on_finish: function (data) {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) {
      docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  },
};


timeline.push(instruction);


var likert_scale_1 = [
  "1<br>完全不同意",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7<br>完全同意",
];

var likert_scale_2 = [
  "1<br>完全不需要",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10<br>完全需要",
];


var distance_measure_1 = {
  type: jsPsychSurveyLikert,
  preamble:
    "<p style='font-size:30px;font-weight:bold'>请根据你所看到的帖子内容回答以下问题。</p>",
  questions: [
    {
      prompt:
        "<p style='font-size:20px;'>阅读上个帖子描述的事件时，你<span style= 'font-weight:bold'>感觉</span>这件事离你有多远？</p>",
      name: "Q1",
      required: true,
      labels: ["1<br>非常近", " ", " ", "4<br>一般 ", " ", " ", "7<br>非常远"],
    },
    {
      prompt:
        "<p style='font-size:20px;'>这件事给你<span style= 'font-weight:bold'>感觉</span>有多真实？</p>",
      name: "Q2",
      required: true,
      labels: [
        "1<br>非常不真实",
        " ",
        " ",
        "4<br>一般 ",
        " ",
        " ",
        "7<br>非常真实",
      ],
    },
    {
      prompt:
        "<p style='font-size:20px;'>这件事给你<span style= 'font-weight:bold'>感觉</span>有多大可能发生？</p>",
      name: "Q3",
      required: true,
      labels: [
        "1<br>不可能(0%)",
        " ",
        " ",
        "4<br>一般 ",
        " ",
        " ",
        "7<br>完全会(100%)",
      ],
    },
  ],
  randomize_question_order: true,
  scale_width: 700,
  data: {
    task: "measure",
    varname: "psy_distance",
  },
  button_label: "继续",
  on_finish: function (data) {
    // for (var key in data.response) {
    //   if (typeof data.response[key] === "number") {
    //     data.response[key] = data.response[key] + 1;
    //   }
    // }
    data.distance_Q1 = data.response.Q1 + 1; 
    data.distance_Q2 = data.response.Q2 + 1;
    data.distance_Q3 = data.response.Q3 + 1;
  },
};


var moral_measure_1 = {
  type: jsPsychSurveyLikert,
  preamble:
    "<p style='font-size:30px;font-weight:bold;margin-top:180px'>请根据你所看到的帖子内容回答以下问题，其中1为完全不同意，7为完全同意。</p>",
  questions: [
    {
      prompt: "<p style='font-size:20px;'>帖子中当事人的行为是不道德的。</p>",
      name: "Q1",
      required: true,
      labels: likert_scale_1,
    },
    {
      prompt:
        "<p style='font-size:20px;'>在同样情境下我不会和当事人一样那样做。</p>",
      name: "Q2",
      required: true,
      labels: likert_scale_1,
    },
    {
      prompt: "<p style='font-size:20px;'>帖子中当事人的行为是不公平的。</p>",
      name: "Q3",
      required: true,
      labels: likert_scale_1,
    },
    {
      prompt: "<p style='font-size:20px;'>帖子中当事人的行为具有伤害性。</p>",
      name: "Q4",
      required: true,
      labels: likert_scale_1,
    },
  ],
  randomize_question_order: true,
  scale_width: 700,
  data: {
    task: "measure",
    varname: "moral_1",
  },
  button_label: "继续",
  on_finish: function (data) {
    // for (var key in data.response) {
    //   if (typeof data.response[key] === "number") {
    //     data.response[key] = data.response[key] + 1;
    //   }
    // }

    data.moral_1_Q1 = data.response.Q1 + 1; 
    data.moral_1_Q2 = data.response.Q2 + 1;
    data.moral_1_Q3 = data.response.Q3 + 1;
    data.moral_1_Q4 = data.response.Q4 + 1;
  },
};


var moral_measure_2 = {
  type: jsPsychSurveyLikert,
  preamble:
    "<p style='font-size:30px;font-weight:bold'>请根据你所看到的帖子内容继续回答以下问题，其中1为完全不需要，10为完全需要。</p>",
  questions: [
    {
      prompt:
        "<p style='font-size:20px;'>你认为当事人的行为在多大程度上应该受到谴责？</p>",
      name: "Q1",
      required: true,
      labels: likert_scale_2,
    },
  ],
  scale_width: 1000,
  data: {
    task: "measure",
    varname: "moral_2",
  },
  button_label: "继续",
  on_finish: function (data) {
    // for (var key in data.response) {
    //   if (typeof data.response[key] === "number") {
    //     data.response[key] = data.response[key] + 1;
    //   }
    // }
    data.moral_2_Q1 = data.response.Q1 + 1; 

  },
};

var emotion_measure = {
  type: jsPsychSurveyLikert,
  preamble:
    "<p style='font-size:30px;font-weight:bold'>请根据你所看到的帖子内容认真回答以下问题。</p>",
  questions: [
    {
      prompt:
        "<p style='font-size:20px;'>你对该帖子所呈现的事件（或行为）的愤怒程度是：</p>",
      name: "Q1",
      required: true,
      labels: ["1<br>一点都不愤怒", " ", " ", "4<br>中等 ", " ", " ", "7<br>非常愤怒"],
    },
    {
      prompt:
        "<p style='font-size:20px;'>你对该帖子所呈现的事件（或行为）的厌恶程度是：</p>",
      name: "Q2",
      required: true,
      labels: ["1<br>一点都不厌恶", " ", " ", "4<br>中等", " ", " ", "7<br>非常厌恶"],
    },
    {
      prompt:
        "<p style='font-size:20px;'>你对该帖子所呈现的事件（或行为）的积极情绪程度是：</p>",
      name: "Q3",
      required: true,
      labels: ["1<br>非常低", " ", " ", "4<br>中等", " ", " ", "7<br>非常高"],
    },
    
    
  ],
  randomize_question_order: false,
  scale_width: 700,
  data: {
    task: "measure",
    varname: "emotion-level",
  },
  button_label: "继续",
  on_finish: function (data) {
    // for (var key in data.response) {
    //   if (typeof data.response[key] === "number") {
    //     data.response[key] = data.response[key] + 1;
    //   }
    // }

    data.emotion_Q1 = data.response.Q1 + 1; 
    data.emotion_Q2 = data.response.Q2 + 1;
    data.emotion_Q3 = data.response.Q3 + 1;
  },
};

var Operational_inspection = {
  type: jsPsychSurveyLikert,
  // preamble:
  //   "<p style='font-size:30px;font-weight:bold'>请根据你所看到的帖子内容认真回答以下问题。</p>",
  questions: [
    {
      prompt:
        "<p style='font-size:28px;'>在阅读评论时，有关当事人的<span style= 'font-weight:bold'>背景信息</span>，给你留下了多深的印象？</p>",
      name: "Q1",
      required: true,
      labels: ["1<br>没有印象", " ", " ", " ", " ", " ", "7<br>印象很深"],
    },
    
  ],
  randomize_question_order: true,
  scale_width: 800,
  data: {
    task: "measure",
    varname: "Operational_inspection",
  },
  button_label: "下一实验",
  on_finish: function (data) {
    // for (var key in data.response) {
    //   if (typeof data.response[key] === "number") {
    //     data.response[key] = data.response[key] + 1;
    //   }
    // }
      data.check_Q1 = data.response.Q1 + 1;
  },
};









function until_to_click() {
  var button = document.getElementById("finish_button");
  button.style.visibility = "hidden";
  setTimeout(function () {
    button.style.visibility = "visible";
  }, 15000);
}


function initStage(stageKey) {
  const stageConfig = experimentStages[stageKey];

  // 1. 分别筛选careharm和faircheat类型的材料（各4个）
  const careharmPosts = window.experimentStimuli.filter(
    (post) => post.materialType === "careharm"
  );
  const faircheatPosts = window.experimentStimuli.filter(
    (post) => post.materialType === "faircheat"
  );

  // 2. 验证材料数量（确保两类各有4个）
  if (careharmPosts.length < 4) {
    throw new Error(`careharm类型材料不足4个，当前只有${careharmPosts.length}个！`);
  }
  if (faircheatPosts.length < 4) {
    throw new Error(`faircheat类型材料不足4个，当前只有${faircheatPosts.length}个！`);
  }

  // 3. 随机抽取各4个，合并为8个实验材料
  const selectedCareharm = jsPsych.randomization.shuffle(careharmPosts).slice(0, 4);
  const selectedFaircheat = jsPsych.randomization.shuffle(faircheatPosts).slice(0, 4);
  const targetPosts = [...selectedCareharm, ...selectedFaircheat];

  // 4. 打乱8个材料的顺序（避免固定careharm在前、faircheat在后）
  const shuffledTargetPosts = jsPsych.randomization.shuffle(targetPosts);

  // 5. 中性评论初始化（深拷贝，避免不同stage共享同一数组）
  const stageNeutrals = {
    high: JSON.parse(JSON.stringify(window.neutralComments.high)),
    low: JSON.parse(JSON.stringify(window.neutralComments.low)),
    normal: JSON.parse(JSON.stringify(window.neutralComments.normal)),
  };

  return {
    config: stageConfig,
    remainingPosts: shuffledTargetPosts, // 8个打乱后的材料
    currentPost: null,
    neutrals: stageNeutrals,
  };
}

// // 调整归因评论位置函数（独立封装）
// function adjustAttributionPosition(comments, attributionComments) {
//   const isAttribution = (comment) => attributionComments.includes(comment);
//   // 调整第1位
//   if (isAttribution(comments[0])) {
//     const neutralIdx = comments.findIndex(
//       (c, i) => !isAttribution(c) && i >= 1 && i <= 8,
//     );
//     if (neutralIdx > -1)
//       [comments[0], comments[neutralIdx]] = [comments[neutralIdx], comments[0]];
//   }
//   // 调整最后1位
//   if (isAttribution(comments[9])) {
//     const neutralIdx = comments.findLastIndex(
//       (c, i) => !isAttribution(c) && i >= 1 && i <= 8,
//     );
//     if (neutralIdx > -1)
//       [comments[9], comments[neutralIdx]] = [comments[neutralIdx], comments[9]];
//   }
//   return comments;
// }


function adjustAttributionPosition(comments, attributionComments) {
  // 无归因评论时直接返回
  if (!attributionComments || attributionComments.length === 0) {
    return comments;
  }

  const isAttribution = (comment) => attributionComments.includes(comment);
  // 调整第1位
  if (isAttribution(comments[0])) {
    const neutralIdx = comments.findIndex(
      (c, i) => !isAttribution(c) && i >= 1 && i <= 8,
    );
    if (neutralIdx > -1)
      [comments[0], comments[neutralIdx]] = [comments[neutralIdx], comments[0]];
  }
  // 调整最后1位
  if (isAttribution(comments[9])) {
    const neutralIdx = comments.findLastIndex(
      (c, i) => !isAttribution(c) && i >= 1 && i <= 8,
    );
    if (neutralIdx > -1)
      [comments[9], comments[neutralIdx]] = [comments[neutralIdx], comments[9]];
  }
  return comments;
}


// function generateCommentList(stageData) {
//   const { config, currentPost, neutrals } = stageData;
//   const attributionComments = currentPost.attribution[config.attributionType];
//   if (attributionComments.length < config.attributionNum) {
//     throw new Error(
//       `帖子ID${currentPost.id}的${config.attributionType}归因评论不足${config.attributionNum}条！`,
//     );
//   }

//   let selectedNeutrals = [];
//   if (neutrals.high.length === 0)
//     throw new Error(`${stageKey}高热度中性评论已用尽！`);
//   const highIndex = Math.floor(Math.random() * neutrals.high.length);
//   selectedNeutrals.push(neutrals.high.splice(highIndex, 1)[0]);

//   if (neutrals.low.length === 0)
//     throw new Error(`${stageKey}低热度中性评论已用尽！`);
//   const lowIndex = Math.floor(Math.random() * neutrals.low.length);
//   selectedNeutrals.push(neutrals.low.splice(lowIndex, 1)[0]);

//   const normalNeed = config.neutralNum - 2;
//   if (neutrals.normal.length < normalNeed)
//     throw new Error(`${stageKey}普通中性评论不足！`);
//   const shuffledNormal = jsPsych.randomization.shuffle(neutrals.normal);
//   const selectedNormal = shuffledNormal.slice(0, normalNeed);
//   selectedNormal.forEach((n) => {
//     const idx = neutrals.normal.findIndex((item) => item.content === n.content);
//     if (idx > -1) neutrals.normal.splice(idx, 1);
//   });
//   selectedNeutrals = [...selectedNeutrals, ...selectedNormal];

//   // 合并+排序+调整位置
//   let allComments = [...attributionComments, ...selectedNeutrals];
//   allComments.sort((a, b) => b.likes - a.likes);
//   allComments = adjustAttributionPosition(allComments, attributionComments);

//   // 格式化数据
//   return allComments.map((item, index) => ({
//     id: index + 1,
//     user: { name: item.user },
//     content: item.content,
//     time: item.time,
//     timestamp: item.timestamp,
//     likes: item.likes,
//     liked: item.liked || false,
//   }));
// }



function generateCommentList(stageData) {
  const { config, currentPost, neutrals } = stageData;
  let attributionComments = [];
  let selectedAttribution = [];

  // 当attributionType不为空且attributionNum>0时才获取归因评论
  if (config.attributionType && config.attributionType.trim() !== "" && config.attributionNum > 0) {
    attributionComments = currentPost.attribution[config.attributionType] || [];
    
    // 检查归因评论数量是否足够
    if (attributionComments.length < config.attributionNum) {
      throw new Error(
        `帖子ID${currentPost.id}的${config.attributionType}归因评论不足${config.attributionNum}条！`,
      );
    }

    // 只取需要的归因评论数量
    selectedAttribution = attributionComments.slice(0, config.attributionNum);
  }

  let selectedNeutrals = [];
  
  // 取1条高热度
  if (neutrals.high.length === 0 && config.neutralNum > 0)
    throw new Error(`高热度中性评论已用尽！`);
  if (config.neutralNum > 0) {
    const highIndex = Math.floor(Math.random() * neutrals.high.length);
    selectedNeutrals.push(neutrals.high.splice(highIndex, 1)[0]);
  }

  // 取1条低热度
  if (neutrals.low.length === 0 && config.neutralNum > 1)
    throw new Error(`低热度中性评论已用尽！`);
  if (config.neutralNum > 1) {
    const lowIndex = Math.floor(Math.random() * neutrals.low.length);
    selectedNeutrals.push(neutrals.low.splice(lowIndex, 1)[0]);
  }

  // 取需要的普通中性评论
  const normalNeed = config.neutralNum - 2;
  if (neutrals.normal.length < normalNeed && normalNeed > 0)
    throw new Error(`普通中性评论不足！`);
  if (normalNeed > 0) {
    const shuffledNormal = jsPsych.randomization.shuffle(neutrals.normal);
    const selectedNormal = shuffledNormal.slice(0, normalNeed);
    selectedNormal.forEach((n) => {
      const idx = neutrals.normal.findIndex((item) => item.content === n.content);
      if (idx > -1) neutrals.normal.splice(idx, 1);
    });
    selectedNeutrals = [...selectedNeutrals, ...selectedNormal];
  }

  // 合并选中的归因评论和中性评论
  let allComments = [...selectedAttribution, ...selectedNeutrals];
  
  // 检查评论总数是否符合要求
  if (allComments.length !== config.totalComments) {
    console.warn(`评论总数不符：期望${config.totalComments}条，实际${allComments.length}条`);
  }

  // 按热度排序
  allComments.sort((a, b) => b.likes - a.likes);
  
  // 调整归因评论位置（无归因评论时直接返回原数组）
  allComments = adjustAttributionPosition(allComments, selectedAttribution);

  // 格式化数据
  return allComments.map((item, index) => ({
    id: index + 1,
    user: { name: item.user },
    content: item.content,
    time: item.time,
    timestamp: item.timestamp,
    likes: item.likes,
    liked: item.liked || false,
  }));
}



// function generateCommentList(stageData) {
//   const { config, currentPost, neutrals } = stageData;
//   const attributionComments = currentPost.attribution[config.attributionType];
  
//   // 检查归因评论数量是否足够
//   if (attributionComments.length < config.attributionNum) {
//     throw new Error(
//       `帖子ID${currentPost.id}的${config.attributionType}归因评论不足${config.attributionNum}条！`,
//     );
//   }

//   // 只取需要的归因评论数量
//   // 如果 attributionNum = 1，只取前1条；如果 attributionNum = 4，取全部4条
//   const selectedAttribution = attributionComments.slice(0, config.attributionNum);

//   let selectedNeutrals = [];
  
//   // 取1条高热度
//   if (neutrals.high.length === 0)
//     throw new Error(`高热度中性评论已用尽！`);
//   const highIndex = Math.floor(Math.random() * neutrals.high.length);
//   selectedNeutrals.push(neutrals.high.splice(highIndex, 1)[0]);

//   // 取1条低热度
//   if (neutrals.low.length === 0)
//     throw new Error(`低热度中性评论已用尽！`);
//   const lowIndex = Math.floor(Math.random() * neutrals.low.length);
//   selectedNeutrals.push(neutrals.low.splice(lowIndex, 1)[0]);

//   // 取需要的普通中性评论
//   const normalNeed = config.neutralNum - 2;
//   if (neutrals.normal.length < normalNeed)
//     throw new Error(`普通中性评论不足！`);
//   const shuffledNormal = jsPsych.randomization.shuffle(neutrals.normal);
//   const selectedNormal = shuffledNormal.slice(0, normalNeed);
//   selectedNormal.forEach((n) => {
//     const idx = neutrals.normal.findIndex((item) => item.content === n.content);
//     if (idx > -1) neutrals.normal.splice(idx, 1);
//   });
//   selectedNeutrals = [...selectedNeutrals, ...selectedNormal];

//   // 合并选中的归因评论和中性评论
//   let allComments = [...selectedAttribution, ...selectedNeutrals];
  
//   // 检查评论数量
//   console.log(`帖子 ${currentPost.id}: 归因评论 ${selectedAttribution.length}条, 中性评论 ${selectedNeutrals.length}条, 总计 ${allComments.length}条`);

//   // 按热度排序
//   allComments.sort((a, b) => b.likes - a.likes);
  
//   // 调整归因评论位置
//   allComments = adjustAttributionPosition(allComments, selectedAttribution);

//   // 格式化数据
//   return allComments.map((item, index) => ({
//     id: index + 1,
//     user: { name: item.user },
//     content: item.content,
//     time: item.time,
//     timestamp: item.timestamp,
//     likes: item.likes,
//     liked: item.liked || false,
//   }));
// }


const stagePool = {};

function createTrail(stageKey) {

  if (!stagePool[stageKey]) {
    stagePool[stageKey] = initStage(stageKey);
  }

  return {
    trial_id: stageKey,
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {

      const stageData = stagePool[stageKey];

      if (stageData.remainingPosts.length === 0) {
        throw new Error("材料用完了");
      }

      // 无放回抽取
      const randomIdx = Math.floor(Math.random() * stageData.remainingPosts.length);
      stageData.currentPost = stageData.remainingPosts[randomIdx];
      stageData.remainingPosts.splice(randomIdx, 1);

      // 局部存储评论数据
      const commentsData = generateCommentList(stageData);
      // 把数据放到容器上，方便后续获取
      window.currentTrialData = {
        stageData: stageData,
        commentsData: commentsData,
        stageKey: stageKey,
      };

      let stimuluscontent = `

      <div id="weilog_container" >
        <div id="weilog_container_body" >
          <div class="top-nav">
              <img  class="logo" id="logo_2" src="./素材/微博.svg" alt="logo">
              <div class="logo" id="logo_1"> WeLog</div>
              <div class="search-box">
                  <img class="search-icon" src="./素材/搜索.svg" alt="search">
                  <input type="text" class="search-input" placeholder="搜索微客、找人、话题...">
              </div>
              <div class="nav-middle">
                   <a class="nav-item active" title="首页">
                      <div class=" imag">
                         <img src="./素材/首页.svg" alt="首页">
                      </div>
                   </a>
                   <a class="nav-item" title="热门">
                      <div class=" imag">
                         <img src="./素材/热门.svg" alt="热门">
                      </div>
                   </a>
                   <a class="nav-item" title="探索">
                      <div class=" imag">
                         <img src="./素材/探索.svg" alt="探索">
                      </div>
                   </a>
                   <a class="nav-item" title="私信">
                      <div class=" imag">
                         <img src="./素材/私信.svg" alt="私信">
                         <span class="badge">2</span>
                      </div>
                   </a>
              </div>
              <div class="nav-right">
                  <a class="nav-item" title="写微客">
                      <div class="avatar-wrapper_1">
                          <img id="fabiao" src="./素材/发表.svg" alt="写微客">
                      </div>    
                   </a>
                   <a class="nav-item" title="用户0213213">
                      <div class=" imag-1">
                           <div class="avatar-wrapper">
                               <img src="./素材/用户.svg" alt="用户">
                           </div>    
                      </div>
                   </a>      
              </div>
              <div id="setting">
                   <a class="nav-item" title="设置">
                      <div class="avatar-wrapper_2">
                          <img id="shezhi" src="./素材/设置.svg" alt="设置">
                      </div>    
                   </a>
                  <a class="nav-item" title="通知">
                      <div class="avatar-wrapper_2">
                          <img id="tongzhi" src="./素材/通知.svg" alt="通知">
                      </div>    
                   </a>
              </div>
          </div>

          <div class="main-content">
             <aside class="sidebar-left">
                   <h2>首页</h2>
                   <div class="left-nav">
                       <a class="left-nav-item" title="全部关注">
                          <img class="gaunzhuderen" src="./素材/列表.svg" alt="全部关注">
                          <div class="word-1">全部关注</div>    
                       </a>
                       <a class="left-nav-item" title="最新微客">
                          <img class="gaunzhuderen" src="./素材/最新.svg" alt="最新微客">
                          <div class="word-1">最新微客</div>    
                       </a>
                       <a class="left-nav-item" title="特别关注">
                          <img class="gaunzhuderen" src="./素材/特别关注.svg" alt="特别关注">
                          <div class="word-1">特别关注</div>    
                       </a>
                       <a class="left-nav-item" title="好友圈">
                          <img class="gaunzhuderen" src="./素材/好友.svg" alt="好友圈">
                          <div class="word-1">好友圈</div>    
                       </a>  
                   </div>
                   <div class="group-header">
                       <h3>自定义分组</h3>
                       <div class="avatar-wrapper_3">
                           <img class="tianjia" src="./素材/添加.svg" alt="添加修改">
                       </div>
                   </div>
                   <div class="left-nav-1">
                      <div class="wrap-li">
                           <li><span style="color: C;">•</span> 同事</li>
                      </div>
                      <div class="wrap-li">
                           <li><span style="color: #727272;">•</span> 同学</li>
                      </div>
                      <div class="wrap-li">
                           <li><span style="color: #727272;">•</span> 名人明星</li>
                      </div>
                      <div class="wrap-li">
                           <li><span style="color: #727272;">•</span> 亲友</li>
                      </div>

                   </div>

             </aside>

             <main class="main-page">
                   <div class="middle-header" id="middleHeader">
                       <div class="name_122334">
                           <span  class="name_12233"style="margin: 0;font-family: 'Microsoft YaHei'">${stageData.currentPost.title}</span>
                       </div>
                       <div class="return-block">
                          <img class="fanhui" src="./素材/返回.svg" alt="返回">
                          <span class="fanhui-1" style="margin-left: 0px;font-weight: bold;color: #1e1e1e; font-size:18px">返回</span>
                       </div> 
                   </div>

                   <div  class="main-middle-content">
                       <div class="main-content1234">
                          <div class="post-section">
                               <div class="post-author">
                                   <div class="author-avatar"></div>
                                   <div class="author-info">
                                       <h4>${stageData.currentPost.title} 👑</h4>
                                       <div class="author-meta">${stageData.currentPost.date} 发布于 中国</div>
                                   </div>
                                   <button class="support-btn"><span class="plus"></span>关注</button>
                               </div>
                          </div>
                          <div class="post-text">
                               <p class="weike-text">${stageData.currentPost.content}</p>
                          </div>

                          <footer class="footer1">
                               <div class="post-action">
                                   <div class="function-button">
                                       <div class="function12345">
                                           <div class="zhuanfa-wrapper" title="转发">
                                               <img class="zhuanfa" src="./素材/转发.svg" alt="转发">
                                           </div>    
                                       </div>
                                       <span class="word-987">转发</span>
                                   </div>
                                   <div class="function-button">
                                       <div class="function12345">
                                           <div class="zhuanfa-wrapper" title="评论">
                                              <img class="pinglun" src="./素材/评论1.svg" alt="评论">   
                                           </div>    
                                       </div>
                                       <span class="word-987" id="word-987" style="color:rgb(255, 125, 0)">10</span>
                                   </div>
                                   <div class="function-button">
                                       <div class="function12345">
                                           <div class="zhuanfa-wrapper" title="点赞">
                                               <img class="dianzan" src="./素材/点赞.svg" alt="点赞">
                                           </div>    
                                       </div>
                                       <span class="word-987">12</span>
                                   </div>
                                   <div class="share-action">
                                       <div class="function12345">
                                               <img class="fenxiang" src="./素材/分享.svg" alt="分享">   
                                       </div>
                                       <span class="word-9871">分享这条微客</span>
                                   </div>

                               </div>

                          </footer>

                       </div>

                       <div class="comment-area">
                           <div class="comment-input-area">
                               <div class="comment-avatar">
                                   <img class="comment-avatar123" src="./素材/用户.svg" alt="用户">
                               </div>
                               <div class="comment-input-wrapper">
                                    <input type="text" class="comment-input" placeholder="发布你的评论">
                                    <div class="comment-tools">
                                       <div class="werrtyybfg">
                                           <div class="tools-setting" title="表情">
                                               <img class="biaoqing" src="./素材/表情.svg" alt="表情">
                                           </div>
                                           <div class="tools-setting" title="图片">
                                               <img class="tupian11111" src="./素材/图片.svg" alt="图片">
                                           </div>
                                           <div class="tongshizhuangfa">
                                               <input type="checkbox" id="repost">
                                               <label for="repost" style="font-size:14px;font-family:system-ui">同时转发</label>
                                           </div>
                                       </div>
                                       <div class="comment-1qaz">                                
                                           <button class="comment-submit">评论</button>
                                       </div>    
                                    </div>                                
                               </div>
                           </div>
                           <div class="comment-order">
                               <div class="order-items active">按热度</div>
                               <div class="order-items">按时间</div>
                           </div>
                            <div class="next-exp-button">
                               <button id="finish_button" class="thebutton">继续</button>
                            </div> 

                       </div>

                   </div>

             </main>

             <aside class="sidebar-right">
                   <div class="sidebar-section">
                       <div class="sidebar-title">热搜榜</div>
                   </div>
                  <div class="sidebar-section-22">
                       <div class="somenthing111111">查看完整热搜榜单   <span style="font-family:system-ui; margin-left:5px">  ></span></div>
                   </div>
                   <div class="sidebar-section">
                       <div class="sidebar-title">可能感兴趣的人</div>
                   </div>
             </aside>

          </div>

        </div>

      </div>
      `;
      return stimuluscontent;
    },
    choices: "NO_KEYS",
    post_trial_gap: 500,
    on_load: function () {

      // 每次加载前清理旧的事件监听器和数据
      const container = document.getElementById("weilog_container");
      if (!container) return;

      // 1. 滚动条逻辑（
      const scrollbar = document.querySelector(".custom-scrollbar");
      const thumb = document.querySelector(".custom-scrollbar-thumb");
      if (scrollbar) {
        scrollbar.style.display = container ? "block" : "none";
        // 移除旧的滚动监听
        container.removeEventListener("scroll", () => {});
        container.addEventListener("scroll", () => {
          const scrollRatio =
            container.scrollTop /
            (container.scrollHeight - container.clientHeight);
          const maxThumbTop = scrollbar.clientHeight - thumb.clientHeight;
          thumb.style.top = `${scrollRatio * maxThumbTop}px`;
          const thumbHeight = Math.max(
            50,
            (container.clientHeight / container.scrollHeight) *
              scrollbar.clientHeight,
          );
          thumb.style.height = `${thumbHeight}px`;
        });

        let isDragging = false;
        thumb.removeEventListener("mousedown", () => {});
        thumb.addEventListener("mousedown", (e) => {
          isDragging = true;
          const startY = e.clientY;
          const startTop = parseFloat(thumb.style.top || 0);

          const onMouseMove = (e) => {
            if (!isDragging) return;
            const deltaY = e.clientY - startY;
            const newTop = startTop + deltaY;
            const maxTop = scrollbar.clientHeight - thumb.clientHeight;
            const clampedTop = Math.max(0, Math.min(maxTop, newTop));
            thumb.style.top = `${clampedTop}px`;
            container.scrollTop =
              (clampedTop / maxTop) *
              (container.scrollHeight - container.clientHeight);
          };

          const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          };

          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        });

        scrollbar.removeEventListener("click", () => {});
        scrollbar.addEventListener("click", (e) => {
          if (e.target === thumb) return;
          const clickY = e.clientY - scrollbar.getBoundingClientRect().top;
          const scrollRatio = clickY / scrollbar.clientHeight;
          container.scrollTop =
            scrollRatio * (container.scrollHeight - container.clientHeight);
        });

        container.dispatchEvent(new Event("scroll"));
      }

      // 2. 侧边栏定位逻辑
      const sidebarLeft = document.querySelector(".sidebar-left");
      const mainContent = document.querySelector(".main-content");
      const headerHeight = 60;
      const fixedTop = headerHeight;

      function getSidebarLeft() {
        const leftColRect = mainContent
          ?.querySelector(".sidebar-left")
          ?.getBoundingClientRect();
        return leftColRect ? leftColRect.left + "px" : "0px";
      }

      if (sidebarLeft) {
        sidebarLeft.style.left = getSidebarLeft();
        // 移除旧的resize监听
        window.removeEventListener("resize", () => {});
        window.addEventListener("resize", () => {
          sidebarLeft.style.left = getSidebarLeft();
        });

        container.removeEventListener("scroll", () => {});
        container.addEventListener("scroll", () => {
          const scrollTop = container.scrollTop;
          const currentTop = Math.max(fixedTop, 70 - scrollTop);
          sidebarLeft.style.top = currentTop + "px";
          sidebarLeft.style.height = `calc(100vh - ${currentTop}px)`;
        });
      }

      // 3. 排序按钮事件
      const orderItems = document.querySelectorAll(".order-items");
      orderItems.forEach((item) => {
        item.removeEventListener("click", () => {});
        item.addEventListener("click", function () {
          orderItems.forEach((i) => i.classList.remove("active"));
          this.classList.add("active");

          const { commentsData, stageData } = window.currentTrialData;
          const attributionComments =
            stageData.currentPost.attribution[stageData.config.attributionType];

          // 排序逻辑
          if (this.textContent === "按热度") {
            commentsData.sort((a, b) => b.likes - a.likes);
          } else {
            commentsData.sort((a, b) => b.timestamp - a.timestamp);
          }
          // 调整归因位置
          adjustAttributionPosition(commentsData, attributionComments);

          // 重新渲染评论
          const commentsSection = document.querySelector(".comment-area");
          const existingComments = document.querySelectorAll(".comment-item");
          existingComments.forEach((comment) => comment.remove());
          renderComments(commentsData);
        });
      });

      // 帖子点赞按钮事件
      const likeBtn = document.querySelector(".function-button:has(.dianzan)");
      const dianzanIcon = likeBtn?.querySelector(".dianzan");
      const likeCount = likeBtn?.querySelector(".word-987");
      if (likeBtn && dianzanIcon && likeCount) {
        likeBtn.removeEventListener("click", () => {});
        likeBtn.addEventListener("click", () => {
          dianzanIcon.classList.toggle("active");
          const currentNum = parseInt(likeCount.textContent) || 0;
          likeCount.textContent = dianzanIcon.classList.contains("active")
            ? currentNum + 1
            : currentNum - 1;
        });
      }

      //  渲染评论
      renderComments(window.currentTrialData.commentsData);

      //  评论点赞事件
      const commentArea = document.querySelector(".comment-area");
      commentArea.removeEventListener("click", () => {});
      commentArea.addEventListener("click", function (e) {
        if (e.target.closest('.comment-action[data-action="like"]')) {
          const likeBtn1 = e.target.closest(
            '.comment-action[data-action="like"]',
          );
          const likeCount1 = likeBtn1.querySelector(".action-count");
          const commentId1 = likeBtn1.closest(".comment-item").dataset.id;
          const comment1 = window.currentTrialData.commentsData.find(
            (c) => c.id == commentId1,
          );
          const dianzanIcon1 = likeBtn1.querySelector(".dianzan-09871");

          if (likeBtn1.classList.contains("liked")) {
            likeBtn1.classList.remove("liked");
            dianzanIcon1.classList.remove("active");
            likeCount1.textContent = parseInt(likeCount1.textContent) - 1;
            comment1.liked = false;
            comment1.likes--;
          } else {
            likeBtn1.classList.add("liked");
            dianzanIcon1.classList.add("active");
            likeCount1.textContent = parseInt(likeCount1.textContent) + 1;
            comment1.liked = true;
            comment1.likes++;
          }
        }
      });

      // 渲染热搜和推荐用户
      renderHotSearch();
      renderRecommendUsers();

      //  关注按钮事件
      const supportBtn = document.querySelector(".support-btn");
      if (supportBtn) {
        supportBtn.removeEventListener("click", () => {});
        supportBtn.addEventListener("click", function () {
          this.classList.toggle("followed");
          const textNodes = Array.from(this.childNodes).filter(
            (node) => node.nodeType === 3 && node.textContent.trim() !== "",
          );
          const textNode = textNodes[0];
          textNode.textContent = this.classList.contains("followed")
            ? "已关注"
            : "关注";
        });
      }

      //  推荐用户关注按钮事件
      const sidebarRight = document.querySelector(".sidebar-right");
      sidebarRight.removeEventListener("click", () => {});
      sidebarRight.addEventListener("click", function (e) {
        if (e.target.classList.contains("follow-btn")) {
          const btn = e.target;
          btn.textContent = btn.textContent === "关注" ? "已关注" : "关注";
          btn.style.backgroundColor =
            btn.textContent === "已关注" ? "#999" : "#ff8200";
        }
      });

      // 发布评论事件
      const commentSubmit = document.querySelector(".comment-submit");
      if (commentSubmit) {
        commentSubmit.removeEventListener("click", () => {});
        commentSubmit.addEventListener("click", function () {
          const commentInput = document.querySelector(".comment-input");
          const commentText = commentInput.value.trim();
          if (!commentText) return;

          const newComment = {
            id: window.currentTrialData.commentsData.length + 1,
            user: { name: "用户0213213" },
            content: commentText,
            time: "刚刚",
            likes: 0,
            liked: false,
            timestamp: Date.now(),
          };

          window.currentTrialData.commentsData.unshift(newComment);
          commentInput.value = "";

          // 重新渲染评论
          const commentsSection = document.querySelector(".comment-area");
          const existingComments = document.querySelectorAll(".comment-item");
          existingComments.forEach((comment) => comment.remove());
          renderComments(window.currentTrialData.commentsData);

          // 更新评论数
          const commentCountEl = document.getElementById("word-987");
          commentCountEl.textContent =
            parseInt(commentCountEl.textContent, 10) + 1;
        });
      }

      //  继续按钮逻辑
      until_to_click();
      const finishButton = document.getElementById("finish_button");
      finishButton.removeEventListener("click", () => {});
      finishButton.addEventListener("click", function () {
        const { stageData, stageKey } = window.currentTrialData;
        let fluencyType;
        if (stageData.config.attributionNum === 0) {
          fluencyType = "contrast"; 
        } else if (stageData.config.attributionNum === 4) {
          fluencyType = "high"; 
        } else {
          fluencyType = "low"; 
        }

        jsPsych.finishTrial({
          stage: stageKey,
          postId: stageData.currentPost.id,
          materialType: stageData.config.materialType,
          attributionType: stageData.config.attributionType,
          // fluencyType: stageData.config.attributionNum === 4 ? "high" : "low",
          fluencyType: fluencyType,
        });
      });

      // 渲染评论
      function renderComments(commentsData) {
        const commentsSection = document.querySelector(".comment-area");
        const nextexpbutton = document.querySelector(".next-exp-button");
        if (!commentsSection) return;

        commentsData.forEach((comment) => {
          const commentItem = document.createElement("div");
          commentItem.className = "comment-item";
          commentItem.dataset.id = comment.id;

          commentItem.innerHTML = `
            <div class="comment-avatar"></div>
            <div class="comment-content">
                <div class="comment-user">${comment.user.name}</div>
                <div class="comment-text">${comment.content}</div>
                <div class="comment-actions">
                    <div class="comment-time">${comment.time}</div>
                    <div class="zxcvb">
                        <div class="comment-action" data-action="forword">
                            <span class="action-icon"><img class="dianzan-0987" src="./素材/转发.svg" alt="转发"></span>
                        </div>
                        <div class="comment-action" data-action="reply">
                            <span class="action-icon"><img class="dianzan-09870" src="./素材/评论.svg" alt="评论"></span>                      
                        </div>
                        <div class="comment-action ${comment.liked ? "liked" : ""}" id="dddddzzzzz" data-action="like">
                            <span class="action-icon"><img class="dianzan-09871" src="./素材/点赞.svg" alt="点赞"></span>
                            <span class="action-count">${comment.likes}</span>
                        </div>                                
                    </div>                                                                                      
                </div>
            </div>
          `;
          //   commentsSection.appendChild(commentItem);
          commentsSection.insertBefore(commentItem, nextexpbutton);
        });
      }

      // 渲染热搜
      function renderHotSearch() {
        const hotSearchSection = document.querySelector(
          ".sidebar-section:first-child",
        );
        if (!hotSearchSection || !window.hotSearchData) return;

        // 清空旧内容
        const oldHotItems =
          hotSearchSection.querySelectorAll(".hot-search-item");
        oldHotItems.forEach((item) => item.remove());

        window.hotSearchData.forEach((item) => {
          const hotItem = document.createElement("div");
          hotItem.className = "hot-search-item";
          hotItem.innerHTML = `
            <div class="hot-rank ${item.rank <= 3 ? "top" : ""}">${item.rank}</div>
            <div class="hot-content">
                <div class="hot-topic">${item.topic}</div>
                <div class="hot-count">${item.count}</div>
            </div>
          `;
          hotSearchSection.appendChild(hotItem);
        });
      }

      // 渲染推荐用户
      function renderRecommendUsers() {
        const recommendSection = document.querySelector(
          ".sidebar-section:last-child",
        );
        if (!recommendSection || !window.recommendUsers) return;

        // 清空旧内容
        const oldUserItems =
          recommendSection.querySelectorAll(".recommend-user");
        oldUserItems.forEach((item) => item.remove());

        window.recommendUsers.forEach((user) => {
          const userItem = document.createElement("div");
          userItem.className = "recommend-user";
          userItem.innerHTML = `
            <div class="recommend-avatar"></div>
            <div class="recommend-info">
                <div class="recommend-name">${user.name}</div>
                <div class="recommend-desc">${user.desc}</div>
            </div>
            <button class="follow-btn">关注</button>
          `;
          recommendSection.appendChild(userItem);
        });
      }
    },
    // 每次trial结束清理数据和事件
    on_finish: function () {
      window.currentTrialData = null;
      // 移除全局事件监听
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("mouseup", () => {});
      window.removeEventListener("resize", () => {});
    },
  };
}






const firstTrail = createTrail("firstTrail");
const secondTrail = createTrail("secondTrail");
const thirdTrail = createTrail("thirdTrail");
const forthTrail = createTrail("forthTrail");
const contrastTrail = createTrail("contrastTrail");

const firstProduce = {
  timeline: [firstTrail, distance_measure_1, moral_measure_1, moral_measure_2, emotion_measure, Operational_inspection],
  repetitions: experimentStages.firstTrail.trialCount,
  randomize_order: true,
};


const secondProduce = {
  timeline: [secondTrail, distance_measure_1, moral_measure_1, moral_measure_2, emotion_measure, Operational_inspection],
  repetitions: experimentStages.secondTrail.trialCount,
  randomize_order: true,
};


const thirdProduce = {
  timeline: [thirdTrail, distance_measure_1, moral_measure_1, moral_measure_2, emotion_measure, Operational_inspection],
  repetitions: experimentStages.thirdTrail.trialCount,
  randomize_order: true,
};


const forthProduce = {
  timeline: [forthTrail, distance_measure_1, moral_measure_1, moral_measure_2, emotion_measure, Operational_inspection],
  repetitions: experimentStages.forthTrail.trialCount,
  randomize_order: true,
};





var taskGroups = [firstProduce, secondProduce, thirdProduce, forthProduce];
// var selectedGroup = jsPsych.randomization.sampleWithReplacement(
//   taskGroups,
//   1,
// )[0];

let remainingGroups = [];

function getRandomTaskGroup() {
  if (remainingGroups.length === 0) {
    remainingGroups = jsPsych.randomization.shuffle([...taskGroups]);
  }
  const selected = remainingGroups.shift();
  return selected;
}

var selectedGroup = getRandomTaskGroup();

timeline.push(selectedGroup);





var online_time = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "<p style='font-size:22px;font-weight: bold'>你有过在社交媒体（网络平台）上浏览或者发布帖子的经历吗？</p>",
      options: [
        "有过",
        "没有",
      ],
      horizontal: false,
      required: true,
      name: "yes_or_no",
    },
        {
      prompt: "<p style='font-size:22px;font-weight: bold'>您每天使用社交媒体（例如微博、抖音、小红书等）的时长：</p>",
      options: [
        "1小时以下",
        "1-3小时",
        "3-5小时",
        "5小时以上"
      ],
      horizontal: false,
      required: true,
      name: "look_time",
    },
  ],
  randomize_question_order: false,
  button_label: "继续",
  on_finish: function (data) {
      data.online_yes_or_no = data.response.yes_or_no ;
      data.online_look_time = data.response.look_time ;
  },
};



var end = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<p style="font-size:30px;font-weight:bold">实验结束，感谢您的参与！</p>
    <p style="font-size:30px;font-weight:bold">请按Esc退出全屏，<span style="color:red">务必再按一次以上传数据！</span></p>`,
  record_data: false,
};

const end_trial = {
 type: jsPsychHtmlKeyboardResponse,
 stimulus: `<p style="font-size:30px;font-weight:bold">实验结束，感谢您的参与！</p>
    <p style="font-size:30px;font-weight:bold">请按Esc退出全屏，务必再多按一次以上传数据！</p>`,
 on_finish(){
 onCredamoEndTrialFinish(jsPsych.data.get().csv())
 }
}


timeline.push(online_time);
// timeline.push(end);
timeline.push(end_trial);



jsPsych.run(timeline);
