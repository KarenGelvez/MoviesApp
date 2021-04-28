import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/ICredits';

interface IProps {
  actor: Cast;
}

export const CardActor = ({actor}: IProps) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image style={styles.image} source={{uri}} />}
      <View style={styles.actorInfo}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginBottom: 20,
    marginLeft: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 15,
    opacity: 0.7,
  },
});
