import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TitleBar from '../../../components/TitleBar';
import ViewItemMyCart from '../../../components/ViewItemMyCart';
import ColorStyle from '../../../assets/colors/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import Default from '../../../functions/AppStyles';
import {strings} from '../../../assets/strings/i18n/i18n';
import ViewStar from '../../../components/ViewStar';

export default class OrderDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.node,
      indexItem: this.props.indexItem,
      comment: '',
    };
  }

  render() {
    console.log(this.state.indexItem);
    return (
      <View style={Default.container}>
        <TitleBar title={strings('oderDetail')} iconSearch={true} />
        <View
          style={{
            width: Default.constants.widthScreen - 40,
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={Default.text.text16}>
                {strings('ordersNum')} {this.state.indexItem}
              </Text>
              <Text style={Default.text.textGray}>{this.state.data.date}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={Default.text.textGray}>{strings('idOrders')}</Text>
                <Text style={[{marginLeft: 20}]}>
                  {this.state.data.id_bill}
                </Text>
              </View>
              <Text style={{color: '#2AA952'}}>{this.state.data.status}</Text>
            </View>
          </View>
          <Text style={{marginVertical: 20}}>
            {' '}
            {this.state.data.listProduct.length} {strings('product')}
          </Text>

          <FlatList
            style={{height: 400}}
            data={this.state.data.listProduct}
            renderItem={this.renderItem}
          />
          <View>
            <Text style={Default.text.text16}>{strings('infomation')}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={[Default.text.textGray, {flex: 1, textAlign: 'left'}]}>
                {strings('addOders')}
              </Text>
              <Text style={[{flex: 2, textAlign: 'right'}]}>
                {this.state.data.delivery_address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={[Default.text.textGray, {flex: 1, textAlign: 'left'}]}>
                {strings('paymentCards')}
              </Text>
              <Text style={[{flex: 2, textAlign: 'right'}]}>
                {this.state.data.payment_methods}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={[Default.text.textGray, {flex: 1, textAlign: 'left'}]}>
                {strings('sale')}
              </Text>
              <Text style={[{flex: 2, textAlign: 'right'}]}>
                {this.state.data.sale}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={[Default.text.textGray, {flex: 1, textAlign: 'left'}]}>
                {strings('totalMoney')}
              </Text>
              <Text style={[{flex: 2, textAlign: 'right'}]}>
                {this.state.data.total_bill}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  borderRadius: 20,
                  borderColor: ColorStyle.tabInactive,
                  borderWidth: 1,
                }}>
                <Text>{strings('setAgain')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.RBSheet.open()}
                style={{
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  backgroundColor: ColorStyle.tabActive,
                  borderRadius: 20,
                }}>
                <Text style={{color: ColorStyle.tabWhite}}>
                  {strings('evaluate')}
                </Text>
              </TouchableOpacity>
              {this.renderSendRatingAndCommentView()}
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderSendRatingAndCommentView() {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={370}
        height={370}
        openDuration={250}
        customStyles={{
          container: {},
        }}>
        <View
          style={{
            width: Default.constants.widthScreen - 20,
            justifyContent: 'space-between',
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
              {strings('comment1')}
            </Text>
            <View style={{marginHorizontal: 20}}>
              <View style={{marginVertical:10,height:50,alignItems:"center"}}>
                <ViewStar widthItem={50} num={2} />
              </View>
              <TextInput
                style={[Default.textInput, {marginTop: 20}]}
                placeholder={strings('comment')}
                onChangeText={v => this.setState({comment: v})}
                value={this.state.comment}
                placeholderTextColor={ColorStyle.gray}
              />
              <TouchableOpacity
                style={[Default.button.buttonW80, {marginTop: 40}]}>
                <Text style={Default.text.textButton}>
                  {strings('viewComment')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
    );
  }
  renderItem = ({item}) => {
    return <ViewItemMyCart itemData={item} status={false} />;
  };
}
