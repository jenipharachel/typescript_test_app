import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Center} from '../../Config';
// import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {CommonActions} from '@react-navigation/native';

const Header = ({title, props}: {title: string; props: any}) => {
  return (
    <View style={styles.header}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
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
