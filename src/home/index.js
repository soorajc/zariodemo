/**
 * Screen time tracker prototype
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
  Image,
  Platform,
} from 'react-native';

import styles from './styles';

import standImage from '../assets/stand.jpg';
import appConfig from './config';
import {handleAppLaunch, openIOSAppUsageSummary} from './helper';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={standImage} style={styles.bannerImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Monitor your social media usage</Text>
        <Text style={styles.description}>
          An autoset alarm will be fired after 5 minutes from the opening of the
          selected social media platform.(*Works only in android for now)
        </Text>
        {Platform.OS !== 'android' && (
          <View>
            <TouchableOpacity
              onPress={() => openIOSAppUsageSummary()}
              style={styles.button}>
              <Text style={styles.buttonLabel}>View Usage Summary</Text>
            </TouchableOpacity>
          </View>
        )}
        {appConfig.map(appDetails => (
          <TouchableOpacity
            key={appDetails.id}
            onPress={() => handleAppLaunch(appDetails)}
            style={[
              styles.button,
              {backgroundColor: appDetails.backgroundColor},
            ]}>
            <Text style={styles.buttonLabel}>Open {appDetails.appName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
