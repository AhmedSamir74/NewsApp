import React, { FC } from 'react';
import { Image, View } from 'react-native';

import styles from './style';
import { CustomLayout, CustomText } from '@components/common';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '@assets/theme/theme';
import Row from '@components/common/Row';
import { formatDate } from '@utils/scaling';
import { strings } from '../../localization';

export const NewDetailsScreen: FC = () => {
  const { params } = useRoute();
  const newDetails = params?.new;

  return (
    <CustomLayout style={styles.layout}>
      <View style={styles.imgCont}>
        <Image source={{ uri: newDetails?.urlToImage }} style={styles.img} />
      </View>
      <View style={styles.subPage}>
        <CustomText
          textAlign="center"
          size={14}
          style={styles.title}
          color={COLORS.darkGray}>
          {newDetails?.title}
        </CustomText>
        <Row justifyContent="space-between">
          <CustomText size={12} color={COLORS.black}>
            {newDetails?.author}
          </CustomText>

          <CustomText size={12} color={COLORS.black}>
            {formatDate(newDetails?.publishedAt)}
          </CustomText>
        </Row>
        <View style={styles.descCont}>
          <CustomText size={12} color={COLORS.darkGray}>
            {strings('description')}
          </CustomText>
          <CustomText
            size={12}
            color={COLORS.black}
            marginTop={5}
            style={styles.description}>
            {newDetails?.description}
          </CustomText>
        </View>

        <View style={styles.descCont}>
          <CustomText size={12} color={COLORS.darkGray}>
            {strings('content')}
          </CustomText>
          <CustomText
            size={12}
            color={COLORS.black}
            marginTop={5}
            style={styles.description}>
            {newDetails?.content}
          </CustomText>
        </View>
      </View>
    </CustomLayout>
  );
};
