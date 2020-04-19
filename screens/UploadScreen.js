import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Linking, Button, Alert } from 'react-native';

const supportedURL = 'http://133.167.37.185:3000/upload';

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL:${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const UploadScreen = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open upload files </OpenURLButton>
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});