import React, {useContext, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import {CardMovie} from '../components/CardMovie';
import {GracientBackground} from '../components/GracientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, loading} = useMovies();
  const {width} = Dimensions.get('window');
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary = 'black', secondary = 'gray'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#000" size="large" />
      </View>
    );
  }

  return (
    <GracientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={styles.wrapper}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <CardMovie movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title={'Popular'} movies={popular} />
          <HorizontalSlider title={'Top Rated'} movies={topRated} />
          <HorizontalSlider title={'Upcoming'} movies={upcoming} />
        </View>
      </ScrollView>
    </GracientBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 450,
  },
});
