import type { ReactNode } from "react";

export type GeometryFigureKind =
  | "classification"
  | "polyhedra"
  | "rotations"
  | "surface-volume"
  | "spatial-objects"
  | "plane-conditions"
  | "basic-properties"
  | "spatial-positions"
  | "line-plane-positions"
  | "line-plane-parallel"
  | "line-plane-perpendicular"
  | "plane-plane-positions"
  | "plane-plane-parallel"
  | "plane-plane-perpendicular";

const headings: Record<GeometryFigureKind, string> = {
  classification: "多面体与旋转体",
  polyhedra: "棱柱、棱锥与棱台",
  rotations: "圆柱、圆锥、圆台与球",
  "surface-volume": "几何体的尺寸、表面积与体积",
  "spatial-objects": "空间中的点、直线与平面",
  "plane-conditions": "确定平面的三种基本条件",
  "basic-properties": "空间图形的基本性质",
  "spatial-positions": "空间中的基本位置关系",
  "line-plane-positions": "直线与平面的三种位置关系",
  "line-plane-parallel": "直线与平面平行的判定与性质",
  "line-plane-perpendicular": "直线与平面垂直的判定与性质",
  "plane-plane-positions": "两个平面的三种位置关系",
  "plane-plane-parallel": "平面与平面平行的判定与性质",
  "plane-plane-perpendicular": "平面与平面垂直的判定与性质",
};

const blue = "#2563eb";
const darkBlue = "#1e40af";
const paleBlue = "#dbeafe";
const midBlue = "#93c5fd";
const lightBlue = "#eff6ff";
const gray = "#64748b";

function Svg({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 220 140"
      role="img"
      aria-label={label}
      className="h-36 w-full"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function Figure({
  title,
  caption,
  children,
  wide = false,
}: {
  title: string;
  caption: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-blue-100 bg-white ${
        wide ? "sm:col-span-2 xl:col-span-3" : ""
      }`}
    >
      <div className="border-b border-slate-100 bg-blue-50/60 px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="px-3 pt-3">{children}</div>
      <figcaption className="px-4 pb-4 pt-2 text-xs leading-6 text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function GeometryFigures({
  kind,
}: {
  kind: GeometryFigureKind;
}) {
  return (
    <section
      aria-label={headings[kind]}
      className="mt-6 rounded-2xl border border-blue-100 bg-slate-50/70 p-4 sm:p-5"
    >
      <div className="flex items-center gap-2">
        <span className="h-5 w-1 rounded-full bg-blue-600" />
        <h2 className="font-bold text-slate-900">几何图形示意</h2>
      </div>
      <p className="mt-2 text-xs leading-6 text-slate-500">
        {headings[kind]}。结合图形观察各元素之间的空间关系。
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {kind === "classification" && (
          <>
            <Figure title="多面体" caption="表面由平面多边形围成，具有面、棱和顶点。">
              <Svg label="棱柱结构示意">
                <polygon points="30,45 105,24 175,47 100,69" fill={paleBlue} stroke={blue} strokeWidth="1.8" />
                <polygon points="30,45 100,69 100,112 30,87" fill={midBlue} stroke={blue} strokeWidth="1.8" />
                <polygon points="100,69 175,47 175,89 100,112" fill="#bfdbfe" stroke={blue} strokeWidth="1.8" />
                <text x="107" y="132" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">棱柱</text>
              </Svg>
            </Figure>
            <Figure title="旋转体" caption="常见旋转体包括圆柱、圆锥、圆台和球。">
              <Svg label="圆柱、圆锥和球的结构示意">
                <ellipse cx="38" cy="44" rx="25" ry="8" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
                <path d="M13 44 L13 91 M63 44 L63 91" stroke={blue} strokeWidth="1.6" />
                <ellipse cx="38" cy="91" rx="25" ry="8" stroke={blue} strokeWidth="1.6" />
                <path d="M88 40 L62 99 M88 40 L114 99" stroke={blue} strokeWidth="1.6" />
                <ellipse cx="88" cy="99" rx="26" ry="8" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
                <circle cx="166" cy="69" r="28" fill={lightBlue} stroke={blue} strokeWidth="1.6" />
                <ellipse cx="166" cy="69" rx="28" ry="9" stroke={blue} strokeDasharray="4 3" strokeWidth="1.2" />
                <text x="38" y="120" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">圆柱</text>
                <text x="88" y="120" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">圆锥</text>
                <text x="166" y="120" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">球</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "polyhedra" && (
          <>
            <Figure title="棱柱" caption="两个底面平行且全等，侧面为四边形。">
              <Svg label="棱柱示意图">
                <polygon points="40,42 95,24 140,45 85,63" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <polygon points="40,42 85,63 85,112 40,91" fill={midBlue} stroke={blue} strokeWidth="1.7" />
                <polygon points="85,63 140,45 140,94 85,112" fill="#bfdbfe" stroke={blue} strokeWidth="1.7" />
                <text x="105" y="132" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">两个平行底面</text>
              </Svg>
            </Figure>
            <Figure title="棱锥" caption="一个多边形底面，侧面都是有公共顶点的三角形。">
              <Svg label="棱锥示意图">
                <polygon points="38,99 105,115 180,91 105,76" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <path d="M105 20 L38 99 M105 20 L105 115 M105 20 L180 91" stroke={blue} strokeWidth="1.7" />
                <path d="M105 20 L105 76" stroke={gray} strokeDasharray="4 3" strokeWidth="1.2" />
                <circle cx="105" cy="20" r="3" fill={blue} stroke="none" />
                <text x="114" y="17" fill={darkBlue} stroke="none" fontSize="11">顶点</text>
              </Svg>
            </Figure>
            <Figure title="棱台" caption="由棱锥被平行于底面的平面截去顶部后形成。">
              <Svg label="棱台示意图">
                <polygon points="66,34 120,34 143,48 89,48" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <polygon points="35,100 147,100 183,119 71,119" fill={midBlue} stroke={blue} strokeWidth="1.7" />
                <path d="M66 34 L35 100 M120 34 L147 100 M143 48 L183 119 M89 48 L71 119" stroke={blue} strokeWidth="1.7" />
                <text x="110" y="132" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">上下底面平行</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "rotations" && (
          <>
            <Figure title="圆柱" caption="有两个平行且全等的圆形底面。">
              <Svg label="圆柱示意图">
                <ellipse cx="110" cy="30" rx="48" ry="13" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <path d="M62 30 L62 105 M158 30 L158 105" stroke={blue} strokeWidth="1.7" />
                <path d="M62 105 A48 13 0 0 0 158 105" stroke={blue} strokeWidth="1.7" />
                <path d="M62 105 A48 13 0 0 1 158 105" stroke={blue} strokeDasharray="4 3" strokeWidth="1.2" />
                <text x="110" y="130" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">两个圆形底面</text>
              </Svg>
            </Figure>
            <Figure title="圆锥" caption="有一个圆形底面和一个顶点。">
              <Svg label="圆锥示意图">
                <path d="M110 20 L57 105 M110 20 L163 105" stroke={blue} strokeWidth="1.7" />
                <ellipse cx="110" cy="105" rx="53" ry="15" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <path d="M110 20 L110 105" stroke={gray} strokeDasharray="4 3" strokeWidth="1.2" />
                <text x="117" y="64" fill={darkBlue} stroke="none" fontSize="11">高</text>
                <text x="110" y="134" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">圆锥</text>
              </Svg>
            </Figure>
            <Figure title="圆台" caption="上下底面是半径通常不同的平行圆。">
              <Svg label="圆台示意图">
                <ellipse cx="110" cy="39" rx="31" ry="10" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <ellipse cx="110" cy="105" rx="53" ry="15" fill={midBlue} stroke={blue} strokeWidth="1.7" />
                <path d="M79 39 L57 105 M141 39 L163 105" stroke={blue} strokeWidth="1.7" />
                <text x="110" y="132" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">两底面平行</text>
              </Svg>
            </Figure>
            <Figure title="球" caption="球面上各点到球心的距离相等。">
              <Svg label="球和半径示意图">
                <circle cx="110" cy="66" r="43" fill={lightBlue} stroke={blue} strokeWidth="1.7" />
                <ellipse cx="110" cy="66" rx="43" ry="14" stroke={blue} strokeDasharray="4 3" strokeWidth="1.3" />
                <circle cx="110" cy="66" r="3" fill={blue} stroke="none" />
                <path d="M110 66 L149 47" stroke={blue} strokeWidth="1.7" />
                <text x="98" y="60" fill={darkBlue} stroke="none" fontSize="11">O</text>
                <text x="132" y="48" fill={darkBlue} stroke="none" fontSize="11">r</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "surface-volume" && (
          <>
            <Figure title="圆柱：半径与高" caption="体积 V = πr²h，表面积 S = 2πr² + 2πrh。">
              <Svg label="圆柱半径和高度">
                <ellipse cx="105" cy="30" rx="45" ry="12" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
                <path d="M60 30 L60 105 M150 30 L150 105" stroke={blue} strokeWidth="1.6" />
                <ellipse cx="105" cy="105" rx="45" ry="12" stroke={blue} strokeWidth="1.6" />
                <path d="M105 30 L105 105 M105 30 L148 30" stroke={darkBlue} strokeWidth="1.4" />
                <text x="112" y="72" fill={darkBlue} stroke="none" fontSize="11">h</text>
                <text x="125" y="24" fill={darkBlue} stroke="none" fontSize="11">r</text>
              </Svg>
            </Figure>
            <Figure title="圆锥：半径、高和母线" caption="体积 V = ⅓πr²h，侧面积 S侧 = πrl。">
              <Svg label="圆锥的半径高和母线">
                <path d="M108 18 L53 105 M108 18 L163 105" stroke={blue} strokeWidth="1.7" />
                <ellipse cx="108" cy="105" rx="55" ry="14" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <path d="M108 18 L108 105 M108 105 L163 105" stroke={darkBlue} strokeWidth="1.3" />
                <text x="115" y="66" fill={darkBlue} stroke="none" fontSize="11">h</text>
                <text x="133" y="96" fill={darkBlue} stroke="none" fontSize="11">r</text>
                <text x="132" y="55" fill={darkBlue} stroke="none" fontSize="11">l</text>
              </Svg>
            </Figure>
            <Figure title="球：半径" caption="表面积 S = 4πr²，体积 V = ⁴⁄₃πr³。">
              <Svg label="球的半径示意">
                <circle cx="110" cy="68" r="43" fill={lightBlue} stroke={blue} strokeWidth="1.7" />
                <ellipse cx="110" cy="68" rx="43" ry="14" stroke={blue} strokeDasharray="4 3" strokeWidth="1.2" />
                <circle cx="110" cy="68" r="3" fill={blue} stroke="none" />
                <path d="M110 68 L149 49" stroke={blue} strokeWidth="1.7" />
                <text x="98" y="61" fill={darkBlue} stroke="none" fontSize="11">O</text>
                <text x="132" y="48" fill={darkBlue} stroke="none" fontSize="11">r</text>
              </Svg>
            </Figure>
            <Figure title="柱体" caption="柱体体积等于底面积乘以高：V = S底h。">
              <Svg label="柱体底面积和高">
                <polygon points="42,43 111,25 164,46 95,64" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
                <polygon points="42,43 95,64 95,111 42,90" fill={midBlue} stroke={blue} strokeWidth="1.6" />
                <polygon points="95,64 164,46 164,93 95,111" fill="#bfdbfe" stroke={blue} strokeWidth="1.6" />
                <text x="91" y="52" fill={darkBlue} stroke="none" fontSize="10">S底</text>
                <text x="102" y="89" fill={darkBlue} stroke="none" fontSize="11">h</text>
              </Svg>
            </Figure>
            <Figure title="圆柱侧面展开图" caption="侧面展开后是矩形，矩形一边长为底面周长 2πr。">
              <Svg label="圆柱侧面展开图">
                <rect x="42" y="40" width="136" height="58" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
                <circle cx="42" cy="69" r="20" fill={lightBlue} stroke={blue} strokeWidth="1.6" />
                <circle cx="178" cy="69" r="20" fill={lightBlue} stroke={blue} strokeWidth="1.6" />
                <text x="110" y="72" fill={darkBlue} stroke="none" fontSize="11" textAnchor="middle">2πr × h</text>
              </Svg>
            </Figure>
            <Figure title="圆锥侧面展开图" caption="圆锥侧面展开后是扇形，扇形弧长等于底面圆周长。">
              <Svg label="圆锥扇形展开图">
                <path d="M110 100 L47 49 A78 78 0 0 1 173 49 Z" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
                <circle cx="110" cy="112" r="17" fill={lightBlue} stroke={blue} strokeWidth="1.6" />
                <text x="110" y="24" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">扇形</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "spatial-objects" && (
          <>
            <Figure title="点" caption="点表示空间中的一个位置，通常用大写字母表示。">
              <Svg label="空间中的点A">
                <circle cx="110" cy="66" r="4" fill={blue} stroke="none" />
                <text x="119" y="61" fill={darkBlue} stroke="none" fontSize="13">A</text>
              </Svg>
            </Figure>
            <Figure title="直线" caption="直线向两个方向无限延伸，可用小写字母表示。">
              <Svg label="直线l经过A和B两点">
                <path d="M24 93 L195 38" stroke={blue} strokeWidth="2" />
                <circle cx="69" cy="79" r="3" fill={blue} stroke="none" />
                <circle cx="150" cy="52" r="3" fill={blue} stroke="none" />
                <text x="59" y="73" fill={darkBlue} stroke="none" fontSize="11">A</text>
                <text x="155" y="47" fill={darkBlue} stroke="none" fontSize="11">B</text>
                <text x="196" y="34" fill={darkBlue} stroke="none" fontSize="11">l</text>
              </Svg>
            </Figure>
            <Figure title="平面" caption="通常用平行四边形表示平面，实际向四周无限延伸。">
              <Svg label="平面α示意图">
                <polygon points="24,76 117,35 196,65 103,108" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <text x="165" y="57" fill={darkBlue} stroke="none" fontSize="13">α</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "plane-conditions" && (
          <>
            <Figure title="三个不共线的点" caption="三个不共线的点唯一确定一个平面。">
              <Svg label="三个不共线点确定平面">
                <polygon points="30,88 113,39 191,88 108,116" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <circle cx="55" cy="84" r="3.5" fill={blue} stroke="none" />
                <circle cx="113" cy="48" r="3.5" fill={blue} stroke="none" />
                <circle cx="166" cy="89" r="3.5" fill={blue} stroke="none" />
                <text x="43" y="79" fill={darkBlue} stroke="none" fontSize="11">A</text>
                <text x="116" y="40" fill={darkBlue} stroke="none" fontSize="11">B</text>
                <text x="171" y="86" fill={darkBlue} stroke="none" fontSize="11">C</text>
              </Svg>
            </Figure>
            <Figure title="一条直线和直线外一点" caption="直线 l 与直线外一点 P 唯一确定一个平面。">
              <Svg label="直线和直线外一点确定平面">
                <polygon points="25,83 115,42 195,72 105,113" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M48 86 L161 57" stroke={blue} strokeWidth="1.8" />
                <circle cx="111" cy="47" r="3.5" fill={blue} stroke="none" />
                <text x="119" y="43" fill={darkBlue} stroke="none" fontSize="11">P</text>
                <text x="163" y="54" fill={darkBlue} stroke="none" fontSize="11">l</text>
              </Svg>
            </Figure>
            <Figure title="两条相交直线" caption="两条相交直线唯一确定一个平面。">
              <Svg label="两条相交直线确定平面">
                <polygon points="24,81 115,37 196,72 105,114" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M52 99 L166 53 M82 43 L141 106" stroke={blue} strokeWidth="1.8" />
                <circle cx="109" cy="76" r="3.5" fill={blue} stroke="none" />
                <text x="115" y="72" fill={darkBlue} stroke="none" fontSize="11">O</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "basic-properties" && (
          <>
            <Figure title="直线在平面内的判定" caption="若直线上的两个不同点都在平面内，则整条直线在该平面内。">
              <Svg label="直线两个点在平面内">
                <polygon points="20,79 109,38 198,70 109,112" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M47 83 L161 68" stroke={darkBlue} strokeWidth="2" />
                <circle cx="68" cy="80" r="3" fill={blue} stroke="none" />
                <circle cx="139" cy="71" r="3" fill={blue} stroke="none" />
                <text x="60" y="74" fill={darkBlue} stroke="none" fontSize="10">A</text>
                <text x="143" y="65" fill={darkBlue} stroke="none" fontSize="10">B</text>
                <text x="176" y="65" fill={darkBlue} stroke="none" fontSize="11">α</text>
              </Svg>
            </Figure>
            <Figure title="两个平面的交线" caption="两个不同的平面如果有公共点，就相交于一条直线。">
              <Svg label="两个平面相交的交线">
                <polygon points="17,48 104,23 159,44 72,69" fill={paleBlue} stroke={blue} strokeWidth="1.5" />
                <polygon points="72,69 159,44 159,105 72,130" fill={midBlue} fillOpacity="0.65" stroke={blue} strokeWidth="1.5" />
                <path d="M72 69 L159 44" stroke={darkBlue} strokeWidth="2.5" />
                <text x="163" y="43" fill={darkBlue} stroke="none" fontSize="11">l</text>
              </Svg>
            </Figure>
            <Figure title="空间两直线" caption="空间两直线可能相交、平行或异面；异面直线不在同一平面内。">
              <Svg label="空间直线相交、平行和异面示意">
                <path d="M15 39 L70 102 M15 102 L70 39" stroke={blue} strokeWidth="1.8" />
                <path d="M87 45 L135 45 M87 67 L135 67" stroke={blue} strokeWidth="1.8" />
                <path d="M151 101 L203 80 M163 119 L183 52" stroke={gray} strokeWidth="1.8" />
                <text x="42" y="127" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">相交</text>
                <text x="111" y="85" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">平行</text>
                <text x="177" y="132" fill={darkBlue} stroke="none" fontSize="10" textAnchor="middle">异面</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "spatial-positions" && (
          <>
            <Figure title="点与直线" caption="一个点可能在直线上，也可能在直线外。">
              <Svg label="点与直线的位置关系">
                <path d="M25 92 L195 45" stroke={blue} strokeWidth="1.8" />
                <circle cx="84" cy="76" r="3.5" fill={blue} stroke="none" />
                <circle cx="153" cy="99" r="3.5" fill={darkBlue} stroke="none" />
                <text x="74" y="70" fill={darkBlue} stroke="none" fontSize="11">A</text>
                <text x="159" y="102" fill={darkBlue} stroke="none" fontSize="11">B</text>
              </Svg>
            </Figure>
            <Figure title="直线与平面" caption="直线可以在平面内、与平面相交或与平面平行。">
              <Svg label="直线与平面的位置关系">
                <polygon points="20,80 106,39 198,70 111,112" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M45 80 L130 48" stroke={blue} strokeWidth="1.8" />
                <path d="M109 19 L109 84" stroke={darkBlue} strokeWidth="1.8" />
                <path d="M37 24 L133 24" stroke={darkBlue} strokeWidth="1.8" />
              </Svg>
            </Figure>
            <Figure title="两个平面" caption="两个平面可能重合、相交或平行。">
              <Svg label="两个平面的位置关系">
                <polygon points="20,47 108,24 158,43 70,67" fill={paleBlue} stroke={blue} strokeWidth="1.5" />
                <polygon points="63,75 151,51 202,72 114,97" fill={midBlue} fillOpacity="0.7" stroke={blue} strokeWidth="1.5" />
              </Svg>
            </Figure>
          </>
        )}

        {kind === "line-plane-positions" && (
          <>
            <Figure title="直线在平面内" caption="直线上的所有点都在平面 α 内。">
              <Svg label="直线在平面内">
                <polygon points="22,78 111,37 197,68 108,111" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M49 76 L151 64" stroke={blue} strokeWidth="2.2" />
                <text x="151" y="58" fill={darkBlue} stroke="none" fontSize="11">l</text>
                <text x="177" y="63" fill={darkBlue} stroke="none" fontSize="11">α</text>
              </Svg>
            </Figure>
            <Figure title="直线与平面相交" caption="直线与平面只有一个公共点。">
              <Svg label="直线与平面相交于P">
                <polygon points="22,85 111,44 197,75 108,118" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M105 18 L105 105" stroke={blue} strokeWidth="2" />
                <circle cx="105" cy="88" r="3.5" fill={blue} stroke="none" />
                <text x="113" y="85" fill={darkBlue} stroke="none" fontSize="11">P</text>
              </Svg>
            </Figure>
            <Figure title="直线与平面平行" caption="直线不在平面内，并且与平面没有公共点。">
              <Svg label="直线与平面平行">
                <polygon points="22,83 111,45 197,76 108,116" fill={lightBlue} stroke={blue} strokeWidth="1.5" />
                <path d="M37 25 L150 25" stroke={blue} strokeWidth="2" />
                <text x="155" y="29" fill={darkBlue} stroke="none" fontSize="11">l</text>
                <text x="177" y="72" fill={darkBlue} stroke="none" fontSize="11">α</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "line-plane-parallel" && (
          <Figure title="判定定理：平面外直线平行于平面内直线" caption="若 l 不在平面 α 内，m 在 α 内，且 l ∥ m，则 l ∥ α。使用时要写明两项条件。" wide>
            <Svg label="线面平行判定定理">
              <polygon points="20,73 105,73 194,105 109,105" fill={lightBlue} stroke={blue} strokeWidth="1.6" />
              <path d="M39 89 L123 89" stroke={darkBlue} strokeWidth="2.2" />
              <path d="M39 35 L123 35" stroke={blue} strokeWidth="2.2" />
              <text x="130" y="39" fill={darkBlue} stroke="none" fontSize="12">l</text>
              <text x="130" y="92" fill={darkBlue} stroke="none" fontSize="12">m</text>
              <text x="177" y="97" fill={darkBlue} stroke="none" fontSize="12">α</text>
              <path d="M63 45 L63 76" stroke={gray} strokeDasharray="4 4" strokeWidth="1.2" />
            </Svg>
          </Figure>
        )}

        {kind === "line-plane-perpendicular" && (
          <Figure title="判定定理：垂直于平面内两条相交直线" caption="若 m、n 是平面 α 内相交于 O 的两条直线，且 l ⊥ m、l ⊥ n，则 l ⊥ α。" wide>
            <Svg label="线面垂直判定定理">
              <polygon points="20,86 108,45 198,76 110,117" fill={lightBlue} stroke={blue} strokeWidth="1.6" />
              <path d="M109 18 L109 86" stroke={blue} strokeWidth="2.2" />
              <path d="M49 100 L169 73 M64 62 L151 105" stroke={darkBlue} strokeWidth="1.7" />
              <circle cx="109" cy="86" r="3.5" fill={blue} stroke="none" />
              <path d="M109 76 L119 73 L122 83 L112 86 Z" stroke={blue} strokeWidth="1.3" />
              <text x="116" y="17" fill={darkBlue} stroke="none" fontSize="12">l</text>
              <text x="173" y="72" fill={darkBlue} stroke="none" fontSize="11">m</text>
              <text x="151" y="113" fill={darkBlue} stroke="none" fontSize="11">n</text>
              <text x="117" y="99" fill={darkBlue} stroke="none" fontSize="11">O</text>
              <text x="177" y="68" fill={darkBlue} stroke="none" fontSize="11">α</text>
            </Svg>
          </Figure>
        )}

        {kind === "plane-plane-positions" && (
          <>
            <Figure title="两个平面重合" caption="两个平面具有相同的所有点。">
              <Svg label="两个平面重合">
                <polygon points="25,76 113,36 194,67 106,108" fill={paleBlue} stroke={blue} strokeWidth="1.7" />
                <polygon points="25,76 113,36 194,67 106,108" fill="#93c5fd" fillOpacity="0.22" stroke={darkBlue} strokeDasharray="5 3" strokeWidth="1.2" />
                <text x="160" y="58" fill={darkBlue} stroke="none" fontSize="12">α = β</text>
              </Svg>
            </Figure>
            <Figure title="两个平面相交" caption="两个不同平面相交时，交集是一条直线。">
              <Svg label="两个平面相交于直线l">
                <polygon points="18,50 106,25 158,44 70,69" fill={paleBlue} stroke={blue} strokeWidth="1.5" />
                <polygon points="70,69 158,44 158,106 70,130" fill={midBlue} fillOpacity="0.7" stroke={blue} strokeWidth="1.5" />
                <path d="M70 69 L158 44" stroke={darkBlue} strokeWidth="2.5" />
                <text x="162" y="43" fill={darkBlue} stroke="none" fontSize="11">l</text>
              </Svg>
            </Figure>
            <Figure title="两个平面平行" caption="两个不同的平面没有公共点。">
              <Svg label="两个平面平行">
                <polygon points="25,35 113,15 194,43 106,64" fill={paleBlue} stroke={blue} strokeWidth="1.5" />
                <polygon points="25,83 113,63 194,91 106,112" fill={midBlue} fillOpacity="0.65" stroke={blue} strokeWidth="1.5" />
                <text x="166" y="31" fill={darkBlue} stroke="none" fontSize="11">α</text>
                <text x="166" y="80" fill={darkBlue} stroke="none" fontSize="11">β</text>
              </Svg>
            </Figure>
          </>
        )}

        {kind === "plane-plane-parallel" && (
          <Figure title="判定定理：一个平面内两条相交直线都平行于另一个平面" caption="先确认 a、b 在平面 α 内且相交，再分别证明 a ∥ β、b ∥ β，才能使用面面平行判定定理。" wide>
            <Svg label="面面平行判定定理">
              <polygon points="20,45 106,20 197,48 111,74" fill={paleBlue} stroke={blue} strokeWidth="1.6" />
              <path d="M52 48 L143 44 M103 29 L103 64" stroke={darkBlue} strokeWidth="1.8" />
              <circle cx="103" cy="46" r="3" fill={blue} stroke="none" />
              <polygon points="20,96 106,71 197,99 111,125" fill={midBlue} fillOpacity="0.6" stroke={blue} strokeWidth="1.6" />
              <text x="171" y="40" fill={darkBlue} stroke="none" fontSize="12">α</text>
              <text x="171" y="92" fill={darkBlue} stroke="none" fontSize="12">β</text>
              <text x="145" y="41" fill={darkBlue} stroke="none" fontSize="10">a</text>
              <text x="108" y="28" fill={darkBlue} stroke="none" fontSize="10">b</text>
            </Svg>
          </Figure>
        )}

        {kind === "plane-plane-perpendicular" && (
          <Figure title="面面垂直：交线与垂线" caption="两个平面垂直时，一个平面内垂直于交线的直线垂直于另一个平面。" wide>
            <Svg label="面面垂直及交线示意">
              <polygon points="26,83 112,58 193,82 107,108" fill={paleBlue} stroke={blue} strokeWidth="1.5" />
              <polygon points="94,19 132,36 132,119 94,101" fill={midBlue} fillOpacity="0.65" stroke={blue} strokeWidth="1.5" />
              <path d="M26 83 L107 108" stroke={darkBlue} strokeWidth="2.2" />
              <path d="M112 58 L112 18" stroke={darkBlue} strokeWidth="2.2" />
              <path d="M103 78 L112 81 L116 72" stroke={blue} strokeWidth="1.3" />
              <text x="33" y="78" fill={darkBlue} stroke="none" fontSize="11">m</text>
              <text x="117" y="19" fill={darkBlue} stroke="none" fontSize="11">l</text>
              <text x="170" y="77" fill={darkBlue} stroke="none" fontSize="11">β</text>
              <text x="136" y="33" fill={darkBlue} stroke="none" fontSize="11">α</text>
            </Svg>
          </Figure>
        )}
      </div>

      <p className="mt-4 rounded-lg bg-white px-3 py-2 text-xs leading-6 text-slate-500">
        提醒：示意图用于帮助理解空间关系，不按比例绘制；判断定理时仍应以题目条件和数学证明为准。
      </p>
    </section>
  );
}
