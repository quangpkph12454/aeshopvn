
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Default from '../../../functions/AppStyles';
import TitleBar from "../../../components/TitleBar";
import { strings } from "../../../assets/strings/i18n/i18n";

export default class PaymentCardScreen extends Component {
  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('paymentCards')}/>
      </View>
    );
  }
}
