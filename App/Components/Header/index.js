import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Center} from '../../Config';
// import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {CommonActions} from '@react-navigation/native';

const Header = (props) => {
  //   const goBack = () => {
  //     if (props.title == 'Campaign List' || props.title == 'Profile') {
  //       props.navigation.navigate('Dashboard');
  //     } else {
  //       props.navigation.pop();
  //     }
  //   };
  //   const logout = async () => {
  //     LocalStore.removeItem('userDetails').then(() => {
  //       props.navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{name: 'Login'}],
  //         }),
  //       );
  //       // props.navigation.navigate('Login');
  //     });
  //     // try {
  //     //   await AsyncStorage.removeItem('userDetails');
  //     // } catch (e) {
  //     //   // remove error
  //     // }
  //     // props.navigation.navigate('Login');
  //   };
  return (
    <View
      style={{
        flex: 0.1,
        backgroundColor: Colors.ButtonPurple,
        flexDirection: 'row',
      }}>
      {/* <View style={{flex: 0.15, ...Center}}>
        {props.title !== 'Dashboard' && (
          <TouchableOpacity style={{marginLeft: 0}} onPress={() => goBack()}>
            <MatComIcon
              name="keyboard-backspace"
              size={27}
              color={Colors.White}
            />
          </TouchableOpacity>
        )}
      </View> */}
      <View style={{flex: 1, ...Center}}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {/* <View style={{flex: 0.15}}>
        <View style={styles.aquaPathPosition}>
          <View style={styles.aquaPath} />
        </View>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 15, right: 13}}
          onPress={() => logout()}>
          <Image style={{height: 35, width: 30}} source={Images.HeaderIcon} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: Fonts.NeusafontRegular,
    color: Colors.White,
    textAlign: 'center',
  },
  aquaPath: {
    borderRadius: 35,
    borderWidth: 15,
    borderColor: Colors.Aqua,
    height: 70,
    width: 70,
  },
  aquaPathPosition: {
    // flex: 1,
    overflow: 'hidden',
    position: 'absolute',
    right: -7,
    bottom: 0,
    height: 30,
    width: 50,
  },
});

export default Header;
