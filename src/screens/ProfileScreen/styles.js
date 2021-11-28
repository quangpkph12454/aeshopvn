import Default from "../../functions/AppStyles";
import ColorStyle from "../../assets/colors/Colors";

export default {
  viewContainer:{
    width: Default.constants.widthScreen,
    height: Default.constants.heightScreen / 7,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  imgAva:{
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonLG:{
    width: Default.constants.X * 2.4,
    height: Default.constants.X * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 5,
    backgroundColor: ColorStyle.tabWhite,
  },
  body:{
    width: Default.constants.widthScreen,
    height: 62,
    borderTopWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  }
}
