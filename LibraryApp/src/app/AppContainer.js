import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Routes from '@constants/routes';
import { blackSqueeze } from '@constants/colors';
import BookList from '@screens/BookList';
import BookDetails from '@screens/BookDetails';
import { Image } from 'react-native';

import headerImg from './assets/bc_nav_bar.png';
import backImg from './assets/ic_back.png';
import styles from './styles';

const BooksNavigator = createStackNavigator(
  {
    [Routes.BookList]: { screen: BookList },
    [Routes.BookDetails]: { screen: BookDetails }
  },
  {
    defaultNavigationOptions: {
      headerBackground: <Image source={headerImg} style={styles.headerImageStyles} />,
      headerStyle: styles.headerStyles,
      headerTitleStyle: styles.headerTitleStyles,
      headerBackTitle: null,
      headerTransparent: true,
      headerBackImage: <Image source={backImg} style={styles.headerBackImgStyles} />
    },
    cardStyle: {
      backgroundColor: blackSqueeze
    }
  }
);

export default createAppContainer(BooksNavigator);
