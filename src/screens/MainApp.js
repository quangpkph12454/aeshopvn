import React, {Component} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {View} from 'react-native';
import ImageHelper from '../assets/Images';
import ColorStyle from '../assets/colors/Colors';
import {strings} from '../assets/strings/i18n/i18n';
import TabBar, {iconTypes} from 'react-native-fluidbottomnavigation';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {
          key: 'home',
          title: 'Home',
          icon: ImageHelper.home,
        },
        {
          key: 'menu',
          title: 'Menu',
          icon: ImageHelper.menu,
        },
        {
          key: 'notification',
          title: 'Notification',
          icon: ImageHelper.bell,
        },
        {
          key: 'profile',
          title: 'Profile',
          icon: ImageHelper.profile,
        },
      ],
      showChangeLanguage: false,
    };
  }

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    menu: MenuScreen,
    notification: NotificationScreen,
    profile: ProfileScreen,
  });
  render() {
    return (
      <View style={{flex: 1}}>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          barStyle={{
            display: 'none',
          }}
          activeColor={ColorStyle.tabActive}
          inactiveColor={ColorStyle.tabInactive}
        />
        <TabBar
          activeTab={this.state.index}
          iconStyle={{width: 20, height: 20}}
          onPress={tabIndex => {
            this._handleIndexChange(tabIndex);
          }}
          iconActiveTintColor="black"
          iconInactiveTintColor="blue"
          tintColor="white"
          titleColor="white"
          containerBackgroundColor="#EC222A"
          itemMaskBackgroundColor="#EC222A"
          iconSize={25}
          values={[
            {
              title: strings('tabHome'),
              image: ImageHelper.home,
              tintColor: this.state.index == 0 ? 'red' : 'white',
              key: 'home',
            },
            {
              title: strings('tabMenu'),
              image: ImageHelper.menu,
              tintColor: this.state.index == 1 ? 'red' : 'white',
              key: 'menu',
            },
            {
              title: strings('tabNotification'),
              image: ImageHelper.bell,
              tintColor: this.state.index == 2 ? 'red' : 'white',
              key: 'notification',
            },
            {
              title: strings('tabProfile'),
              image: ImageHelper.profile,
              tintColor: this.state.index == 3 ? 'red' : 'white',
              key: 'profile',
            },
          ]}
        />
      </View>
    );
  }
}
