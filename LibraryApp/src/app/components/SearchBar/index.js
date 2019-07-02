import React, { Component } from 'react';
import { View, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import CustomTextInput from '@components/CustomTextInput';

import styles from './styles';
import searchIcon from './assets/ic_search.png';
import closeIcon from './assets/xButtonGray.png';

class SearchBar extends Component {
  render() {
    const { containerStyles, onSearch } = this.props;
    return (
      <View style={[styles.container, containerStyles]}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <View style={styles.containerInput}>
          <CustomTextInput
            inputContainerStyles={styles.input}
            inputTextStyles={styles.inputTextStyle}
            onChange={onSearch}
          />
        </View>
        <View style={styles.closeIconContainer}>
          <Image source={closeIcon} style={styles.closeIcon} />
        </View>
      </View>
    );
  }
}

SearchBar.propTypes = {
  containerStyles: ViewPropTypes.style,
  onSearch: PropTypes.func
};

export default SearchBar;
