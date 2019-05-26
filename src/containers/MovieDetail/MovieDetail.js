import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');
import styles from './styles';

export default class MovieDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Movie Detail',
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.currentMovieData = props.navigation.getParam('currentMovieData');
  }

  movieBanner = () => (
    <View style={styles.movieBanner}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w300${
            this.currentMovieData.poster_path
          }`,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );

  movieTitle = () => (
    <View style={styles.movieTitleContainer}>
      <Text numberOfLines={2} style={styles.movieTitle}>
        {this.currentMovieData.title}
      </Text>
    </View>
  );

  movieOverview = () => (
    <View style={styles.movieOverviewContainer}>
      <Text style={styles.movieOverview}>{this.currentMovieData.overview}</Text>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <this.movieBanner />
        <this.movieTitle />
        <this.movieOverview />
      </View>
    );
  }
}
