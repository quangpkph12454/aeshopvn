import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import ImageHelper from '../../../assets/Images';
import ViewCategory from '../../../components/ViewCategory';
// const isTablet = GlobalUtil.isTablet();
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
export default class CategoryRow extends Component {
  render() {
    // let itemCountTablet = Math.round(Dimensions.get("window").width/100);
    let itemCount = Math.round(Data.length/2);
    // let columnNumber = isTablet ? itemCountTablet : itemCount;
    return (
      <View>
        <FlatList
          style={{marginTop: 20}}
          // contentContainerStyle={{
          //   alignSelf: 'flex-start',
          // }}
          key={itemCount}
          numColumns={itemCount}
          data={Data}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
  renderItem({item, index}) {
    return <ViewCategory itemData={item} />;
  }
}
