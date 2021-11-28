import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../assets/Images';
import { strings } from "../../assets/strings/i18n/i18n";
import TitleBar from "../../components/TitleBar";
import Default from "../../functions/AppStyles";
import ViewItemMyCart from "../../components/ViewItemMyCart";
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
export default class MyCartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {totalMoney: 0};
  }
  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('myCart')} />
        <View
          style={{
            marginTop: 40,
            width: Default.constants.widthScreen - 40,
            marginHorizontal: 20,
          }}>
          <FlatList
            style={{
              width: Default.constants.widthScreen - 40,
              height: Default.constants.heightScreen / 1.3,
            }}
            data={Data}
            renderItem={this.renderItem}
          />
          <TouchableOpacity
            onPress={() => Actions.jump('oderDetailScreen')}
            style={[Default.button.buttonW80, {marginTop: 50}]}>
            <Text style={Default.text.textButton}>
              {strings('pay')} {strings('totalMoney')}: 1350000đ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderItem = ({item}) => {
    return <ViewItemMyCart itemData={item} />;
  };
}
