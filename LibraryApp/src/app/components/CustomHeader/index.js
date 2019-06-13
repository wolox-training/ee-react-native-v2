import React from 'react';
import { Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { Header } from 'react-navigation';

import headerImg from './assets/bc_nav_bar.png';
import backIcon from './assets/ic_back.png';
import styles from './styles';

function CustomHeader(props) {
  return (
    <ImageBackground source={headerImg} style={styles.container} imageStyle={styles.image}>
      <Header {...props} style={{ backgroundColor: 'transparent' }} />
    </ImageBackground>
  );
}

CustomHeader.propTypes = {
  title: PropTypes.string
};

CustomHeader.displayName = 'CustomHeader';

export default CustomHeader;

/*
  const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
    </View>
  );
*/
