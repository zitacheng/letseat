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
       final: {},
       result: "",
       end: false,
       sortRes: [],
       id: 0,
       sentence: ""
     }

    var first = 0;
    Object.keys(Food).forEach(function(key) {
        this.state.final[key] = 0;
        this.checkPrice(key, Food[key]);
        this.checkTemp(key, Food[key]);
        this.checkDistance(key, Food[key]);
        this.checkWait(key, Food[key]);
        this.checkMealType(key, Food[key]);
        this.checkCategory(key, Food[key]);
        if (this.state.final[key] > first){
          first = this.state.final[key];
          this.state.result = key;
        }
    }.bind(this));
    this.sortObject = this.sortObject.bind(this);

    this.sortObject(this.state.final);
    console.log("sort ",this.state.sortRes[0]);
    this.state.finish = true;
  }

  sortObject(obj) {
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            this.state.sortRes.push(prop);
        }
    }
    this.state.sortRes.sort(function(a, b) {
        return b.value - a.value;
    });
  }

  quitGame() {
     this.props.navigation.navigate('Home');
  }

  endGame(state) {
    this.state.sentence = "Thank you for using our app."

    if (!state) {
      if (this.state.sortRes.length > (this.state.id + 1))
        this.state.id += 1;
      else {
        state = true;
        this.state.sentence = "We are sorry that you did not find anything."
      }
    }

    this.setState({
      end: state
    });
  }

  checkPrice(key, data) {
    if (data[0] <= this.state.res[0])
      this.state.final[key] += 1;
  }

  checkTemp(key, data) {
    if (data[1] == this.state.res[1])
      this.state.final[key] += 1;
  }

  checkDistance(key, data) {
    if (data[2] <= this.state.res[2])
      this.state.final[key] += 1;
  }

  checkWait(key, data) {
    if (data[3] <= this.state.res[3])
      this.state.final[key] += 1;
  }

  checkMealType(key, data) {
    if (data[4] == this.state.res[4])
      this.state.final[key] += 1;
  }

  checkCategory(key, data) {
    if (data[5] == this.state.res[5])
      this.state.final[key] += 1;
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
            {this.state.finish && !this.state.end && <View style={styles.card}>
              <Text style={styles.txt}> How about {this.state.sortRes[this.state.id]}? </Text>
              <TouchableOpacity
                style={styles.question}
                onPress={() => this.endGame(true)}
              >
                <Text style={styles.btnTxt}> Yes </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.question}
                onPress={() => this.endGame(false)}
              >
                <Text style={styles.btnTxt}> No </Text>
              </TouchableOpacity>
            </View>}
            {this.state.end &&
              <View style={styles.card}>
                <Text style={styles.txt}>{this.state.sentence}</Text>
                <Text style={styles.txt}>Hope to see you soon.</Text>
                  <TouchableOpacity
                    style={styles.question}
                    onPress={() => this.props.navigation.navigate('Home')}
                  >
                    <Text style={styles.btnTxt}> Back to home </Text>
                  </TouchableOpacity>
              </View>
            }
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
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  back: {
    height: '5%',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Result;
