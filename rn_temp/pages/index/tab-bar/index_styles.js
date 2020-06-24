
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "tabBar": {
    "display": "flex",
    "height": scalePx2dp(45),
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#e0e0e0",
    "borderBottomWidth": scalePx2dp(0.5),
    "backgroundColor": "#fff",
    "paddingTop": 0,
    "paddingRight": scalePx2dp(5),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(5)
  },
  "tabBar__item": {
    "display": "flex",
    "height": scalePx2dp(43.5),
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "transparent",
    "borderBottomWidth": scalePx2dp(1.5)
  },
  "tabBar__item--active": {
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "red",
    "borderBottomWidth": scalePx2dp(1.5)
  },
  "tabBar__item-name": {
    "color": "#333",
    "fontSize": scalePx2dp(16.5),
    "fontWeight": "normal",
    "textAlign": "center"
  },
  "tabBar__item-name--active": {
    "color": "red",
    "fontSize": scalePx2dp(17.5),
    "fontWeight": "bold"
  }
})
