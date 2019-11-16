
import React, {Component} from 'react';
import {createAppContainer, createDrawerNavigator, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "./View/Login/Login.js";
import Home from "./View/Home/Home.js";
import Lobby from "./View/Lobby/Lobby.js";
import Game from "./View/Game/Game.js";

const MainNavigator = createStackNavigator({
  Login: {screen: Login, navigationOptions: {
        header: null,
      }},
  Home: {screen: Home, navigationOptions: {
        header: null,
      }},
  Lobby: {screen: Lobby, navigationOptions: {
        header: null,
      }},
  Game: {screen: Game, navigationOptions: {
        header: null,
      }}
},
  {
    initialRouteName: "Login"
  });

  const MainNavigation = createSwitchNavigator({
    AuthStack: MainNavigator, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  });

  const AppContainer = createAppContainer(MainNavigation);

  export default class App extends Component<Props> {
    render() {
      return (
        <AppContainer />
      );
    }
  }
