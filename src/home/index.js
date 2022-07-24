/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  NativeModules,
} from 'react-native';

import styles from './styles';

//const {CustomHelperModule} = NativeModules;

const HomeScreen = () => {
  const openApp = async url => {
    await Linking.openURL('App-Prefs:SCREEN_TIME');
    //NativeModules.CustomHelperModule.createCalendarEvent('tester', '30000');
    // try {
    //   await Linking.openURL(url);
    // } catch (e) {
    //   Alert.alert('ERROR', e.message);
    // }
  };

  const setReminder = async () => {
    await Linking.openURL('https://google.com');
  };

  const testFunc = async () => {
    Alert.alert('I am testing');
    setTimeout(() => openApp(), 3000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Welcome to social tracker</Text>
        <TouchableOpacity
          onPress={() => testFunc()}
          style={[styles.button, {backgroundColor: '#C13584'}]}>
          <Text style={styles.label}>Open Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openApp('https://www.facebook.com/')}
          style={[styles.button, {backgroundColor: '#4267B2'}]}>
          <Text style={styles.label}>Open Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
