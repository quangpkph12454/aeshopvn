import React, {Component} from 'react';
import Default from '../../resource/Default';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../resource/ImageHelper';
import Carousel from 'react-native-banner-carousel';
import ColorStyle from '../../resource/ColorStyle';
import ViewStar from '../../components/ViewStar';
import ViewProduct from '../../components/ViewProduct';
import ViewItemMess from '../../components/ViewItemMess';
const BannerWidth = Dimensions.get('window').width;
import RBSheet from 'react-native-raw-bottom-sheet';
import {strings} from '../../assets/strings/i18n/i18n';
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
const sizeABC = [
  {id: 1, size_name: 'S', qnt: 55},
  {id: 2, size_name: 'M', qnt: 55},
  {id: 3, size_name: 'L', qnt: 55},
  {id: 4, size_name: 'XL', qnt: 55},
  {id: 5, size_name: 'XXL', qnt: 55},
];
const DataMes = [
  {
    avatar: ImageHelper.logo_,
    textMess: 'Tuyệt vời',
  },
  {
    avatar: ImageHelper.imgProduct,
    textMess: 'Rất tuyệt vời',
  },
  {
    avatar: ImageHelper.avata,
    textMess:
      'Sản phẩm này rất tốt! Tôi đã mua chiếc áo này từ shop 1 tuần trước. khi mặc rất mát và thoải mái! 100 điểm',
  },
  {
    avatar: ImageHelper.imgProduct1,
    textMess:
      'Tôi đã mua chiếc áo này tặng cho bạn mình và bạn tôi rất thích nó',
  },
  {
    avatar: ImageHelper.imgProduct2,
    textMess: 'Chất lượng tốt',
  },
];
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.node,
      quantity: 1,
      size: 0,
    };
  }
  render() {
    let data = this.state.data;
    let price = data.export_price.substring(0, data.export_price.length - 1);
    let sale = data.sale.substring(0, data.sale.length - 1);
    let priceSale = price * (sale / 100);
    return (
      <View style={Default.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: Default.constants.widthScreen,
              height: Default.constants.widthScreen,
              alignItems: 'center',
            }}>
            <Carousel
              autoplay
              autoplayTimeout={4000}
              loop
              index={0}
              pageSize={BannerWidth}>
              {this.state.data.listImage.map((image, index) =>
                this.renderPage(image, index),
              )}
            </Carousel>
          </View>
          <View
            style={{
              marginLeft: 12,
              justifyContent: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={{width: 50, marginTop: 20, height: 50}}>
              <Image
                style={{width: 10, height: 20}}
                source={ImageHelper.iconBack}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20, marginHorizontal: 20, marginBottom: 50}}>
            <Text
              style={[Default.text.textTitle, {color: ColorStyle.tabInactive}]}>
              {this.state.data.name}
            </Text>
            <Text
              style={[
                Default.text.text16,
                {color: ColorStyle.gray, marginTop: 12, marginBottom: 8},
              ]}>
              {data.export_price.replace(/\s/g, '')}
            </Text>
            <Text
              style={[Default.text.textTitle, {color: ColorStyle.tabActive}]}>
              {priceSale}đ
            </Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <Text
                style={[
                  Default.text.textButton,
                  {color: ColorStyle.tabInactive},
                ]}>
                {strings('descriptionProduct')}
              </Text>
              <ViewStar num={data.star} widthItem={18} />
            </View>
            <Text style={{marginTop: 10}}>{data.des}</Text>
            <View
              style={{
                width: Default.constants.widthScreen - 40,
                borderWidth: 1,
                borderColor: ColorStyle.gray,
                marginVertical: 40,
              }}
            />
            {this.viewComment()}
            <View
              style={{
                width: Default.constants.widthScreen - 40,
                borderWidth: 1,
                borderColor: ColorStyle.gray,
                marginVertical: 40,
              }}
            />
            {this.listProductOther()}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.RBSheet.open()}
          style={{
            width: Default.constants.widthScreen,
            height: Default.constants.X * 1.7,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={[Default.text.title, {color: ColorStyle.tabWhite}]}>
            {strings('buyNow')}
          </Text>
        </TouchableOpacity>
        {this.renderSendRatingView()}
      </View>
    );
  }
  viewComment() {
    return (
      <View>
        <Text style={[Default.text.textTitle, {color: ColorStyle.tabInactive}]}>
          {strings('viewComment')}
        </Text>
        <FlatList
          style={{
            backgroundColor: '#F3F3F3',
            marginTop: 30,
            width: Default.constants.widthScreen - 40,
            height: 300,
            padding: 10,
          }}
          data={DataMes}
          renderItem={this.renderItemMess}
        />
      </View>
    );
  }

  renderItemMess = ({item}) => {
    return <ViewItemMess itemData={item} />;
  };
  listProductOther() {
    return (
      <View>
        <Text
          style={[
            Default.text.textTitle,
            {color: ColorStyle.tabInactive, marginBottom: 17},
          ]}>
          {strings('productOther')}
        </Text>
        <FlatList
          numColumns={2}
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
  renderSendRatingView() {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={600}
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
              height: 200,
              flexDirection: 'row',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <Image
              source={ImageHelper.imgProduct}
              style={{width: 150, height: 200, borderRadius: 10}}
            />
            <View style={{flex: 1, justifyContent: 'flex-end', marginLeft: 10}}>
              <Text
                style={[
                  Default.text.textTitle,
                  {color: ColorStyle.tabActive, marginBottom: 10},
                ]}>
                150000
              </Text>
              <Text style={Default.text.text16}>Kho :1000</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              width: Default.constants.widthScreen - 20,
            }}>
            <Text style={Default.text.text16}>{strings('chooseSize')}</Text>
            <View style={{marginTop: 20}}>
              <FlatList
                data={sizeABC}
                horizontal={true}
                renderItem={this.renderItemSize}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 130,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: Default.constants.widthScreen - 20,
                height: 60,
                marginHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={[Default.text.text16, {alignItems: 'center'}]}>
                {strings('numberPro')}
              </Text>
              <View
                style={{
                  flex: 1,
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
            </View>
            <TouchableOpacity
              style={[
                Default.button.buttonW80,
                {marginTop: 0, marginHorizontal: 20},
              ]}>
              <Text style={Default.text.textButton}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    );
  }
  renderItemSize = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: 100,
          borderColor: ColorStyle.tabInactive,
          borderWidth: 1,
        }}>
        <Text style={[Default.text.text16]}>{item.size_name}</Text>
      </TouchableOpacity>
    );
  };
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{width: '100%', height: '100%'}} source={image.image} />
      </View>
    );
  }
}
