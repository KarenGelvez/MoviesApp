import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/IMovie';
import {CardMovie} from './CardMovie';

interface IProps {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: IProps) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <CardMovie movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
