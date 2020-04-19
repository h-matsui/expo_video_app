import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default HomeScreen = () => {

  const shows_first = [
    {
      "key":1,
      "name":"Suits",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg"
    },
    {
      "key":2,
      "name":"Modern Family",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
   },

   {
      "key":3,
      "name":"The Flash",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
   },

   {
      "key":4,
      "name":"Supergirl",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
   }
  ]

  const [item, useItem] = useState('')

  return (
    <View style={{flex: 1}}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList>
        <Image
          style={{ width: 50, height: 50}}
          source={{uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'}}
        />
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
