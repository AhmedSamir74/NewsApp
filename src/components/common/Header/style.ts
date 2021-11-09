import { scaleHeight } from '@utils/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
    paddingHorizontal: 10,
    height: scaleHeight(50),
  },
});
