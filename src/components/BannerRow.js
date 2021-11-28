import React, {Component} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import Default from '../functions/AppStyles';
import ImageHelper from '../assets/Images';
import Carousel from 'react-native-banner-carousel';
const images = [
  ImageHelper.banner1,
  ImageHelper.banner2,
  ImageHelper.banner3,
  ImageHelper.banner4,
];
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
export default class BannerRow extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: this.props.dataImg,
    // };
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{width: '100%', height: '100%'}} source={image} />
      </View>
    );
  }
  render() {
    return (
      <View
        style={{
          width: Default.constants.widthScreen,
          height: Default.constants.heightScreen / 4,
        }}>
        <Carousel
          autoplay
          autoplayTimeout={4000}
          loop
          index={0}
          pageSize={BannerWidth}>
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    );
  }
}
