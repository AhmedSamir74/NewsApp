import theme from '@assets/theme/theme';
import { scaleHeight, scaleWidth } from '@utils/scaling';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  layout: {
    paddingHorizontal: scaleWidth(16),
  },

  searchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: scaleWidth(5),
    borderRadius: 10,
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(20),
  },
  searchInput: {
    flex: 1,
    marginStart: scaleWidth(10),
    paddingVertical: Platform.select({ ios: scaleHeight(12), android: 0 }),
  },
  newCardCont: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightGray,
    height: scaleHeight(110),
    marginBottom: scaleHeight(15),
    borderRadius: scaleHeight(10),
    overflow: 'hidden',
  },
  darkNewCard: {
    backgroundColor: theme.colors.darkBlue,
  },
  newImg: {
    width: scaleWidth(120),
  },
  newTxtCont: {
    flex: 1,
    marginHorizontal: scaleWidth(10),
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(5),
  },
  errorCont: {
    flex: 1,
    justifyContent: 'center',
  },
  emptySearchIcon: {
    width: scaleWidth(120),
    height: scaleHeight(120),
    marginBottom: scaleHeight(15),
  },
  emptySearchCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(50),
  },
  yellowBG: {
    backgroundColor: 'yellow',
  },
  descText: {
    marginTop: scaleHeight(5),
  },
});
