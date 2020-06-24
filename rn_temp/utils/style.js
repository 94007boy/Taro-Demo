import Taro from '@tarojs/taro-rn';


const NAVIGATOR_HEIGHT = 44;
const TAB_BAR_HEIGHT = 50;

export function getWindowWidth() {
  const info = Taro.getSystemInfoSync();
  const { windowWidth } = info;
  return windowWidth;
}

/**
 * 返回屏幕可用高度
 * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
 * @param {*} showTabBar 是否使用了默认样式的标题栏
 */
export function getWindowHeight(showTabBar = true, fixPx = 0) {
  const info = Taro.getSystemInfoSync();
  const { windowHeight, statusBarHeight, titleBarHeight } = info;
  const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  {
    return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight - fixPx / 2;
  }

  return `${windowHeight - fixPx / 2}px`;
}

/**
 * // NOTE 样式在编译时会通过 postcss 进行处理，但 js 中的 style 可能需要运行时处理
 * 例如加 prefix，或者对 RN 样式的兼容，又或是在此处统一处理 Taro.pxTransform
 * 此处只做演示，若需要做完善点，可以考虑借助 https://github.com/postcss/postcss-js
 */
export function postcss(style) {
  if (!style) {
    return style;
  }
  const { background, ...restStyle } = style;
  const newStyle = {};
  if (background) {
    // NOTE 如 RN 不支持 background，只支持 backgroundColor
    newStyle.backgroundColor = background;
  }
  return { ...restStyle, ...newStyle };
}