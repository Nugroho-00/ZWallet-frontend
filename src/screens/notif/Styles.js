import {CardItem} from 'native-base';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    color: '#7A7886',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    marginVertical: 15,
  },
  cardItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    height: 80,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  left: {},
  right: {
    marginLeft: 10,
  },
  content: {
    color: '#7A7886',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
  },
  amount: {
    marginTop: 5,
    color: '#43484F',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
  arrowUp: {
    color: '#FF5B37',
  },
  arrowDown: {
    color: '#4CEDB3',
  },
});

export default styles;
