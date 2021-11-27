import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../resource/ImageHelper';
import Default from '../../resource/Default';
const Data = [
  {
    images: ImageHelper.imgProduct,
    description:
      'Người Mỹ luôn có táo để thưởng thức mỗi ngày bởi bang Washington được biết đến là vùng đất của những quả táo, với đất đai trù phú và khí hậu ôn hòa. Táo phục vụ không chỉ cho người dân nước Mỹ, mà hiện nay đã đến khắp nơi trên thế giới.',
    nameImage: 'Táo đỏ nhập khẩu giảm giá 20% từ 31/08 đến 02/09',
  },
  {
    images: ImageHelper.imgProduct,
    description:
      'Người Mỹ luôn có táo để thưởng thức mỗi ngày bởi bang Washington được biết đến là vùng đất của những quả táo, với đất đai trù phú và khí hậu ôn hòa. Táo phục vụ không chỉ cho người dân nước Mỹ, mà hiện nay đã đến khắp nơi trên thế giới.',
    nameImage: 'Táo đỏ nhập khẩu giảm giá 20% từ 31/08 đến 02/09',
  },
];
export default class NotificationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.node,
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <View style={Default.container}>
        <View style={{flexDirection: 'column', marginHorizontal: 20}}>
          <TouchableOpacity style={{padding: 10}} onPress={() => Actions.pop()}>
            <Image source={ImageHelper.iconBack} style={[Default.iconBack]} />
          </TouchableOpacity>
          <Text style={{fontSize: 24}}>{this.props.node.title}</Text>
          <Text
            style={{marginTop: 10, fontSize: 17, color: 'rgba(0, 0, 0, 0.5)'}}>
            {this.props.node.date}
          </Text>
        </View>
        <FlatList style={{marginTop:50}} data={Data} renderItem={this.renderItem} />
      </View>
    );
  }
  renderItem({item, index}) {
    return (
      <View style={{marginBottom:20}}>
        <Image
          source={item.images}
          style={{
            width: Default.constants.widthScreen - 120,
            height: 150,
            marginHorizontal: 60,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            marginHorizontal:55,
            color:'rgba(0, 0, 0, 0.5)',
            maxWidth: Default.constants.widthScreen - 110,
            textAlign: 'center',
          }}>
          {item.nameImage}
        </Text>

        <Text style={{fontSize:14,marginHorizontal:20}}>{item.description}</Text>
      </View>
    );
  }
}
