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
import AnimateNumber from 'react-native-countup'

//TODO splash screen

class Lobby extends React.Component<Props> {

  constructor(props) {
   super(props);

   this.state = {
        nb: Math.floor(Math.random() * 4000) + 1000,
        people: 1,
        host: props.navigation.getParam('host'),
        room: props.navigation.getParam('room'),
        bot: Math.floor(Math.random() * 5) + 1,
        total: 0,
    }

    if (!this.state.host) {
      this.state.nb = this.state.room;
      this.state.people += 1;
    }

    this.state.total = this.state.people + this.state.bot;

  }

  pressStart() {
    this.props.navigation.navigate('Game', {bot: this.state.bot});
  }

  render() {

    return (
      <ImageBackground source={require('../../Assets/bg.jpg')} style={styles.bg}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate('Home')}
            title="back"
          >
            <Image
              source={require('../../Assets/back.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <View style={styles.body}>
            <View style={styles.card}>
              <Image
                style={styles.logo}
                source={require('../../Assets/logo.png')}
                resizeMode='contain'
              />
              <View style={styles.row}>
                <Text style={styles.txt}> Room number: </Text>
                <Text style={styles.txt}> {this.state.nb} </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}> Total people: </Text>
                {this.state.total > 0 &&
                  <AnimateNumber
                  initial={this.state.people}
                  value={this.state.total}
                  onFinish={() => this.props.navigation.navigate('Game', {bot: (this.state.bot + 1)})}
                  countBy={1} timing={(interval, progress) => {
                    return interval * (1 - Math.sin(Math.PI*progress) )*100;
                  }}/>}
              </View>
            </View>
            <TouchableOpacity
              style={this.state.host ? styles.btn :  styles.btn2}
              onPress={() => this.pressStart()}
              title="Log Out"
              disabled={!this.state.host}
            >
              <Text style={styles.btnTxt}> Start </Text>
            </TouchableOpacity>
            {!this.state.host && <Text style={styles.btnTxt}> Waiting for the host to start...</Text>}
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
  },
  btn: {
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
  btn2: {
    backgroundColor: 'grey',
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
    textAlign: "left"
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
  }
});

export default Lobby;
