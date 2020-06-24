Component({
  properties: {
    // dashang | dianzan | sanjiao2 | xiaolian | sanjiaoxing | bofang | zanting | xuanxiang | pinglun | cardb | youhuiquan | youhuiquan_huaban1 | lianxiwomen_huaban1 | gouwuche_huaban1 | fenxiang_huaban1 | yingxiao_huaban1 | shangjiapingfen | leixing | yanzhengma | chanpinshangcheng_huaban1 | dingdanguanli_huaban1 | shouji_huaban1 | mima_huaban1 | shoucang_huaban1 | shezhi_huaban1 | lianxikefu_huaban1 | xinxi_huaban1 | huiyuan_huaban1 | shouhuodizhi_huaban1 | jushoucang | lajixiang | lianjie | saoyisao | shangfan | shezhi | shouhuodizhi | shouye | shuaxin | sousuo | wancheng | wodedingdan | wodejuhuasuan | wodeyouhuiquan | xiafan | xiangshangjiantou | xiangxiajiantou | xiangyoujiantou | xiangzuojiantou | yijianfankui | zhaoxiangji | xiaoxizhongxin | lingcunwei | cuowu
    name: {
      type: String
    },
    // string | string[]
    color: {
      type: null,
      observer: function (color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string'
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function (size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth
        });
      }
    }
  },
  data: {
    colors: '',
    svgSize: 0.024 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true
  },
  methods: {
    fixColor: function () {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function (hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function (color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});