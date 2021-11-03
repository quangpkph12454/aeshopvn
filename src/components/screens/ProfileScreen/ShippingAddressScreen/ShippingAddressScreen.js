import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Default from '../../../../resource/Default';
import ViewItemAddress from '../../../elements/ViewItemAddress';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../../../resource/ImageHelper';
import ColorStyle from '../../../../resource/ColorStyle';
import {strings} from '../../../../Utils/i18n/i18n';
import CheckBox from '@react-native-community/checkbox';
const Data = [
  {
    name: 'Trần Hiếu',
    address: 'Số 11,124/39 Hòe thịPhương Canh',
    addCity: 'Hà Nội',
    addDistrict: 'Nam Lừ Liên',
    status: true,
  },
  {
    name: 'Trần Hiếu',
    address: 'Số 11,124/39 Hòe thịPhương Canh',
    addCity: 'Hà Nội',
    addDistrict: 'Nam Lừ Liên',
    status: false,
  },
  {
    name: 'Trần Hiếu',
    address: 'Số 11,124/39 Hòe thịPhương Canh',
    addCity: 'Hà Nội',
    addDistrict: 'Nam Lừ Liên',
    status: false,
  },
];
export default class ShippingAddressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      name: '',
    };
  }
  render() {
    return (
      <View style={Default.container}>
        <View>
          <View
            style={{
              marginHorizontal: 12,
              justifyContent: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={{width: 20, height: 20}}>
              <Image
                style={{width: 10, height: 16}}
                source={ImageHelper.iconBack}
              />
            </TouchableOpacity>
            <Text style={[Default.text.title, {flex: 1}]}>
              {strings('address')}
            </Text>
            <TouchableOpacity
              onPress={() => this.RBSheet.open()}
              style={{
                width: 30,
                height: 30,
                backgroundColor: ColorStyle.tabActive,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 14, height: 14}}
                source={ImageHelper.iconAddWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: Default.constants.widthScreen - 40,
            marginHorizontal: 20,
            marginTop: 30,
          }}>
          <FlatList data={Data} renderItem={this.renderItem} />
        </View>
        {this.renderFixAddress()}
        {this.renderAddress()}
      </View>
    );
  }
  renderItem = ({item}) => {
    let data = item;
    return (
      <View
        style={{
          width: Default.constants.widthScreen - 40,
          backgroundColor: ColorStyle.tabWhite,
          marginBottom: 20,
        }}>
        <View style={{marginHorizontal: 20, marginVertical: 18}}>
          <Text>{data.name}</Text>
          <Text
            style={{
              marginTop: 18,
              maxWidth: Default.constants.widthScreen - 100,
            }}>
            {data.address} {data.addDistrict} {data.addCity}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              value={data.status}
              // onValueChange={a => this.setState({isSelected: a})}
              style={{alignSelf: 'center'}}
            />
            <Text style={{textAlign: 'center'}}>
              {strings('show_password')}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
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
        <TouchableOpacity
          onPress={() => this.RBSheet1.open()}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#24FF00',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ImageHelper.iconTool}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  renderFixAddress() {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet1 = ref;
        }}
        height={550}
        openDuration={250}
        customStyles={{
          container: {},
        }}>
        <View
          style={{
            width: Default.constants.widthScreen - 20,
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              Default.text.textAbout,
              {textAlign: 'center', alignItems: 'center', marginVertical: 15},
            ]}>
            {strings('fixAddress')}
          </Text>
          <View style={{marginHorizontal: 20}}>
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('name')}
              onChangeText={v => this.setState({name: v})}
              value={this.state.name}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('address')}
              onChangeText={v => this.setState({address: v})}
              value={this.state.address}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('addressCity')}
              onChangeText={v => this.setState({name: v})}
              value={this.state.name}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('address1')}
              onChangeText={v => this.setState({address: v})}
              value={this.state.address}
              placeholderTextColor={ColorStyle.gray}
            />
            <TouchableOpacity
              style={[Default.button.buttonW80, {marginTop: 40}]}>
              <Text style={Default.text.textButton}>
                {strings('saveAddress')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    );
  }
  renderAddress() {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={550}
        openDuration={250}
        customStyles={{
          container: {},
        }}>
        <View
          style={{
            width: Default.constants.widthScreen - 20,
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              Default.text.textAbout,
              {textAlign: 'center', alignItems: 'center', marginVertical: 15},
            ]}>
            {strings('newAddress')}
          </Text>
          <View style={{marginHorizontal: 20}}>
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('name')}
              onChangeText={v => this.setState({name: v})}
              value={this.state.name}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('address')}
              onChangeText={v => this.setState({address: v})}
              value={this.state.address}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('addressCity')}
              onChangeText={v => this.setState({name: v})}
              value={this.state.name}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('address1')}
              onChangeText={v => this.setState({address: v})}
              value={this.state.address}
              placeholderTextColor={ColorStyle.gray}
            />
            <TouchableOpacity
              style={[Default.button.buttonW80, {marginTop: 40}]}>
              <Text style={Default.text.textButton}>
                {strings('saveAddress')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    );
  }
}
