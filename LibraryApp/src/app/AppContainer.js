import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Routes from '@constants/routes';
import { blackSqueeze, pictonBlue } from '@constants/colors';
import BookList from '@screens/BookList';
import BookDetails from '@screens/BookDetails';
import EmptyScreen from '@screens/EmptyScreen';
import Login from '@screens/Login';
import CustomButton from '@components/CustomButton';

import headerImg from './assets/bc_nav_bar.png';
import backImg from './assets/ic_back.png';
import libraryImg from './assets/ic_library.png';
import libraryImgActive from './assets/ic_library_active.png';
import settingsImg from './assets/ic_settings.png';
import settingsImgActive from './assets/ic_settings_active.png';
import styles from './styles';

const LOGOUT_TEXT = 'LOGOUT';

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
      headerBackImage: <Image source={backImg} style={styles.headerBackImgStyles} />,
      headerRight: <CustomButton title={LOGOUT_TEXT} buttonStyles={styles.logoutButtonStyle} />
    },
    cardStyle: {
      backgroundColor: blackSqueeze
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    [Routes.Library]: BooksNavigator,
    [Routes.EmptyScreen]: EmptyScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let tabIcon;
        switch (routeName) {
          case Routes.Library:
            tabIcon = <Image source={focused ? libraryImgActive : libraryImg} style={styles.tabIcon} />;
            break;
          case Routes.EmptyScreen:
            tabIcon = <Image source={focused ? settingsImgActive : settingsImg} style={styles.tabIcon} />;
            break;
          default:
            tabIcon = null;
            break;
        }
        return tabIcon;
      }
    }),
    tabBarOptions: {
      activeTintColor: pictonBlue,
      labelStyle: styles.tabLabelStyles,
      style: styles.tabBarStyles
    }
  }
);

const RootNavigator = createStackNavigator(
  {
    [Routes.Login]: { screen: Login },
    [Routes.BookList]: { screen: TabNavigator }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(RootNavigator);
