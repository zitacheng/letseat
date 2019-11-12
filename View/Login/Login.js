import * as React from "react";
import {
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
        Image,
        SafeAreaView} from "react-native";

var FBLoginButton = require('./FBLoginButton.js');

class Login extends React.Component<Props> {

  constructor() {
   super();
  }

  pressGuest() {
    console.log("pressed");
    this.props.navigation.navigate('Home');
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={require('../../Assets/logo.png')}
            resizeMode='contain'
          />
          <TouchableOpacity
            style={styles.guest}
            onPress={() => this.pressGuest()}
            title="Login as guest"
          >
            <Text style={styles.txt}> Login as guest </Text>
          </TouchableOpacity>
          <FBLoginButton />
        </View>
      </SafeAreaView>
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
    backgroundColor: "#FED576",
  },
  guest: {
    backgroundColor: '#5c1205',
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
  }
});

export default Login;
