import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/IMovie';

interface IProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const CardMovie = ({movie, height = 420, width = 300}: IProps) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', movie)}
      activeOpacity={0.8}
      style={{...styles.container, width, height}}>
      <View style={styles.wrapper}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
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
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
