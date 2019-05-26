import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

import styles from './styles';

const { width, height } = Dimensions.get('window');

export default class MoviePoster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressMoviePoster = () => {
    const { navigation, item } = this.props;
    navigation.navigate('MovieDetail', { currentMovieData: item.item });
  };

  render() {
    const { item, moviesData } = this.props;
    console.log('Item Data', item.item);
    return (
      <TouchableOpacity style={styles.poster} onPress={this.onPressMoviePoster}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w300${item.item.poster_path}`,
          }}
          style={{ flex: 1 }}
        />
      </TouchableOpacity>
    );
  }
}
