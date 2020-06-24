Component({
  properties: {
    // dashang | dianzan | sanjiao2 | xiaolian | sanjiaoxing | bofang | zanting | xuanxiang | pinglun | cardb | youhuiquan | youhuiquan_huaban1 | lianxiwomen_huaban1 | gouwuche_huaban1 | fenxiang_huaban1 | yingxiao_huaban1 | shangjiapingfen | leixing | yanzhengma | chanpinshangcheng_huaban1 | dingdanguanli_huaban1 | shouji_huaban1 | mima_huaban1 | shoucang_huaban1 | shezhi_huaban1 | lianxikefu_huaban1 | xinxi_huaban1 | huiyuan_huaban1 | shouhuodizhi_huaban1 | jushoucang | lajixiang | lianjie | saoyisao | shangfan | shezhi | shouhuodizhi | shouye | shuaxin | sousuo | wancheng | wodedingdan | wodejuhuasuan | wodeyouhuiquan | xiafan | xiangshangjiantou | xiangxiajiantou | xiangyoujiantou | xiangzuojiantou | yijianfankui | zhaoxiangji | xiaoxizhongxin | lingcunwei | cuowu
    name: {
      type: String
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function (color) {
        this.setData({
          isStr: typeof color === 'string'
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function (size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth
        });
      }
    }
  },
  data: {
    svgSize: 0.024 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true
  }
});