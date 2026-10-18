import type { Question } from "./questions";

/**
 * 第九章：统计
 * 汇总五个统计课时页面中已有的 25 道练习题。
 * questions.ts 保持不变。
 */
export const questionsPart2: Question[] = [
{
    id: "organization-01",
    topic: "数据的收集与整理",
    title: "数据整理的目的",
    question: "收集到一组杂乱的数据后，首先进行分类、排序和整理，主要目的是：",
    options: [
      { key: "A", text: "保证所有数据都相等" },
      { key: "B", text: "让数据更有规律，便于分析和描述" },
      { key: "C", text: "使数据的总量自动增加" },
      { key: "D", text: "保证调查结果一定正确" },
    ],
    correctAnswer: "B",
    explanation:
      "整理数据可以使数据结构更加清晰，便于统计数量、制作表格和图表，并进一步分析数据特征，但不能保证调查结果一定正确。",
  },
  {
    id: "organization-02",
    topic: "数据的收集与整理",
    title: "理解频数",
    question:
      "一组数据中，数值 80 出现了 6 次，那么数值 80 的频数是：",
    options: [
      { key: "A", text: "80" },
      { key: "B", text: "6" },
      { key: "C", text: "6%" },
      { key: "D", text: "数据的平均数" },
    ],
    correctAnswer: "B",
    explanation:
      "频数是某个数值或某类数据出现的次数。80 出现了 6 次，因此对应的频数是 6。",
  },
  {
    id: "organization-03",
    topic: "数据的收集与整理",
    title: "计算频率",
    question:
      "某个数值在一组共 40 个数据中出现了 10 次，它的频率是：",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "40%" },
      { key: "C", text: "25%" },
      { key: "D", text: "4%" },
    ],
    correctAnswer: "C",
    explanation:
      "频率等于频数除以数据总数，即 10÷40=0.25=25%。",
  },
  {
    id: "organization-04",
    topic: "数据的收集与整理",
    title: "频率之和",
    question:
      "将一组完整数据划分成若干个互不重叠且覆盖全部数据的类别，各类别频率之和为：",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "数据总数" },
      { key: "C", text: "不一定相同" },
      { key: "D", text: "1" },
    ],
    correctAnswer: "D",
    explanation:
      "所有类别的频数之和等于数据总数，因此所有类别的频率之和等于数据总数除以数据总数，即 1，也就是 100%。",
  },
  {
    id: "organization-05",
    topic: "数据的收集与整理",
    title: "整理数据的应用",
    question:
      "调查一个班级学生最喜欢的运动项目，并统计各项目对应的人数。最适合首先制作的是：",
    options: [
      { key: "A", text: "分类统计表" },
      { key: "B", text: "只记录一个学生的答案" },
      { key: "C", text: "不整理，直接得出结论" },
      { key: "D", text: "只记录调查日期" },
    ],
    correctAnswer: "A",
    explanation:
      "运动项目属于分类数据，可以先按照项目分类并统计各类人数，再根据整理后的数据制作合适的统计图表。",
  },

{
    id: "characteristics-01",
    topic: "数据的数字特征",
    title: "平均数的计算",
    question: "一组数据为 4、6、8、10，这组数据的平均数是：",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "28" },
    ],
    correctAnswer: "B",
    explanation:
      "平均数等于所有数据之和除以数据个数，即 (4+6+8+10)÷4=7。",
  },
  {
    id: "characteristics-02",
    topic: "数据的数字特征",
    title: "中位数的判断",
    question: "一组数据为 2、4、7、9、12，其中位数是：",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "6.8" },
      { key: "C", text: "7" },
      { key: "D", text: "9" },
    ],
    correctAnswer: "C",
    explanation:
      "这组数据已经按从小到大的顺序排列，共有 5 个数据，中间第 3 个数是 7，因此中位数为 7。",
  },
  {
    id: "characteristics-03",
    topic: "数据的数字特征",
    title: "众数的判断",
    question: "一组数据为 1、2、2、3、4，其中众数是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    correctAnswer: "B",
    explanation:
      "众数是出现次数最多的数据。数值 2 出现了两次，其余数值各出现一次，因此众数是 2。",
  },
  {
    id: "characteristics-04",
    topic: "数据的数字特征",
    title: "极差的计算",
    question: "一组数据为 3、5、8、10，这组数据的极差是：",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "10" },
    ],
    correctAnswer: "B",
    explanation:
      "极差等于最大值减去最小值，即 10-3=7。极差越大，说明这组数据的最大值与最小值之间的距离越大。",
  },
  {
    id: "characteristics-05",
    topic: "数据的数字特征",
    title: "方差的计算",
    question:
      "一组数据为 2、4、4、6，平均数为 4。按照总体方差公式，这组数据的方差是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "4" },
      { key: "D", text: "√2" },
    ],
    correctAnswer: "B",
    explanation:
      "总体方差等于各数据与平均数之差的平方的平均数。方差=[(2-4)²+(4-4)²+(4-4)²+(6-4)²]÷4=(4+0+0+4)÷4=2。",
  },

{
    id: "sampling-01",
    topic: "随机抽样",
    title: "认识总体与样本",
    question:
      "某学校有 1200 名学生，现随机抽取 60 名学生调查睡眠时间。下列说法正确的是：",
    options: [
      { key: "A", text: "总体是被抽取的 60 名学生" },
      { key: "B", text: "样本是全校 1200 名学生" },
      { key: "C", text: "总体是全校 1200 名学生，样本是抽取的 60 名学生" },
      { key: "D", text: "个体是被抽取的 60 名学生" },
    ],
    correctAnswer: "C",
    explanation:
      "总体是调查对象的全体，样本是从总体中抽取的一部分个体。本题中总体为全校 1200 名学生，样本为抽取的 60 名学生。",
  },
  {
    id: "sampling-02",
    topic: "随机抽样",
    title: "理解样本量",
    question:
      "从一个班级中随机抽取 15 名学生调查身高，这次抽样的样本量是：",
    options: [
      { key: "A", text: "班级总人数" },
      { key: "B", text: "15" },
      { key: "C", text: "学生的平均身高" },
      { key: "D", text: "学生身高的最大值" },
    ],
    correctAnswer: "B",
    explanation:
      "样本量是样本中包含的个体数量。本题抽取了 15 名学生，因此样本量为 15。",
  },
  {
    id: "sampling-03",
    topic: "随机抽样",
    title: "选择抽样方法",
    question:
      "一所学校想调查学生对食堂的满意度，已知不同年级的学生人数差异较大，希望每个年级都得到合理代表。较合适的方法是：",
    options: [
      { key: "A", text: "只调查食堂附近的学生" },
      { key: "B", text: "只调查一个班级" },
      { key: "C", text: "由调查者随意挑选学生" },
      { key: "D", text: "按年级分层，再在各层中随机抽样" },
    ],
    correctAnswer: "D",
    explanation:
      "当总体由具有不同特征的群体组成，且需要保证各群体都有代表时，可以先按年级分层，再在各层中随机抽样。这属于分层随机抽样。",
  },
  {
    id: "sampling-04",
    topic: "随机抽样",
    title: "分层抽样的计算",
    question:
      "某校高一、高二、高三分别有 500、400、300 名学生。按年级分层，从全校抽取 60 名学生进行调查。若按各年级人数比例分配样本，各年级分别应抽取多少人？",
    options: [
      { key: "A", text: "20 人、20 人、20 人" },
      { key: "B", text: "30 人、20 人、10 人" },
      { key: "C", text: "25 人、20 人、15 人" },
      { key: "D", text: "15 人、20 人、25 人" },
    ],
    correctAnswer: "C",
    explanation:
      "总体人数为 500+400+300=1200。高一抽取 60×500/1200=25 人，高二抽取 20 人，高三抽取 15 人。",
  },
  {
    id: "sampling-05",
    topic: "随机抽样",
    title: "判断抽样偏差",
    question:
      "为了了解全校学生对新校服的意见，调查者只访问了校服销售点附近的学生。这种调查最主要的问题是：",
    options: [
      { key: "A", text: "样本可能缺乏代表性，容易产生偏差" },
      { key: "B", text: "总体人数一定太少" },
      { key: "C", text: "样本量一定等于总体人数" },
      { key: "D", text: "调查结果一定完全准确" },
    ],
    correctAnswer: "A",
    explanation:
      "只访问特定地点附近的学生，可能使某些学生更容易被选中，样本不能充分代表全校学生，因此容易产生选择偏差。",
  },

{
    id: "application-01",
    topic: "统计综合应用",
    title: "设计调查方案",
    question:
      "学校想了解全校学生每天的课外阅读时间。以下哪种调查方式更合理？",
    options: [
      {
        key: "A",
        text: "只调查图书馆里正在阅读的学生",
      },
      {
        key: "B",
        text: "只调查自己班级的学生",
      },
      {
        key: "C",
        text: "从全校学生中合理抽取具有代表性的样本",
      },
      {
        key: "D",
        text: "只调查阅读时间最长的学生",
      },
    ],
    correctAnswer: "C",
    explanation:
      "调查对象应尽可能具有代表性。只调查图书馆中的学生或阅读时间较长的学生，容易产生选择偏差，不能充分代表全校学生。",
  },
  {
    id: "application-02",
    topic: "统计综合应用",
    title: "计算样本比例",
    question:
      "随机调查 200 名学生，其中 50 人每天课外阅读不少于 30 分钟。样本中符合条件的学生所占比例为：",
    options: [
      { key: "A", text: "15%" },
      { key: "B", text: "20%" },
      { key: "C", text: "25%" },
      { key: "D", text: "40%" },
    ],
    correctAnswer: "C",
    explanation:
      "样本比例为 50÷200=0.25，即 25%。这里计算的是样本中符合条件的学生所占比例。",
  },
  {
    id: "application-03",
    topic: "统计综合应用",
    title: "选择统计图表",
    question:
      "为了观察某班学生连续 7 天每天的平均阅读时间如何变化，最适合使用：",
    options: [
      { key: "A", text: "折线统计图" },
      { key: "B", text: "扇形统计图" },
      { key: "C", text: "只显示总人数的表格" },
      { key: "D", text: "不整理数据，直接判断" },
    ],
    correctAnswer: "A",
    explanation:
      "折线统计图适合观察数据随时间变化的趋势。连续 7 天的阅读时间具有时间顺序，因此可以用折线统计图呈现。",
  },
  {
    id: "application-04",
    topic: "统计综合应用",
    title: "分析数据特征",
    question:
      "一组数据为 10、15、15、20、20、20、25。以下说法正确的是：",
    options: [
      { key: "A", text: "平均数为 20" },
      { key: "B", text: "中位数为 15" },
      { key: "C", text: "众数为 20" },
      { key: "D", text: "极差为 20" },
    ],
    correctAnswer: "C",
    explanation:
      "20 出现了 3 次，比其他数据出现的次数都多，因此众数为 20。平均数为 125÷7，中位数为第 4 个数 20，极差为 25−10=15。",
  },
  {
    id: "application-05",
    topic: "统计综合应用",
    title: "合理解释调查结论",
    question:
      "从某校合理抽取的 200 名学生中，发现 60% 的学生每天阅读不少于 20 分钟。对这一结果，以下说法最合理的是：",
    options: [
      {
        key: "A",
        text: "可以直接断定全国所有学生的比例都是 60%",
      },
      {
        key: "B",
        text: "样本结果可为了解该校学生情况提供参考，但结论存在抽样误差",
      },
      {
        key: "C",
        text: "只要调查人数达到 200 人，结果就绝对准确",
      },
      {
        key: "D",
        text: "样本比例与总体比例一定完全相等",
      },
    ],
    correctAnswer: "B",
    explanation:
      "样本调查可以帮助我们了解总体情况，但样本结果会受到抽样误差等因素影响。调查结论的可靠性还取决于抽样方案、样本代表性和调查实施过程。",
  },

{
    id: "graphs-01",
    topic: "统计图表",
    title: "选择合适的统计图",
    question:
      "为了比较某班四个小组的数学测验平均成绩，最直观、合适的统计图是：",
    options: [
      { key: "A", text: "条形统计图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "只记录最大值的表格" },
      { key: "D", text: "不需要整理数据" },
    ],
    correctAnswer: "A",
    explanation:
      "条形统计图适合比较不同类别之间的数量大小。四个小组属于不同类别，因此可以用条形统计图进行比较。",
  },
  {
    id: "graphs-02",
    topic: "统计图表",
    title: "理解折线统计图",
    question:
      "为了观察某城市一周内每天最高气温的变化趋势，最适合使用：",
    options: [
      { key: "A", text: "饼图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "只显示总数的统计表" },
      { key: "D", text: "没有横轴的图" },
    ],
    correctAnswer: "B",
    explanation:
      "折线统计图用点和线段表示数据，适合观察气温、销量等数据随时间变化的趋势。",
  },
  {
    id: "graphs-03",
    topic: "统计图表",
    title: "扇形统计图的计算",
    question:
      "某班有 40 名学生，其中 10 名学生最喜欢篮球。若用扇形统计图表示喜好情况，篮球对应扇形的圆心角为：",
    options: [
      { key: "A", text: "45°" },
      { key: "B", text: "60°" },
      { key: "C", text: "90°" },
      { key: "D", text: "120°" },
    ],
    correctAnswer: "C",
    explanation:
      "篮球所占比例为 10÷40=25%，对应圆心角为 360°×25%=90°。",
  },
  {
    id: "graphs-04",
    topic: "统计图表",
    title: "认识直方图",
    question:
      "将学生身高按照若干个连续区间分组，并用相邻的矩形表示各组的频数分布，通常使用：",
    options: [
      { key: "A", text: "扇形统计图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "普通分类条形图" },
      { key: "D", text: "频数分布直方图" },
    ],
    correctAnswer: "D",
    explanation:
      "频数分布直方图将连续数值划分为若干组，利用相邻的矩形表示各组的频数分布，可以观察数据的集中区间与分布形态。",
  },
  {
    id: "graphs-05",
    topic: "统计图表",
    title: "识别图表误导",
    question:
      "比较两个班级的平均分时，某图表将纵轴从 80 分开始，而不是从 0 分开始。阅读图表时最需要注意的是：",
    options: [
      { key: "A", text: "纵轴起点可能放大视觉差异，应结合刻度判断" },
      { key: "B", text: "只要是统计图，结论就一定正确" },
      { key: "C", text: "纵轴起点不会影响视觉效果" },
      { key: "D", text: "不用看具体数据，只看柱子的高度" },
    ],
    correctAnswer: "A",
    explanation:
      "截断纵轴可能使原本较小的差异显得很大。阅读统计图时，应关注坐标轴起点、刻度间隔和实际数值。",
  },
];
