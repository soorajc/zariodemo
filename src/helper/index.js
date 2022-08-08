import {NativeModules, Platform, Alert, Linking} from 'react-native';
import {SCREEN_TIME_SETTINGS_MENU_LINK} from '../constants';

let timeOutHandler = null;

const openUrlViaLinking = async url => {
  try {
    await Linking.openURL(url);
  } catch (e) {
    Alert.alert('Error Message', e.message);
  }
};

const openAppDirectly = async (url, appId) => {
  try {
    NativeModules.CustomHelperModule.openCustomApp(appId, url);
  } catch (error) {
    openUrlViaLinking(url);
  }
};

const redirectApp = (appId, url) => {
  if (appId) {
    openAppDirectly(url, appId);
  } else {
    openUrlViaLinking(url);
  }
  clearTimeout(timeOutHandler);
};

const handleAlarmSucess = (status, appId, url) => {
  console.log('Alarm setting success:', status);
  timeOutHandler = setTimeout(() => redirectApp(appId, url), 3000);
};

const handleAlarmFailure = status => {
  console.log('Alarm setting failed:', status);
  Alert.alert('Message', 'Unable to set the alarm. Please try again');
};

export const handleAppLaunch = async appDetails => {
  const {appName, appId, url} = appDetails;
  if (Platform.OS === 'android') {
    try {
      NativeModules.CustomHelperModule.createCalendarEvent(
        appName,
        appId,
        url,
        handleAlarmSucess,
        handleAlarmFailure,
      );
    } catch (e) {
      Alert.alert('Error Message', e.message);
    }
  } else {
    openUrlViaLinking(url);
  }
};

export const openIOSAppUsageSummary = () => {
  openUrlViaLinking(SCREEN_TIME_SETTINGS_MENU_LINK);
};
