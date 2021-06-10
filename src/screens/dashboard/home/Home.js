import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {userLogout} from '../../../services/redux/actions/Auth';

const Home = props => {
  const dataHistory = [
    {
      user: 'Samuel',
      type: 'Transfer',
      amount: '50.000',
    },
    {
      user: 'Spotify',
      type: 'Subcription',
      amount: '70.000',
    },
    {
      user: 'Netflix',
      type: 'Subcription',
      amount: '80.000',
    },
    {
      user: 'Bobby',
      type: 'Transfer',
      amount: '100.000',
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="dark-content"
          backgroundColor="#6379F4"
        />
        <View style={styles.headerWrapper}>
          <View style={{flex: 2}}>
            <Icon name="person" size={52} color="#FFF" />
          </View>
          <View style={{flex: 6}}>
            <TouchableOpacity>
              <Text style={{...styles.balanceTitle, ...styles.font}}>
                Balance
              </Text>
              <Text style={{...styles.balanceCount, ...styles.font}}>
                Rp120.000
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                props.onLogoutHandler();
              }}>
              <Icon name="notifications-outline" size={28} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnTransactionWrapper}>
          <TouchableOpacity style={styles.btnTransaction}>
            <Icon name="arrow-up" size={28} color="#608DE2" />
            <Text style={{...styles.btnTransactionText, ...styles.font}}>
              Transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnTransaction}>
            <Icon name="add" size={28} color="#608DE2" />
            <Text style={{...styles.btnTransactionText, ...styles.font}}>
              Top Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyTitleWrapper}>
          <Text style={{...styles.font, fontSize: 18}}>
            Transaction History
          </Text>
          <TouchableOpacity>
            <Text style={{...styles.font, color: '#6379F4'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <View>
          {dataHistory.map((history, index) => (
            <TouchableOpacity key={index} style={styles.historyListWrapper}>
              <View style={{flex: 2}}>
                <Icon name="person-outline" size={56} />
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 16, marginBottom: 9}}>
                  {history.user}
                </Text>
                <Text style={{color: '#7A7886'}}>{history.type}</Text>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: history.type === 'Transfer' ? '#1EC15F' : '#FF5B37',
                  }}>
                  {history.type === 'Transfer'
                    ? `+Rp${history.amount}`
                    : `-Rp${history.amount}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const mapStatetoProps = state => ({
  loginReducers: state.loginReducers,
});

const mapDispatchToProps = dispatch => ({
  onLogoutHandler: () => {
    dispatch(userLogout());
  },
});
const connectedHome = connect(mapStatetoProps, mapDispatchToProps)(Home);
export default connectedHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  font: {
    fontFamily: 'NunitoSans-Regular',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#6379F4',
  },
  balanceTitle: {
    fontSize: 14,
    color: '#D0D0D0',
    marginBottom: 10,
  },
  balanceCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
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
