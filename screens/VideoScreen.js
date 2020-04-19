import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import { Video } from 'expo-av';

const URL = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

const VideoScreen = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    FetchPath();
  }, []);

  const FetchPath = async () => {
    try{
      const res = await axios.get(URL);
      setUrl(res.data.url)
      console.log(res)
    } catch(err) {
      console.log(err)
    };
    
  }
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: URL }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VideoScreen;