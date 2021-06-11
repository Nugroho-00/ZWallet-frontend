import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    marginBottom: 67,
  },
  backBtn: {
    marginRight: 20,
  },
  titleText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: '#FFF',
  },
  reportWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  reportTitle: {
    fontFamily: 'NunitoSans-Regular',
    color: '#D0D0D0',
    marginBottom: 8,
  },
  reportAmount: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    color: '#FFF',
  },
  chartWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  chartTitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    marginBottom: 51,
  },
  btnTransactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  btnTransaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 16,
    backgroundColor: '#EAEDFF',
    borderRadius: 10,
  },
  btnTransactionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#514F5B',
  },
  historyTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 25,
  },
  historyListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFF',
  },
});

export default styles;
