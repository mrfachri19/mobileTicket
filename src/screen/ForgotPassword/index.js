import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import tiket from '../../assets/Vector.png';

function Forgotpassword(props) {
  const handleLogin = () => {
    // props.navigation.navigate('AppScreen', {
    //   screen: 'Home',
    //   params: {
    //     nama: 'Bagus TH',
    //   },
    // });
  };

  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image source={tiket} />
      <Text style={styles.font}>Forgot Password</Text>
      <SafeAreaView>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Phone Number"
          keyboardType="numeric"
        />
        <View style={styles.btn}>
          <Button title="Active Now" color="#5F2EEA" onPress={handleLogin} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingLeft: 24,
  },
  font: {
    fontSize: 26,
    marginTop: 46,
    color: '#121212',
  },
  email: {
    fontSize: 16,
    color: '#4E4B66',
    marginTop: 41,
  },
  password: {
    fontSize: 16,
    color: '#4E4B66',
    marginTop: 25,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginRight: 24,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginTop: 40,
    width: 327,
    height: 64,
  },
});

export default Forgotpassword;
