
import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../../functions/AppStyles';
import ViewHelpCenter from '../../../components/ViewHelpCenter';
import TitleBar from "../../../components/TitleBar";
import { strings } from "../../../assets/strings/i18n/i18n";
const Data = [
  {
    title: 'Bạn không thể mua sản phẩm ?',
    des:
      'Bước 1:Nhấp vào account ở thanh điều hướng\n' +
      'Bước 2: Chọn Tài khoản của tôi, sau đó nhấp vào Thay đổi mật khẩu.\n' +
      'Bước 3: Nhập vào mật khẩu mới mà bạn muốn thay đổi, sau đó nhấn Đổi mật khẩu',
  },
  {
    title: 'Bạn không thể đổi mật khẩu ?',
    des:
      'Bước 1:Nhấp vào account ở thanh điều hướng\n' +
      'Bước 2: Chọn Tài khoản của tôi, sau đó nhấp vào Thay đổi mật khẩu.\n' +
      'Bước 3: Nhập vào mật khẩu mới mà bạn muốn thay đổi, sau đó nhấn Đổi mật khẩu',
  },
  {
    title: 'Bạn có vấn đề về thanh toán ?',
    des:
      'Bước 1:Nhấp vào account ở thanh điều hướng\n' +
      'Bước 2: Chọn Tài khoản của tôi, sau đó nhấp vào Thay đổi mật khẩu.\n' +
      'Bước 3: Nhập vào mật khẩu mới mà bạn muốn thay đổi, sau đó nhấn Đổi mật khẩu',
  },
  {
    title: 'Không thể thay đổi địa chỉ giao hàng ?',
    des:
      'Bước 1:Nhấp vào account ở thanh điều hướng\n' +
      'Bước 2: Chọn Tài khoản của tôi, sau đó nhấp vào Thay đổi mật khẩu.\n' +
      'Bước 3: Nhập vào mật khẩu mới mà bạn muốn thay đổi, sau đó nhấn Đổi mật khẩu',
  },
  {
    title: 'Bạn không thể thay đổi thông tin cá nhân ?',
    des:
      'Bước 1:Nhấp vào account ở thanh điều hướng\n' +
      'Bước 2: Chọn Tài khoản của tôi, sau đó nhấp vào Thay đổi mật khẩu.\n' +
      'Bước 3: Nhập vào mật khẩu mới mà bạn muốn thay đổi, sau đó nhấn Đổi mật khẩu',
  },
];
export default class HelpCenterScreen extends Component {
  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('helpCenter')}/>
        <View
          style={{
            width: Default.constants.widthScreen - 40,
            marginHorizontal: 20,
            backgroundColor: 'white',
            marginTop: 25,
          }}>
          <FlatList
            data={Data}
            renderItem={this.renderItem}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
          />
        </View>
      </View>
    );
  }
  renderItem({item, index}) {
    return <ViewHelpCenter itemData={item} />;
  }
}
