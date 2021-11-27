import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../resource/Default';
import ColorStyle from '../resource/ColorStyle';
import ViewStar from './ViewStar';
import ImageHelper from '../resource/ImageHelper';
import {Actions} from 'react-native-router-flux';
import NumberFormat from 'react-number-format';
export default class ViewProduct extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          Actions.jump('productDetail', {node: this.props.itemData})
        }
        style={{
          flex: 1,
          width: Default.constants.X * 3.9,
          height: Default.constants.X * 6,
          margin: 5,
          borderRadius: 20,
          borderColor: '#FFFFFF',
          shadowColor: 'rgba(0, 0, 0, 0.25)',
          backgroundColor: '#FFFFFF',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          // justifyContent:'space-between',
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <Image
          source={this.props.itemData.listImage[0].image}
          style={{
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: '65%',
          }}
        />

        <View
          style={{
            height: '25%',
            marginTop: 20,
            marginHorizontal: Default.constants.X * 0.2,
            justifyContent: 'space-between',
          }}>
          <Text style={[Default.text.text16, {color: ColorStyle.tabInactive}]}>
            {this.props.itemData.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <NumberFormat
              value={this.props.itemData.import_price}
              displayType={'text'}
              thousandSeparator={true}
              suffix={'đ'}
              renderText={(value, prefix) => (
                <Text style={[Default.text.text16, {color: 'red'}]}>
                  {value}
                </Text>
              )}
            />
            {/*<Text style={[Default.text.text16, {color: 'red'}]}>*/}
            {/*  {this.props.itemData.import_price}*/}
            {/*</Text>*/}
            <ViewStar num={this.props.itemData.star} widthItem={12} />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            right: '4%',
            top: ' 57%',
            width: Default.constants.X * 0.9,
            height: Default.constants.X * 0.9,
            backgroundColor: ColorStyle.tabActive,
            borderRadius: Default.constants.X * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: Default.constants.X * 0.4,
              height: Default.constants.X * 0.4,
            }}
            source={ImageHelper.cart1}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
