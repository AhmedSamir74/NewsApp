import { INew } from 'types';

export type RootStackParamList = {
  Loading: undefined;
  OnBoarding: undefined;
  MainNavigator: undefined;
  NewsDetails: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  NewDetails: {
    new: INew;
  };
};
