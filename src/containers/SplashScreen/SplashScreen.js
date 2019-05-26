import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const { width, height } = Dimensions.get('window');

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  screenBottomSection = props => (
    <View elevation={3} style={styles.bottomSection}>
      <Text elevation={3} style={styles.title}>
        Welcome in the universe of popular movies
      </Text>
      <TouchableOpacity
        elevation={3}
        style={styles.getStartedButton}
        onPress={props.onPress}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );

  onPressGetStarted = () => {
    const { navigation } = this.props;
    navigation.navigate('Feed');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: 'https://wallpaperplay.com/walls/full/b/a/d/116836.jpg',
          }}
          style={styles.wallpaper}
        >
          <this.screenBottomSection onPress={this.onPressGetStarted} />
        </ImageBackground>
      </View>
    );
  }
}
