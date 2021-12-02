import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SpalshScreen(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text>SpalshScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpalshScreen;
