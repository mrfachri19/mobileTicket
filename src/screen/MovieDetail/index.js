import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {getMovieById} from '../../stores/actions/movie';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSchedule} from '../../stores/actions/schedule';
import datetime from '../../assets/calendar.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ebu from '../../assets/ebu.png';
import tikit from '../../assets/tiket.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';
import axios from '../../utils/axios';

function MovieDetail({navigation, value, route}) {
  const state = useSelector(state => state.schedule);
  // SCHEDULE
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [totalPage, setTotalPage] = useState(1);
  const [schedules, setSchedules] = useState(state.schedules);
  const [selectedActiveTime, setSelectedActiveTime] = useState('');
  const [ActivePagePagination, setActivePagePagination] = useState(1);

  const dispatch = useDispatch();
  // const movieState = useSelector(state => state.movie);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const {id} = route.params;
  const [selectedLocation, setSelectedLocation] = useState('');

  const getMovieId = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getMovieById(id));
      setLoading(false);
      setMovie(response.value.data.data[0]);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieId();
    getLocationProvince();
    getListAllSchedule();
  }, [id, page, limit]);

  const chooseDateNow = dateNow => {
    const tanggalSekarang = new Date(Date.now()).toISOString().split('T')[0];
    const userChooseDate = new Date(dateNow).toISOString().split('T')[0];
    if (userChooseDate >= tanggalSekarang) {
      setDate(dateNow);
    } else {
      showToast("Can't choose yesterday's date");
    }
  };

  const getLocationProvince = async () => {
    try {
      const response = await axios.get(
        'http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',
      );
      setProvinces(response.data);
    } catch (error) {
      setProvinces([]);
    }
  };

  const getListAllSchedule = async () => {
    try {
      const response = await dispatch(getAllSchedule(page, limit, id));
      setTotalPage(response.value.data.pagination.totalPage);
      setSchedules(response.value.data.data);
    } catch (error) {
      setSchedules([]);
    }
  };

  const findScheduleByLocation = async location => {
    try {
      const response = await axios.get(
        `schedule?searchMovieId=${id}&searchLocation=${location}&page=${page}&limit=${limit}`,
      );
      setTotalPage(response.data.pagination.totalPage);
      setSchedules(response.data.data);
    } catch (error) {
      setSchedules([]);
      console.log(error.response);
    }
  };

  const clickSelectedTime = (time, item) => {
    setSelectedActiveTime(time);
    setSchedules([item]);
    setTotalPage(1);
  };

  const changeHandlerPagination = async num => {
    const selectedPage = num;
    console.log('select page =>', selectedPage);
    setPage(selectedPage);
    getListAllSchedule();
    setActivePagePagination(num);
  };

  const BookMovieNow = (...rest) => {
    if (selectedActiveTime === '') {
      showToast('Please choose your time!');
    } else {
      navigation.navigate('Order', {
        detailOrder: rest,
      });
    }
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.LONG);
  };

  let newtTotalPage = [];
  for (let i = 1; i <= totalPage; i++) {
    newtTotalPage.push(i);
  }
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={{
              marginHorizontal: 52,
              marginTop: 20,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                margin: 32,
                width: 150,
                height: 200,
              }}
              source={{
                uri: `https://backend-fachri.fwebdev2.xyz/uploads/movie/${movie.image}`,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 32,
              fontSize: 20,
              color: '#000000',
              textAlign: 'center',
            }}>
            {movie.name}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              color: '#4E4B66',
              textAlign: 'center',
            }}>
            {movie.category}
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
              {new Date(movie.releaseDate).toDateString()}
            </Text>
            <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
              {movie.director}
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
              {movie.duration}
            </Text>
            <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
              {movie.cast}
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
          <Text style={{fontSize: 13, color: '#4E4B66'}}>{movie.synopsis}</Text>
          <Text
            style={{
              marginTop: 96,
              fontSize: 18,
              color: '#000000',
              textAlign: 'center',
            }}>
            Show Time and Tickets
          </Text>
          <View>
            <DatePicker
              modal
              open={open}
              date={date}
              fadeToColor="black"
              textColor="black"
              onConfirm={date => {
                setOpen(false);
                chooseDateNow(date);
                // setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => setOpen(true)}>
              <Image style={{marginLeft: 12}} source={datetime} />
              <Text style={{flex: 3, marginLeft: 20}}>
                {date ? (
                  new Date(date).toISOString().split('T')[0]
                ) : (
                  <Text>Set a Date</Text>
                )}
              </Text>
            </TouchableOpacity>
            <Picker
              dropdownIconColor="#4E4B66"
              selectedValue={selectedLocation}
              onValueChange={value => {
                setSelectedLocation(value);
                findScheduleByLocation(value);
              }}
              style={{color: '#4E4B66', marginLeft: 46}}
              mode="dialog">
              <Picker.Item label="Set a city" enabled={false} />
              {provinces.map(province => (
                <Picker.Item
                  label={province.name.toLowerCase()}
                  value={province.name.toLowerCase()}
                  key={province.id}
                />
              ))}
            </Picker>
          </View>
          {/* =============schedule============ */}
          <View>
            {schedules.length > 0 ? (
              schedules.map((item, idx) => (
                <View style={styles.scheduleDetail_card} key={idx}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Image
                      source={
                        item.premiere === 'Ebv.id'
                          ? require('../../assets/ebu.png')
                          : item.premiere === 'Hiflix'
                          ? require('../../assets/hiflix.png')
                          : item.premiere === 'CineOne21'
                          ? require('../../assets/cineone.png')
                          : null
                      }
                      style={styles.scheduleDetil_card_image}
                    />
                    <Text style={styles.scheduleDetail_card_address}>
                      {item.location}
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#DEDEDE',
                        height: 1,
                        width: '100%',
                        marginTop: 23,
                      }}></View>
                  </View>

                  <View style={styles.scheduleDetail_card_time}>
                    {item.time.map((time, idx) => {
                      return (
                        <View key={idx}>
                          <Text
                            style={
                              selectedActiveTime === time
                                ? styles.schedule_card_time_title_active
                                : styles.scheduleDetail_card_time_title
                            }
                            onPress={() => clickSelectedTime(time, item)}>
                            {time}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                  <View style={styles.scheduleDetail_card_time_desc}>
                    <Text style={styles.sheduleDetail_card_time_desc_title}>
                      Price
                    </Text>
                    <Text
                      style={styles.scheduleDetail_card_time_desc_title_value}>
                      Rp.{item.price}/seat
                    </Text>
                  </View>

                  <TouchableHighlight
                    underlayColor="none"
                    style={styles.scheduleDetail_card_button}
                    onPress={async () =>
                      BookMovieNow({
                        movieId: movie.id,
                        scheduleId: item.id,
                        premiere: item.premiere,
                        nameMovie: await AsyncStorage.getItem('nameMovie'),
                        date: new Date(date).toDateString(),
                        dateBooking: new Date(date).toISOString().split('T')[0],
                        time: selectedActiveTime,
                      })
                    }>
                    <Text style={styles.scheduleDetail_card_button_title}>
                      Book Now
                    </Text>
                  </TouchableHighlight>
                </View>
              ))
            ) : (
              <View style={styles.ScheduleDetail_card_containerNotFound}>
                <Text style={styles.ScheduleDetail_card_textNotFound}>
                  Schedule not available
                </Text>
              </View>
            )}
          </View>
          <View style={styles.schedulePagination_container}>
            {schedules.length > 0
              ? newtTotalPage.map(num => (
                  <TouchableHighlight
                    style={
                      ActivePagePagination === num
                        ? styles.schedulePagination_Active
                        : styles.schedulePagination_Default
                    }
                    underlayColor="none"
                    onPress={() => changeHandlerPagination(num)}>
                    <Text
                      style={
                        ActivePagePagination === num
                          ? styles.schedulePagination_title_active
                          : styles.schedulePagination_title_Default
                      }>
                      {num}
                    </Text>
                  </TouchableHighlight>
                ))
              : null}
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
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  buttonPrimary: {
    marginTop: 24,
    width: 250,
    height: 48,
    padding: 11,
    backgroundColor: '#EFF0F6',
    borderRadius: 16,
    marginLeft: 34,
    flexDirection: 'row',
  },
  buttonBook: {
    marginTop: 24,
    width: 271,
    height: 40,
    padding: 11,
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
  },
  scheduleDetail_Container: {
    marginTop: 96,
    marginBottom: 48,
  },
  scheduleDetail_title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  scheduleDetil_card_image: {
    resizeMode: 'contain',
    marginBottom: 5,
    width: 100,
    height: 39,
  },
  scheduleDetail_card_button_date: {
    backgroundColor: '#EFF0F6',
    borderRadius: 16,
    width: '70%',
    paddingVertical: 11,
  },
  scheduleDetail_card_button_date_title: {
    color: '#4E4B66',
    marginHorizontal: 58,
    fontSize: 14,
    marginTop: 2,
    fontWeight: '600',
  },
  scheduleDetail_rows: {
    marginTop: 48,
  },
  scheduleDetail_card_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleDetail_card: {
    backgroundColor: '#FFFFFF',
    elevation: 8,
    marginTop: 32,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 22,
  },
  scheduleDetail_card_address: {
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
    color: '#AAAAAA',
    fontSize: 13,
    fontWeight: '300',
    letterSpacing: 0.75,
  },
  scheduleDetail_card_time: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 12,
  },
  scheduleDetail_card_time_title: {
    color: '#4E4B66',
    fontSize: 12,
    marginTop: 17,
    marginHorizontal: 16,
  },
  schedule_card_time_title_active: {
    color: '#FFFFFF',
    padding: 3,
    borderRadius: 8,
    fontWeight: '600',
    backgroundColor: '#5F2EEA',
    fontSize: 12,
    marginTop: 17,
    marginHorizontal: 10,
  },
  scheduleDetail_card_time_title_close: {
    color: '#A0A3BD',
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 16,
  },
  scheduleDetail_card_time_desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
  },
  sheduleDetail_card_time_desc_title: {
    color: '#6B6B6B',
    fontSize: 14,
    fontWeight: '400',
  },
  scheduleDetail_card_time_desc_title_value: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000000',
  },
  scheduleDetail_card_button: {
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
    elevation: 4,
    marginTop: 16,
    paddingVertical: 11,
  },
  scheduleDetail_card_button_title: {
    textAlign: 'center',
    color: '#F7F7FC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  schedulePagination_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  schedulePagination_Active: {
    backgroundColor: '#5F2EEA',
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    width: '14%',
    height: '100%',
  },
  schedulePagination_Default: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0.75,
    borderColor: '#DEDEDE',
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '14%',
    height: '100%',
    marginHorizontal: 8,
  },
  schedulePagination_title_Default: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#4E4B66',
  },
  schedulePagination_title_active: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  ScheduleDetail_card_textNotFound: {
    marginTop: 20,
    fontSize: 24,
    color: '#F4B740',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MovieDetail;
