import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Default from '../../../../resource/Default';
import TitleBar from "../../../elements/TitleBar";
import { strings } from "../../../../Utils/i18n/i18n";

export default class PaymentCardScreen extends Component {
  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('paymentCards')}/>
      </View>
    );
  }
}
