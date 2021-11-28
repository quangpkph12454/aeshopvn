import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Default from '../../functions/AppStyles';
import SearchView from '../../components/SearchView';
import ImageHelper from '../../assets/Images';
import ColorStyle from '../../assets/colors/Colors';
import ViewProduct from '../../components/ViewProduct';
import styles from "./styles";
const Data = [
  {
    title: 'Áo phông',
    icon: ImageHelper.T_shirt,
  },
  {
    title: 'Áo sơ mi',
    icon: ImageHelper.shirt,
  },
  {
    title: 'Áo khoác',
    icon: ImageHelper.jacket,
  },
  {
    title: 'Áo len,nỉ',
    icon: ImageHelper.sweater,
  },
  {
    title: 'Áo hoodie',
    icon: ImageHelper.hoodie,
  },
  {
    title: 'Local Brands',
    icon: ImageHelper.local_brands,
  },
  {
    title: 'Đồ công sở',
    icon: ImageHelper.vest,
  },
  {
    title: 'Áo Polo',
    icon: ImageHelper.polo,
  },
  // {
  //   title: 'Áo Phao',
  //   icon: ImageHelper.puffer,
  // },
];

const DataStyle = [
  {
    id: 0,
    name: 'Tất cả',
  },
  {
    id: 1,
    name: 'Mùa hè',
  },
  {
    id: 2,
    name: 'Mùa Đông',
  },
];
const Data1 = [
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
const Data2 = [
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
        image: ImageHelper.imgProduct2,
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
    export_price: '300.000đ',
    import_price: '250.000đ',
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
        image: ImageHelper.imgProduct2,
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
    export_price: '300000đ',
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
        image: ImageHelper.imgProduct2,
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
    export_price: '300000đ',
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
        image: ImageHelper.imgProduct2,
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
];
export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      selectedMainCategory: 0,
      selectedStyle: 0,
    };
  }
  componentDidMount() {
    this.setState({data: Data1});
    this.onMainCategorySelect(this.state.selectedMainCategory);
  }

  render() {
    return (
      <View style={Default.container}>
        {this.renderSearch()}
        <View style={{flex: 1, width: Default.constants.widthScreen}}>
          <FlatList
            style={styles.flatListCategory
            }
            data={Data}
            horizontal={true}
            keyExtractor={this.keyExtractor}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderItemCategory}
          />
          <View style={{flex: 8, backgroundColor: '#F6F6F6'}}>
            <FlatList
              style={styles.flatListStyle
              }
              data={DataStyle}
              renderItem={this.renderItemStyle}
              numColumns={3}
            />

            <View style={styles.flatListProduct}>
              <FlatList
                data={Data1}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={this.renderItemProduct}
              />
            </View>
          </View>
          <View />
        </View>
      </View>
    );
  }
  renderItemProduct = ({item}) => {
    return <ViewProduct itemData={item} />;
  };
  renderItemStyle = ({item, index}) => {
    let isSelected = index === this.state.selectedStyle;
    return (
      <TouchableOpacity
        onPress={() => this.selectedStyle(index)}
        style={{
          flex: 1,
          padding: 11,
          borderColor: ColorStyle.gray,
          justifyContent: 'center',
          backgroundColor: isSelected ? 'red' : 'white',
          alignItems: 'center',
        }}>
        <Text style={{color: isSelected ? 'white' : 'black'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  keyExtractor = (item, index) => index.toString();
  selectedStyle(index) {
    this.setState({selectedStyle: index});
  }
  renderItemCategory = ({item, index}) => {
    let isSelected = index === this.state.selectedMainCategory;
    return (
      <TouchableOpacity
        onPress={() => {
          this.onMainCategorySelect(index);
        }}
        style={styles.buttonCategory
        }>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item.icon}
            style={styles.imgCategory}
          />
          <Text
            style={{
              fontSize: 13,
              textAlign: 'center',
              color: isSelected ? 'red' : 'black',
            }}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            width: '86%',
            borderBottomWidth: isSelected ? 2 : 0,
            borderColor: ColorStyle.tabActive,
          }}
        />
      </TouchableOpacity>
    );
  };
  onMainCategorySelect(index) {
    this.setState({data: Data2});
    this.setState({selectedMainCategory: index});
    // let data = this.state.data;
    // let dataNew = '';
    // let id_category = data.find(i => i.id_category === index+1);
    // this.setState({data: id_category});
    // if(id_category===index){
    //   console.log(id_category);
    // }
  }
  renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 5,
          marginBottom: 15,
        }}>
        <SearchView />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              width: Default.constants.X,
              height: Default.constants.X,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => alert('giỏ hàng')}>
            <Image
              source={ImageHelper.cart}
              style={{
                width: Default.constants.X * 0.6,
                height: Default.constants.X * 0.6,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Default.constants.X,
              height: Default.constants.X,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => alert('giỏ hàng')}>
            <Image
              source={ImageHelper.icon_mess}
              style={{
                width: Default.constants.X * 0.63,
                height: Default.constants.X * 0.6,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
