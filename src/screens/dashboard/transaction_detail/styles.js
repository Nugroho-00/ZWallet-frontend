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
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  avatar: {
    backgroundColor: '#EBEEF2',
    width: 65,
    height: 65,
    justifyContent: 'center',
    borderRadius: 10,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  chartItemWrapper: {
    alignItems: 'center',
  },
  chartItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
  debitChart: {
    maxHeight: 200,
    padding: 10,
    backgroundColor: '#6379F4',
    borderRadius: 15,
    marginRight: 2,
  },
  creditChart: {
    maxHeight: 200,
    padding: 10,
    backgroundColor: '#9DA6B5',
    borderRadius: 15,
  },
  textDay: {
    fontFamily: 'NunitoSans-Regular',
    color: '#8F8F8F',
  },
  chartDescriptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  chartDescriptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  chartIcon: {
    padding: 10,
    borderRadius: 50,
  },
  chartDescriptionText: {
    marginLeft: 5,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#8F8F8F',
  },
});

export default styles;
