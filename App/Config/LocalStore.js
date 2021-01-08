import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStore {
  static async setValue(key, value) {
    await AsyncStorage.setItem(key, value);
  }
  static async getValue(key) {
    return await AsyncStorage.getItem(key);
  }
  static async removeItem(key) {
    await AsyncStorage.removeItem(key);
  }
  static async multiSetItem(user, name) {
    await AsyncStorage.multiSet([user, name]);
  }
}
