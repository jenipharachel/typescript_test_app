import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ColorPropType,
} from 'react-native';
import {Colors} from '../../Config';
const MovieListCard = ({item, uri}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        // onPress={() => onPress()}
      >
        <View style={styles.row}>
          <View style={styles.col1}>
            <Image source={{uri}} style={styles.image} />
          </View>
          <View style={styles.col2}>
            <View style={styles.title}>
              <Text style={styles.boldText}>{item.title}</Text>
            </View>
            <View style={styles.desc}>
              <Text>Lang:{item.original_language}</Text>
              <Text>Votes:{item.vote_count}</Text>
              <Text>{item.release_date}</Text>
            </View>
            <View style={styles.screen}>
              <Text style={styles.border}>IMAX</Text>
              <Text style={styles.border}>4D</Text>
              <Text style={styles.border}>3D</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MovieListCard;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flex: 0.4,
    height: 200,
    flexDirection: 'row',
  },
  col1: {
    flex: 0.4,
    justifyContent: 'center',
  },
  col2: {
    flex: 0.6,
  },
  image: {
    flex: 0.9,
    borderRadius: 20,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  title: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  desc: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  screen: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  border: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: Colors.Aqua,
  },
});
