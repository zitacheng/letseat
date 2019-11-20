import * as React from "react";
import {
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
        Image,
        SafeAreaView,
        Alert,
        ImageBackground
      } from "react-native";
import CountdownCircle from 'react-native-countdown-circle'
import Food from '../Food.js'

class Result extends React.Component<Props> {

  constructor(props) {
     super(props);

     this.state = {
       res: props.navigation.getParam('res'),
       finish: false,
       final: [],
       matches: []   // maybe the array that will store every restaurant with the number of matches
     }

    // console.log("test", this.state.res[0]);
    console.log("res = ", this.state.res);
    console.log(Food);
    // checkPrice(this.state.res[0]);
    // checkTemp(this.state.res[1]);
    // checkDistance(this.state.res[2]);
    // checkWait(this.state.res[3]);
    // checkMealType(this.state.res[4]);
    // checkCategory(this.state.res[5]);
    this.state.finish = true;

  }

  quitGame() {
     this.props.navigation.navigate('Home');
  }

  endGame() {

  }

  checkPrice() {

  }

  checkTemp() {

  }

  checkDistance() {

  }

  checkWait() {

  }

  checkMealType() {

  }

  checkCategory() {

  }

  render() {

    return (
      <ImageBackground source={require('../../Assets/bg.jpg')} style={styles.bg}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.quitGame()}
            title="back"
          >
            <Image
              source={require('../../Assets/back.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <View style={styles.body}>
            {this.state.finish && <View style={styles.card}>
              <Text style={styles.txt}> How about panda express? </Text>
              <TouchableOpacity
                style={styles.question}
                onPress={() => this.endGame()}
              >
                <Text style={styles.btnTxt}> Yes </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.question}
                onPress={() => this.endGame()}
              >
                <Text style={styles.btnTxt}> No </Text>
              </TouchableOpacity>
            </View>}
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    height: '30%',
    marginBottom: 10
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  card: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
    marginLeft: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    elevation: 5,
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 10
  },
  question: {
    backgroundColor: '#FED576',
    borderRadius: 3,
    padding: 7,
    margin: 10,
    width: "58%",
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    elevation: 5,
  },
  btnTxt: {
    color: 'white',
    fontWeight: "600",
    textAlign: "center"
  },
  txt: {
    color: 'black',
    fontWeight: "600",
    textAlign: "left",
    margin: 15
  },
  logout: {
    backgroundColor: 'grey',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    height: '5%',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Result;
