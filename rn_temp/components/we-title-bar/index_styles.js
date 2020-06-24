
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "titleBar": {
    "backgroundColor": "#fff",
    "display": "flex",
    "flexDirection": "column"
  },
  "titleBar__wrap": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "titleBar__wrap-title": {
    "fontSize": scalePx2dp(15),
    "color": "#333333"
  }
})
