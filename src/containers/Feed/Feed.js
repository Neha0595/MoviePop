import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Actions';

import MoviePoster from '../../components/moviePoster';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Feed extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Feed',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <Text style={styles.headerRightButton}>More</Text>
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
    };
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.getPopularMovies(moviesData =>
      this.setState({ moviesData: moviesData })
    );
  };

  render() {
    const { navigation, popularMovies } = this.props;
    const { moviesData } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={moviesData.slice(0, 9)}
          renderItem={item => (
            <MoviePoster
              navigation={navigation}
              popularMovies={popularMovies}
              moviesData={moviesData}
              item={item}
            />
          )}
          style={{ flex: 1 }}
          numColumns={3}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    popularMovies: state.PopularMovies,
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
  })
)(Feed);
