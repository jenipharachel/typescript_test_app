// import {create} from 'apisauce';
// import API from './ApiPaths';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reqHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getEnvUrl = async () => {
  const url = await AsyncStorage.getItem('appUrl').then((value) => {
    return value;
  });
  return url;
};

export default class MovieApiHelper {
  static movieList(pageNo) {
    let responseval = getEnvUrl().then((baseurl) => {
      const requestObj = {
        method: 'GET',
        headers: {...reqHeader},
      };
      return fetch(
        `${baseurl}?api_key=f9340678aa6a61a60578f56c8f272f61&page=${pageNo}`,
        requestObj,
      )
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          alert(err.message);
        });
    });
    return responseval;
  }
}
