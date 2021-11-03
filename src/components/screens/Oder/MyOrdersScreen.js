import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import Default from '../../../resource/Default';
import TitleBar from '../../elements/TitleBar';
import ImageHelper from '../../../resource/ImageHelper';
import ViewMyOrdersScreen from '../../elements/ViewMyOrdersScreen';
import { strings } from "../../../Utils/i18n/i18n";
const Data = [
  {
    id_bill: '2132556',
    date: '29/08/2021',
    idOrder: '1',
    status: 'Đã giao',
    delivery_address: 'Số 11 ,124/39 Hòe Thị,Phương Canh,Nam Từ Liên',
    payment_methods: 'Ngân hàng',
    sale: 'không có',
    total_bill: '45000000',
    listProduct: [
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
    ],
  },

  {
    id_bill: '2132556',
    date: '29/08/2021',
    idOrder: '1',
    status: 'Đã giao',
    delivery_address: 'Số 11 ,124/39 Hòe Thị,Phương Canh,Nam Từ Liên',
    payment_methods: 'Ngân hàng',
    sale: 'không có',
    total_bill: '45000000',
    listProduct: [
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
    ],
  },
  {
    id_bill: '2132556',
    date: '29/08/2021',
    idOrder: '1',
    status: 'Đã giao',
    delivery_address: 'Số 11 ,124/39 Hòe Thị,Phương Canh,Nam Từ Liên',
    payment_methods: 'Ngân hàng',
    sale: 'không có',
    total_bill: '45000000',
    listProduct: [
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
    ],
  },
];
export default class MyOrdersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('myOrders')} iconSearch={true} />
        <FlatList
          data={Data}
          renderItem={this.renderItem}
          style={{marginTop: 25, marginHorizontal: 20}}
        />
      </View>
    );
  }
  renderItem = ({item, index}) => {
    return <ViewMyOrdersScreen itemData={item} indexItem={index} />;
  };
}
