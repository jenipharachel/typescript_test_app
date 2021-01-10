import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import {Center, Colors, Fonts} from '../../Config';
const MovieListCard = ({
  item,
  uri,
  onPress,
}: {
  item: any;
  uri: string;
  onPress: () => void;
}) => {
  const textRow = (label: string, value: string) => (
    <View style={{flexDirection: 'row', marginRight: 7}}>
      <Text style={{fontFamily: Fonts.SFfontBold, marginRight: 5}}>
        {label}
      </Text>
      <Text>{value}</Text>
    </View>
  );

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Image source={{uri}} style={styles.image} />
          </View>
          <View style={styles.col2}>
            <View style={styles.title}>
              <Text style={styles.boldText}>{item.title}</Text>
            </View>
            <View style={styles.desc}>
              {textRow('Lang:', item.original_language)}
              {textRow('Votes:', item.vote_count)}
              <Text style={{fontFamily: Fonts.PoppinsfontSemiBold}}>
                {item.release_date}
              </Text>
            </View>
            <View style={styles.screen}>
              <Text style={styles.box}>IMAX</Text>
              <Text style={styles.box}>4D</Text>
              <Text style={styles.box}>3D</Text>
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
    fontSize: 20,
    fontFamily: Fonts.SFfontBold,
  },
  desc: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  screen: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  box: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: Colors.Aqua,
  },
});
