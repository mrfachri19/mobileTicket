import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

class DrawerContent extends React.Component {
  handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthScreen');
  };
  render() {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...this.props}>
          {/* <View style={styles.containerProfile}>
            <View style={styles.avatar} />
            <View style={styles.biodata}>
              <Text style={styles.title}>Fachri Maulana</Text>
              <Text style={styles.caption}>@Mr. Taro</Text>
            </View>
          </View> */}
          <DrawerItemList {...this.props} />
        </DrawerContentScrollView>
        <View style={styles.containerSection}>
          <DrawerItem label="Sign Out" onPress={this.handleLogout} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
