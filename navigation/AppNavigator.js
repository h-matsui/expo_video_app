import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import UploadScreen from '../screens/UploadScreen';
import EvalationScreen from '../screens/EvalationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
const VideoStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Video" component={VideoScreen} />
    </Stack.Navigator>
  )
}
const UploadStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Upload" component={UploadScreen} />
    </Stack.Navigator>
  )
}
const EvalationStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Evalation" component={EvalationScreen} />
    </Stack.Navigator>
  )
}

const screenOption = ({route}) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = "home";
    } else if (route.name === 'Video') {
      iconName = "video-camera";
    } else if (route.name === 'upload'){
      iconName = "upload";
    } else if (route.name === 'Evalatoion'){
      iconName = "pencil";
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  }
})

export default AppNavigator = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions = {screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Video" component={VideoStack} />
        <Tab.Screen name="Upload" component={UploadStack} />
        <Tab.Screen name="Evalation" component={EvalationStack} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}