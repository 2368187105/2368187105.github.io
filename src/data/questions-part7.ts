import type { Question } from "./questions-part1";

// 高三一轮复习第三模块，全部为本站原创。发布后保持 ID/topic 稳定。
export const practiceTopics = [
  "高三三角与解三角形·角与基本关系",
  "高三三角与解三角形·恒等变换",
  "高三三角与解三角形·图象与性质",
  "高三三角与解三角形·方程与不等式",
  "高三三角与解三角形·正余弦定理",
  "高三三角与解三角形·面积与综合"
] as const;
export const practiceChapters = [{ title: "三角函数与解三角形", topics: practiceTopics }] as const;
export const questions: Question[] = [
  {
    "id": "g3-trig-angles-relations-choice-01",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "choice",
    "title": "角度与弧度",
    "question": "150° 等于多少弧度？",
    "options": [
      {
        "key": "A",
        "text": "5π/6"
      },
      {
        "key": "B",
        "text": "3π/4"
      },
      {
        "key": "C",
        "text": "2π/3"
      },
      {
        "key": "D",
        "text": "5π/3"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 180° 对应 π 弧度，因此角度乘 π/180 得到弧度。\n② 150×π/180=5π/6，故选 A。"
  },
  {
    "id": "g3-trig-angles-relations-choice-02",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "choice",
    "title": "单位圆坐标",
    "question": "角 α 的终边与单位圆交于 P(−3/5,4/5)，则 sinα=：",
    "options": [
      {
        "key": "A",
        "text": "−3/5"
      },
      {
        "key": "B",
        "text": "3/5"
      },
      {
        "key": "C",
        "text": "4/5"
      },
      {
        "key": "D",
        "text": "−4/5"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 单位圆上的点坐标为 (cosα,sinα)。\n② 点的纵坐标是 4/5，所以 sinα=4/5；负的横坐标对应 cosα，不能混淆。"
  },
  {
    "id": "g3-trig-angles-relations-choice-03",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "choice",
    "title": "象限决定开方符号",
    "question": "α 为第三象限角，sinα=−3/5，则 cosα=：",
    "options": [
      {
        "key": "A",
        "text": "4/5"
      },
      {
        "key": "B",
        "text": "−4/5"
      },
      {
        "key": "C",
        "text": "3/5"
      },
      {
        "key": "D",
        "text": "−3/5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 同角关系给出 cos²α=1−sin²α=1−9/25=16/25。\n② 第三象限余弦为负，所以 cosα=−√(16/25)=−4/5，不能取正值。"
  },
  {
    "id": "g3-trig-angles-relations-choice-04",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "choice",
    "title": "正切的定义限制",
    "question": "tanx 无定义的 x 是：",
    "options": [
      {
        "key": "A",
        "text": "kπ（k∈Z）"
      },
      {
        "key": "B",
        "text": "π/2+kπ（k∈Z）"
      },
      {
        "key": "C",
        "text": "π/4+kπ（k∈Z）"
      },
      {
        "key": "D",
        "text": "所有实数"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① tanx=sinx/cosx，分母 cosx 不得为 0。\n② cosx=0 的全部解为 x=π/2+kπ，k∈Z。\n③ 因而这些输入必须排除，故选 B。"
  },
  {
    "id": "g3-trig-angles-relations-fill-01",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "fill",
    "title": "弧长公式",
    "question": "半径 r=2，圆心角为 π/3 弧度，则弧长为____。",
    "options": [],
    "correctAnswer": "2π/3",
    "explanation": "① 弧度制下 l=rθ。\n② 代入 r=2、θ=π/3，得 l=2π/3。",
    "acceptedAnswers": [
      "2π/3",
      "2pi/3",
      "2*pi/3",
      "2π÷3"
    ]
  },
  {
    "id": "g3-trig-angles-relations-fill-02",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "fill",
    "title": "诱导公式",
    "question": "cos120°=____。",
    "options": [],
    "correctAnswer": "−1/2",
    "explanation": "① 120°=180°−60°，余弦诱导公式为 cos(180°−θ)=−cosθ。\n② cos60°=1/2，因此 cos120°=−1/2。",
    "acceptedAnswers": [
      "−1/2",
      "-1/2",
      "-0.5"
    ]
  },
  {
    "id": "g3-trig-angles-relations-fill-03",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "fill",
    "title": "弧度转角度",
    "question": "3π/2 弧度对应的角度为____°。（只填写数值）",
    "options": [],
    "correctAnswer": "270",
    "explanation": "① 弧度乘 180/π 转为角度。\n② (3π/2)×180/π=3×90=270，所以填 270。",
    "acceptedAnswers": [
      "270"
    ]
  },
  {
    "id": "g3-trig-angles-relations-written-01",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "written",
    "title": "象限、同角关系与诱导",
    "question": "已知 α 为第四象限角，sinα=−3/5。\n（1）求 cosα、tanα；\n（2）求 sin(π−α)、cos(π+α)。",
    "options": [],
    "correctAnswer": "（1）cosα=4/5，tanα=−3/4；（2）−3/5，−4/5。",
    "explanation": "（1）由 sin²α+cos²α=1，得 cos²α=1−9/25=16/25。第四象限余弦为正，所以 cosα=4/5。分母非零，tanα=sinα/cosα=(−3/5)/(4/5)=−3/4。\n（2）sin(π−α)=sinα=−3/5。cos(π+α)=−cosα=−4/5。\n检查符号：第四象限 α 的余弦为正、正切为负，与所得结果一致。诱导公式中不能因为 π−α 的形式就把正弦变成负号。",
    "checkpoints": [
      "由同角平方关系并结合象限确定 cosα",
      "确认余弦非零，计算 tanα",
      "分别使用正确诱导公式并核对符号"
    ],
    "hint": "平方关系只给出绝对值，正负由象限决定。"
  },
  {
    "id": "g3-trig-angles-relations-written-02",
    "topic": "高三三角与解三角形·角与基本关系",
    "kind": "written",
    "title": "弧长固定时的扇形",
    "question": "一个扇形的半径为 3，弧长为 3π/2。\n（1）求圆心角的弧度数与扇形面积；\n（2）保持弧长不变，将半径改为 6，求新圆心角与新面积。",
    "options": [],
    "correctAnswer": "（1）π/2，9π/4；（2）π/4，9π/2。",
    "explanation": "（1）弧长公式 l=rθ，得到 θ=l/r=(3π/2)/3=π/2。面积 S=r²θ/2=(9/2)×(π/2)=9π/4。圆心角在 (0,2π) 内，符合普通扇形要求。\n（2）新半径 r₂=6，弧长仍为 3π/2，因此 θ₂=l/r₂=(3π/2)/6=π/4。新面积 S₂=r₂²θ₂/2=36×(π/4)/2=9π/2。\n也可用 S=rl/2 检查：弧长固定时面积与半径成正比，所以半径加倍，面积也加倍；圆心角却减半，不能保持原角不变。",
    "checkpoints": [
      "（1）用弧长求弧度，再求面积",
      "（2）保留弧长不变，重新求角与面积",
      "说明半径、角与面积变化关系并核对"
    ],
    "hint": "先用 θ=l/r；面积也可以写成 rl/2。"
  },
  {
    "id": "g3-trig-identities-choice-01",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "choice",
    "title": "两角和公式",
    "question": "sin75° 等于：",
    "options": [
      {
        "key": "A",
        "text": "(√6+√2)/4"
      },
      {
        "key": "B",
        "text": "(√6−√2)/4"
      },
      {
        "key": "C",
        "text": "√3/2"
      },
      {
        "key": "D",
        "text": "1/2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 75°=45°+30°。\n② sin75°=sin45°cos30°+cos45°sin30°=(√2/2)(√3/2)+(√2/2)(1/2)。\n③ 合并得到 (√6+√2)/4，选 A。"
  },
  {
    "id": "g3-trig-identities-choice-02",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "choice",
    "title": "二倍角与象限",
    "question": "α∈(0,π/2)，sinα=3/5，则 sin2α=：",
    "options": [
      {
        "key": "A",
        "text": "6/5"
      },
      {
        "key": "B",
        "text": "12/25"
      },
      {
        "key": "C",
        "text": "24/25"
      },
      {
        "key": "D",
        "text": "7/25"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① α 为锐角，cosα=√(1−9/25)=4/5。\n② sin2α=2sinαcosα=2×(3/5)×(4/5)=24/25，选 C。"
  },
  {
    "id": "g3-trig-identities-choice-03",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "choice",
    "title": "正切与余弦二倍角",
    "question": "已知 tanα=2，则 cos2α=：",
    "options": [
      {
        "key": "A",
        "text": "3/5"
      },
      {
        "key": "B",
        "text": "−3/5"
      },
      {
        "key": "C",
        "text": "4/5"
      },
      {
        "key": "D",
        "text": "−4/5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① tanα 有意义，所以 cosα≠0，可把 cos2α 的分子分母同时除以 cos²α。\n② cos2α=(1−tan²α)/(1+tan²α)=(1−4)/(1+4)=−3/5。"
  },
  {
    "id": "g3-trig-identities-choice-04",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "choice",
    "title": "辅助角匹配系数",
    "question": "√3sinx+cosx 等于：",
    "options": [
      {
        "key": "A",
        "text": "2sin(x+π/6)"
      },
      {
        "key": "B",
        "text": "2sin(x+π/3)"
      },
      {
        "key": "C",
        "text": "2cos(x+π/6)"
      },
      {
        "key": "D",
        "text": "sin(x+π/6)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 2sin(x+π/6)=2sinxcos(π/6)+2cosxsin(π/6)。\n② 因 cos(π/6)=√3/2，sin(π/6)=1/2，展开为 √3sinx+cosx。\n③ 因而选 A；不能只匹配振幅而忽略两个系数。"
  },
  {
    "id": "g3-trig-identities-fill-01",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "fill",
    "title": "辅助角求最值",
    "question": "sinx+cosx 的最大值为____。",
    "options": [],
    "correctAnswer": "√2",
    "explanation": "① sinx+cosx=√2sin(x+π/4)。\n② 正弦最大为 1，且 x=π/4+2kπ 时取得，因此最大值为 √2。",
    "acceptedAnswers": [
      "√2",
      "sqrt(2)",
      "2^(1/2)"
    ]
  },
  {
    "id": "g3-trig-identities-fill-02",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "fill",
    "title": "降幂公式",
    "question": "2sin²(π/6)−1=____。",
    "options": [],
    "correctAnswer": "−1/2",
    "explanation": "① sin(π/6)=1/2。\n② 2×(1/2)²−1=1/2−1=−1/2；也可用 2sin²x−1=−cos2x。",
    "acceptedAnswers": [
      "−1/2",
      "-1/2",
      "-0.5"
    ]
  },
  {
    "id": "g3-trig-identities-fill-03",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "fill",
    "title": "平方后求乘积",
    "question": "若 sinα+cosα=3/5，则 sinαcosα=____。",
    "options": [],
    "correctAnswer": "−8/25",
    "explanation": "① 两边平方：sin²α+cos²α+2sinαcosα=9/25。\n② 用平方和为 1，得 2sinαcosα=9/25−1=−16/25。\n③ 因而 sinαcosα=−8/25。",
    "acceptedAnswers": [
      "−8/25",
      "-8/25",
      "-0.32"
    ]
  },
  {
    "id": "g3-trig-identities-written-01",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "written",
    "title": "变换后仍要保留定义域",
    "question": "设 F(x)=(1−cos2x)/sin2x。\n（1）求定义域并化简 F；\n（2）求 F(π/6)。",
    "options": [],
    "correctAnswer": "（1）x≠kπ/2（k∈Z），F(x)=tanx；（2）√3/3。",
    "explanation": "（1）原分母要求 sin2x≠0，即 2x≠kπ，得到 x≠kπ/2，k∈Z。利用二倍角公式，1−cos2x=2sin²x，sin2x=2sinxcosx。\n在原定义域内 sinx、cosx 均非零，可约去公因子，得 F(x)=sinx/cosx=tanx。但 tanx 自身允许的部分点（例如 x=0）在原式无意义，不能因此补入原定义域。\n（2）π/6 不属于被排除的 kπ/2，故可以代入。F(π/6)=tan(π/6)=(1/2)/(√3/2)=1/√3=√3/3。",
    "checkpoints": [
      "先由原分母列出全部排除点",
      "应用二倍角化简，保留原定义域",
      "检验代入点并求出精确函数值"
    ],
    "hint": "约分前记录 sin2x≠0，化简不等于扩大定义域。"
  },
  {
    "id": "g3-trig-identities-written-02",
    "topic": "高三三角与解三角形·恒等变换",
    "kind": "written",
    "title": "辅助角与受限区间最值",
    "question": "设 f(x)=√3sinx+cosx，x∈[0,π/2]。\n（1）化为一个正弦函数；\n（2）求值域及最大、最小值的取点。",
    "options": [],
    "correctAnswer": "（1）2sin(x+π/6)；（2）[1,2]，x=0 取最小值 1，x=π/3 取最大值 2。",
    "explanation": "（1）由两角和公式，2sin(x+π/6)=2sinx(√3/2)+2cosx(1/2)=√3sinx+cosx，所以 f(x)=2sin(x+π/6)。\n（2）令 t=x+π/6，则 x∈[0,π/2] 对应 t∈[π/6,2π/3]。sin t 在 [π/6,π/2] 递增，在 [π/2,2π/3] 递减。\n内部最高点 t=π/2 时 sin t=1；两端值为 sin(π/6)=1/2、sin(2π/3)=√3/2，比较知最小值为 1/2。因此 f 的最大值为 2、最小值为 1。\n最大值要求 x+π/6=π/2，即 x=π/3；最小值在 t=π/6，即 x=0 取得。函数连续，所以值域为 [1,2]，不能机械写成 [−2,2]。",
    "checkpoints": [
      "正确匹配振幅和辅助角",
      "平移定义区间，比较内点与端点",
      "还原全部最值取点并说明值域"
    ],
    "hint": "先改变角的范围，再在这个范围上比较正弦值。"
  },
  {
    "id": "g3-trig-graphs-properties-choice-01",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "choice",
    "title": "周期与角频率",
    "question": "f(x)=2sin(3x+π/4) 的最小正周期是：",
    "options": [
      {
        "key": "A",
        "text": "2π"
      },
      {
        "key": "B",
        "text": "π"
      },
      {
        "key": "C",
        "text": "2π/3"
      },
      {
        "key": "D",
        "text": "π/3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 对 A≠0 的正弦型函数，最小正周期为 2π/|ω|。\n② 此处 ω=3，所以 T=2π/3；振幅 2 和相位 π/4 不改变周期。"
  },
  {
    "id": "g3-trig-graphs-properties-choice-02",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "choice",
    "title": "相位不能直接当平移量",
    "question": "由 y=sin2x 得到 y=sin(2x+π/3)，原图象应：",
    "options": [
      {
        "key": "A",
        "text": "左移 π/3"
      },
      {
        "key": "B",
        "text": "左移 π/6"
      },
      {
        "key": "C",
        "text": "右移 π/6"
      },
      {
        "key": "D",
        "text": "右移 π/3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 整理 2x+π/3=2(x+π/6)。\n② 新函数为 f(x+π/6)，所以原图象向左平移 π/6。\n③ 相位需除以角频率 2，不能直接把 π/3 当作横向平移量。"
  },
  {
    "id": "g3-trig-graphs-properties-choice-03",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "choice",
    "title": "受限区间的值域",
    "question": "f(x)=sinx，x∈[π/6,5π/6]，值域为：",
    "options": [
      {
        "key": "A",
        "text": "[−1,1]"
      },
      {
        "key": "B",
        "text": "[0,1]"
      },
      {
        "key": "C",
        "text": "[1/2,1]"
      },
      {
        "key": "D",
        "text": "[−1,1/2]"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 此区间内正弦先增后减，在 x=π/2 取得最大值 1。\n② 两端 sin(π/6)=sin(5π/6)=1/2，为最小值。\n③ 连续性保证中间值均取得，所以值域为 [1/2,1]。"
  },
  {
    "id": "g3-trig-graphs-properties-choice-04",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "choice",
    "title": "正切的单调区间",
    "question": "tanx 在下列哪个区间严格递增且处处有定义？",
    "options": [
      {
        "key": "A",
        "text": "(−π/2,π/2)"
      },
      {
        "key": "B",
        "text": "(0,π)"
      },
      {
        "key": "C",
        "text": "R"
      },
      {
        "key": "D",
        "text": "[−π/2,π/2]"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 正切在每段 (−π/2+kπ,π/2+kπ) 上严格递增。\n② 取 k=0，得到 (−π/2,π/2)。\n③ 其他选项含正切无定义点，不能称在整个给定区间处处有定义。"
  },
  {
    "id": "g3-trig-graphs-properties-fill-01",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "fill",
    "title": "振幅与纵向平移",
    "question": "f(x)=3cosx−2 的最大值为____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① −1≤cosx≤1，乘正数 3 后为 −3≤3cosx≤3。\n② 再减 2，得 −5≤f(x)≤1。\n③ x=2kπ 时取得上界，因此最大值为 1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-trig-graphs-properties-fill-02",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "fill",
    "title": "余弦周期",
    "question": "f(x)=cos4x 的最小正周期为____。",
    "options": [],
    "correctAnswer": "π/2",
    "explanation": "① 余弦基本周期为 2π，角频率为 4。\n② T=2π/4=π/2。",
    "acceptedAnswers": [
      "π/2",
      "pi/2",
      "π÷2"
    ]
  },
  {
    "id": "g3-trig-graphs-properties-fill-03",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "fill",
    "title": "图象对称中心",
    "question": "f(x)=sin(2x+π/3)，图象上的对称中心横坐标满足 2x+π/3=kπ。取 k=0，横坐标为____。",
    "options": [],
    "correctAnswer": "−π/6",
    "explanation": "① 令 2x+π/3=0，得 2x=−π/3。\n② 除以 2，得到 x=−π/6，对应函数值为 0。",
    "acceptedAnswers": [
      "−π/6",
      "-π/6",
      "-pi/6",
      "-π÷6"
    ]
  },
  {
    "id": "g3-trig-graphs-properties-written-01",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "written",
    "title": "相位、周期与单调区间",
    "question": "设 f(x)=2sin(2x−π/3)+1。\n（1）求最小正周期与值域；\n（2）求所有单调递增区间；\n（3）求图象的全部对称轴。",
    "options": [],
    "correctAnswer": "（1）π，值域 [−1,3]；（2）[−π/12+kπ,5π/12+kπ]；（3）x=5π/12+kπ/2，k∈Z。",
    "explanation": "（1）振幅为 2，角频率为 2，因此最小正周期 T=2π/2=π。由 −1≤sin t≤1，得 −1≤2sin t+1≤3，且所有值可取，故值域为 [−1,3]。\n（2）sin t 的递增区间为 [−π/2+2kπ,π/2+2kπ]。将 t=2x−π/3 代入：−π/2+2kπ≤2x−π/3≤π/2+2kπ。\n两端加 π/3，得 −π/6+2kπ≤2x≤5π/6+2kπ；除以正数 2，得 −π/12+kπ≤x≤5π/12+kπ。每个区间单独表示一段严格递增区间。\n（3）正弦图象的对称轴满足 t=π/2+kπ，所以 2x−π/3=π/2+kπ，解得 2x=5π/6+kπ，即 x=5π/12+kπ/2。各式 k 均取任意整数。",
    "checkpoints": [
      "求周期、振幅和平移后的值域",
      "从基本递增区间逐步变换不等式",
      "从正弦极值位置解出全部对称轴"
    ],
    "hint": "先以 t=2x−π/3 为整体处理，再解出 x。"
  },
  {
    "id": "g3-trig-graphs-properties-written-02",
    "topic": "高三三角与解三角形·图象与性质",
    "kind": "written",
    "title": "从图象信息求解析式",
    "question": "已知 f(x)=Acos(ωx)+b，A>0、ω>0，最大值为 5、最小值为 1，最小正周期为 π。\n（1）求 A、ω、b；\n（2）求 f 在 [0,π/2] 的单调性与最值。",
    "options": [],
    "correctAnswer": "（1）A=2，ω=2，b=3；（2）严格递减，最大值 5 在 0，最小值 1 在 π/2。",
    "explanation": "（1）最大值 A+b=5，最小值 −A+b=1。两式相加得 2b=6，所以 b=3；相减得 2A=4，所以 A=2。周期 T=2π/ω=π，结合 ω>0，得 ω=2。因此 f(x)=2cos2x+3。\n（2）x∈[0,π/2] 时，2x∈[0,π]，余弦在此区间严格递减，乘正数 2 再加 3 不改变方向，故 f 严格递减。\n最大值在左端点 x=0，f(0)=2+3=5；最小值在右端点 x=π/2，f(π/2)=2cosπ+3=1。所有参数和端点均符合原条件。",
    "checkpoints": [
      "由最大最小值联立求 A、b",
      "用最小正周期和正参数条件求 ω",
      "跟踪 2x 的区间并写出端点最值"
    ],
    "hint": "上下边界的中点是 b，半差是 A。"
  },
  {
    "id": "g3-trig-equations-inequalities-choice-01",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "choice",
    "title": "方程的多分支",
    "question": "sinx=1/2 在 [0,2π) 内的解为：",
    "options": [
      {
        "key": "A",
        "text": "仅 π/6"
      },
      {
        "key": "B",
        "text": "π/6、5π/6"
      },
      {
        "key": "C",
        "text": "π/6、7π/6"
      },
      {
        "key": "D",
        "text": "5π/6、7π/6"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 单位圆上纵坐标为 1/2 有第一、第二象限两个点。\n② 对应角分别是 π/6 与 π−π/6=5π/6。\n③ 两者都在 [0,2π) 内，所以选 B，不能只保留锐角解。"
  },
  {
    "id": "g3-trig-equations-inequalities-choice-02",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "choice",
    "title": "严格不等号的端点",
    "question": "sinx>1/2 在 [0,2π) 内的解集是：",
    "options": [
      {
        "key": "A",
        "text": "[π/6,5π/6]"
      },
      {
        "key": "B",
        "text": "(π/6,5π/6)"
      },
      {
        "key": "C",
        "text": "(5π/6,2π)"
      },
      {
        "key": "D",
        "text": "(0,π)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① sinx=1/2 的边界为 π/6 和 5π/6。\n② 在二者之间单位圆纵坐标大于 1/2，其余位置不满足。\n③ 原式严格大于，所以边界不包含，结果为 (π/6,5π/6)。"
  },
  {
    "id": "g3-trig-equations-inequalities-choice-03",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "choice",
    "title": "倍角后的根数",
    "question": "sin2x=0 在 [0,2π) 内有多少个不同解？",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① sin2x=0 等价于 2x=kπ，即 x=kπ/2。\n② 0≤x<2π 给出 0≤k<4，所以 k=0、1、2、3。\n③ 共 4 个解，右端 2π 不在给定区间。"
  },
  {
    "id": "g3-trig-equations-inequalities-choice-04",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "choice",
    "title": "同角方程不能随意约分",
    "question": "方程 sinxcosx=sinx 等价于：",
    "options": [
      {
        "key": "A",
        "text": "cosx=1"
      },
      {
        "key": "B",
        "text": "sinx=0 或 cosx=1"
      },
      {
        "key": "C",
        "text": "sinx=1"
      },
      {
        "key": "D",
        "text": "cosx=0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 移项提取公因式：sinx(cosx−1)=0。\n② 乘积为零等价于 sinx=0 或 cosx=1。\n③ 若直接除以 sinx，会漏掉其中 sinx=0 的解，故选 B。"
  },
  {
    "id": "g3-trig-equations-inequalities-fill-01",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "fill",
    "title": "余弦方程根数",
    "question": "cosx=−1/2 在 [0,2π) 内的不同解共有____个。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 参考角为 π/3，余弦为负位于第二、第三象限。\n② 解为 2π/3、4π/3，都在指定半开区间内，所以共 2 个。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-trig-equations-inequalities-fill-02",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "fill",
    "title": "倍角方程最小正解",
    "question": "sin2x=1 的最小正解为____。",
    "options": [],
    "correctAnswer": "π/4",
    "explanation": "① 正弦等于 1 时，2x=π/2+2kπ。\n② 解得 x=π/4+kπ，最小正解在 k=0 时，为 π/4。",
    "acceptedAnswers": [
      "π/4",
      "pi/4",
      "π÷4"
    ]
  },
  {
    "id": "g3-trig-equations-inequalities-fill-03",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "fill",
    "title": "正切不等式",
    "question": "在 (−π/2,π/2) 内，tanx≥0 的解集为____。",
    "options": [],
    "correctAnswer": "[0,π/2)",
    "explanation": "① 正切在该区间连续严格递增，且 tan0=0。\n② x<0 时为负，x≥0 时非负；右端 π/2 无定义。\n③ 因而解集为 [0,π/2)。",
    "acceptedAnswers": [
      "[0,π/2)",
      "[0,pi/2)"
    ]
  },
  {
    "id": "g3-trig-equations-inequalities-written-01",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "written",
    "title": "先求周期通解再筛选",
    "question": "解方程 sin(2x+π/6)=1/2，其中 x∈[0,π]。\n（1）写出关于 x 的全部通解；\n（2）筛选区间内的不同解。",
    "options": [],
    "correctAnswer": "（1）x=kπ 或 x=π/3+kπ；（2）0、π/3、π。",
    "explanation": "（1）令 t=2x+π/6。sin t=1/2 的全部解为 t=π/6+2kπ，或 t=5π/6+2kπ，k∈Z。\n第一支给出 2x+π/6=π/6+2kπ，所以 x=kπ。第二支给出 2x+π/6=5π/6+2kπ，所以 2x=2π/3+2kπ，即 x=π/3+kπ。\n（2）对第一支，0≤kπ≤π，得 k=0、1，产生 x=0、π。对第二支，0≤π/3+kπ≤π，得 −1/3≤k≤2/3，整数 k 只有 0，产生 x=π/3。\n三解互异，合并为 {0,π/3,π}。代回，x=0、π 分别使角为 π/6、13π/6，x=π/3 使角为 5π/6，正弦均为 1/2。闭区间两端不能遗漏。",
    "checkpoints": [
      "写出正弦方程的两支通解",
      "逐支求整数 k 的范围",
      "合并去重并验证闭区间端点"
    ],
    "hint": "正弦等值通常对应两支通解，不要只用反正弦的主值。"
  },
  {
    "id": "g3-trig-equations-inequalities-written-02",
    "topic": "高三三角与解三角形·方程与不等式",
    "kind": "written",
    "title": "整体换元解不等式",
    "question": "解不等式 sin(2x−π/6)≥1/2，x∈[0,π]。\n（1）写出整体角的范围；\n（2）求 x 的解集并检验端点。",
    "options": [],
    "correctAnswer": "（1）[−π/6,11π/6]；（2）[π/6,π/2]。",
    "explanation": "（1）令 t=2x−π/6。因为 0≤x≤π，乘以 2 再减 π/6，得 −π/6≤t≤11π/6。\n（2）sin t≥1/2 的全部角区间为 [π/6+2kπ,5π/6+2kπ]，k∈Z。与 [−π/6,11π/6] 取交集，只有 k=0 的区间 [π/6,5π/6] 保留；k=−1 时右端小于 −π/6，k=1 时左端大于 11π/6。\n所以 π/6≤2x−π/6≤5π/6。两端加 π/6 得 π/3≤2x≤π，再除以 2 得 π/6≤x≤π/2。\nx=π/6 与 π/2 时分别有 t=π/6、5π/6，正弦均为 1/2，等号成立，两端均保留。因此解集为 [π/6,π/2]。",
    "checkpoints": [
      "正确求出整体角 t 的范围",
      "用周期区间与 t 范围取交集，说明其他 k 被排除",
      "解回 x 并核验等号端点"
    ],
    "hint": "先画 t 的有限区间，再筛正弦大于等于 1/2 的周期区间。"
  },
  {
    "id": "g3-trig-sine-cosine-laws-choice-01",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "choice",
    "title": "余弦定理求边",
    "question": "△ABC 中，b=3、c=5，A=60°，则 a=：",
    "options": [
      {
        "key": "A",
        "text": "√19"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "√34"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① a 对着夹角 A，用余弦定理 a²=b²+c²−2bc cosA。\n② 代入得 a²=9+25−2×3×5×(1/2)=19。\n③ 边长为正，所以 a=√19，选 A。"
  },
  {
    "id": "g3-trig-sine-cosine-laws-choice-02",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "choice",
    "title": "正弦定理与外接圆",
    "question": "△ABC 中，a=4，A=30°，则外接圆半径 R=：",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 扩展正弦定理为 a/sinA=2R。\n② 4/(1/2)=8=2R，所以 R=4，不能把直径 8 当作半径。"
  },
  {
    "id": "g3-trig-sine-cosine-laws-choice-03",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "choice",
    "title": "三边定角",
    "question": "△ABC 的三边 a=3、b=4、c=5，则角 C=：",
    "options": [
      {
        "key": "A",
        "text": "30°"
      },
      {
        "key": "B",
        "text": "60°"
      },
      {
        "key": "C",
        "text": "90°"
      },
      {
        "key": "D",
        "text": "120°"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① cosC=(a²+b²−c²)/(2ab)=(9+16−25)/(2×3×4)=0。\n② C∈(0,180°)，其中余弦为 0 的角只有 90°，故选 C。"
  },
  {
    "id": "g3-trig-sine-cosine-laws-choice-04",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "choice",
    "title": "两边一对角的多解",
    "question": "△ABC 中，A=30°、a=√2、b=2，则符合条件的三角形有：",
    "options": [
      {
        "key": "A",
        "text": "0 个"
      },
      {
        "key": "B",
        "text": "1 个"
      },
      {
        "key": "C",
        "text": "2 个"
      },
      {
        "key": "D",
        "text": "3 个"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 正弦定理给出 sinB=b sinA/a=2×(1/2)/√2=√2/2。\n② B=45° 或 135°。两种情况下 A+B 分别为 75°、165°，都小于 180°。\n③ 两种均能构成非退化三角形，所以有 2 个。"
  },
  {
    "id": "g3-trig-sine-cosine-laws-fill-01",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "fill",
    "title": "正弦定理求边",
    "question": "△ABC 中，A=30°、B=90°、a=2，则 b=____。",
    "options": [],
    "correctAnswer": "4",
    "explanation": "① b/sinB=a/sinA，故 b=a sinB/sinA。\n② 代入 2×1/(1/2)=4，所以 b=4。",
    "acceptedAnswers": [
      "4"
    ]
  },
  {
    "id": "g3-trig-sine-cosine-laws-fill-02",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "fill",
    "title": "余弦定理求角余弦",
    "question": "△ABC 中，a=2、b=3、c=4，则 cosC=____。",
    "options": [],
    "correctAnswer": "−1/4",
    "explanation": "① 三边满足 2+3>4，确可成三角形。\n② cosC=(a²+b²−c²)/(2ab)=(4+9−16)/12=−3/12=−1/4。",
    "acceptedAnswers": [
      "−1/4",
      "-1/4",
      "-0.25"
    ]
  },
  {
    "id": "g3-trig-sine-cosine-laws-fill-03",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "fill",
    "title": "SSA 临界情形",
    "question": "△ABC 中，A=30°、b=2、a=1，则符合条件的三角形有____个。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① sinB=b sinA/a=2×(1/2)/1=1。\n② 在 (0,180°) 内 B 只能为 90°，此时 C=60°>0。\n③ 恰有一个三角形，两个反正弦分支在 90° 合并。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-trig-sine-cosine-laws-written-01",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "written",
    "title": "同一正弦值的两个三角形",
    "question": "△ABC 中，A=30°、a=√2、b=2。\n（1）求所有可能的 B、C；\n（2）分别求对应的 c。",
    "options": [],
    "correctAnswer": "（1）B=45°、C=105°，或 B=135°、C=15°；（2）c=√3+1 或 √3−1。",
    "explanation": "（1）由正弦定理，sinB=b sinA/a=2×(1/2)/√2=√2/2。因 B∈(0,180°)，有 B=45° 或 B=135°。\n第一种，C=180°−30°−45°=105°；第二种，C=180°−30°−135°=15°。两者都为正，所以都保留。\n（2）a/sinA=√2/(1/2)=2√2，故 c=2√2 sinC。\nC=105° 时，sin105°=sin(60°+45°)=(√6+√2)/4，得到 c=2√2×(√6+√2)/4=√3+1。\nC=15° 时，sin15°=sin(45°−30°)=(√6−√2)/4，得到 c=√3−1>0。\n分别与（1）的角对应，不能任意交换后当作同一组参数。三边与正角均满足构成条件。",
    "checkpoints": [
      "正弦定理得到 sinB 并保留两个角",
      "利用内角和逐一验证 C>0",
      "分别展开 sin105°、sin15° 求 c 并正确对应"
    ],
    "hint": "求出 sinB 后，在整个 (0,180°) 内找角，再检查 A+B<180°。"
  },
  {
    "id": "g3-trig-sine-cosine-laws-written-02",
    "topic": "高三三角与解三角形·正余弦定理",
    "kind": "written",
    "title": "固定锐角时的解数分类",
    "question": "△ABC 中，A=30°、b=2，边 a>0 为参数。\n（1）说明三角形存在时必须满足的 a 条件；\n（2）按 a 完整讨论符合条件的三角形个数。",
    "options": [],
    "correctAnswer": "a<1：0；a=1：1；1<a<2：2；a≥2：1。",
    "explanation": "（1）正弦定理给出 sinB=b sinA/a=1/a。因为 B 为三角形内角，有 0<sinB≤1，所以 a≥1 是必要条件。\n（2）0<a<1 时，1/a>1，无内角 B 满足，故无三角形。a=1 时，sinB=1，仅 B=90°，C=60°，恰一解。\n1<a<2 时，1/2<1/a<1。令锐角 β 满足 sinβ=1/a，则 30°<β<90°。两候选为 B=β 与 B=180°−β。前者使 C=150°−β>0；后者使 C=β−30°>0，都成立，共两解。\na=2 时 β=30°。候选 B=30° 给出 C=120°，成立；候选 B=150° 给出 C=0°，退化，应排除，所以一解。\na>2 时 0<β<30°。B=β 使 C=150°−β>0，成立；B=180°−β 使 C=β−30°<0，不成立，仍一解。\n合并得到 a<1 为 0 个、a=1 为 1 个、1<a<2 为 2 个、a≥2 为 1 个，也证明 a≥1 时确有三角形。",
    "checkpoints": [
      "用正弦取值范围得到必要条件",
      "分别讨论 a=1 与 1<a<2 的分支",
      "单独检验 a=2 退化边界及 a>2，合并完整分类"
    ],
    "hint": "多解不仅由 sinB 的解数决定，还要检查第三个内角严格为正。"
  },
  {
    "id": "g3-trig-triangle-applications-choice-01",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "choice",
    "title": "两边夹角求面积",
    "question": "△ABC 中，b=4、c=6，A=30°，则面积 S=：",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "24"
      },
      {
        "key": "D",
        "text": "6√3"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 用两边夹角面积公式 S=bc sinA/2。\n② 代入得 S=4×6×(1/2)/2=6，注意保留公式中的 1/2。"
  },
  {
    "id": "g3-trig-triangle-applications-choice-02",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "choice",
    "title": "固定两边的最大面积",
    "question": "三角形两边长固定为 3 和 5，其面积最大值为：",
    "options": [
      {
        "key": "A",
        "text": "15"
      },
      {
        "key": "B",
        "text": "15/2"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 夹角 θ∈(0,π)，面积 S=(1/2)×3×5×sinθ。\n② sinθ≤1，在 θ=π/2 时取等，能构成直角三角形。\n③ 所以最大面积为 15/2。"
  },
  {
    "id": "g3-trig-triangle-applications-choice-03",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "choice",
    "title": "边角关系决定面积",
    "question": "△ABC 三边为 3、4、5，则面积为：",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 3²+4²=5²，所以最大边 5 对应角为直角。\n② 两条直角边为 3、4，面积 S=3×4/2=6。"
  },
  {
    "id": "g3-trig-triangle-applications-choice-04",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "choice",
    "title": "正弦定理用于边比",
    "question": "△ABC 中 A=30°、B=60°，则 a:b=：",
    "options": [
      {
        "key": "A",
        "text": "1:2"
      },
      {
        "key": "B",
        "text": "1:√3"
      },
      {
        "key": "C",
        "text": "√3:1"
      },
      {
        "key": "D",
        "text": "2:1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 由正弦定理，a:b=sinA:sinB。\n② 代入 (1/2):(√3/2)=1:√3，故选 B。"
  },
  {
    "id": "g3-trig-triangle-applications-fill-01",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "fill",
    "title": "等边三角形面积",
    "question": "边长为 2 的等边三角形面积为____。",
    "options": [],
    "correctAnswer": "√3",
    "explanation": "① 任一夹角为 60°，两邻边均为 2。\n② S=(1/2)×2×2×sin60°=2×(√3/2)=√3。",
    "acceptedAnswers": [
      "√3",
      "sqrt(3)",
      "3^(1/2)"
    ]
  },
  {
    "id": "g3-trig-triangle-applications-fill-02",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "fill",
    "title": "面积与内切圆",
    "question": "三角形面积 S=12，周长为 16，则内切圆半径 r=____。",
    "options": [],
    "correctAnswer": "3/2",
    "explanation": "① 半周长 p=16/2=8，面积公式 S=pr。\n② 所以 r=S/p=12/8=3/2。",
    "acceptedAnswers": [
      "3/2",
      "1.5"
    ]
  },
  {
    "id": "g3-trig-triangle-applications-fill-03",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "fill",
    "title": "余弦定理与精确面积",
    "question": "三角形三边为 2、3、4，其面积为____。",
    "options": [],
    "correctAnswer": "3√15/4",
    "explanation": "① 对边 4 的角 C 满足 cosC=(4+9−16)/12=−1/4。\n② C∈(0,π)，sinC>0，所以 sinC=√(1−1/16)=√15/4。\n③ S=2×3×sinC/2=3√15/4。",
    "acceptedAnswers": [
      "3√15/4",
      "3sqrt(15)/4",
      "3*sqrt(15)/4",
      "3√15÷4"
    ]
  },
  {
    "id": "g3-trig-triangle-applications-written-01",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "written",
    "title": "三边确定角与内切圆",
    "question": "△ABC 中，a=3、b=4、c=5。\n（1）求角 C 与面积 S；\n（2）求内切圆半径 r 与外接圆半径 R。",
    "options": [],
    "correctAnswer": "（1）C=90°，S=6；（2）r=1，R=5/2。",
    "explanation": "（1）由余弦定理，cosC=(a²+b²−c²)/(2ab)=(9+16−25)/24=0。内角 C∈(0,180°)，所以 C=90°。面积 S=ab sinC/2=3×4×1/2=6。\n（2）半周长 p=(3+4+5)/2=6，面积 S=pr，得 r=S/p=6/6=1。这里可将三角形按内心分成三小三角形，每个高都为 r，面积和为 (a+b+c)r/2=pr。\n再由扩展正弦定理 c/sinC=2R，有 5/1=2R，所以 R=5/2。\n核对直角三角形的外接圆直径等于斜边 5，与所得 R 一致。",
    "checkpoints": [
      "用余弦定理求 C 并算面积",
      "说明 S=pr，计算半周长与内切圆半径",
      "由正弦定理求外接圆半径，区分直径和半径"
    ],
    "hint": "面积连接三边与内切圆，正弦定理连接边角与外接圆。"
  },
  {
    "id": "g3-trig-triangle-applications-written-02",
    "topic": "高三三角与解三角形·面积与综合",
    "kind": "written",
    "title": "固定两边的边长范围与面积最值",
    "question": "△ABC 中，AB=4、AC=6，夹角 A∈(0,π)。设 BC=a。\n（1）求 a 的范围；\n（2）求面积最大值，并求此时 a；\n（3）若 a=2√7，求角 A 与面积。",
    "options": [],
    "correctAnswer": "（1）2<a<10；（2）最大值 12，此时 a=2√13；（3）A=π/3，面积 6√3。",
    "explanation": "（1）由三角形两边之差小于第三边、两边之和大于第三边，得 |6−4|<a<6+4，即 2<a<10。也可由 a²=4²+6²−2×4×6cosA=52−48cosA 和 −1<cosA<1，得到 4<a²<100，再利用 a>0 开方。两端分别对应退化三角形，不可取。\n（2）面积 S=4×6sinA/2=12sinA。因 A∈(0,π)，sinA≤1，在 A=π/2 时取等，所以最大值 12。此时 a²=52−48×0=52，a=√52=2√13，处于合法范围。\n（3）a=2√7 时 a²=28，由 28=52−48cosA 得 48cosA=24，所以 cosA=1/2。因 A 为内角，得 A=π/3。\n面积 S=12sin(π/3)=12×√3/2=6√3。面积最值与此处给定边长的情况不同，应分别计算。",
    "checkpoints": [
      "用三角不等式或余弦范围求开区间",
      "求最大面积并还原当时的第三边",
      "代入指定边长解角，求精确面积并检查内角范围"
    ],
    "hint": "面积由 sinA 决定，第三边由 cosA 决定；两者通过同一夹角衔接。"
  }
];
