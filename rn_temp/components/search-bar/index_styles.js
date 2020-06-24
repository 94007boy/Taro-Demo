
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "searchBar": {
    "display": "flex",
    "height": scalePx2dp(40),
    "paddingTop": 0,
    "paddingRight": scalePx2dp(10),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(10),
    "flexDirection": "row",
    "backgroundColor": "#fff"
  },
  "searchBar__leftWrap": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "row",
    "height": scalePx2dp(35),
    "paddingTop": 0,
    "paddingRight": scalePx2dp(10),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(10),
    "marginRight": scalePx2dp(10),
    "overflow": "hidden",
    "borderWidth": scalePx2dp(0.5),
    "borderStyle": "solid",
    "borderColor": "#ddd",
    "borderRadius": scalePx2dp(5)
  },
  "searchBar__leftWrap-hint": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "color": "#333",
    "fontSize": scalePx2dp(15),
    "height": scalePx2dp(17.5),
    "lineHeight": scalePx2dp(17.5),
    "paddingLeft": scalePx2dp(10),
    "overflow": "hidden"
  },
  "searchBar__rightWrap": {
    "display": "flex",
    "height": scalePx2dp(35),
    "justifyContent": "space-between",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "searchBar__rightWrap-btn": {
    "fontSize": scalePx2dp(10),
    "lineHeight": scalePx2dp(10),
    "color": "#333333"
  }
})
