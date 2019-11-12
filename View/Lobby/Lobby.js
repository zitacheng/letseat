import * as React from "react";
import {
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
        Image,
        SafeAreaView} from "react-native";


class Lobby extends React.Component<Props> {

  constructor() {
   super();
  }

  pressGuest() {
    console.log("pressed");
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
    backgroundColor: "#5c1205",
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

export default Lobby;
