var _dec, _dec2, _class;

import React from 'react';
import { PureComponent } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import SearchBar from "../../components/search-bar/index";
import TabBar from "./tab-bar/index";
import List from "./list/index.rn";
import { observer, inject } from "@tarojs/mobx-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = inject('appMod'), _dec2 = inject('indexMod'), _dec(_class = _dec2(_class = observer(_class = class Index extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidShow() {
    const { appMod } = this.props;
    appMod.init();
    const { indexMod } = this.props;
    indexMod.onTabClick('127398');
  }

  onTabClick(tab) {
    const { indexMod } = this.props;
    indexMod.onTabClick(tab.id);
  }

  render() {
    console.log('index render ------');
    const { indexMod: { tabs, currentId, currentDatas } } = this.props;
    return <View style={_styleSheet["page"]}>
        <SearchBar />
        <TabBar tabs={tabs} onTabClick={this.onTabClick.bind(this)} />
        <List topDist={170} currentId={currentId} datas={currentDatas} />
      </View>;
  }
}) || _class) || _class) || _class);
Index.config = {
  navigationBarTitleText: '首页',
  disableScroll: true
};


export default Index;