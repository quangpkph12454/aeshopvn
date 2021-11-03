import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../../../resource/Default';
import TitleBar from "../../../elements/TitleBar";

export default class HelpScreen extends Component {
  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('helpCenter')}/>
        <View
          style={{
            marginTop: 25,
            marginHorizontal: 20,
            width: Default.constants.widthScreen - 40,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              maxWidth: Default.constants.widthScreen - 40,
            }}>
            {this.props.data.title}
          </Text>
          <Text style={{lineHeight:30,marginTop:20}}>{this.props.data.des}</Text>
        </View>
        <Text style={{marginTop:90,textAlign:'right',marginRight:20,fontSize:18,fontWeight:'bold',color:'rgba(0, 0, 0, 0.5)'}}> {strings('heldShop')}</Text>
      </View>
    );
  }
}
