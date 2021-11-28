import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Default from '../../functions/AppStyles';
import ImageHelper from '../../assets/Images';
import {Actions} from 'react-native-router-flux';
import ViewProduct from '../../components/ViewProduct';

const Data = [
  {
    name: 'Áo khoác jeans JNS1010',
    export_price: ' 300000đ',
    import_price: '250000đ',
    id_style: [{id: 1, name: 'Mùa hè'}],
    size: [
      {id: 1, size_name: 'S', qnt: 55},
      {id: 2, size_name: 'M', qnt: 55},
      {id: 3, size_name: 'L', qnt: 55},
      {id: 4, size_name: 'XL', qnt: 55},
      {id: 5, size_name: 'XXL', qnt: 55},
    ],
    listImage: [
      {
        image: ImageHelper.imgProduct,
      },
      {
        image: ImageHelper.imgProduct1,
      },
      {
        image: ImageHelper.imgProduct2,
      },
    ],
    listBrand: [{id: 2, name: 'Mùa đông'}],
    id_category: 2,
    sale: '22%',
    star: 5,
    des: 'Áo T-shirt TSH123 với chất liệu cotton 100% mang lại cảm giác thoải mái, mát mẻ cho người mặc.',
  },
  {
    name: 'Áo khoác jeans JNS1010',
    export_price: ' 300000đ',
    import_price: '250000đ',
    id_style: [{id: 1, name: 'Mùa hè'}],
    size: [
      {id: 1, size_name: 'S', qnt: 55},
      {id: 2, size_name: 'M', qnt: 55},
      {id: 3, size_name: 'L', qnt: 55},
      {id: 4, size_name: 'XL', qnt: 55},
      {id: 5, size_name: 'XXL', qnt: 55},
    ],
    listImage: [
      {
        image: ImageHelper.imgProduct1,
      },
      {
        image: ImageHelper.imgProduct,
      },

      {
        image: ImageHelper.imgProduct2,
      },
    ],
    listBrand: [{id: 2, name: 'Mùa đông'}],
    id_category: 2,
    sale: '22%',
    star: 3,
    des: 'Áo T-shirt TSH123 với chất liệu cotton 100% mang lại cảm giác thoải mái, mát mẻ cho người mặc.',
  },
  {
    name: 'Áo khoác jeans JNS1010',
    export_price: ' 300000đ',
    import_price: '250000đ',
    id_style: [{id: 2, name: 'Mùa đông'}],
    size: [
      {id: 1, size_name: 'S', qnt: 55},
      {id: 2, size_name: 'M', qnt: 55},
      {id: 3, size_name: 'L', qnt: 55},
      {id: 4, size_name: 'XL', qnt: 55},
      {id: 5, size_name: 'XXL', qnt: 55},
    ],
    listImage: [
      {
        image: ImageHelper.imgProduct1,
      },
      {
        image: ImageHelper.imgProduct,
      },

      {
        image: ImageHelper.imgProduct2,
      },
    ],
    listBrand: [{id: 2, name: 'Mùa đông'}],
    id_category: 1,
    sale: '22%',
    star: 3,
    des: 'Áo T-shirt TSH123 với chất liệu cotton 100% mang lại cảm giác thoải mái, mát mẻ cho người mặc.',
  },
  {
    name: 'Áo khoác jeans JNS1010',
    export_price: ' 300000đ',
    import_price: '250000đ',
    id_style: [{id: 2, name: 'mùa đông'}],
    size: [
      {id: 1, size_name: 'S', qnt: 55},
      {id: 2, size_name: 'M', qnt: 55},
      {id: 3, size_name: 'L', qnt: 55},
      {id: 4, size_name: 'XL', qnt: 55},
      {id: 5, size_name: 'XXL', qnt: 55},
    ],
    listImage: [
      {
        image: ImageHelper.imgProduct1,
      },
      {
        image: ImageHelper.imgProduct,
      },

      {
        image: ImageHelper.imgProduct2,
      },
    ],
    listBrand: [{id: 2, name: 'mùa đông'}],
    id_category: 3,
    sale: '22%',
    star: 3,
    des: 'Áo T-shirt TSH123 với chất liệu cotton 100% mang lại cảm giác thoải mái, mát mẻ cho người mặc.',
  },
];
export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={Default.container}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{
              width: 30,
              height: 50,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 10, height: 20}}
              source={ImageHelper.iconBack}
            />
          </TouchableOpacity>
          <View
            style={{
              width: Dimensions.get('window').width * 0.7,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: Dimensions.get('window').width * 0.7,
                height: Default.constants.X * 0.9,
                fontSize: 14,
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 10,
              }}
              autoFocus={false}
              onChangeText={text => this.setState({text: text})}
              value={this.state.text}
              placeholder="Bạn muốn tìm gì ?"
              keyboardType="default"
            />
            <TouchableOpacity
              onPress={() => alert('đang tìm:' + this.state.text)}
              style={{
                width: 40,
                position: 'absolute',
                right: 0,
                height: Default.constants.X * 0.9,
                backgroundColor: 'red',
                justifyContent: 'center',
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                alignItems: 'center',
              }}>
              <Image
                source={ImageHelper.searchWhite}
                style={{
                  width: Default.constants.X * 0.5,
                  height: Default.constants.X * 0.5,
                  marginHorizontal: 13,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{
              width: 30,
              height: 50,
              alignItems: 'flex-end',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 21, height: 25}}
              source={ImageHelper.iconFiter}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 16, color: 'black', marginHorizontal: 20}}>
            Kết quả tìm kiếm :{this.state.text}
          </Text>
          <FlatList
            style={{marginTop: 20, marginHorizontal: 20}}
            data={Data}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
  renderItem({item, index}) {
    return <ViewProduct itemData={item} />;
  }
}
