
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "list": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "width": "100%",
    "backgroundColor": "#eee"
  },
  "list__btm": {
    "display": "flex",
    "width": "100%",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "list__btm-txt": {
    "textAlign": "center",
    "height": scalePx2dp(40),
    "lineHeight": scalePx2dp(40),
    "fontSize": scalePx2dp(15),
    "color": "#aaa",
    "marginRight": scalePx2dp(10)
  },
  "list__btm-icon": {
    "width": scalePx2dp(15),
    "height": scalePx2dp(15)
  },
  "itemWrap": {
    "display": "flex",
    "flexDirection": "column"
  },
  "itemWrap__btm": {
    "display": "flex",
    "width": "100%",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "itemWrap__btm-txt": {
    "textAlign": "center",
    "height": scalePx2dp(40),
    "lineHeight": scalePx2dp(40),
    "fontSize": scalePx2dp(15),
    "color": "#aaa",
    "marginRight": scalePx2dp(10)
  },
  "itemWrap__btm-icon": {
    "width": scalePx2dp(15),
    "height": scalePx2dp(15)
  }
})
