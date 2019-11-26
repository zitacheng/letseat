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
import Questions from '../Questions.js'

class Game extends React.Component<Props> {

  constructor(props) {
   super(props);

   this.state = {
     random: Math.floor(Math.random() * 4) + 0,
     end: false,
     length: Object.keys(Questions).length,
     id: 0,
     response: [],
     finished: false,
     bots: props.navigation.getParam('bot'),
     percentage: [0, 0, 0, 0, 0],
     questions: 0,
     sweet: false,
    }
    this.endQuestion = this.endQuestion.bind(this);
  }

  endQuestion(user, item, i, data) {

    //reset the percentage table to 0
    this.state.percentage.fill(0, 0, 5);

    if (!this.state.finished) {
      //If the user did not clicked, we choose a random aswer
      if (!user) {
        data = Object.keys(Object.values(Questions)[this.state.id]);
        i = Math.floor(Math.random() * (data.length - 1)) + 0;
      }
      //The user/random click
      this.state.percentage[i] = this.state.percentage[i] + 1;

      //These are bots click
      for (var l = 0; l < this.state.bots; l++) {
        i = Math.floor(Math.random() * (data.length - 1)) + 0;
        if (this.state.questions == 5 && this.state.sweet) {  //If the answer before was sweet wo tell the bots to choose dessert
          i = 4;
        }
        this.state.percentage[i] = this.state.percentage[i] + 1;
      }

      var highest = this.state.percentage.indexOf(Math.max(...this.state.percentage));
      this.state.response.push(Object.values(Object.values(Questions)[this.state.id])[highest]);
      if (this.state.questions == 4 && highest == 0) //if sweet wins
        this.state.sweet = true;
      this.setState({
        end: true
      });
      setTimeout(() => {
        this.state.questions += 1;
        if (this.state.id + 1 < this.state.length) {
          this.setState({
            id: this.state.id + 1,
            end: false
          });
          this.countdown.restartCount();
        }
        else {
          this.state.finished = true;
          this.props.navigation.navigate('Result', {res: this.state.response});
        }
      }, 1700);
    }
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
                 ref = {ref => this.countdown = ref}
                 seconds={10}
                 radius={30}
                 borderWidth={8}
                 color="#ff003f"
                 bgColor="#fff"
                 textStyle={styles.timer}
                 onTimeElapsed={this.endQuestion}
               />
               <Text style={styles.txt}> {Object.keys(Questions)[this.state.id]} </Text>
               <View style={styles.column}>
               {Object.keys(Object.values(Questions)[this.state.id]).map((item, i, data) => (
                 <View style={styles.row} key={i}>
                   <TouchableOpacity
                     disabled={this.state.end}
                     style={styles.question}
                     onPress={() => this.endQuestion(true, item, i, data)}
                   >
                     <Text style={styles.btnTxt}> {item} </Text>
                   </TouchableOpacity>
                   {this.state.end && <View style={styles.txt}>
                    <Text>{(this.state.percentage[i] / (this.state.bots + 1) * 100).toFixed(2)}%</Text>
                   </View>}
                 </View>
               ))}
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
  timer: {
    fontSize: 20,
  },
});

export default Game;
