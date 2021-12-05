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
import home from '../../assets/headhome.png';
import spiderman from '../../assets/spiderman.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';

function Home(props) {
  // useEffect(() => {
  //   console.log(props.route.params.nama);
  // }, []);
  const [titleText, setTitleText] = useState(' Find out now!');
  const bodyText = 'Nearest Cinema, Newest Movie,';
  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };
  const handleMovieDetail = () => {
    props.navigation.navigate('MovieDetail');
  };

  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.baseText}>
            <Text>{bodyText}</Text>
            {'\n'}
            {'\n'}
            <Text style={styles.titleText} onPress={onPressTitle}>
              {titleText}
            </Text>
          </Text>
          <Image style={styles.imagehead} source={home} />
          <View style={{flexDirection: 'row', marginTop: 100}}>
            <Text style={{flex: 3, color: '#14142B', fontSize: 18}}>
              Now Showing
            </Text>
            <Text style={{flex: 1, color: '#5F2EEA', fontSize: 14}}>
              view all
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 32}}>
            <ScrollView horizontal={true}>
              <View style={styles.border}>
                <Image source={spiderman} />
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
              </View>
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row', marginTop: 100}}>
            <Text style={{flex: 3, color: '#14142B', fontSize: 18}}>
              Upcoming Movies
            </Text>
            <Text style={{flex: 1, color: '#5F2EEA', fontSize: 14}}>
              view all
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 32}}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.text}>Septemer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.text}>Oktober</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.text}>November</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.text}>Desember</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.text}>Januari</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row', marginTop: 32}}>
            <ScrollView horizontal={true} style={{margin: 10}}>
              <View style={styles.border}>
                <Image source={spiderman} />
                <Text style={styles.title}>Black Widow</Text>
                <Text style={styles.tagline}>Action, Romance, Comedy</Text>
                <TouchableHighlight style={styles.buttondetail}>
                  <Text style={styles.textdetail} onPress={handleMovieDetail}>
                    Detail
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
                <Text style={styles.title}>Black Widow</Text>
                <Text style={styles.tagline}>Action, Romance, Comedy</Text>
                <TouchableHighlight style={styles.buttondetail}>
                  <Text style={styles.textdetail}>Detail</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
                <Text style={styles.title}>Black Widow</Text>
                <Text style={styles.tagline}>Action, Romance, Comedy</Text>
                <TouchableHighlight style={styles.buttondetail}>
                  <Text style={styles.textdetail}>Detail</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
                <Text style={styles.title}>Black Widow</Text>
                <Text style={styles.tagline}>Action, Romance, Comedy</Text>
                <TouchableHighlight style={styles.buttondetail}>
                  <Text style={styles.textdetail}>Detail</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.border}>
                <Image source={spiderman} />
                <Text style={styles.title}>Black Widow</Text>
                <Text style={styles.tagline}>Action, Romance, Comedy</Text>
                <TouchableHighlight style={styles.buttondetail}>
                  <Text style={styles.textdetail}>Detail</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
          <View style={styles.bordermoviegoers}>
            <View style={{marginTop: 48}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>
                Be the vanguard of the
              </Text>
              <Text
                style={{textAlign: 'center', fontSize: 32, color: '#5F2EEA'}}>
                Moviegoers
              </Text>
            </View>

            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TouchableHighlight style={styles.moviegoersbtn}>
                <Text style={{color: 'white'}}>Join Now</Text>
              </TouchableHighlight>
              <Text
                style={{textAlign: 'center', marginTop: 32, marginBottom: 48}}>
                By joining you as a Tickitz member, {'\n'} we will always send
                you the {'\n'} latest updates via email .
              </Text>
            </SafeAreaView>
          </View>
        </View>
        <View
          style={{backgroundColor: 'white', paddingTop: 75, paddingLeft: 24}}>
          <Image source={tikit} />
          <Text style={{fontSize: 14, color: '#6E7191', marginTop: 15}}>
            Stop waiting in line. Buy tickets {'\n'}conveniently, watch movies
            quietly.
          </Text>
          <Text style={{fontSize: 14, color: '#000000', marginTop: 15}}>
            Explore
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                color: '#6E7191',
                marginTop: 15,
                flex: 3,
              }}>
              Cinemast
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#6E7191',
                marginTop: 15,
                flex: 3,
              }}>
              Movie List
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#6E7191',
                marginTop: 15,
                flex: 3,
              }}>
              Notification
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#6E7191',
              marginTop: 15,
            }}>
            My Ticket
          </Text>
          <Text style={{fontSize: 14, color: '#000000', marginTop: 45}}>
            Our Sponsore
          </Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <Image style={{marginRight: 24}} source={ebu} />
            <Image style={{marginRight: 24}} source={hiflix} />
            <Image style={{marginRight: 24}} source={cinema} />
          </View>
          <Text style={{fontSize: 14, color: '#000000', marginTop: 45}}>
            Follow Us
          </Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <Image style={{marginRight: 41}} source={yt} />
            <Image style={{marginRight: 41}} source={fb} />
            <Image style={{marginRight: 41}} source={twit} />
            <Image style={{marginRight: 41}} source={ig} />
          </View>
          <Text style={{fontSize: 13, color: '#6E7191', marginVertical: 64}}>
            © 2020 Tickitz. All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
    paddingTop: 54,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  baseText: {
    fontFamily: 'Cochin',
    marginBottom: 64,
    color: '#A0A3BD',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#752EEA',
  },
  imagehead: {
    width: 320,
  },
  input: {
    height: 40,
    marginHorizontal: 32,
    borderWidth: 1,
    padding: 10,
    width: 263,
    marginTop: 42,
  },
  buttonPrimary: {
    width: 127,
    padding: 12,
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    marginRight: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  border: {
    border: 0.5,
    shadowColor: '#DEDEDE',
    shadowOpacity: 1,
    marginRight: 16,
    padding: 16,
  },
  title: {
    fontSize: 14,
    color: '#000000',
    marginTop: 12,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 11,
    color: '#A0A3BD',
    marginTop: 4,
    textAlign: 'center',
  },
  buttondetail: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#5F2EEA',
    width: 120,
    paddingHorizontal: 38,
    paddingVertical: 5,
    marginTop: 24,
  },
  bordermoviegoers: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowOpacity: 0.15,
    shadowOffset: 'rgba(186, 186, 186, 0.15)',
  },
  moviegoersbtn: {
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#5F2EEA',
    height: 46,
    width: 263,
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginTop: 16,
    marginHorizontal: 32,
  },
});
export default Home;
