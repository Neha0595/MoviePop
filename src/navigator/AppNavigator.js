import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../containers/SplashScreen';
import Feed from '../containers/Feed';
import MovieDetail from '../containers/MovieDetail';
import More from '../containers/More';

const SuperNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  Feed: { screen: Feed },
  More: { screen: More },
  MovieDetail: { screen: MovieDetail },
});

const AppNavigator = createAppContainer(SuperNavigator);

export default AppNavigator;
