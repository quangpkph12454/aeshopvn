import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../resource/Default';
import ColorStyle from '../../resource/ColorStyle';
import ImageHelper from '../../resource/ImageHelper';
export default class ViewItemMyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  render() {
    return (
      <View
        style={{
          width: Default.constants.widthScreen - 40,
          borderRadius: 20,
          backgroundColor: ColorStyle.tabWhite,
          flexDirection: 'row',
          borderColor: 'rgba(0, 0, 0, 0.25)',
          marginBottom: 20,
          padding: 10,
        }}>
        <Image
          style={{width: 70, height: 80, marginTop: 10}}
          source={this.props.itemData.listImage[0].image}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={[
              Default.text.textTitle,
              {color: ColorStyle.tabInactive, maxWidth: 220},
            ]}
            numberOfLines={1}>
            {this.props.itemData.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              width: Default.constants.widthScreen - Default.constants.X * 3.4,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display:this.props.status? 'flex':'none',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({quantity: this.state.quantity - 1})
                }
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: ColorStyle.gray,
                  width: 35,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={ImageHelper.iconTru}
                  style={{width: 13, height: 2}}
                />
              </TouchableOpacity>
              <Text style={{marginHorizontal: 10, fontSize: 16}}>
                {this.state.quantity}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.setState({quantity: this.state.quantity + 1})
                }
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: ColorStyle.gray,
                  width: 35,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={ImageHelper.iconAdd}
                  style={{width: 13, height: 13}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={[Default.text.textTitle, {color: ColorStyle.tabInactive}]}>
              Giá:{this.props.itemData.import_price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            display:this.props.status? 'flex':'none',
            position: 'absolute',
            right: 0,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: 'red',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ImageHelper.iconClose}
            style={{width: 15, height: 15}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
