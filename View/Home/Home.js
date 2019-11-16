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


class Home extends React.Component<Props> {

  constructor() {
   super();
  }

  pressLogout() {
    Alert.alert(
      'Important message',
      'Are you sure to logout?',
      [
        {text: 'Yes', onPress: () => this.props.navigation.navigate('Login')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  goLobby(host) {
    this.props.navigation.navigate('Lobby', {host: host});
  }

  render() {

    return (
      <ImageBackground source={require('../../Assets/bg.jpg')} style={styles.bg}>
        <SafeAreaView style={styles.container}>
          <View style={styles.card}>
            <Image
              style={styles.logo}
              source={require('../../Assets/logo.png')}
              resizeMode='contain'
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.goLobby(true)}
              title="Create a room"
            >
              <Text style={styles.txt}> Create a room </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.goLobby(false)}
              title="Join a room"
            >
              <Text style={styles.txt}> Join a room </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.logout]}
              onPress={() => this.pressLogout()}
              title="Log Out"
            >
              <Text style={styles.txt}> Log Out </Text>
            </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
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
  txt: {
    color: 'white',
    fontWeight: "600",
    textAlign: "center"
  },
  logout: {
    backgroundColor: 'grey',
  },
  bg: {
    width: "100%",
    height: "100%"
  }
});

export default Home;
