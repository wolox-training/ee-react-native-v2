import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import Routes from '@constants/routes';
import { blackSqueeze, pictonBlue } from '@constants/colors';
import BookList from '@screens/BookList';
import BookDetails from '@screens/BookDetails';
import EmptyScreen from '@screens/EmptyScreen';
import Login from '@screens/Login';
import SearchScreen from '@screens/SearchScreen';
import LogoutButton from '@components/LogoutButton';
import SearchButton from '@components/SearchButton';

import headerImg from './assets/bc_nav_bar.png';
import backImg from './assets/ic_back.png';
import libraryImg from './assets/ic_library.png';
import libraryImgActive from './assets/ic_library_active.png';
import settingsImg from './assets/ic_settings.png';
import settingsImgActive from './assets/ic_settings_active.png';
import styles from './styles';

const APP_TITLE = 'LIBRARY';

const BooksNavigator = createStackNavigator(
  {
    [Routes.BookList]: {
      screen: BookList,
      navigationOptions: {
        headerLeft: <SearchButton />
      }
    },
    [Routes.BookDetails]: { screen: BookDetails },
    [Routes.SearchScreen]: {
      screen: SearchScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerBackground: <Image source={headerImg} style={styles.headerImageStyles} />,
      headerStyle: styles.headerStyles,
      headerTitleStyle: styles.headerTitleStyles,
      headerBackTitle: null,
      headerTransparent: true,
      headerBackImage: <Image source={backImg} style={styles.headerBackImgStyles} />,
      headerRight: <LogoutButton />,
      headerTitle: APP_TITLE
    },
    cardStyle: {
      backgroundColor: blackSqueeze
    },
    headerLayoutPreset: 'center'
  }
);

const tabNavigatorScreens = {
  [Routes.Library]: BooksNavigator,
  [Routes.EmptyScreen]: EmptyScreen
};

const defaultTabNavigationOptions = {
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
};

const TabNavigator = createBottomTabNavigator(tabNavigatorScreens, defaultTabNavigationOptions);

export const RootNavigator = createStackNavigator(
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

const App = createReduxContainer(RootNavigator);

const mapStateToProps = store => ({
  state: store.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
