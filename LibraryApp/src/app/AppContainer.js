import { createStackNavigator, createAppContainer } from 'react-navigation';
import Routes from '@constants/routes';
import { blackSqueeze } from '@constants/colors';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';

const navigationOptions = {
  cardStyle: {
    backgroundColor: blackSqueeze
  }
};

const BooksNavigator = createStackNavigator(
  {
    [Routes.BookList]: {
      screen: BookList,
      navigationOptions: () => ({
        title: 'Library app'
      })
    },
    [Routes.BookDetail]: { screen: BookDetail }
  },
  navigationOptions
);

export default createAppContainer(BooksNavigator);
