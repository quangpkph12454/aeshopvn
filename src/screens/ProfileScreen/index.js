import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
import Default from '../../functions/AppStyles';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../assets/Images';
import ColorStyle from '../../assets/colors/Colors';
import {strings} from '../../assets/strings/i18n/i18n';
import styles from "./styles";
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
            <View style={styles.viewContainer}>
              <View
                style={{
                  flex: 3,
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImageHelper.avata}
                  style={styles.imgAva
                  }
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
              style={styles.viewContainer
              }>
              <View
                style={{
                  flex: 1,
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImageHelper.logo_}
                  style={styles.imgAva
                  }
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
                  style={styles.buttonLG}>
                  <Text>{strings('login')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Actions.jump('registerScreen')}
                  style={{...styles.buttonLG, borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0, borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,}}>
                  <Text>{strings('register')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={{width: Default.constants.widthScreen, marginTop: 17}}>
            <TouchableOpacity
              onPress={() => Actions.jump('myOrderScreen')}
              style={styles.body
              }>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginRight: 20}} source={ImageHelper.orders} />
                <Text>{strings('myOrders')}</Text>
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
                <Text>{strings('myAccount')}</Text>
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
                <Text>{strings('addOders')}</Text>
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
                <Text>{strings('paymentCards')}</Text>
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
                <Text>{strings('helpCenter')}</Text>
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
                <Text>{strings('aboutNameShop')}</Text>
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
