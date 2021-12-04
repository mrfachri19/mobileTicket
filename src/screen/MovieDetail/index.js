import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import spiderman from '../../assets/spiderman.png';

function MovieDetail(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            marginHorizontal: 52,
            marginTop: 20,
            backgroundColor: 'white',
          }}>
          <Image style={{margin: 32}} source={spiderman} />
        </View>
        <Text
          style={{
            marginTop: 32,
            fontSize: 20,
            color: '#000000',
            textAlign: 'center',
          }}>
          Spiderman: Homecoming
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            color: ' #4E4B66',
            textAlign: 'center',
          }}>
          Action, Adventure, Comedy
        </Text>
        <View style={{flexDirection: 'row', marginTop: 32}}>
          <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>
            Released Date
          </Text>
          <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>
            Directed By
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
            June 28 2021
          </Text>
          <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
            Mr. hanayama
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 22}}>
          <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>
            Duration
          </Text>
          <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>Cast </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
            June 28 2021
          </Text>
          <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
            Aoi, Yabimi, sora, santana, Maman, Dudung
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#D6D8E7',
            marginLeft: 0,
            marginRight: 25,
            marginTop: 40,
          }}
        />
        <Text
          style={{
            marginTop: 24,
            fontSize: 16,
            color: '#14142B',
            marginBottom: 16,
          }}>
          Synopsis
        </Text>
        <Text style={{fontSize: 13, color: '#4E4B66'}}>
          Thrilled by his experience with the Avengers, {'\n'}Peter returns
          home, where he lives with his Aunt{'\n'} May, under the watchful eye
          of his new mentor {'\n'}Tony Stark, Peter tries to fall back into his
          {'\n'}normal daily routine - distracted by thoughts of {'\n'}proving
          himself to be more than just your {'\n'}friendly neighborhood
          Spider-Man - but when{'\n'} the Vulture emerges as a new villain,
          everything {'\n'}that Peter holds most important will be threatened.
        </Text>
        <Text
          style={{
            marginTop: 96,
            fontSize: 18,
            color: '#000000',
            textAlign: 'center',
          }}>
          Show Time and Tickets
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
});
export default MovieDetail;
