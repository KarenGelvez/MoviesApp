import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/IMovie';

interface IProps {
  movie: Movie;
}

export const CardMovie = ({movie}: IProps) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
  },
  wrapper: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    resizeMode: 'contain',
  },
});
