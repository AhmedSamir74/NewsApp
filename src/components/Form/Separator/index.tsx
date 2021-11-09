import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import {scaleHeight} from '@utils/scaling';
import theme from '@assets/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  solid?: boolean;
}

const Separator = ({style, solid}: Props) => {
  return <View style={[styles.separator, solid && styles.solid, style]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: scaleHeight(24),
  },
  solid: {
    backgroundColor: theme.colors.gray1,
    height: 1,
    marginVertical: scaleHeight(20),
  },
});

export default Separator;
