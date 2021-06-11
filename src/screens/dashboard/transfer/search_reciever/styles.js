import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backBtn: {
    marginRight: 20,
  },
  titleText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: '#FFF',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 18,
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
  searchInput: {
    marginLeft: 12,
    fontSize: 16,
  },
  contentContainer: {
    marginTop: 40,
  },
  titleContentWrapper: {
    paddingHorizontal: 16,
    marginBottom: 25,
  },
  titleContentText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514F5B',
    marginBottom: 10,
  },
  countContact: {
    fontFamily: 'NunitoSans-Regular',
    color: '#8F8F8F',
  },
  listContactWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  contactInfoWrapper: {
    marginLeft: 15,
  },
  contactName: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  contactPhone: {
    fontFamily: 'NunitoSans-Regular',
    color: '#7A7886',
  },
  quickContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  quickTitle: {
    marginBottom: 25,
  },
  quickTitleText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514F5B',
  },
  quickContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quickListWrapper: {
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  quickName: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4B57',
    marginBottom: 5,
    marginTop: 10,
  },
  quickAmount: {
    fontFamily: 'NunitoSans-Regular',
    color: '#7A7886',
  },
});

export default styles;
