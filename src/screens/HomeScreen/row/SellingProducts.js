import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Default from '../../../resource/Default';
import ColorStyle from '../../../resource/ColorStyle';
import ImageHelper from '../../../resource/ImageHelper';
import ViewProduct from '../../../components/ViewProduct';
import { strings } from "../../../assets/strings/i18n/i18n";
const Data= [
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
export default class SellingProducts extends Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text
          style={[
            Default.text.textTitle,
            {
              color: ColorStyle.tabInactive,
              fontWeight: 'bold',
              marginHorizontal: 10,marginBottom:20
            },
          ]}>
          {strings('sellingProducts')}
        </Text>
        <FlatList
          numColumns={2}
          style={{marginHorizontal: 15}}
          data={Data}
          showsHorizontalScrollIndicator={true}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
  renderItem({item, index}) {
    return <ViewProduct itemData={item} />;
  }
}
