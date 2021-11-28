import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ColorStyle from '../assets/colors/Colors';
import Default from '../functions/AppStyles';
import {Actions} from 'react-native-router-flux';
import { strings } from "../assets/strings/i18n/i18n";

export default class ViewMyOrdersScreen extends Component {
  render() {
    let data = this.props.itemData;
    let index = this.props.indexItem + 1;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: ColorStyle.tabWhite,
          marginBottom: 24,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: ColorStyle.tabWhite,
            borderRadius: 8,
            marginHorizontal: 20,
            marginVertical: 16,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={Default.text.text16}>
              {strings('ordersNum')} {index}
            </Text>
            <Text style={Default.text.textGray}>{data.date}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
            <Text style={Default.text.textGray}>{strings('idOrders')}</Text>
            <Text style={[{marginLeft: 20}]}>{data.id_bill}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={Default.text.textGray}>
                {strings('productQuantity')}:{' '}
              </Text>
              <Text> {data.listProduct.length}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={Default.text.textGray}>
                {strings('totalMoney')}:{' '}
              </Text>
              <Text> {data.total_bill}đ</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <TouchableOpacity
              onPress={() => Actions.jump('oderDetailScreen', {node: data,indexItem:index})}
              style={{
                backgroundColor: ColorStyle.tabActive,
                padding: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: ColorStyle.tabWhite}}>
                {strings('detail')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 10}}>
              <Text style={{color: '#2AA952'}}>{data.status}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
