import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import ImageHelper from '../../assets/Images';
import BannerRow from '../../components/BannerRow';
import ViewNotification from '../../components/ViewNotification';
import {strings} from '../../assets/strings/i18n/i18n';
import Default from '../../functions/AppStyles';
import {UIActivityIndicator} from 'react-native-indicators';
import Colors from '../../assets/colors/Colors';
import AppConstants from '../../functions/AppConstants';
import CategoryRow from '../HomeScreen/row/CategoryRow';
import ProductNew from '../HomeScreen/row/ProductNew';
import SellingProducts from '../HomeScreen/row/SellingProducts';

const Data = [
  {
    type: AppConstants.notificationItemType.BANNER,
  },
  {
    type: AppConstants.notificationItemType.TITLE,
  },
  {
    type: AppConstants.notificationItemType.NEWS,
  },
];
const DataProduct = [
  {
    images: ImageHelper.notif,
    title: 'Giảm giá các mặt hàng trái cây nhập khẩu từ 31/08 đến 02/09',
    date: '31/9/2021',
  },
  {
    images: ImageHelper.notif,
    title:
      'Các sản phẩm thịt được bảo quản tốt nhất giúp giữ độ tươi ngon và đảm bảo ATVSTP',
    date: '31/9/2021',
  },
  {
    images: ImageHelper.notif,
    title: 'Giảm giá các mặt hàng trái cây nhập khẩu từ 31/08 đến 02/09',
    date: '31/9/2021',
  },
  {
    images: ImageHelper.notif,
    title: 'Giảm giá các mặt hàng trái cây nhập khẩu từ 31/08 đến 02/09',
    date: '31/9/2021',
  },
  {
    images: ImageHelper.notif,
    title: 'Giảm giá các mặt hàng trái cây nhập khẩu từ 31/08 đến 02/09',
    date: '31/9/2021',
  },
  {
    images: ImageHelper.notif,
    title: 'Giảm giá các mặt hàng trái cây nhập khẩu từ 31/08 đến 02/09',
    date: '31/9/2021',
  },
];
export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      totalPage: 2,
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({data: Data}, () => {});
  }
  render() {
    return (
      <View style={Default.container}>
        <Text style={[Default.text.title, {marginTop: 10, marginBottom: 20}]}>
          {strings('tabNotification')}
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          renderItem={this._renderItem}
          style={{flex: 1, height: '100%'}}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0.4}
          // onEndReached={() => this.handleLoadMore()}
          ref={ref => {
            this.listRef = ref;
          }}
          refreshing={this.state.refreshing}
          removeClippedSubviews={true} // Unmount components when outside of window
          windowSize={10}
        />
        {/*<ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>*/}
        {/*  <BannerRow />*/}
        {/*  <Text*/}
        {/*    style={{fontSize: 18, marginHorizontal: 20, marginVertical: 10}}>*/}
        {/*    {strings('newsNew')}*/}
        {/*  </Text>*/}
        {/*  <FlatList*/}
        {/*    data={DataProduct}*/}
        {/*    horizontal={false}*/}
        {/*    showsHorizontalScrollIndicator={true}*/}
        {/*    renderItem={this.renderItemList}*/}
        {/*  />*/}
        {/*</ScrollView>*/}
      </View>
    );
  }
  _renderItem = ({item}) => {
    switch (item.type) {
      case AppConstants.notificationItemType.BANNER:
        return <BannerRow />;
      case AppConstants.notificationItemType.TITLE:
        return (
          <Text
            style={{fontSize: 18, marginHorizontal: 20, marginVertical: 10}}>
            {strings('newsNew')}
          </Text>
        );
      case AppConstants.notificationItemType.NEWS:
        return (
          <FlatList
            data={DataProduct}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            renderItem={this.renderItemList}
          />
        );
      case AppConstants.notificationItemType.END:
        return <View style={{marginBottom: 10}} />;
      default:
        break;
    }
  };
  // handleLoadMore(){
  //   this.getProduct()
  // }
  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }
    return <UIActivityIndicator color={Colors.tabActive} size={20} />;
  };
  renderItemList({item, index}) {
    return <ViewNotification ItemProduct={item} />;
  }
}
