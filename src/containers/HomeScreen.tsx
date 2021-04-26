import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {CardMovie} from '../components/CardMovie';
import {useMovies} from '../hooks/useMovies';
import {Movie} from '../interfaces/IMovie';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {moviesNowCinema, loading} = useMovies();
  const {width} = Dimensions.get('window');
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <View style={styles.wrapper}>
        <Carousel
          data={moviesNowCinema}
          renderItem={({item}: any) => <CardMovie movie={item} />}
          sliderWidth={width}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 450,
  },
});
