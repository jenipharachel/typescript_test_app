import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Metrics, Center} from '../../Config';
import {Header} from '../../Components';

const MovieList = (props) => {
  const renderContent = () => {
    let uri = `https://image.tmdb.org/t/p/w500/${props.route.params.item.poster_path}`;
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <Image source={{uri}} style={styles.image} />
        </View>
        <View style={styles.row2}>
          <View style={styles.title}>
            <Text style={styles.boldText}>{props.route.params.item.title}</Text>
          </View>
          <View style={styles.desc}>
            <Text style={{fontFamily: Fonts.NeusafontRegular, fontSize: 16}}>
              {props.route.params.item.overview}
            </Text>
            {textRow('Avg. Vote:', props.route.params.item.vote_average)}
            {textRow('Release Date:', props.route.params.item.release_date)}
          </View>
        </View>
      </View>
    );
  };

  const textRow = (label, value) => (
    <View style={{flexDirection: 'row', marginRight: 7}}>
      <Text style={{fontFamily: Fonts.SFfontBold, marginRight: 5}}>
        {label}
      </Text>
      <Text>{value}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: Colors.White}}>
      <Header title={'Movie Details'} {...props} />
      <View style={{flex: 0.9, marginVertical: 10}}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row1: {
    flex: 0.4,
    justifyContent: 'center',
  },
  row2: {
    flex: 0.6,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  title: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 20,
    fontFamily: Fonts.SFfontBold,
  },
  desc: {
    flex: 0.6,
    justifyContent: 'space-evenly',
  },
});

export default MovieList;
