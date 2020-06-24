
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "list__item": {
    "display": "flex",
    "flexDirection": "column"
  },
  "list__item-btm": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "height": scalePx2dp(60),
    "backgroundColor": "#fff"
  },
  "list__item-btm-avatar": {
    "marginLeft": scalePx2dp(10),
    "width": scalePx2dp(40),
    "height": scalePx2dp(40),
    "borderRadius": scalePx2dp(20),
    "overflow": "hidden"
  },
  "list__item-btm-avatar-img": {
    "width": scalePx2dp(40),
    "height": scalePx2dp(40)
  },
  "list__item-btm-midWrap": {
    "display": "flex",
    "flexDirection": "column",
    "marginLeft": scalePx2dp(10),
    "height": scalePx2dp(40),
    "justifyContent": "center"
  },
  "list__item-btm-usrInfo": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "height": scalePx2dp(20)
  },
  "list__item-btm-usrInfo-name": {
    "color": "#000",
    "fontSize": scalePx2dp(15),
    "fontWeight": "bold",
    "lineHeight": scalePx2dp(20)
  },
  "list__item-btm-usrInfo-dot": {
    "fontSize": scalePx2dp(15),
    "fontWeight": "bold",
    "marginTop": 0,
    "marginRight": scalePx2dp(5),
    "marginBottom": 0,
    "marginLeft": scalePx2dp(5),
    "lineHeight": scalePx2dp(15)
  },
  "list__item-btm-usrInfo-flow": {
    "color": "#E1251B",
    "fontSize": scalePx2dp(15),
    "lineHeight": scalePx2dp(20),
    "fontWeight": "bold"
  },
  "list__item-btm-usrInfo-flow--active": {
    "color": "#ccc"
  },
  "list__item-btm-fans": {
    "fontSize": scalePx2dp(10),
    "color": "#aaa",
    "lineHeight": scalePx2dp(10),
    "marginTop": scalePx2dp(5)
  },
  "list__item-btm-flex": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0
  },
  "list__item-btm-right": {
    "display": "flex",
    "flexDirection": "row",
    "marginRight": scalePx2dp(15),
    "alignItems": "center"
  },
  "list__item-btm-msg": {
    "fontSize": scalePx2dp(12.5),
    "color": "#555",
    "marginLeft": scalePx2dp(5),
    "marginRight": scalePx2dp(15)
  },
  "list__item-top": {
    "position": "relative",
    "overflow": "hidden",
    "marginBottom": scalePx2dp(5),
    "backgroundColor": "#fff",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#e0e0e0",
    "borderBottomWidth": scalePx2dp(0.5)
  },
  "list__item-top-cover": {
    "top": 0,
    "left": 0,
    "position": "absolute",
    "width": "100%",
    "height": "100%"
  },
  "list__item-top-maskWrap": {
    "top": 0,
    "left": 0,
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "list__item-top-mask": {
    "width": scalePx2dp(50),
    "height": scalePx2dp(50),
    "borderRadius": scalePx2dp(50),
    "backgroundColor": "rgba(0, 0, 0, 0.5)",
    "justifyContent": "center",
    "alignItems": "center",
    "display": "flex"
  },
  "list__item-top-titleMask": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "100%",
    "height": "100%"
  },
  "list__item-top-title": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "color": "#fff",
    "fontSize": scalePx2dp(17.5),
    "fontWeight": "bold",
    "paddingTop": scalePx2dp(7.5),
    "paddingRight": scalePx2dp(7.5),
    "paddingBottom": scalePx2dp(7.5),
    "paddingLeft": scalePx2dp(7.5),
    "width": "100%"
  },
  "list__item-top-read": {
    "position": "absolute",
    "paddingTop": scalePx2dp(12.5),
    "paddingRight": scalePx2dp(12.5),
    "paddingBottom": scalePx2dp(12.5),
    "paddingLeft": scalePx2dp(12.5),
    "color": "#fff",
    "left": 0,
    "bottom": 0,
    "fontWeight": "bold",
    "fontSize": scalePx2dp(11)
  },
  "list__item-top-time": {
    "position": "absolute",
    "paddingTop": scalePx2dp(2.5),
    "paddingRight": scalePx2dp(7.5),
    "paddingBottom": scalePx2dp(2.5),
    "paddingLeft": scalePx2dp(7.5),
    "marginTop": scalePx2dp(10),
    "marginRight": scalePx2dp(10),
    "marginBottom": scalePx2dp(10),
    "marginLeft": scalePx2dp(10),
    "color": "#fff",
    "right": 0,
    "bottom": 0,
    "fontSize": scalePx2dp(11),
    "borderRadius": scalePx2dp(5),
    "backgroundColor": "rgba(0, 0, 0, 0.4)"
  }
})
