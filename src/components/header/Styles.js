import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6379F4',
    paddingTop: StatusBar.currentHeight + 25,
    paddingBottom: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    marginBottom: 20,
  },
  back: {
    color: '#FFFFFF',
    marginRight: 12,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default styles;
