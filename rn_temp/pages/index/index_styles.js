
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "page": {
    "position": "relative",
    "backgroundColor": "#eee",
    "height": "100%"
  },
  "list-top": {
    "top": scalePx2dp(85)
  }
})
