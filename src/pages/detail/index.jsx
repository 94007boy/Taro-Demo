import Taro, {Component} from '@tarojs/taro'
import {inject, observer} from "@tarojs/mobx";
import {Alert, Dimensions, FlatList, View} from 'react-native'
import {Button, Header, Icon, Input, Item, Left, Right, Text} from 'native-base'
import {UltimateListView} from '@components/refresh-list-view'
import styles from './styles'
import LoadingSpinner from '../index/loadingSpinner'
import ControlTab from './controlTab'
import DetailItem from './item'
import FlatListItem from './itemContainer/flatListItem'
import FlatListGrid from './itemContainer/flatListGrid'

const {width, height} = Dimensions.get('window')

@inject('detailMod')
@observer
class Detail extends Component {

  config = {
    disableScroll: true
  }

  constructor(props) {
    super(props)
    this.state = {
      layout: 'list',
      text: ''
    }
    // 注入的HelloMod
    // this.stores = this.props.detailMod;
    // console.log('stores',this.stores)
  }

  async componentDidShow () {
    const { detailMod } = this.props
    await detailMod.getTestList()
  }

  onFetch = async (page = 1, startFetch, abortFetch) => {
    console.log('onFetch')
    // const rowData = await detailMod.getTestList(false);
    // startFetch(rowData, 20)
    // console.log('datasTest',datasTest)
    try {
      // This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 24
      if (this.state.layout === 'grid') pageLimit = 60
      const skip = (page - 1) * pageLimit

      // Generate dummy data
      let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index + skip}`)

      // Simulate the end of the list if there is no more data returned from the server
      if (page === 10) {
        rowData = []
      }

      // Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000)
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch() // manually stop the refresh or pagination if it encounters network error
      console.log(err)
    }
  }

  onChangeLayout = (event) => {
    this.setState({text: ''})
    switch (event.nativeEvent.selectedSegmentIndex) {
      case 0:
        this.setState({layout: 'list'})
        break
      case 1:
        this.setState({layout: 'grid'})
        break
      default:
        break
    }
  }

  onChangeScrollToIndex = (num) => {
    this.setState({text: num})
    let index = num
    if (this.state.layout === 'grid') {
      index = num / 3
    }
    try {
      this.listView.scrollToIndex({viewPosition: 0, index: Math.floor(index)})
    } catch (err) {
      console.warn(err)
    }
  }

  onPressItem = (type, index, item) => {
    Alert.alert(type, `You're pressing on ${item}`)
  }

  // async onFetch(page = 1, startFetch, abortFetch){
  //   const { getTestList } = detailMod
  //   const rowData = await getTestList(true)
  //   startFetch(rowData, 20)
  // }


  sleep = time => new Promise(resolve => setTimeout(() => resolve(), time))

  // renderItem = (item, index, separator) => {
  //   return (
  //     <DetailItem info={item} index={index} onPress={this.onPressItem} />
  //   )
  // }

  renderItem = (item, index, separator) => {
    if (this.state.layout === 'list') {
      return (
        <FlatListItem item={item} index={index} onPress={this.onPressItem}/>
      )
    } else if (this.state.layout === 'grid') {
      return (
        <FlatListGrid item={item} index={index} onPress={this.onPressItem}/>
      )
    }
    return null
  }

  renderControlTab = () => (
    <ControlTab
      layout={this.state.layout}
      onChangeLayout={this.onChangeLayout}
    />
  )

  renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={{textAlign: 'center'}}>I am the Header View, you can put some Instructions or Ads Banner here!
        </Text>
      </View>
      <View style={styles.headerSegment}>
        <Left style={{flex: 0.15}}/>
        {this.renderControlTab()}
        <Right style={{flex: 0.15}}/>
      </View>
    </View>
  )

  renderPaginationFetchingView = () => (
    <LoadingSpinner height={height * 0.2} text="loading..."/>
  )


  render() {
    const { detailMod: { testTxt  }} = this.props
    return (
      <View style={styles.container}>
        <Header searchBar rounded>
          <Item style={{backgroundColor: 'lightgray', borderRadius: 5}}>
            <Icon name="ios-search"/>
            <Input onChangeText={this.onChangeScrollToIndex} value={testTxt}/>
          </Item>
        </Header>
        <UltimateListView
          ref={ref => this.listView = ref}
          key={this.state.layout} // this is important to distinguish different FlatList, default is numColumns
          onFetch={this.onFetch}
          keyExtractor={(item, index) => `${index} - ${item}`} // this is required when you are using FlatList
          refreshableMode="advanced" // basic or advanced

          item={this.renderItem} // this takes three params (item, index, separator)
          numColumns={this.state.layout === 'list' ? 1 : 3} // to use grid layout, simply set gridColumn > 1

          // ----Extra Config----
          displayDate
          header={this.renderHeader}
          paginationFetchingView={this.renderPaginationFetchingView}

          // new props on v3.2.0
          arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
          dateStyle={{color: 'lightgray'}}
          // refreshViewStyle={Platform.OS === 'ios' ? { height: 80, top: -80 } : { height: 80 }}
          refreshViewStyle={{height: 80}}
          refreshViewHeight={80}
        />
        {/*{RNVConsole}*/}
      </View>
    )
  }

}

export default Detail
