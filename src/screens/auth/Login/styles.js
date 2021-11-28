import Default from "../../../functions/AppStyles";
const X=Default.constants.X;
export default {
  body:{
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: X * 2,
  },
  viewCheckBox:{
    width: Default.constants.widthScreen - 40,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textErr:{
    ...Default.text.textDef,
    marginLeft: X * 0.3,
    marginVertical:X * 0.1,
    color: 'red',
  },
  viewFBGG:{
    flexDirection: 'row',
    width: Default.constants.widthScreen,
    justifyContent: 'space-evenly',
    marginTop: Default.constants.X * 2.2,
  }
}
