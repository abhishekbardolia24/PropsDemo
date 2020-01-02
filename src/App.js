import React from 'react';
import {View, Text} from 'react-native';

//Why we are using Props in React Native?
//Props is a property in react native and is mainly use to transfer data from one class to another
//It is also resuable component and is class component
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MyData name="PQR" surname="XYZ" />
        <MyData name="AB" surname="BA" />
        <MyData name="XYZ" surname="PQR" />
      </View>
    );
  }
}

// class MyData extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>{this.props.name}</Text>
//         <Text>{this.props.surname}</Text>
//       </View>
//     );
//   }
// }

//------------------------------------------------------------------------
//if we want to use as functional component we can use my this way

//Just Comment upper part and remove lower part of MyData Class

//As it is not class and not having render method we need to remove this keyword and need to pass
//props in as a parameter
//-------------------------------------------------------------------------
const MyData = props => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.surname}</Text>
    </View>
  );
};
