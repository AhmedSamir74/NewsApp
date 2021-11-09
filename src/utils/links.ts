import { Alert, Linking, Share } from 'react-native';

export const openLink = async (link: string) => {
  let canOpen = await Linking.canOpenURL(link);
  if (canOpen) {
    Linking.openURL(link);
  }
};

export const shareApp = async () => {
  try {
    const result = await Share.share({
      message:
        'https://clareandme.page.link/?link=https://clareandme.page.link/&apn=com.klair',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
