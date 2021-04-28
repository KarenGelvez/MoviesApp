import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieDetails} from '../components/MovieDetails';
import {useMoviesDetails} from '../hooks/useMovieDetails';
import {RootStackParams} from '../navigation/StackNavigator';

interface IProps extends StackScreenProps<RootStackParams, 'Detail'> {}

const {height} = Dimensions.get('screen');
export const DetailScreen = ({route, navigation}: IProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const {isLoading, fullMovie, cast} = useMoviesDetails(movie.id);
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        {/* Poster Movie */}
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>
      {/* Title Movie */}
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {/* Info Movie */}
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <MovieDetails fullMovie={fullMovie!} cast={cast!} />
      )}
      {/* Go back screen main */}
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={40} color="#DBDBDB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 40,
    margin: 5,
  },
});
