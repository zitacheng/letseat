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


class Game extends React.Component<Props> {

  constructor(props) {
   super(props);

   this.state = {
     random: Math.floor(Math.random() * 4) + 0,
     end: false
    }
    this.timesUp = this.timesUp.bind(this);

    console.log("random ", this.state.random);
  }

  answer() {

  }

  timesUp() {
    this.setState({
      end: true
    });
  }

  quitGame() {
    Alert.alert(
      'Important message',
      'Are you sure to quit the quizz?',
      [
        {text: 'Yes', onPress: () => this.props.navigation.navigate('Home')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
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
              <View style={styles.card}>
                <CountdownCircle
                   seconds={15}
                   radius={30}
                   borderWidth={8}
                   color="#ff003f"
                   bgColor="#fff"
                   textStyle={styles.timer}
                   onTimeElapsed={this.timesUp}
                 />
                <Text style={styles.txt}> Questions? </Text>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.question}
                    onPress={() => this.answer()}
                  >
                    <Text style={styles.btnTxt}> Answer 0 </Text>
                  </TouchableOpacity>
                  {this.state.end && <Text style={styles.txt}> 25% </Text>}
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.question}
                    onPress={() => this.answer()}
                  >
                    <Text style={styles.btnTxt}> Answer 1 </Text>
                  </TouchableOpacity>
                  {this.state.end && <Text style={styles.txt}> 25% </Text>}
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.question}
                    onPress={() => this.answer()}
                  >
                    <Text style={styles.btnTxt}> Answer 2 </Text>
                  </TouchableOpacity>
                  {this.state.end && <Text style={styles.txt}> 25% </Text>}
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.question}
                    onPress={() => this.answer()}
                  >
                    <Text style={styles.btnTxt}> Answer 3 </Text>
                  </TouchableOpacity>
                  {this.state.end && <Text style={styles.txt}> 25% </Text>}
                </View>
              </View>
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
  back: {
    height: '5%',
    marginLeft: 10,
    marginTop: 10,
  },
  timer: {
    fontSize: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Game;
