import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Midtrans({navigation, route}) {
  const {redirectUrl} = route.params;
  console.log(route.params);
  const [testKey, setTestKey] = useState('');

  const generateNewKey = () => {
    if (redirectUrl) {
      setTestKey('oke');
      setTimeout(() => {
        return navigation.navigate('Profile');
      }, 10000);
    } else {
      setTestKey('');
    }
  };

  useEffect(() => {
    generateNewKey();
  }, []);

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: testKey === 'oke' ? redirectUrl : null, method: 'GET'}}
        onError={() => alert('errornya')}
        renderError={() => alert('errornya')}
      />
    </View>
  );
}
