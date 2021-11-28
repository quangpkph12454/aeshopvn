import {Dimensions, PixelRatio, StatusBar} from 'react-native';
import ColorStyle from '../assets/colors/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight =
  Dimensions.get('window').height -
  ((StatusBar.currentHeight || 0) > 24 &&
  ((StatusBar.currentHeight || 0) != 30 ||
    Dimensions.get('screen').height - Dimensions.get('window').height > 48)
    ? 0
    : StatusBar.currentHeight);
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const textSizeApp = 14;
const maxThumbnailSize = 600;
const maxNicknameLength = 20;
const maxSloganLength = 200;
const vipBoundSizeBig = 170;
const minSplashTime = 4; // seconds
var widthScreen = Dimensions.get('window').width;
var heightScreen = Dimensions.get('window').height;
var screenSizeByInch =
  (Math.sqrt(Math.pow(widthScreen, 2) + Math.pow(heightScreen, 2)) /
    (PixelRatio.get() * 160)) *
  2;
var X =
  (widthScreen < heightScreen ? widthScreen : heightScreen) /
  (screenSizeByInch < 7 ? 9.25 : 12);
export default {
  constants: {
    X,
    widthScreen,
    heightScreen,
  },
  container: {
    backgroundColor: '#F9F9F9',
    paddingTop: X * 0.65,
    flex: 1,
    flexDirection: 'column',
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    width: 24,
    height: 24,
  },
  fontTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  textInput: {
    width: widthScreen - 40,
    height: X * 1.55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    elevation: 0.5,
    padding: 15,
  },
  text: {
    textDef: {
      fontSize: 14,
      color: 'black',
    },
    textButton: {
      fontSize: 18,
      color: 'white',
    },
    textAbout: {
      fontSize: 18,
      color: 'black',
    },
    textTitle: {
      fontSize: 20,
      color: 'white',
    },
    textSlogan: {
      fontSize: 17,
      color: 'white',
    },
    text16: {
      fontSize: 16,
      color: 'black',
    },
    textGray: {
      fontSize: 14,
      color: ColorStyle.gray,
    },
    textInput: {
      fontSize: 15,
      color: ColorStyle.gray,
    },
    title: {
      fontSize: 24,
      color: 'black',
      textAlign: 'center',
    },
  },
  button: {
    buttonW80: {
      width: widthScreen - 40,
      height: X * 1.5,
      backgroundColor: '#FF1300',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
      borderColor: 'rgba(211, 38, 38, 0.25)',
      shadowColor: 'rgba(211, 38, 38, 0.25)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      marginTop: X * 1.7,
    },
    buttonFBGG: {
      width: X * 1.4,
      height: X * 1.4,
      backgroundColor: '#DA483F',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: X * 1.4,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },
    viewNumCount: {
      height: 24,
      width: 24,
      borderWidth: 1,
      borderColor: '#333333',
      color: 'white',
      borderRadius: 12,
      textAlign: 'center',
      alignItems: 'center',
      paddingTop: 2,
    },
  },
  borderRadius10: {
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
  },
  line: {
    lineGray: {
      height: 1,
      backgroundColor: '#E2E2E2',
      width: '30%',
    },
  },
};
