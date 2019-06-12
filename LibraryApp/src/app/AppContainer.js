import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Routes from '@constants/routes';
import { blackSqueeze } from '@constants/colors';
import BookList from '@screens/BookList';
import BookDetails from '@screens/BookDetails';
import CustomHeader from '@components/CustomHeader';

const navigationOptions = {
  cardStyle: {
    backgroundColor: blackSqueeze
  }
};

const BooksNavigator = createStackNavigator(
  {
    [Routes.BookList]: {
      screen: BookList,
      navigationOptions: () => {
        return {
          title: 'Library app',
          headerTitle: <CustomHeader title="Libraryrrr" />
        };
      }
    },
    [Routes.BookDetails]: { screen: BookDetails }
  },
  navigationOptions
);

export default createAppContainer(BooksNavigator);
