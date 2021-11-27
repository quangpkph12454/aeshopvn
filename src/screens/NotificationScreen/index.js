
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
import ImageHelper from '../../resource/ImageHelper';
import BannerRow from '../../components/BannerRow';
import ViewNotification from '../../components/ViewNotification';
import { strings } from "../../assets/strings/i18n/i18n";
import Default from "../../resource/Default";

const Data = [
  {
    type: 0,
  },
  {
    type: 1,
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
    };
  }

  render() {
    return (
      <View style={Default.container}>
        <StatusBar
          hidden={false}
          backgroundColor={'red'}
          barStyle="light-content"
        />
        <Text style={[Default.text.title, {marginTop: 10, marginBottom: 20}]}>
          {strings('tabNotification')}
        </Text>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <BannerRow />
          <Text
            style={{fontSize: 18, marginHorizontal: 20, marginVertical: 10}}>
            {strings('newsNew')}
          </Text>
          <FlatList
            data={DataProduct}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            renderItem={this.renderItemList}
          />
        </ScrollView>
      </View>
    );
  }
  renderItemList({item, index}) {
    return <ViewNotification ItemProduct={item} />;
  }
}
