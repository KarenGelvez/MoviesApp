import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/IMovie';

interface IProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const CardMovie = ({movie, height = 420, width = 300}: IProps) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{width, height, marginHorizontal: 8}}>
      <View style={styles.wrapper}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    resizeMode: 'stretch',
  },
});
