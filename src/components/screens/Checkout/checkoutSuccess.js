import React, {Component} from 'react';
import { Image, View } from "react-native";
import Default from '../../../resource/Default';
import ImageHelper from "../../../resource/ImageHelper";

export default class CheckoutSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={Default.container} >
     <View style={{alignItems:"center"}}>
       <Image style={{width:Default.constants.widthScreen*0.6,height:Default.constants.widthScreen*0.6,marginVertical:Default.constants.X*1.5}} source={ImageHelper.success}/>

     </View>

         </View>
  }
}
