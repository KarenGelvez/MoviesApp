import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/ICredits';
import {FullMovie} from '../interfaces/IMovie';
import {CardActor} from './CardActor';

interface IProps {
  fullMovie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({fullMovie, cast}: IProps) => {
  return (
    <>
      {/* Details */}
      <View style={styles.container}>
        <View style={styles.wrapperDetails}>
          <Icon name="star-outline" size={20} color="gray" />
          <Text> {fullMovie.vote_average}</Text>
          <Text> - {fullMovie.genres.map(gen => gen.name).join(', ')}</Text>
        </View>
        {/* History */}
        <Text style={styles.title}>History</Text>
        <Text style={styles.textHistory}>{fullMovie.overview}</Text>
        {/* Budget */}
        <Text style={styles.title}>Budget</Text>
        <Text style={styles.textBudget}>
          {fullMovie.budget > 0
            ? currencyFormatter.format(fullMovie.budget, {code: 'USD'})
            : 'Not available'}
        </Text>
      </View>
      {/* Cast */}
      <View style={styles.wrapperCast}>
        <Text style={{...styles.title, marginHorizontal: 20}}>Actors</Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CardActor actor={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.flatList}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  wrapperDetails: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
  },
  textHistory: {
    fontSize: 16,
  },
  textBudget: {
    fontSize: 18,
  },
  wrapperCast: {
    marginTop: 10,
  },
  flatList: {
    marginTop: 10,
  },
});
