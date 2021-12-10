import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SpalshScreen(props) {
  useEffect(() => {
    checkkAuth();
  }, []);

  const checkkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setTimeout(() => {
        if (token) {
          props.navigation.navigate('AppScreen');
        } else {
          props.navigation.navigate('AuthScreen');
        }
      }, 1000);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: 'white'}}>Tickitz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F2EEA',
  },
});

export default SpalshScreen;
