import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Center} from '../../Config';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, pop}: {title: string; pop: () => void}) => {
  return (
    <View style={styles.header}>
      <View style={{flex: 0.15, ...Center}}>
        {title == 'Movie Details' && (
          <TouchableOpacity style={{marginLeft: 0}} onPress={() => pop()}>
            <MatComIcon
              name="keyboard-backspace"
              size={27}
              color={Colors.White}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 0.7, ...Center}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{flex: 0.15}} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: Colors.ButtonPurple,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.NeusafontRegular,
    color: Colors.White,
    textAlign: 'center',
  },
});

export default Header;
