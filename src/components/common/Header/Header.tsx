import React, { FC } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { selectIsDark } from '@store/slices/themSlice';
import theme from '@assets/theme/theme';
import { useNavigation } from '@react-navigation/core';

interface Props {
  leftIcon?: string;
  leftOnPress?: () => void;
  rightIcon?: string;
  rightOnPress?: () => void;
  style?: StyleProp<ViewStyle>;
  backBtn?: boolean;
}
export const Header: FC<Props> = ({
  leftIcon,
  leftOnPress,
  rightIcon,
  rightOnPress,
  backBtn,
  style,
}) => {
  const isDark = useSelector(selectIsDark);
  const { goBack } = useNavigation();
  return (
    <View style={[styles.headerCont, style]}>
      {backBtn && (
        <MaterialCommunityIcons
          name="chevron-left"
          color={isDark ? theme.colors.gray : theme.colors.white}
          size={30}
          onPress={() => (leftOnPress ? leftOnPress() : goBack())}
        />
      )}
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          color={isDark ? theme.colors.gray : theme.colors.white}
          size={30}
          onPress={leftOnPress}
        />
      ) : (
        <View />
      )}

      {rightIcon ? (
        <MaterialCommunityIcons
          name={rightIcon}
          color={isDark ? theme.colors.gray : theme.colors.white}
          size={30}
          onPress={rightOnPress}
        />
      ) : (
        <View />
      )}
    </View>
  );
};
