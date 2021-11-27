import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import SearchView from '../../components/SearchView';
import BannerRow from '../../components/BannerRow';
import CategoryRow from './row/CategoryRow';
import ProductNew from './row/ProductNew';
import SellingProducts from './row/SellingProducts';
import {Actions} from 'react-native-router-flux';
import Default from '../../resource/Default';
import ImageHelper from '../../resource/ImageHelper';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={Default.container}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 5,
            marginBottom: 15,
          }}>
          <SearchView />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                width: Default.constants.X,
                height: Default.constants.X,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => Actions.jump('myCartScreen')}>
              <Image
                source={ImageHelper.cart}
                style={{
                  width: Default.constants.X * 0.6,
                  height: Default.constants.X * 0.6,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: Default.constants.X,
                height: Default.constants.X,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => alert('giỏ hàng')}>
              <Image
                source={ImageHelper.icon_mess}
                style={{
                  width: Default.constants.X * 0.63,
                  height: Default.constants.X * 0.6,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <BannerRow />
          <CategoryRow />
          <BannerRow />
          <ProductNew />
          <SellingProducts />
        </ScrollView>
      </View>
    );
  }
}

