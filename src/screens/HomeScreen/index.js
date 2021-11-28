import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import SearchView from '../../components/SearchView';
import BannerRow from '../../components/BannerRow';
import CategoryRow from './row/CategoryRow';
import ProductNew from './row/ProductNew';
import SellingProducts from './row/SellingProducts';
import {Actions} from 'react-native-router-flux';
import AppStyles from '../../functions/AppStyles';
import ImageHelper from '../../assets/Images';
import {connect} from 'react-redux';
import AppConstants from '../../functions/AppConstants';
import Colors from '../../assets/colors/Colors';
import {DotIndicator, UIActivityIndicator} from 'react-native-indicators';
import styles from './styles';
const Data = [
  {
    type: AppConstants.homeItemType.BANNER,
  },
  {
    type: AppConstants.homeItemType.CATEGORY,
  },
  {
    type: AppConstants.homeItemType.PRODUCT_NEW,
  },
  {
    type: AppConstants.homeItemType.SELLING_PRODUCT,
  },
];
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({data: Data}, () => {});
  }
  render() {
    return (
      <View style={AppStyles.container}>
        {this.renderSearch()}
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          renderItem={this._renderItem}
          style={{flex: 1, height: '100%'}}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0.4}
          // onEndReached={() => this.handleLoadMore()}
          ref={ref => {
            this.listRef = ref;
          }}
          refreshing={this.state.refreshing}
          removeClippedSubviews={true} // Unmount components when outside of window
          windowSize={10}
        />
      </View>
    );
  }
  _renderItem = ({item}) => {
    switch (item.type) {
      case AppConstants.homeItemType.BANNER:
        return <BannerRow />;
      case AppConstants.homeItemType.CATEGORY:
        return <CategoryRow />;
      case AppConstants.homeItemType.PRODUCT_NEW:
        return <ProductNew />;
      case AppConstants.homeItemType.SELLING_PRODUCT:
        return <SellingProducts />;
      case AppConstants.homeItemType.END:
        return <View style={{marginBottom: 10}} />;
      default:
        break;
    }
  };
  renderSearch() {
    return (
      <View style={styles.viewSearch}>
        <SearchView />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={styles.viewCart}
            onPress={() => Actions.jump('myCartScreen')}>
            <Image source={ImageHelper.cart} style={styles.iconCart} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewCart}
            onPress={() => alert('giỏ hàng')}>
            <Image
              source={ImageHelper.icon_mess}
              style={{
                width: AppStyles.constants.X * 0.63,
                height: AppStyles.constants.X * 0.6,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // handleLoadMore(){
  //   this.getProduct()
  // }
  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }
    return <UIActivityIndicator color={Colors.tabActive} size={20} />;
  };
  // getProduct(){
  //   console.log('abc');
  // }
}
const mapStateToProps = state => {
  return {};
};
//gửi giữ liệu lên
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
