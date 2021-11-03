import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../../../resource/Default';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../../../resource/ImageHelper';
import TitleBar from "../../../elements/TitleBar";
import { strings } from "../../../../Utils/i18n/i18n";
const Data = [
  {
    des: 'AE Shop cam kết chất lượng sản phẩm tốt nhất cho khách hàng, đảm bảo tiêu chí: An toàn, Tiện lợi, Nhanh chóng. Chúng tôi đã phát triển ứng dụng này để việc mua sắm của quý khách trở nên tiện lợi hơn với các tính năng hữu ích sẽ làm hài lòng người sử dụng chỉ với một vài thao tác đơn giản.',
    numberPhone: '016669999999',
    email: 'aeshop@gmail.com',
    address: '124 Hòe Thị ,Phương Canh ,Hà Nội',
  },
];
export default class AboutUsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount() {
    this.setState({data: Data});
  }

  render() {
    console.log(Data.map(i => i.des));
    return (
      <View style={Default.container}>
        <TitleBar title={strings('aboutNameShop')}/>

        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-between',flex:1,height:Default.constants.heightScreen}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  // marginTop: 30,
                  width: Default.constants.widthScreen - 40,
                  marginHorizontal: 20,
                }}>
                <Text
                  style={[
                    Default.text.textAbout,
                    {textAlign: 'left', lineHeight: 30},
                  ]}>
                  {Data.map(i => i.des)}
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 30}}>
                  Hãy liên hệ với chúng tôi
                </Text>

                <View style={{marginTop: 20, marginHorizontal: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Image source={ImageHelper.icon_phone} />
                    <Text style={{fontSize: 20, marginLeft: 15}}>
                      Số điện thoại:{Data.map(i => i.numberPhone)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image source={ImageHelper.icon_gmail} />
                    <Text
                      style={{fontSize: 20, marginLeft: 15, lineHeight: 30}}>
                      Địa chỉ:{Data.map(i => i.address)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image source={ImageHelper.icon_location} />
                    <Text style={{fontSize: 20, marginLeft: 15}}>
                      Email:{Data.map(i => i.email)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'rgba(0, 0, 0, 0.5)',
              }}>
              Được phát triển bởi AeShop
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
