import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
// Hierboven niks aanpassen AUB!

// Het onderdeel hieronder kun je aanpassen!
const Tab1Name = "NAAM TAB 1"
const Tab2Name = "NAAM TAB 2"
const Tab3Name = "NAAM TAB 3"
const Tab1Icon = "directions-walk"
const Tab2Icon = "directions-walk"
const Tab3Icon = "directions-walk"
// Het onderdeel hierboven kun je aanpassen!

// Hieronder niks aanpassen AUB!
function tab1Screen(){
  return (
    <Stack1.Navigator>
      <Stack1.Screen name={Tab1Name} component={Tab1} />
    </Stack1.Navigator>
  );
}

function tab2Screen(){
  return (
    <Stack2.Navigator>
      <Stack2.Screen name={Tab2Name} component={Tab2} />
    </Stack2.Navigator>
  );
}

function tab3Screen(){
  return (
    <Stack3.Navigator>
      <Stack3.Screen name={Tab3Name} component={Tab3} />
    </Stack3.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Tab1Name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={Tab1Icon} color={color} size={size} />
            ),
          }}
          component={tab1Screen}/>
        <Tab.Screen
          name={Tab2Name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={Tab2Icon} color={color} size={size} />
            ),
          }}
          component={tab2Screen} />
        <Tab.Screen
          name={Tab3Name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={Tab3Icon} color={color} size={size} />
            ),
          }}
          component={tab3Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
