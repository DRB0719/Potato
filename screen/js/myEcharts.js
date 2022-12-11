//全局变量
var path = "http://p0tato.cloud.eson.ninja/";
var pathUse = 1;
var species = "";
var chanxiao="产量";
var sumNum = 69130;
var danwei = ['公斤','吨','万吨','千万吨'];//单位级别换算
var ren = ['人','千人','兆人','亿人'];
var ci = ['次','千次','兆次','亿次'];
// 获取图表
var left2 = echarts.init(document.getElementById('echarts-left2'),'dark');
var left3 = echarts.init(document.getElementById('echarts-left3'),'dark');
var center1 = echarts.init(document.getElementById('echarts-center1'),'dark');
var center2 = echarts.init(document.getElementById('echarts-center2'),'dark');
var right3 = echarts.init(document.getElementById('echarts-right3'),'dark');

//数据
var data = {
  "data1":7962,
  "data2":30,
  "data3":21,
  "data4":14,
  "data5":89
};
var data2={
  "name":["西红柿","西芹","马铃薯","上海青","鸭蛋","香菇"],
  "proportion":[0.9,0.8,0.7,0.6,0.5,0.4],
  "sale":[123, 234, 293, 140, 144, 630],
  "output":[193, 234, 310, 194, 141, 780]
};
var data3={
  "data":[
    {"value":400,"name":"第一季度","propor":
    [
      {"kind":"重庆1","value":120},
      {"kind":"广州1","value":60},
      {"kind":"上海1","value":30}
    ]},
    {"value":300,"name":"第二季度","propor":
    [
      {"kind":"重庆2","value":120},
      {"kind":"广州2","value":60},
      {"kind":"上海2","value":300}
    ]},
    {"value":440,"name":"第三季度","propor":
    [
      {"kind":"重庆3","value":120},
      {"kind":"广州3","value":450},
      {"kind":"上海3","value":300}
    ]},
    {"value":490,"name":"第四季度","propor":
    [
      {"kind":"重庆4","value":120},
      {"kind":"广州4","value":60},
      {"kind":"上海4","value":310}
    ]}
  ]
};


/*数据*/
var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shaanxi', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
//省
var seriesData = [
    {name: '北京',value: 0},
    {name: '天津',value: 0},
    {name: '上海',value: 600},
    {name: '重庆',value: 0},
    {name: '河北',value: 0},
    {name: '河南',value: 0},
    {name: '云南',value: 0},
    {name: '辽宁',value: 0},
    {name: '黑龙江',value: 0},
    {name: '湖南',value: 0},
    {name: '安徽',value: 0},
    {name: '山东',value: 0},
    {name: '新疆',value: 0},
    {name: '江苏',value: 0},
    {name: '浙江',value: 0},
    {name: '江西',value:10},
    {name: '湖北',value: 60},
    {name: '广西',value: 60},
    {name: '甘肃',value: 0},
    {name: '山西',value: 60},
    {name: '内蒙古',value: 0},
    {name: '陕西',value: 0},
    {name: '吉林',value: 0},
    {name: '福建',value: 0},
    {name: '贵州',value: 0},
    {name: '广东',value: 597},
    {name: '青海',value: 0},
    {name: '西藏',value: 0},
    {name: '四川',value: 60},
    {name: '宁夏',value: 0},
    {name: '海南',value: 60},
    {name: '台湾',value: 0},
    {name: '香港',value: 0},
    {name: '澳门',value: 0}
];
var data5 = {
  "x": ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
  "y1": [820, 932, 901, 934, 1290, 130, 1320, 820, 932, 901, 934, 1290, 130, 1320],
  "y2": [820, 932, 901, 934, 1290, 130, 1320, 820, 932, 901, 934, 1290, 130, 1320]
};
var data8={
  "x": ["10", "19", "20", "21", "22", "23", "24"],
  "y1": [820, 932, 901, 934, 1290, 130, 1320],
  "y2": [ 1290, 130, 1320, 400, 820, 932, 901]
};

// 调色盘
var color = [
  '#37A2DA',
  '#32C5E9',
  '#67E0E3',
  '#9FE6B8',
  '#FFDB5C',
  '#ff9f7f',
  '#fb7293',
  '#E062AE',
  '#E690D1',
  '#e7bcf3',
  '#9d96f5',
  '#8378EA',
  '#96BFFF'
];
var color2 = ["#fb7293", "#37A2DA", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301", "#57e7ec", "#cf9ef1"];
var color_4 = ["#0000bb","#0000ff","#bbcc00","#cccccc"];
//map





































//map
var tmpSeriesData=[];
// 初始化echarts
function initEcharts(pName, Chinese_) {
  // option
  var mapType;
  if(pName=="china"){
      mapType=pName;
  }else{
      mapType=Chinese_;
  }
  var option4 = {
  title: {
    text: Chinese_ ,//|| pName,
    textStyle: {
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 'normal',
      color:"#fff"
  },
    x:"center",
    y:"top"
  },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>'+chanxiao+'：{c} (公斤)'
    },
  series: [
    {
      name: Chinese_ ,//|| pName,
      type: 'map',
      mapType: mapType,//pName,
      roam: false,//是否开启鼠标缩放和平移漫游
      data: tmpSeriesData,//trueData,
      top: "5%",//组件距离容器的距离
      zoom:1.1,
      selectedMode : 'single',
      label: {
          normal: {
              show: false,//显示省份标签
              textStyle:{color:"black"}//省份标签字体颜色
          },
          emphasis: {//对应的鼠标悬浮效果
              show: true,
              textStyle:{color:"#323232"}
          }
      },
      itemStyle: {
          normal: {
              borderWidth: .5,//区域边框宽度
              borderColor: '#0550c3',//区域边框颜色
          },
          emphasis: {
              borderWidth: .5,
              borderColor: '#4b0082',
              areaColor:"#ece39e",
          }
      },
    }
  ],
  visualMap:[{//option4.visualMap[0].min
    show:true,
    type: 'piecewise',                     // 'continuous'连续型 viusalMap,'piecewise'分段型 
    inRange: {//配置颜色渐变范围
      //color: ['#66001D', '#D75F4F', '#FDDCC5', '#D1E4F0', '#4195C4', '#063061']
      color: ['#063061', '#4195C4', '#D1E4F0', '#FDDCC5', '#D75F4F', '#66001D']
    },
    min:0,
    max:600,
    splitNumber:5,//数据分段
    textStyle: {
        color: "#fff"
    },
    bottom:"10%",
    left:"3%"
  }]
 };

 


/*
  switch (Chinese_) {
    case "中国":
        var type = 0;
        if(chanxiao=="产量"){
          type = 0;
        }else{
          type = 1;
        }
        tmpSeriesData = seriesData;
        //mapTip隐藏
        var mapTip = document.getElementById("mapTip");
        mapTip.style.display="none";
        break;
    case "安徽":
        tmpSeriesData = [
            {name: '合肥市', value: 120},
            {name: '芜湖市', value: 130},
            {name: '蚌埠市', value: 101},
            {name: '淮南市', value: 101},
            {name: '马鞍山市',value:110},
            {name: '淮北市', value: 101},
            {name: '铜陵市', value: 101},
            {name: '安庆市', value: 101},
            {name: '黄山市', value: 101},
            {name: '滁州市', value: 101},
            {name: '阜阳市', value: 101},
            {name: '宿州市', value: 101},
            {name: '六安市', value: 101},
            {name: '亳州市', value: 102},
            {name: '池州市', value: 101},
            {name: '宣城市', value: 101}
        ]
        break;
    case "澳门":
        tmpSeriesData = [
            {name: '花地玛堂区', value: 101},
            {name: '花王堂区', value: 100},
            {name: '望德堂区', value: 101},
            {name: '大堂区', value: 101},
            {name: '风顺堂区', value: 110},
            {name: '嘉模堂区', value: 110},
            {name: '路凼填海区', value: 101},
            {name: '圣方济各堂区', value: 110},
        ]
        break;
    case "北京":
        tmpSeriesData = [
            {name: '东城区', value: 100},
            {name: '西城区', value: 100},
            {name: '朝阳区', value: 100},
            {name: '丰台区', value: 100},
            {name: '石景山区', value: 100},
            {name: '海淀区', value: 100},
            {name: '门头沟区', value: 100},
            {name: '房山区', value: 100},
            {name: '通州区', value: 100},
            {name: '顺义区', value: 100},
            {name: '昌平区', value: 100},
            {name: '大兴区', value: 100},
            {name: '怀柔区', value: 100},
            {name: '平谷区', value: 100},
            {name: '密云区', value: 100},
            {name: '延庆区', value: 100}
        ]
        break;
    case "重庆":
        tmpSeriesData = [
            {name: '万州区', value: 100},
            {name: '涪陵区', value: 100},
            {name: '渝中区', value: 100},
            {name: '大渡口区', value: 100},
            {name: '江北区', value: 100},
            {name: '沙坪坝区', value: 100},
            {name: '九龙坡区', value: 100},
            {name: '南岸区', value: 100},
            {name: '北碚区', value: 100},
            {name: '綦江区', value: 100},
            {name: '大足区', value: 100},
            {name: '渝北区', value: 100},
            {name: '巴南区', value: 100},
            {name: '黔江区', value: 100},
            {name: '长寿区', value: 100},
            {name: '江津区', value: 100},
            {name: '合川区', value: 100}
        ]
        break;
    case "福建":
        tmpSeriesData = [
            {name: '福州市', value: 100},
            {name: '厦门市', value: 100},
            {name: '莆田市', value: 100},
            {name: '三明市', value: 100},
            {name: '泉州市', value: 100},
            {name: '漳州市', value: 100},
            {name: '南平市', value: 100},
            {name: '龙岩市', value: 100},
            {name: '宁德市', value: 100},
        ]
        break;
    case "甘肃":
        tmpSeriesData = [
            {name: '兰州市', value: 100},
            {name: '嘉峪关市', value: 100},
            {name: '金昌市', value: 100},
            {name: '白银市', value: 100},
            {name: '天水市', value: 100},
            {name: '武威市', value: 100},
            {name: '平凉市', value: 100},
            {name: '酒泉市', value: 100},
            {name: '庆阳市', value: 100},
            {name: '定西市', value: 100},
            {name: '陇南市', value: 100},
            {name: '临夏回族自治州', value: 100},
            {name: '甘南藏族自治州', value: 100},
        ]
        break;
    case "广东":
        tmpSeriesData = [
            {name: '广州市', value: 100},
            {name: '韶关市', value: 100},
            {name: '深圳市', value: 100},
            {name: '珠海市', value: 100},
            {name: '汕头市', value: 100},
            {name: '佛山市', value: 100},
            {name: '江门市', value: 100},
            {name: '湛江市', value: 100},
            {name: '茂名市', value: 100},
            {name: '肇庆市', value: 100},
            {name: '惠州市', value: 100},
            {name: '梅州市', value: 100},
            {name: '汕尾市', value: 100},
            {name: '河源市', value: 100},
            {name: '阳江市', value: 100},
            {name: '清远市', value: 100},
            {name: '东莞市', value: 100}
        ]
        break;
    case "广西":
        tmpSeriesData = [
            {name: '南宁市', value: 100},
            {name: '柳州市', value: 100},
            {name: '桂林市', value: 100},
            {name: '梧州市', value: 100},
            {name: '北海市', value: 100},
            {name: '防城港市', value: 100},
            {name: '钦州市', value: 100},
            {name: '贵港市', value: 100},
            {name: '玉林市', value: 100},
            {name: '百色市', value: 100},
            {name: '贺州市', value: 100},
            {name: '河池市', value: 100},
            {name: '来宾市', value: 100},
            {name: '崇左市', value: 100},
        ]
        break;
    case "贵州":
        tmpSeriesData = [
            {name: '贵阳市', value: 100},
            {name: '六盘水市', value: 100},
            {name: '遵义市', value: 100},
            {name: '安顺市', value: 100},
            {name: '毕节市', value: 100},
            {name: '铜仁市', value: 100},
            {name: '黔西南布依族苗族自治州', value: 100},
            {name: '黔东南苗族侗族自治州', value: 100},
            {name: '黔南布依族苗族自治州', value: 100},
        ]
        break;
    case "海南":
        tmpSeriesData = [
            {name: '海口市', value: 100},
            {name: '三亚市', value: 100},
            {name: '三沙市', value: 100},
            {name: '儋州市', value: 100},
            {name: '五指山市', value: 100},
            {name: '琼海市', value: 100},
            {name: '文昌市', value: 100},
            {name: '万宁市', value: 100},
            {name: '东方市', value: 100},
            {name: '安定县', value: 100},
            {name: '屯昌县', value: 100},
            {name: '澄迈县', value: 100},
            {name: '临高县', value: 100},
            {name: '白沙黎族自治县', value: 100},
            {name: '昌江黎族自治县', value: 100},
            {name: '乐东黎族自治县', value: 100},
            {name: '陵水黎族自治县', value: 100},
            {name: '保亭黎族苗族自治县', value: 100},
            {name: '琼中黎族苗族自治县', value: 100},
        ]
        break;
    case "河北":
        tmpSeriesData = [
            {name: '石家庄市', value: 100},
            {name: '唐山市', value: 100},
            {name: '秦皇岛市', value: 100},
            {name: '邯郸市', value: 100},
            {name: '邢台市', value: 100},
            {name: '保定市', value: 100},
            {name: '张家口市', value: 100},
            {name: '常德市', value: 100},
            {name: '沧州市', value: 100},
            {name: '廊坊市', value: 100},
            {name: '衡水市', value: 100},
        ]
        break;
    case "黑龙江":
        tmpSeriesData = [
            {name: '哈尔滨市', value: 100},
            {name: '齐齐哈尔市', value: 100},
            {name: '鸡西市', value: 100},
            {name: '鹤岗市', value: 100},
            {name: '双鸭山市', value: 100},
            {name: '大庆市', value: 100},
            {name: '伊春市', value: 100},
            {name: '佳木斯市', value: 100},
            {name: '七台河市', value: 100},
            {name: '牡丹江市', value: 100},
            {name: '黑河市', value: 100},
            {name: '绥化市', value: 100},
            {name: '大兴安岭市', value: 100},
        ]
        break;
    case "河南":
        tmpSeriesData = [
            {name: '郑州市', value: 100},
            {name: '开封市', value: 100},
            {name: '洛阳市', value: 100},
            {name: '平顶山市', value: 100},
            {name: '安阳市', value: 100},
            {name: '鹤壁市', value: 100},
            {name: '新乡市', value: 100},
            {name: '焦作市', value: 100},
            {name: '濮阳市', value: 100},
            {name: '许昌市', value: 100},
            {name: '漯河市', value: 100},
            {name: '三门峡市', value: 100},
            {name: '南阳市', value: 100},
            {name: '商丘市', value: 100},
            {name: '信阳市', value: 100},
            {name: '周口市', value: 100},
            {name: '驻马店市', value: 100},
            {name: '济源市', value: 100},
        ]
        break;
    case "湖北":
        tmpSeriesData = [
            {name: '武汉市', value: 100},
            {name: '黄石市', value: 100},
            {name: '十堰市', value: 100},
            {name: '宜昌市', value: 100},
            {name: '襄阳市', value: 100},
            {name: '鄂州市', value: 100},
            {name: '荆门市', value: 100},
            {name: '孝感市', value: 100},
            {name: '荆州市', value: 100},
            {name: '咸宁市', value: 100},
            {name: '随州市', value: 100},
            {name: '仙桃市', value: 100},
            {name: '潜江市', value: 100},
            {name: '天门市', value: 100},
            {name: '黄冈市', value: 100},
            {name: '神农架林区', value: 100},
            {name: '恩施土家族苗族自治州', value: 100}
        ]
        break;
    case "湖南":
        tmpSeriesData = [
            {name: '长沙市', value: 100},
            {name: '株洲市', value: 100},
            {name: '湘潭市', value: 100},
            {name: '衡阳市', value: 100},
            {name: '邵阳市', value: 100},
            {name: '岳阳市', value: 100},
            {name: '常德市', value: 100},
            {name: '张家界市', value: 100},
            {name: '益阳市', value: 100},
            {name: '郴州市', value: 100},
            {name: '永州市', value: 100},
            {name: '怀化市', value: 100},
            {name: '娄底市', value: 100},
            {name: '湘西土家族苗族自治州', value: 100},
        ]
        break;
    case "江苏":
        tmpSeriesData = [
            {name: '南京市', value: 100},
            {name: '无锡市', value: 100},
            {name: '徐州市', value: 100},
            {name: '常州市', value: 100},
            {name: '苏州市', value: 100},
            {name: '南通市', value: 100},
            {name: '连云港市', value: 100},
            {name: '淮安市', value: 100},
            {name: '盐城市', value: 100},
            {name: '扬州市', value: 100},
            {name: '镇江市', value: 100},
            {name: '泰州市', value: 100},
            {name: '宿迁市', value: 100},
        ]
        break;
    case "江西":
        tmpSeriesData = [
            {name: '南昌市', value: 100},
            {name: '景德镇市', value: 100},
            {name: '萍乡市', value: 100},
            {name: '九江市', value: 100},
            {name: '新余市', value: 100},
            {name: '鹰潭市', value: 100},
            {name: '赣州市', value: 100},
            {name: '吉安市', value: 100},
            {name: '宜春市', value: 100},
            {name: '抚州市', value: 100},
            {name: '上饶市', value: 100},
        ]
        break;
    case "吉林":
        tmpSeriesData = [
            {name: '长春市', value: 100},
            {name: '吉林市', value: 100},
            {name: '四平市', value: 100},
            {name: '辽源市', value: 100},
            {name: '通化市', value: 100},
            {name: '白山市', value: 100},
            {name: '松原市', value: 100},
            {name: '白城市', value: 100},
            {name: '延边朝鲜族自治州', value: 100},
        ]
        break;
    case "辽宁":
        tmpSeriesData = [
            {name: '沈阳市', value: 100},
            {name: '大连市', value: 100},
            {name: '鞍山市', value: 100},
            {name: '抚顺市', value: 100},
            {name: '本溪市', value: 100},
            {name: '丹东市', value: 100},
            {name: '锦州市', value: 100},
            {name: '营口市', value: 100},
            {name: '阜新市', value: 100},
            {name: '辽阳市', value: 100},
            {name: '盘锦市', value: 100},
            {name: '铁岭市', value: 100},
            {name: '朝阳市', value: 100},
            {name: '葫芦岛市', value: 100},
        ]
        break;
    case "内蒙古":
        tmpSeriesData = [
            {name: '呼和浩特市', value: 100},
            {name: '包头市', value: 100},
            {name: '乌海市', value: 100},
            {name: '赤峰市', value: 100},
            {name: '通辽市', value: 100},
            {name: '鄂尔多斯市', value: 100},
            {name: '呼伦贝尔市', value: 100},
            {name: '巴彦淖尔市', value: 100},
            {name: '乌兰察布市', value: 100},
            {name: '兴安盟', value: 100},
            {name: '锡林郭勒盟', value: 100},
            {name: '阿拉善盟', value: 100},
        ]
        break;
    case "宁夏":
        tmpSeriesData = [
            {name: '银川市', value: 100},
            {name: '石嘴山市', value: 100},
            {name: '吴忠市', value: 100},
            {name: '固原市', value: 100},
            {name: '中卫市', value: 100},
        ]
        break;
    case "青海":
        tmpSeriesData = [
            {name: '西宁市', value: 100},
            {name: '海东市', value: 100},
            {name: '海北藏族自治州', value: 100},
            {name: '黄南藏族自治州', value: 100},
            {name: '海南藏族自治州', value: 100},
            {name: '果洛藏族自治州', value: 100},
            {name: '玉树藏族自治州', value: 100},
            {name: '海西蒙古族藏族自治州', value: 100},
        ]
        break;
    case "山东":
        tmpSeriesData = [
            {name: '济南市', value: 100},
            {name: '青岛市', value: 100},
            {name: '淄博市', value: 100},
            {name: '枣庄市', value: 100},
            {name: '东营市', value: 100},
            {name: '烟台市', value: 100},
            {name: '潍坊市', value: 100},
            {name: '济宁市', value: 100},
            {name: '泰安市', value: 100},
            {name: '威海市', value: 100},
            {name: '日照市', value: 100},
            {name: '莱芜市', value: 100},
            {name: '临沂市', value: 100},
            {name: '德州市', value: 100},
            {name: '聊城市', value: 100},
            {name: '滨州市', value: 100},
            {name: '菏泽市', value: 100},
        ]
        break;
    case "山西":
      alert("山西")
        tmpSeriesData = [
            {name: '太原市', value: 100},
            {name: '大同市', value: 100},
            {name: '阳泉市', value: 100},
            {name: '长治市', value: 100},
            {name: '晋城市', value: 100},
            {name: '朔州市', value: 100},
            {name: '晋中市', value: 100},
            {name: '运城市', value: 100},
            {name: '忻州市', value: 100},
            {name: '临汾市', value: 100},
            {name: '吕梁市', value: 100},
        ]
        break;
    case "陕西":
      alert("陕西")
        tmpSeriesData = [
            {name: '西安市', value: 100},
            {name: '铜川市', value: 100},
            {name: '宝鸡市', value: 100},
            {name: '咸阳市', value: 100},
            {name: '渭南市', value: 100},
            {name: '延安市', value: 100},
            {name: '汉中市', value: 100},
            {name: '榆林市', value: 100},
            {name: '安康市', value: 100},
            {name: '商洛市', value: 100},
        ]
        break;
    case "新疆":
        tmpSeriesData = [
            {name: '乌鲁木齐市', value: 100},
            {name: '克拉玛依市', value: 100},
            {name: '吐鲁番市', value: 100},
            {name: '昌吉回族自治州', value: 100},
            {name: '博尔塔拉蒙古自治州', value: 100},
            {name: '巴音郭楞蒙古自治州', value: 100},
            {name: '阿克苏地区', value: 100},
            {name: '克孜勒苏柯尔克孜自治州', value: 100},
            {name: '喀什地区', value: 100},
            {name: '和田地区', value: 100},
            {name: '伊犁哈萨克自治州', value: 100},
            {name: '塔城地区', value: 100},
            {name: '阿勒泰地区', value: 100},
            {name: '石河子市', value: 100},
            {name: '阿拉尔市', value: 100},
            {name: '图木舒克市', value: 100},
            {name: '五家渠市', value: 100},
            {name: '北屯市', value: 100},
            {name: '铁门关市', value: 100},
            {name: '双河市', value: 100},
            {name: '可克达拉市', value: 100},
            {name: '昆玉市', value: 100},
            {name: '哈密市', value: 100}
        ]
        break;
    case "浙江":
        tmpSeriesData=[
            {name: '杭州市',value: 100},
            {name: '宁波市',value: 100},
            {name: '温州市',value: 100},
            {name: '嘉兴市',value: 100},
            {name: '湖州市',value: 100},
            {name: '绍兴市',value: 100},
            {name: '金华市',value: 100},
            {name: '衢州市',value: 100},
            {name: '舟山市',value: 100},
            {name: '台州市',value: 100},
            {name: '丽水市',value: 100}
            ]
        break;
      case "云南":
        tmpSeriesData=[
            {name: '昆明市',value: 100},
            {name: '曲靖市',value: 100},
            {name: '玉溪市',value: 100},
            {name: '保山市',value: 100},
            {name: '昭通市',value: 100},
            {name: '丽江市',value: 100},
            {name: '普洱市',value: 100},
            {name: '临沧市',value: 100},
            {name: '楚雄彝族自治州',value: 100},
            {name: '红河哈尼族彝族自治州',value: 100},
            {name: '文山壮族苗族自治州',value: 100},
            {name: '大理白族自治州',value: 100},
            {name: '德宏傣族景颇族自治州',value: 100},
            {name: '怒江傈僳族自治州',value: 100},
            {name: '迪庆藏族自治州',value: 100},
            {name: '西双版纳傣族自治州',value: 100}
            ]
        break;
    case "西藏":
        tmpSeriesData=[
            {name: '拉萨市',value: 100},
            {name: '日喀则市',value: 100},
            {name: '昌都市',value: 100},
            {name: '山南市',value: 100},
            {name: '那曲地区',value: 100},
            {name: '阿里地区',value: 100},
            {name: '林芝市',value: 100},
            {name: '山南市',value: 100}
            ]
        break;
        case "香港":
        tmpSeriesData=[
            {name: '中西区',value: 100},
            {name: '湾仔区',value: 100},
            {name: '东区',value: 100},
            {name: '南区',value: 100},
            {name: '油尖旺区',value: 100},
            {name: '深水埗区',value: 100},
            {name: '九龙城区',value: 100},
            {name: '观塘区',value: 100},
            {name: '荃湾区',value: 100},
            {name: '屯门区',value: 100},
            {name: '元朗区',value: 100},
            {name: '北区',value: 100},
            {name: '大埔区',value: 100},
            {name: '西贡区',value: 100},
            {name: '沙田区',value: 100},
            {name: '葵青区',value: 100},
            {name: '离岛区',value: 100},
            {name: '黄大仙区',value: 100}
            ]
        break;
    case "天津":
        tmpSeriesData=[
            {name: '和平区',value: 100},
            {name: '河东区',value: 100},
            {name: '河西区',value: 100},
            {name: '南开区',value: 100},
            {name: '河北区',value: 100},
            {name: '红桥区',value: 100},
            {name: '东丽区',value: 100},
            {name: '西青区',value: 100},
            {name: '津南区',value: 100},
            {name: '北辰区',value: 100},
            {name: '武清区',value: 100},
            {name: '宝坻区',value: 100},
            {name: '滨海新区',value: 100},
            {name: '宁河区',value: 100},
            {name: '静海区',value: 100},
            {name: '蓟州区',value: 100}
            ]
        break;
        case "四川":
        tmpSeriesData=[
            {name: '成都市',value: 100},
            {name: '自贡市',value: 100},
            {name: '攀枝花市',value: 100},
            {name: '泸州市',value: 100},
            {name: '德阳市',value: 100},
            {name: '绵阳市',value: 100},
            {name: '广元市',value: 100},
            {name: '遂宁市',value: 100},
            {name: '内江市',value: 100},
            {name: '乐山市',value: 100},
            {name: '南充市',value: 100},
            {name: '眉山市',value: 100},
            {name: '宜宾市',value: 100},
            {name: '广安市',value: 100},
            {name: '达州市',value: 100},
            {name: '巴中市',value: 100},
            {name: '资阳市',value: 100},
            {name: '阿坝藏族羌族自治州',value: 100},
            {name: '甘孜藏族自治州',value: 100},
            {name: '凉山彝族自治州',value: 100},
            {name: '雅安市',value: 100}
            ]
        break;
        case "上海":
        tmpSeriesData=[
            {name: '黄浦区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},//point表示销售点/产地的该农产品产量
            {name: '徐汇区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '长宁区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '静安区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '普陀区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '虹口区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '杨浦区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '闵行区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '宝山区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name:'浦东新区',value:111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '金山区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '松江区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '青浦区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '奉贤区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '崇明区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]},
            {name: '嘉定区',value: 111,point:[{name:"aaa",value:23},{name:"abb",value:23},{name:"aaa",value:23}]}
            ];
        break;
    default:
        tmpSeriesData = [];
        break;
  }
  */



  // 产销显示
  var type = 0;
  if(chanxiao=="产量"){
    type = 0;
  }else{
    type = 1;
  }
  var pathNow="https://mock.apifox.cn/m1/1744531-0-default/app/ThisYearProvOutputAndSale";
  if(pathUse){pathNow=path+"app/ThisYearProvOutputAndSale";}
  if(pName=="china"){
    //mapTip隐藏
    var mapTip = document.getElementById("mapTip");
    mapTip.style.display="none";
    // ajax
    $.get(pathNow,{name:species,type:type},function(data,status){
      tmpSeriesData = data;
      console.log(data)
      option4.series[0].data = tmpSeriesData;
      rangeLevel();
      center1.clear();
      center1.setOption(option4);
    })
    
  }else{
    if(type==0){//产量
      pathNow = "https://mock.apifox.cn/m1/1744531-0-default/app/ThisYearPointOutput";
      if(pathUse){pathNow=path+"app/ThisYearPointOutput";}
    $.get(pathNow,{name:species,province:Chinese_},function(data,status){
      tmpSeriesData = data;
      option4.series[0].data = tmpSeriesData;
      rangeLevel();
      center1.clear();
      center1.setOption(option4);
    })}else{//销量
      pathNow = "https://mock.apifox.cn/m1/1744531-0-default/app/ThisYearPointSale"
      if(pathUse){pathNow=path+"app/ThisYearPointSale";}
      $.get(pathNow,{name:species,province:Chinese_},function(data,status){
      tmpSeriesData = data;
      option4.series[0].data = tmpSeriesData;
      rangeLevel();
      center1.clear();
      center1.setOption(option4);
    })
    }
  }
  /*
  console.log("---------------------seriesData打印中")
  console.log(tmpSeriesData)
  console.log("tmpSeriesData[0]:name="+tmpSeriesData[0].name+",value="+tmpSeriesData[0].value)
  console.log("tmpSeriesData[1]:name="+tmpSeriesData[1].name+",value="+tmpSeriesData[1].value)
  console.log("---------------------seriesData打印完毕")
  */
  
center1.setOption(option4);
center1.off("click");
if (pName === "china") { // 全国时，添加click 进入省级
    center1.on('click', function (param) {
    // 遍历取到provincesText 中的下标  去拿到对应的省js
    for (var i = 0; i < provincesText.length; i++) {
      if (param.name === provincesText[i]) {
        //显示对应省份的方法
        showProvince(provinces[i], provincesText[i]);
        break;
      }
    }
  });
} else { 
    center1.on("click", function (param) {
        showMapTip(param)
    });
    // 省份，添加双击 回退到全国
    center1.on("dblclick", function () {
      //初始化中国地图
      initEcharts("china", "中国");
    });
}

function rangeLevel(){
  console.log("--------------tmp=")
  console.log(tmpSeriesData)
  //遍历数组
  var values = [];
  for(var i=0;i<tmpSeriesData.length;i++){
    values.push(tmpSeriesData[i].value);
  }
  console.log("-------------values=")
  console.log(values);
  var min = Math.min(...values);
  var max = Math.max(...values);
  option4.visualMap[0].min = min;
  option4.visualMap[0].max = max;
}

}


//显示销售点/生产点 的 具体数据
function showMapTip(param){
  /*
  console.log("---------------------showTip:seriesData打印中")
  console.log(tmpSeriesData)
  console.log("tmpSeriesData[0]:name="+tmpSeriesData[0].name+",value="+tmpSeriesData[0].value)
  console.log("tmpSeriesData[1]:name="+tmpSeriesData[1].name+",value="+tmpSeriesData[1].value)
  console.log("---------------------showTip:seriesData打印完毕")
  */
  //销售点信息提取
  var points = tmpSeriesData[param.dataIndex].point;
  //标头信息修改
  var mapTipTitle = document.getElementById("mapTipTitle");
  mapTipTitle.innerText=param.name;
  var mapTipUl = document.getElementById("mapTipUl")
  var lis="";
  if(chanxiao==="产量"){
    lis+='<li class="clearfix"><span class="mapTip_left">产地点</span><span class="mapTip_right">产量（公斤）</span></li>';
  }else{
    lis+='<li class="clearfix"><span class="mapTip_left">销售点</span><span class="mapTip_right">销量（公斤）</span></li>';
  }
  for(var k in points){
    console.log("points[k]="+points[k])
    lis+='<li class="clearfix"><span class="mapTip_left">'+points[k].name+'</span><span class="mapTip_right">'+points[k].value+'</span></li>';
  }
  mapTipUl.innerHTML=lis;
  //mapTip显示
  var mapTip = document.getElementById("mapTip");
  mapTip.style.display="block";
}



// 展示对应的省
function showProvince(pName, Chinese_) {
//这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
loadBdScript('$' + pName + 'JS', 'js/map/' + pName + '.js', function () {
  initEcharts(pName,Chinese_);
});
}

// 加载对应的JS
function loadBdScript(scriptId, url, callback) {
var script = document.createElement("script");
script.type = "text/javascript";
if (script.readyState) {  //IE
  script.onreadystatechange = function () {
    if (script.readyState === "loaded" || script.readyState === "complete") {
      script.onreadystatechange = null;
      callback();
    }
  };
} else {  // Others
  script.onload = function () {
    callback();
  };
}
script.src = url;
script.id = scriptId;
document.getElementsByTagName("head")[0].appendChild(script);
};














































//option
//2
var option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  color:color2,
  legend: {
    top: "4%",
    data: ['销量','产量'],
    left:"60%",
    textStyle:{
      color:'#bbb'
    }
  },
  grid: {
    left: '1%',
    right: '6%',
    bottom: '3%',
    borderColor:'#f00',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    nameRotate:90,
    axisLine: {lineStyle: {color: '#57617B'}},
    axisLabel: {interval:0,textStyle: {color:'#ccc',},rotate:40,formatter:'{value}公斤'},
    splitLine: {
      show: true,
      lineStyle:{
          type:'dashed',
          color: ['#25CEF3']
      }
  }
  },
  yAxis: {
    type: 'category',
    data: data2.name,
    inverse:true,//翻转
    axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {interval:0,textStyle: {color:'#ccc',}}
  },
  series: [
    {
      name:'销量',
      type:'bar',
      barWidth:8,
      itemStyle : { 
        normal: {
        barBorderRadius:[ 0, 10, 10, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#4B5CC4"
          }, {
              offset: 0.8,
              color: "#00B7FF"
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        }
      },
      data:data2.sale
    },
    {
      name:'产量',
      type:'bar',
      barWidth:8,
      itemStyle : { 
        normal: {
        barBorderRadius:[0, 10, 10, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#905D9A"
          }, {
              offset: 0.8,
              color: "#F8726F" 
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        }
      },
      data:data2.output
    }
  ]
};


//3
var option3 = {
  color: color,
  // 两列图例
  legend: [{
      orient: "vartical",
      x: "left",
      top: "center",
      left: "67%",
      bottom: "0%",
      data: ['第一季度','第二季度','第三季度','第四季度'],
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
          color: '#fff'
      },
      formatter: function(name) {
          return '' + name
      }
  }],
  // 数据表
  series: {
    type: 'pie',
    clockwise: false, //饼图的扇区是否是顺时针排布
    minAngle: 2, //最小的扇区角度（0 ~ 360）
    radius: ["20%", "60%"],
    center: ["35%", "45%"],
    avoidLabelOverlap: false,
    itemStyle: { //图形样式
        normal: {
            borderColor: '#ffffff',
            borderWidth: 1,
        },
    },
    label: {
        normal: {
            show: false,
            position: 'center',
            formatter: '{text|{b}}\n{c} ({d}%)',
            rich: {
                text: {
                    color: "#fff",
                    fontSize: 14,
                    align: 'center',
                    verticalAlign: 'middle',
                    padding: 8
                },
                value: {
                    color: "#8693F3",
                    fontSize: 24,
                    align: 'center',
                    verticalAlign: 'middle',
                },
            }
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: 24,
            }
        }
    },
    // 数据
    data: data3.data
  }
}

//5
var option5 = {
  tooltip: {trigger: 'axis',},
  grid: {left:'9%',right: '3%',bottom:'18%'},
  xAxis: [
      {
          type: 'category',
          axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {interval:0,textStyle: {color:'#ccc',}},
          axisLabel: {
            interval:0,
            textStyle: {
              color:'#ccc',
            },
            formatter:'{value}日'
          },
          data:data5.x
      }
  ],
  yAxis: [{
      type: 'value',
       axisTick: {
           show: false
       },
       axisLine: {lineStyle: {color: '#57617B'}},
       axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#ccc'},formatter:'{value}公斤'},
       splitLine: {
             show: true,
             lineStyle:{
                 type:'dashed',
                 color: ['#25CEF3']
             }
         }

   }],
  series: [
      {
          name:'日产量',
          type:'bar',
          barWidth:8,
          itemStyle : { 
            normal: {
            barBorderRadius:[10, 10, 0, 0],
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#043c78"//"#009AFD"
              }, {
                  offset: 0.8,
                  color: "#33DAFF" 
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
          }
          },
          data:data5.y1
      },
      {
        name:'日销量',
        type:'bar',
        barWidth:8,
        itemStyle : { 
          normal: {
          barBorderRadius:[10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "#117c6f"
            }, {
                offset: 0.8,
                color: "#B2F0E8" 
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
        }
        },
        data:data5.y2
    }
  ]
}

//8
var maxOrder=Math.max.apply(null,data8.y2);
var option8 = {
  tooltip: {trigger: 'axis'},
  grid: {left: '13%',right: '12%',bottom: '10%'},
  // x轴
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      interval:0,
      textStyle: {
        color:'#fff',
      },
      formatter:'{value}日'
    },
    data: data8.x
  },
  // y轴
  yAxis:[{
    type: 'value',name: '',
    axisLine: {lineStyle: {color: '#57617B'}},
    axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#ccc'},formatter:'{value}次'},
    splitLine: {show: false}	
  },
  {
    type: 'value',name: '',//max:maxOrder+parseInt(maxOrder*0.2),
     axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#ccc'},formatter:'{value}人'},
     splitLine: {
      show: true,
      lineStyle:{
        type:'dashed',
        color: ['#25CEF3']
      }
    }	
  }],
  // 数据
  series: [{
    name:'查询次数',
    type:'line',
    yAxisIndex:0,
    smooth: false,
    symbolSize:5,
    lineStyle: { normal: {width: 2}},
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(230, 48, 123, 0.8)'
        }, {
            offset: 0.8,
            color: 'rgba(230, 48, 123, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {normal: { color: '#DA2F78'}},
    data:data8.y1
  },
    {
      name:'新增用户数',
      type:'bar',
      barWidth:12,
      yAxisIndex:1,
      itemStyle : { 
        normal: {
          barBorderRadius:[10, 10, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: "#4033F9"
          }, {
            offset: 0.8,
            color: "#BA97F9" 
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        }
      },
      data:data8.y2
    }
  ]
};


// 总产量数据修改
function total(newNum){
  // 换算单位
  var numIn = newNum;
  if(numIn<0)numIn=0-numIn;
  var level = weightLevel(numIn);
  var numOut = newWeight(numIn,level);
  // 修改数值
  document.getElementById('totalNum').innerHTML = numOut;
  document.getElementById('totalDanwei').innerHTML = danwei[level];
}
// 基本信息修改
function base(num1,num2,num3,num4,num5){
  document.getElementById("indicator0").innerHTML = num5;
  document.getElementById("indicator1").innerHTML = num1;
  document.getElementById("indicator2").innerHTML = num2;
  document.getElementById("indicator3").innerHTML = num3;
  document.getElementById("indicator4").innerHTML = num4;
  document.getElementById("indicator5").innerHTML = num5;
  document.getElementById("indicator6").innerHTML = num1;
  document.getElementById("indicator7").innerHTML = num2;
}

// 获取基础数据
function getData(){
  //基本信息
  //total(sumNum);
  base(data.data1,data.data2,data.data3,data.data4,data.data5);
}

//种类选择按钮
function changeOption(){
  //固定数据图标刷新
  left2.clear();left2.setOption(option2,true);
  right3.clear();right3.setOption(option8,true);
  //根据species获取新数据(除了地图)
    // $ 单种类农产品产销基本数据
    var pathNow="https://mock.apifox.cn/m2/1744531-0-default/48551803";
    if(pathUse){pathNow=path+"app/Species";}
    $.get(pathNow,{name:species},function(data,status){
    //总产量
    total(data.total);
    //left3四个季度分布
    left3.clear();
    data3.data = data.data1;
    changeWeightLevel3();
    option3.series.data = data3.data;
    left3.setOption(option3,true);
    //center2上两周产量
    center2.clear();
    data5 = data.data2;
    /*
    console.log("----------------data5初始值");
    console.log(data5);
    console.log("--------------------------");
    */
    changeWeightLevel5();
    center2.clear();
    option5.xAxis[0].data = data5.x;
    option5.series[0].data = data5.y1;
    option5.series[1].data = data5.y2;
    center2.setOption(option5,true);
    
  /*
    //测试
    //console.log("-----------------在农产品种类切换测试函数里")
    left3.clear();
    center2.clear();

    if(species=="西红柿"){
      //console.log("你选中了"+species);
      total(1);
      data3.data = option3.series.data = [
        {"value":1,"name":"第一季度","propor":
        [
          {"kind":"西红柿1","value":120},
          {"kind":"广州1","value":60},
          {"kind":"上海1","value":30}
        ]},
        {"value":300,"name":"第二季度","propor":
        [
          {"kind":"西红柿2","value":120},
          {"kind":"广州2","value":60},
          {"kind":"上海2","value":30}
        ]},
        {"value":440,"name":"第三季度","propor":
        [
          {"kind":"西红柿3","value":120},
          {"kind":"广州3","value":60},
          {"kind":"上海3","value":30}
        ]},
        {"value":490,"name":"第四季度","propor":
        [
          {"kind":"西红柿4","value":120},
          {"kind":"广州4","value":60},
          {"kind":"上海4","value":30}
        ]}
      ]

    }else if(species=="西芹"){
      //console.log("你选中了"+species);
      total(2);
      data3.data = option3.series.data = [
        {"value":400,"name":"第一季度","propor":
        [
          {"kind":"西芹1","value":120},
          {"kind":"广州1","value":60},
          {"kind":"上海1","value":30}
        ]},
        {"value":1,"name":"第二季度","propor":
        [
          {"kind":"西芹2","value":120},
          {"kind":"广州2","value":60},
          {"kind":"上海2","value":30}
        ]},
        {"value":440,"name":"第三季度","propor":
        [
          {"kind":"西芹3","value":120},
          {"kind":"广州3","value":60},
          {"kind":"上海3","value":30}
        ]},
        {"value":490,"name":"第四季度","propor":
        [
          {"kind":"西芹4","value":120},
          {"kind":"广州4","value":60},
          {"kind":"上海4","value":30}
        ]}
      ]
    }else {
      //console.log("你选中了的不是西红柿或西芹");
      total(0);
    }
    left3.setOption(option3,true);
    //console.log("data="+option3.series.data[0].propor[0].kind)
    center2.setOption(option5,true);
    //console.log("------------------离开测试函数了")
    */
    
    
    
    
    
  });

  


}
//显示新数据
function chooseData(name){
  species = name;
  //修改并显示option
  changeOption();
};
//修改option2
function changeOption2(){
  left2.clear();
  option2.yAxis.data=data2.name;
  option2.series[0].data=data2.sale;
  option2.series[1].data=data2.output;
  left2.setOption(option2);
}
//按钮初始化
var chooseLis = document.getElementById("chooseBox").getElementsByTagName("li");

function chooseBtu(){
  // 销产比前六农产品
  var pathNow="https://mock.apifox.cn/m1/1744531-0-default/app/First6";
  if(pathUse){pathNow=path+"app/First6";}
  $.get(pathNow,function(data,status){
    data2 = data;
    changeWeightLevel2();
    changeOption2()
    console.log(option2)
    species = data.name[0];
    chooseData(species);
    for(var i=0;i<6;i++){
      chooseLis[i].innerHTML = "<a>"+data.name[i]+"</a>";
    }
    //该农产品数据初始化,模拟鼠标点击状态
    chooseLis[0].click();
  });
}
//按钮事件绑定
for(var i=0;i<6;i++){
  chooseLis[i].onclick=function(){
    //更换数据,同时按钮高亮
    chooseData(this.getElementsByTagName("a")[0].innerHTML);
    //高亮
    var btus=document.getElementById("chooseBox").getElementsByTagName("li");
    for(var k=0;k<6;k++){
      btus[k].className="navOut";
    }
    this.className="navIn";
  }
}


//产销切换按钮
var chanliang=document.getElementById("chanliang");
var xiaoliang=document.getElementById("xiaoliang");
//高亮初始化
chanliang.className="navIn";
xiaoliang.className="navOut";
//事件绑定
chanliang.onclick=function(){
  chanxiao="产量";
  chanliang.className="navIn";
  xiaoliang.className="navOut";
  //API获取数据seriesData,参数:name=农产品类别,type=0
  var pathNow = "https://mock.apifox.cn/m1/1744531-0-default/app/ThisYearProvOutputAndSale";
  if(pathUse){pathNow=path+"app/ThisYearProvOutputAndSale";}
  $.get(pathNow,{name:species,type:0},function(data,status){
    tmpSeriesData = data;
    initEcharts("china","中国");
  })



  

}
xiaoliang.onclick=function(){
  chanxiao="销量";
  chanliang.className="navOut";
  xiaoliang.className="navIn";
  alert(this.innerHTML);
  var pathNow = "https://mock.apifox.cn/m1/1744531-0-default/app/ThisYearProvOutputAndSale";
  if(pathUse){pathNow=path+"app/ThisYearProvOutputAndSale";}
  $.get(pathNow,{name:species,type:1},function(data,status){
    tmpSeriesData = data;
    initEcharts("china","中国");
  })
}


//换算单位
function weightLevel(num){
  if(Math.floor(num/10000000000)>10){//千万吨
    return 3;
  }else if(Math.floor(num/10000000)>10){//万吨
    return 2;
  }else if(Math.floor(num/1000)>10){//吨
    return 1;
  }else{//公斤
    return 0;
  }
}
//根据单位换算数据
function newWeight(num,level){
  //保留三位小数
  var newNum;
  if(level==0){
    newNum = Math.floor(num*1000)/1000;
  }else if(level==1){
    newNum = Math.floor(num/1000*1000)/1000;
  }else if(level==2){
    newNum = Math.floor(num/10000000*1000)/1000;
  }else if(level==3){
    newNum = Math.floor(num/10000000000*1000)/1000;
  }
  return newNum;
}

//单位修改
function changeWeightLevel2(){
  //判断最大值
  var maxSale = Math.max(...data2.sale);
  var maxOutPut = Math.max(...data2.output);
  var maxNum = Math.max(maxSale,maxOutPut);
  //换算单位
  var level = weightLevel(maxNum);
  //逐个换算
  for(var i = 0;i<data2.sale.length;i++){
    data2.sale[i] = newWeight(data2.sale[i],level);
    data2.output[i] = newWeight(data2.output[i],level);
  }
  option2.xAxis.axisLabel.formatter='{value}'+danwei[level];
}
function changeWeightLevel3(){
  //判断最大值
  var values = [];
  for(i = 0;i<4;i++){
    values.push(data3.data[i].value);
  }
  var max = Math.max(...values);
  //换算单位
  var level = weightLevel(max);
  //逐个换算
  for(var i = 0;i<4;i++){
    data3.data[i].value = newWeight(data3.data[i].value,level);
  }
}
function changeWeightLevel5(){
  //判断最大值
  var values = [];
  for(i = 0;i<14;i++){
    values.push(data5.y1[i]);
    values.push(data5.y2[i]);
  }
  var max = Math.max(...values);
  //换算单位
  var level = weightLevel(max);
  //逐个换算
  for(var i = 0;i<14;i++){
    data5.y1[i] = newWeight(data5.y1[i],level);
    data5.y2[i] = newWeight(data5.y2[i],level);
  }
  option5.yAxis[0].axisLabel.formatter='{value}'+danwei[level];
}


//换算单位
function weightLevel8(num){
  if(Math.floor(num/100000000)>10){//亿
    return 3;
  }else if(Math.floor(num/1000000)>10){//百万
    return 2;
  }else if(Math.floor(num/1000)>10){//千
    return 1;
  }else{//1
    return 0;
  }
}
//根据单位换算数据
function newWeight8(num,level){
  //保留三位小数
  var newNum;
  if(level==0){
    newNum = Math.floor(num*1000)/1000;
  }else if(level==1){
    newNum = Math.floor(num/1000*1000)/1000;
  }else if(level==2){
    newNum = Math.floor(num/1000000*1000)/1000;
  }else if(level==3){
    newNum = Math.floor(num/100000000*1000)/1000;
  }
  return newNum;
}


// 初始化
function init(){
  
  left3.setOption(option3,true);//  option3 饼状图(一年内各月产量占比)+该月产量占比最高的三类农产量
  center2.setOption(option5,true);// option5 柱状图(月产量)
  right3.setOption(option8,true);//用户新增
  initEcharts("china", "中国");//map
  //不随农产品种类而改变的数据
  left2.setOption( option2,true);// option2 横向柱状图(各农产品销量-产量比排行)
  // option8 折线图(溯源信息每日查询数目)
  var pathNow="https://mock.apifox.cn/m1/1744531-0-default/app/SevenDay";
  if(pathUse){pathNow=path+"app/SevenDay";}
  $.get(pathNow,function(data,status){
    data8 = data;
    // 换算单位
    var values1 = [];
    var values2 = [];
    for(i = 0;i<7;i++){
      values1.push(data8.y1[i]);
      values2.push(data8.y2[i]);
    }
    var max1 = Math.max(...values1);
    var max2 = Math.max(...values2);
    var level1 = weightLevel(max1);
    var level2 = weightLevel(max2);
    for(var i = 0;i<7;i++){
      data8.y1[i] = newWeight(data8.y1[i],level1);
      data8.y2[i] = newWeight(data8.y2[i],level2);
    }
    option8.yAxis[0].axisLabel.formatter='{value}'+ci[level1];
    option8.yAxis[0].axisLabel.formatter='{value}'+ren[level2];





    // 修改数据
    option8.xAxis.data = data8.x;
    option8.series[0].data = data8.y1;
    option8.series[1].data = data8.y2;
    right3.clear()
    //maxOrder=Math.max.apply(null,data8.y2);
    right3.setOption(option8);
  })
  
  getData();//获取基础数据
  chooseBtu();//按钮显示+图表显示//left3+center2
  
};
// 初始化
init();












// tooltips自动轮播
function loopShowTooltip(chart, chartOption, options) {
  var defaultOptions = {
    interval: 2000,
    loopSeries: false,
    seriesIndex: 0,
    updateData: null
  };
  if (!chart || !chartOption) {
    return {};
  }
  var dataIndex = 0; // 数据索引，初始化为-1，是为了判断是否是第一次执行
  var seriesIndex = 0; // 系列索引
  var timeTicket = 0;
  var seriesLen = chartOption.series.length; // 系列个数
  var dataLen = 0; // 某个系列数据个数
  var chartType; // 系列类型
  var first = true;

  if (options) {
    options.interval = options.interval || defaultOptions.interval;
    options.loopSeries = options.loopSeries || defaultOptions.loopSeries;
    options.seriesIndex = options.seriesIndex || defaultOptions.seriesIndex;
    options.updateData = options.updateData || defaultOptions.updateData;
  } else {
    options = defaultOptions;
  }

  // 如果设置的seriesIndex无效，则默认为0
  if (options.seriesIndex < 0 || options.seriesIndex >= seriesLen) {
    seriesIndex = 0;
  } else {
    seriesIndex = options.seriesIndex;
  }
  // 开始轮播
  function autoShowTip() {
    function showTip() {
      // 判断是否更新数据
      if (dataIndex === 0 && !first && typeof options.updateData === "function") {
        options.updateData();
        chart.setOption(chartOption);
      }

      var series = chartOption.series;
      chartType = series[seriesIndex].type; // 系列类型
      dataLen = series[seriesIndex].data.length; // 某个系列的数据个数

      var tipParams = {seriesIndex: seriesIndex};
      switch (chartType) {
        case 'map':
        case 'pie':
        case 'chord':
          tipParams.name = series[seriesIndex].data[dataIndex].name;
          break;
        case 'radar': // 雷达图
          tipParams.seriesIndex = seriesIndex;
          tipParams.dataIndex = dataIndex;
          break;
        default:
          tipParams.dataIndex = dataIndex;
          break;
      }

      if (chartType === 'pie' || chartType === 'radar') {
        // 取消之前高亮的图形
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: options.loopSeries ? (seriesIndex === 0 ? seriesLen - 1 : seriesIndex - 1) : seriesIndex,
          dataIndex: dataIndex === 0 ? dataLen - 1 : dataIndex - 1
        });

        // 高亮当前图形
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: seriesIndex,
          dataIndex: dataIndex
        });
      }

      // 显示 tooltip
      tipParams.type = 'showTip';
      chart.dispatchAction(tipParams);

      dataIndex = (dataIndex + 1) % dataLen;
      if (options.loopSeries && dataIndex === 0 && !first) { // 数据索引归0表示当前系列数据已经循环完
        seriesIndex = (seriesIndex + 1) % seriesLen;
      }

      first = false;
    }
    showTip();
    timeTicket = setInterval(showTip, options.interval);
  }

  // 关闭轮播
  function stopAutoShow() {
    if (timeTicket) {
      clearInterval(timeTicket);
      timeTicket = 0;
      if (chartType === 'pie' || chartType === 'radar') {
        // 取消高亮的图形
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: options.loopSeries ? (seriesIndex === 0 ? seriesLen - 1 : seriesIndex - 1) : seriesIndex,
          dataIndex: dataIndex === 0 ? dataLen - 1 : dataIndex - 1
        });
      }
    }
  }

  var zRender = chart.getZr();

  function zRenderMouseMove(param) {
    if (param.event) {
      // 阻止canvas上的鼠标移动事件冒泡
      param.event.cancelBubble = true;
    }
    stopAutoShow();
  }

  // 离开echarts图时恢复自动轮播
  function zRenderGlobalOut() {
    if (!timeTicket) {
      autoShowTip();
    }
  }

  // 鼠标在echarts图上时停止轮播
  chart.on('mousemove', stopAutoShow);
  zRender.on('mousemove', zRenderMouseMove);
  zRender.on('globalout', zRenderGlobalOut);
  autoShowTip();
  return {
    
    clearLoop: function () {
      if (timeTicket) {
        clearInterval(timeTicket);
        timeTicket = 0;
      }
      chart.off('mousemove', stopAutoShow);
      zRender.off('mousemove', zRenderMouseMove);
      zRender.off('globalout', zRenderGlobalOut);
    },
    getIndex: function(){
      return dataIndex;
    }
  
  };



};

//tip轮播
var tootipTimer2=null;
var tootipTimer3=null;
var tootipTimer5=null;
var tootipTimer8=null;

  // 调用轮播的方法
  tootipTimer2=
  loopShowTooltip(left2, left2.getOption(), {
  	interval: 1000, // 轮播间隔时间
  	loopSeries: true // 是否开启轮播循环
  });
  tootipTimer3=
  loopShowTooltip(left3, left3.getOption(), {
  	interval: 1000, // 轮播间隔时间
  	loopSeries: true // 是否开启轮播循环
  });
  tootipTimer4=
  loopShowTooltip(center1, center1.getOption(), {
  	interval: 1000, // 轮播间隔时间
  	loopSeries: true // 是否开启轮播循环
  });
  tootipTimer5=
  loopShowTooltip(center2, center2.getOption(), {
  	interval: 1000, // 轮播间隔时间
  	loopSeries: true // 是否开启轮播循环
  });
  tootipTimer8=
  loopShowTooltip(right3, right3.getOption(), {
  	interval: 1000, // 轮播间隔时间
  	loopSeries: true // 是否开启轮播循环
  });


//表外固定tip
var tip2 = document.getElementById("tip2");
var tip3 = document.getElementById("tip3");
//表1
//根据index显示新的固定tip
function newTip2(index){
  if(index==0){
    string2="<span>销量产量比 "+data2.proportion[5]+"    排行 "+(6)+"</span>";
  }
  else{
    string2="<span>销量产量比 "+data2.proportion[index-1]+"    排行 "+(index)+"</span>";
  }
  tip2.innerHTML=string2;
}
//表3
function newTip3(index){
  index=(index+3)%4;
  //获取农产品地区数据
  var data = data3.data[index].propor;
  //数据规整
  //console.log("---------调整前数据---------")
  for(var i=0;i<3;i++){
    if(data[i].value<0){
      data[i].value = 0-data[i].value;
    }
    //console.log(data[i].value);
  }
  //修改显示条的文字内容
  var lis = tip3.getElementsByTagName("li");
  //计算比例
  var p=[];var v=[];var sum=0;
  for(var i=0;i<3;i++){
    sum+=data[i].value;
    v[i]=data[i].value;
  }
  //比例修正
  //console.log("--------调整后比例---------");
  for(var i=0;i<3;i++){
    p[i]=(v[i]+sum*0.5)/(sum*2.5);
    //console.log(p[i])
  }
  //console.log("-----------------");
  //修改
  for(var i=0;i<3;i++){
    lis[i].innerHTML="<span>"+data[i].kind+"</span>";
    lis[i].style.width=p[i]*100+"%";
  }
}
//表内外置tip动态
function otherTip(){
  //option2
  //√
  // clearInterval(timer);
  setInterval(function(){
    //当前index
    var index = tootipTimer2.getIndex();
    newTip2(index);
  },1000);

  //option3
  //√
  setInterval(function(){
    //当前index
    var index = tootipTimer3.getIndex();
    newTip3(index);
  },1000);
}
otherTip();





