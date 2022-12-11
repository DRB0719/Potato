  var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
  var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
  //省
  /*
  年度数据
  基础：合格率，总产量（产量热力图），总销量（销量热力图）
  市级：每个销售点的{农产品余量}//按存余量排行
  */
  var seriesData = [
      {name: '北京',value: 0,"sale":1},
      {name: '天津',value: 0,"sale":1},
      {name: '上海',value: 6,"sale":1},
      {name: '重庆',value: 0,"sale":1},
      {name: '河北',value: 0,"sale":1},
      {name: '河南',value: 0,"sale":1},
      {name: '云南',value: 0,"sale":1},
      {name: '辽宁',value: 0,"sale":1},
      {name: '黑龙江',value: 0,"sale":1},
      {name: '湖南',value: 0,"sale":1},
      {name: '安徽',value: 0,"sale":1},
      {name: '山东',value: 0,"sale":1},
      {name: '新疆',value: 0,"sale":1},
      {name: '江苏',value: 0,"sale":1},
      {name: '浙江',value: 0,"sale":1},
      {name: '江西',value:10,"sale":1},
      {name: '湖北',value:60,"sale":1},
      {name: '广西',value:60,"sale":1},
      {name: '甘肃',value: 0,"sale":1},
      {name: '山西',value:60,"sale":1},
      {name:'内蒙古',value:0,"sale":1},
      {name: '陕西',value: 0,"sale":1},
      {name: '吉林',value: 0,"sale":1},
      {name: '福建',value: 0,"sale":1},
      {name: '贵州',value: 0,"sale":1},
      {name: '广东',value: 597,"sale":1},
      {name: '青海',value: 0,"sale":1},
      {name: '西藏',value: 0,"sale":1},
      {name: '四川',value:60,"sale":1},
      {name: '宁夏',value: 0,"sale":1},
      {name: '海南',value:60,"sale":1},
      {name: '台湾',value: 0,"sale":1},
      {name: '香港',value: 0,"sale":1},
      {name: '澳门',value: 0,"sale":1}
  ];
  //市
  initEcharts("china", "中国");
    // 初始化echarts
    function initEcharts(pName, Chinese_) {
      var tmpSeriesData;
     switch (pName) {
            case "china":
                tmpSeriesData = seriesData;
                break;
            case "安徽":
                tmpSeriesData = [
                    {name: '合肥市', value: 100},
                    {name: '芜湖市', value: 100},
                    {name: '蚌埠市', value: 100},
                    {name: '淮南市', value: 100},
                    {name:'马鞍山市',value: 100},
                    {name: '淮北市', value: 100},
                    {name: '铜陵市', value: 100},
                    {name: '安庆市', value: 100},
                    {name: '黄山市', value: 100},
                    {name: '滁州市', value: 100},
                    {name: '阜阳市', value: 100},
                    {name: '宿州市', value: 100},
                    {name: '六安市', value: 100},
                    {name: '亳州市', value: 100},
                    {name: '池州市', value: 100},
                    {name: '宣城市', value: 100}
                ]
                break;
            case "澳门":
                tmpSeriesData = [
                    {name: '花地玛堂区', value: 100},
                    {name: '花王堂区', value: 100},
                    {name: '望德堂区', value: 100},
                    {name: '大堂区', value: 100},
                    {name: '风顺堂区', value: 100},
                    {name: '嘉模堂区', value: 100},
                    {name: '路凼填海区', value: 100},
                    {name: '圣方济各堂区', value: 100},
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
            case "上海":
                tmpSeriesData = [
                    {name: '黄浦区', value: 100},
                    {name: '徐汇区', value: 100},
                    {name: '长宁区', value: 100},
                    {name: '静安区', value: 100},
                    {name: '普陀区', value: 100},
                    {name: '虹口区', value: 100},
                    {name: '杨浦区', value: 100},
                    {name: '闵行区', value: 100},
                    {name: '宝山区', value: 100},
                    {name: '嘉定区', value: 100},
                    {name: '浦东新区', value: 100},
                    {name: '金山区', value: 100},
                    {name: '松江区', value: 100},
                    {name: '青浦区', value: 100},
                    {name: '奉贤区', value: 100},
                ]
                break;
            case "山西":
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
                case "山西":
                tmpSeriesData=[
                    {name: '太原市',value: 100},
                    {name: '大同市',value: 100},
                    {name: '阳泉市',value: 100},
                    {name: '长治市',value: 100},
                    {name: '晋城市',value: 100},
                    {name: '朔州市',value: 100},
                    {name: '晋中市',value: 100},
                    {name: '运城市',value: 100},
                    {name: '忻州市',value: 100},
                    {name: '临汾市',value: 100},
                    {name: '吕梁市',value: 100}
                    ]
                break;
            case "陕西":
                tmpSeriesData=[
                    {name: '西安市',value: 100},
                    {name: '铜川市',value: 100},
                    {name: '宝鸡市',value: 100},
                    {name: '咸阳市',value: 100},
                    {name: '渭南市',value: 100},
                    {name: '延安市',value: 100},
                    {name: '汉中市',value: 100},
                    {name: '榆林市',value: 100},
                    {name: '安康市',value: 100},
                    {name: '商洛市',value: 100}
                    ]
                break;
                case "上海":
                tmpSeriesData=[
                    {name: '黄浦区',value: 100},
                    {name: '徐汇区',value: 100},
                    {name: '长宁区',value: 100},
                    {name: '静安区',value: 100},
                    {name: '普陀区',value: 100},
                    {name: '虹口区',value: 100},
                    {name: '杨浦区',value: 100},
                    {name: '闵行区',value: 100},
                    {name: '宝山区',value: 100},
                    {name:'浦东新区',value:100},
                    {name: '金山区',value: 100},
                    {name: '松江区',value: 100},
                    {name: '青浦区',value: 100},
                    {name: '奉贤区',value: 100},
                    {name: '崇明区',value: 100},
                    {name: '嘉定区',value: 100}
                    ]
                break;
            default:
                tmpSeriesData = [];
                break;
        }
        // option
        var option = {
        title: {
          text: Chinese_ || pName,
          left: 'center'
        },
          tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} (p / km2)'
          },
        series: [
          {
            name: Chinese_ || pName,
            type: 'map',
            mapType: pName,
            roam: false,//是否开启鼠标缩放和平移漫游
            data: tmpSeriesData,
            top: "3%",//组件距离容器的距离
              zoom:1.1,
              selectedMode : 'single',

              label: {
                  normal: {
                      show: true,//显示省份标签
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
        ]
       };
      center1.setOption(option);
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
          /*
            if (param.componentType === 'series') {
                var provinceName =param.name;
                $('#box').css('display','block');
                $("#box-title").html(provinceName);
            }
          */
        });
      } else { 
          center1.on("click", function (param) {
              console.log(param.name);
          });
          // 省份，添加双击 回退到全国
          center1.on("dblclick", function () {
              initEcharts("china", "中国");
          });
      }
    }


    // 展示对应的省
    function showProvince(pName, Chinese_) {
      //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
      loadBdScript('$' + pName + 'JS', 'js/map/' + pName + '.js', function () {
        initEcharts(Chinese_);
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