import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  movieBanner: {
    width,
    height: 200,
    backgroundColor: 'transparent',
  },

  movieTitleContainer: {
    height: 50,
    width,
    padding: 16,
    justifyContent: 'center',
  },

  movieTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    width: width - 32,
  },

  movieOverviewContainer: {
    height: height - (200 + 50),
    width,
    padding: 16,
  },

  movieOverview: {
    fontSize: 16,
    color: 'rgb(0, 221, 118)',
    fontWeight: '500',
    width: width - 32,
  },
});

export default styles;
