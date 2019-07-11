import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import CustomButton from '@components/CustomButton';
import searchIcon from '@assets/ic_search.png';
import Routes from '@constants/routes';

import styles from './styles';

class SearchButton extends Component {
  handlePress = () => {
    const { dispatch } = this.props;
    dispatch(NavigationActions.navigate({ routeName: Routes.SearchScreen }));
  };

  render() {
    return (
      <CustomButton
        icon={searchIcon}
        buttonStyles={styles.searchButtonStyle}
        iconStyles={styles.searchButtonIcon}
        onPress={this.handlePress}
      />
    );
  }
}

export default connect()(SearchButton);
