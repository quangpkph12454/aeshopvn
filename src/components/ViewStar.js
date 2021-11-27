import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import ImageHelper from '../resource/ImageHelper';

export default class ViewStar extends Component {
  render() {
    let num = this.props.num;
    let widthItem = this.props.widthItem;
    return (
      <View style={{flex: 1}}>
        {num === 5 && (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
          </View>
        )}
        {num === 4 && (
          <View sstyle={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
          </View>
        )}
        {num === 3 && (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
          </View>
        )}
        {num === 2 && (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
          </View>
        )}
        {num === 1 && (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={ImageHelper.iconStarYell}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
          </View>
        )}
        {num === 0 && (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
            <Image
              source={ImageHelper.iconStar}
              style={{width: widthItem, height: widthItem}}
            />
          </View>
        )}
      </View>
    );
  }
}
