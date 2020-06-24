import React from 'react';
import { PureComponent } from "@tarojs/taro-rn";
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native';
import { Thumbnail, Text } from 'native-base';
import styles from "../styles";

import logo from "../../../assets/default-portrait.png";

const { width, height } = Dimensions.get('window');
let Example = class Example extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const rowID = this.props.index;
    const rowData = this.props.item;
    return <TouchableOpacity onPress={() => this.props.onPress('GridView', rowID, rowData)}>
        <View style={{ margin: 0.5, width: width / 3, paddingBottom: 15 }}>
          <Thumbnail square source={logo} style={styles.gridThumb} />
          <Text style={styles.gridText}>ID: {rowID}</Text>
          <Text style={styles.gridText}>{rowData}</Text>
        </View>
      </TouchableOpacity>;
  }
};
export { Example as default };