import React from 'react';
import {View} from 'react-native';
import MovieList from './MovieList';

const Movies = (props) => {
  return (
    <View style={{flex: 1}}>
      <MovieList />
    </View>
  );
};

export default Movies;
