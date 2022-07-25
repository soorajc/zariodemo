import {NativeModules, Platform, Alert, Linking} from 'react-native';

const openUrlViaLinking = async url => {
  try {
    await Linking.openURL(url);
  } catch (e) {
    Alert.alert('Error Message', e.message);
  }
};

const openAppDirectly = async (url, appId) => {
  try {
    NativeModules.CustomHelperModule.openCustomApp(appId);
  } catch (error) {
    openUrlViaLinking(url);
  }
};

const handleAlarmSucess = (status, appId, url) => {
  console.log('Alarm setting success:', status);
};

const handleAlarmFailure = status => {
  console.log('Alarm setting failed:', status);
  Alert.alert('Message', 'Unable to set the alarm. Please try again');
};

export const handleAppLaunch = async appDetails => {
  const {appName, appId, url} = appDetails;
  if (Platform.OS === 'android') {
    try {
      if (appId) {
        openAppDirectly(url, appId);
      } else {
        openUrlViaLinking(url);
      }
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
  const url = 'App-Prefs:SCREEN_TIME';
  openUrlViaLinking(url);
};
