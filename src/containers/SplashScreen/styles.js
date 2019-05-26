import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  wallpaper: {
    width,
    height,
    justifyContent: 'flex-end',
  },

  bottomSection: {
    width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  title: {
    color: 'white',
    height: 80,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

  getStartedButton: {
    height: 40,
    width: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  getStartedButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    width: 100,
    textAlign: 'center',
  },
});

export default styles;
