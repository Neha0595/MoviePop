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

class More extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'More',
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
    const { navigation } = this.props;
    const { moviesData } = this.state;
    console.log('Popular Movies Data', moviesData);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={moviesData}
          renderItem={item => (
            <MoviePoster
              navigation={navigation}
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
)(More);
