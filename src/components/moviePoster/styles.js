import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  poster: {
    width: width / 3,
    height: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'black',
  },
});

export default styles;
