import React from 'react';
import { Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
// import { Header } from 'react-navigation';

import headerImg from './assets/bc_nav_bar.png';
import backIcon from './assets/ic_back.png';
import styles from './styles';

function CustomHeader({ title }) {
  return (
    <ImageBackground source={headerImg} style={styles.container} imageStyle={styles.image}>
      <TouchableOpacity>
        <Image source={backIcon} />
      </TouchableOpacity>
      <Text>{title}</Text>
    </ImageBackground>
  );
}

CustomHeader.propTypes = {
  title: PropTypes.string
};

CustomHeader.displayName = 'CustomHeader';

export default CustomHeader;

/*
  const ImageHeader = props => {
  console.log('ImageHeader props', props);
  return(
    <View style={{height: 10*vh, justifyContent: 'flex-end', padding: 5, backgroundColor: 'transparent'}}>
      <Image
        style={{width, height: 10*vh, position: 'absolute', top: 0, left: 0}}
        source={require('./assets/images/bg-header.png')}
        resizeMode="cover"
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
    </View>
  );
}
*/
