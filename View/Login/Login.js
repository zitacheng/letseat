import * as React from "react";
import {
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
        Image,
        SafeAreaView,
        ImageBackground
      } from "react-native";


class Login extends React.Component<Props> {

  constructor() {
   super();
  }

  pressGuest() {
    this.props.navigation.navigate('Home');
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
              style={styles.guest}
              onPress={() => this.pressGuest()}
              title="Login as guest"
            >
              <Text style={styles.txt}> Login as guest </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    height: '40%',
    marginBottom: 10
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  guest: {
    backgroundColor: '#FED576',
    borderRadius: 3,
    padding: 7,
    marginTop: 20,
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
