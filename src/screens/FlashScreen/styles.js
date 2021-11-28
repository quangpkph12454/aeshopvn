import Default from "../../functions/AppStyles";
const X=Default.constants.X;
export default {
container:{
  width: Default.constants.widthScreen,
  height: '100%',
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
},
  logo:{
    width:X * 6,
    height:X * 6,
  },
  text:{
  ...Default.text.textSlogan,
    maxWidth:X * 7, textAlign: 'center'
  }
}
