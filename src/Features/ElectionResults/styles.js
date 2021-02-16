import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.30)',
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  otherHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: '50@ms',
  },
  headrtxt: {
    color: 'white',
  },
  otherImageContainer: {
    borderRadius: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  otherImage: {
    height: '200@ms',
    width: '340@ms',
    borderRadius: '5@ms',
    resizeMode: 'stretch',
  },
  otherMainView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: '20@ms'
  },
  mainHeading: {
    color: 'white',
    fontSize: '35@ms',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainPara: {
    fontSize: '20@ms',
    color: 'black',
    marginHorizontal: '10@ms',
  },
  desc: {
    marginHorizontal: '9@ms',
    width: '95%',
    backgroundColor: 'rgba(255,255,255,0.90)',
    borderWidth: '1@ms',
    borderColor: 'white',
    padding: '15@ms',
    borderRadius: '20@ms',
    marginBottom: '15@ms'
  },
  othersProtect: {
    fontSize: '27@ms',
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: '10@ms',
    marginBottom: '20@ms',
    padding: '10@ms',
    marginTop: '20@ms'
  },
  othersProtect1: {
    fontSize: '22@ms',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '20@ms',
  },
  animationBox: {
    alignItems: 'center',
  },
  animation: {
    height: '150@ms',
    width: '300@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerIndicator: {
    width: '110.5%', 
    // width: '336.5@ms', 
    height: '18@ms', 
    left: '-16@ms', 
    borderTopLeftRadius : '15@ms', 
    borderTopEndRadius:'15@ms', 
    top: '-17@ms'
  },
  dotIndication: {
    width: '14@ms', 
    height: '14@ms', 
    borderRadius: '30@ms', 
    marginTop: '6@ms'
  }
});

export default styles;
