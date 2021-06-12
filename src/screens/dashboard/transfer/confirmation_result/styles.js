import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    paddingBottom: 25,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: '#FFF',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  balanceWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoWrapper: {
    flex: 1,
    padding: 15,
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
  noteWrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  infoTitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 10,
  },
  infoText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514F5B',
  },
  btnContinue: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#6379F4',
    borderRadius: 12,
  },
  textContinue: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  resultWrapper: {
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
  },
  iconResult: {
    marginBottom: 30,
  },
  textResult: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D4B57',
  },
  textResultDescription: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  relationsWrapper: {
    marginBottom: 66,
  },
  labelRelations: {
    marginBottom: 25,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoRelationsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    flex: 1,
    padding: 15,
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
  infoUserWrapper: {
    marginLeft: 15,
  },
  textUsername: {
    marginBottom: 9,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4B57',
  },
  textPhone: {
    fontFamily: 'NunitoSans-Regular',
    color: '#7A7886',
  },
});

export default styles;
