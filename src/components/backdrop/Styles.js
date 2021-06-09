import {StyleSheet} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontFamily: 'NunitoSans-Bold',
    color: '#6379F4',
    fontSize: 26,
    textAlign: 'center',
    paddingTop: StatusBar.currentHeight + Dimensions.get('window').height / 12,
  },
});

export default styles;
