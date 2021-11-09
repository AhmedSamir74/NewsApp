import React, { useEffect, useState } from 'react';
import { CustomLayout, CustomText, Skelton } from '@components/common';
import styles from './styles';
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@assets/theme/theme';
import { strings } from '../../localization';
import throttle from 'lodash.throttle';
import { stringifyError, useGetNewsMutation } from '@services/newsService';
import { INew } from 'types';
import Highlighter from 'react-native-highlight-words';
import { useSelector } from 'react-redux';
import { selectIsDark } from '@store/slices/themSlice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'types/RootStackPrams';
import { useDynamicLinks } from '@hooks/useDynamicLinks';

type homeScreenProp = StackNavigationProp<HomeStackParamList, 'Home'>;
export const HomeScreen = () => {
  useDynamicLinks();

  const { navigate } = useNavigation<homeScreenProp>();

  const isDark = useSelector(selectIsDark);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [query, setQuery] = useState('');
  const [getNews, { data: news, isLoading, error, isError, isUninitialized }] =
    useGetNewsMutation();

  useEffect(() => {
    getNews('');
  }, [getNews]);

  const delayedQuery = throttle(q => {
    getNews(q);
  }, 1000);

  const onChangeText = (str: string) => {
    delayedQuery(str);
    setQuery(str);
  };

  const NewCard = ({ item }: { item: INew }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('NewDetails', { new: item })}
        activeOpacity={0.7}
        style={[styles.newCardCont, isDark && styles.darkNewCard]}>
        <Image source={{ uri: item.urlToImage }} style={styles.newImg} />
        <View style={styles.newTxtCont}>
          <CustomText numberOfLines={2} size={14} weight="semiBold">
            <Highlighter
              highlightStyle={styles.yellowBG}
              searchWords={[query]}
              textToHighlight={item.title}
            />
          </CustomText>
          <CustomText
            numberOfLines={3}
            size={12}
            color={isDark ? theme.colors.white : theme.colors.darkGray}
            style={styles.descText}>
            {item.description}
          </CustomText>
        </View>
      </TouchableOpacity>
    );
  };

  const EmptySearch = () => {
    return !isUninitialized ? (
      isLoading ? (
        <Skelton />
      ) : (
        <View style={styles.emptySearchCont}>
          <Image
            source={{
              uri: 'https://static.thenounproject.com/png/744760-200.png',
            }}
            style={styles.emptySearchIcon}
            resizeMode="contain"
          />
          <CustomText size={16} weight="semiBold" color={theme.colors.error}>
            {strings('emptySearch')}
          </CustomText>
          <CustomText marginTop={5} size={14} color={theme.colors.darkGray}>
            {strings('tryAnotherWord')}
          </CustomText>
        </View>
      )
    ) : isLoading ? (
      <Skelton />
    ) : null;
  };

  if (isError) {
    <View style={styles.errorCont}>
      <CustomText color={theme.colors.error} textAlign="center">
        {stringifyError(error)}
      </CustomText>
    </View>;
  }

  return (
    <CustomLayout style={styles.layout}>
      <View style={styles.searchCont}>
        <MaterialCommunityIcons
          name="magnify"
          color={theme.colors.lightBlue}
          size={25}
        />
        <TextInput
          value={query}
          onChangeText={onChangeText}
          placeholder={strings('search')}
          style={styles.searchInput}
          autoCorrect={false}
        />
        {query ? (
          <MaterialCommunityIcons
            name="close-circle"
            color={theme.colors.darkGray}
            size={20}
            onPress={() => onChangeText('')}
          />
        ) : null}
      </View>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          getNews('').then(() => {
            setIsRefreshing(false);
          });
        }}
        data={news?.articles}
        renderItem={NewCard}
        ListEmptyComponent={EmptySearch}
      />
    </CustomLayout>
  );
};
