import Default from '../../functions/AppStyles';
import ColorStyle from '../../assets/colors/Colors';

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
  },
  viewTitle: {
    marginTop: 60,
  },
  contenLineCount: {
    width: Default.constants.widthScreen - 40,
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewNumCount: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: '#333333',
    color: 'white',
    borderRadius: 12,
    textAlign: 'center',
    paddingTop: 2,
  },
  line: {
    height: 1,
    backgroundColor: '#E2E2E2',
    width: '30%',
  },
  btnNext: {
    marginHorizontal: 20,
    width: Default.constants.widthScreen - 40,
    height: 50,
    borderRadius: 25,
    backgroundColor: ColorStyle.tabActive,
    justifyContent: 'center',
    marginTop: 50,
  },
  textBtn: {
    // color: AppConstants.backgroudColor,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  OTPVerify: {
    marginTop: 30,
    marginHorizontal: 20,
    // width: AppConstants._width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reSend: {
    marginTop: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  otpInputs: {
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1.5,
    marginRight: 5.15,
    height: 50,
    width: (Default.constants.widthScreen - 40) / 6 - 3.5,
    textAlign: 'center',
  },
};
