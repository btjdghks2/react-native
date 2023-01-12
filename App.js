

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';




function Home({navigation}) {
  return (
    <View style={{ flex:1, alignltems: 'center',
      justifyContent: 'center', 
      backgroundColor: 'steelblue'
          }
        }
      >
      <Text>home</Text>
    </View>
  );
}
function Category({navigation}) {
  return (
    <View style={{ flex:1, alignltems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'gold'
    }}>
      <Text>list</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {


  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="P1">
      <Drawer.Screen name="P1" component={Home} />
      <Drawer.Screen name="P2" component={Category} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};


export default App;
