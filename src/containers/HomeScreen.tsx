import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {CardMovie} from '../components/CardMovie';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, loading} = useMovies();
  const {width} = Dimensions.get('window');
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={styles.wrapper}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <CardMovie movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider title={'Popular'} movies={popular} />
        <HorizontalSlider title={'Top Rated'} movies={topRated} />
        <HorizontalSlider title={'Upcoming'} movies={upcoming} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 450,
  },
});
