import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
//importa biblioteca createBottomTabNavigator - Desafío 1
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

//Agrega createBottomTabNavigator a la variable llamada tab - Desafío 2
export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
      //Agrega el código para pasar a la pantalla respectiva cuando se haga clic en la pestaña: desafío 3
         
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
