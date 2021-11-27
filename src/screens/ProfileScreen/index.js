
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
import Default from '../../resource/Default';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../resource/ImageHelper';
import ColorStyle from '../../resource/ColorStyle';
import {strings} from '../../assets/strings/i18n/i18n';
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLogin: false,
    };
  }
  render() {
    return (
      <View style={Default.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {this.state.checkLogin ? (
            <View
              style={{
                width: Default.constants.widthScreen,
                height: Default.constants.heightScreen / 7,
                flexDirection: 'row',
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'red',
              }}>
              <View
                style={{
                  flex: 3,
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImageHelper.avata}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={Default.text.textTitle}>Trần Hiếu</Text>
                  <Text style={Default.text.text16}>
                    hieubtkx1269@gmail.com
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 60,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={ImageHelper.logOut}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                width: Default.constants.widthScreen,
                height: Default.constants.heightScreen / 7,
                flexDirection: 'row',
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'red',
              }}>
              <View
                style={{
                  flex: 1,
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImageHelper.logo_}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => Actions.jump('loginScreen')}
                  style={{
                    width: Default.constants.X * 2.4,
                    height: Default.constants.X * 0.8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    marginRight: 5,
                    backgroundColor: ColorStyle.tabWhite,
                  }}>
                  <Text>{strings('login')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Actions.jump('registerScreen')}
                  style={{
                    width: Default.constants.X * 2.4,
                    height: Default.constants.X * 0.8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: ColorStyle.tabWhite,
                  }}>
                  <Text>{strings('register')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={{width: Default.constants.widthScreen, marginTop: 17}}>
            <TouchableOpacity
              onPress={() => Actions.jump('myOrderScreen')}
              style={{
                width: Default.constants.widthScreen,
                height: 62,
                borderTopWidth: 1,
                borderColor: '#E2E2E2',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginRight: 20}} source={ImageHelper.orders} />
                <Text>Đơn hàng của tôi</Text>
              </View>
              <Image
                style={{alignItems: 'center'}}
                source={ImageHelper.backarrow}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.jump('accountScreen')}
              style={{
                width: Default.constants.widthScreen,
                height: 62,
                borderTopWidth: 1,
                borderColor: '#E2E2E2',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{marginRight: 20, alignItems: 'center'}}
                  source={ImageHelper.myDetails}
                />
                <Text>Tài khoản của tôi</Text>
              </View>
              <Image
                style={{alignItems: 'center'}}
                source={ImageHelper.backarrow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.jump('shippingAddressScreen')}
              style={{
                width: Default.constants.widthScreen,
                height: 62,
                borderTopWidth: 1,
                borderColor: '#E2E2E2',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{marginRight: 20}}
                  source={ImageHelper.location}
                />
                <Text>Địa chỉ giao hàng</Text>
              </View>
              <Image
                style={{alignItems: 'center'}}
                source={ImageHelper.backarrow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.jump('paymentCardScreen')}
              style={{
                width: Default.constants.widthScreen,
                height: 62,
                borderTopWidth: 1,
                borderColor: '#E2E2E2',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginRight: 20}} source={ImageHelper.ptgh} />
                <Text>Phương thức thanh toán</Text>
              </View>
              <Image
                style={{alignItems: 'center'}}
                source={ImageHelper.backarrow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.jump('helpCenterScreen')}
              style={{
                width: Default.constants.widthScreen,
                height: 62,
                borderTopWidth: 1,
                borderColor: '#E2E2E2',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginRight: 20}} source={ImageHelper.help} />
                <Text>Hỗ trợ</Text>
              </View>
              <Image
                style={{alignItems: 'center'}}
                source={ImageHelper.backarrow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.jump('aboutUsScreen')}
              style={{
                width: Default.constants.widthScreen,
                height: 62,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#E2E2E2',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginRight: 20}} source={ImageHelper.about} />
                <Text>Thông tin cửa hàng</Text>
              </View>
              <Image
                style={{alignItems: 'center'}}
                source={ImageHelper.backarrow}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
