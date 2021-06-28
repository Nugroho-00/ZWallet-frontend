import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Header from '../../../components/header/Header';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoryWeek from '../../../components/transaction/transaction_history/history/HistoryWeek';
import HistoryMonth from '../../../components/transaction/transaction_history/history/HistoryMonth';
import HistoryFilterDate from '../../../components/transaction/transaction_history/history_filter/HistoryFilterDate';
import HistoryFilterExpenses from '../../../components/transaction/transaction_history/history_filter/HistoryExpenses';
import moment from 'moment';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';
import HistoryFilterIncome from '../../../components/transaction/transaction_history/history_filter/HistoryIncome';

const TransactionHistory = props => {
  const token = useSelector(state => state.loginReducers?.user?.token);
  const {navigation} = props;
  //default
  const [thisWeek, setThisWeek] = useState(null);
  const [weekpage, setWeekPage] = useState(1);
  const [thisMonth, setThisMonth] = useState(null);
  const [monthpage, setMonthPage] = useState(1);

  const [filterstate, setFilter] = useState(false);
  //filter by date
  const [filterdata, setFilterData] = useState(null);
  const [filterpage, setFilterPage] = useState(1);
  const [filterdatestate, setFilterDateState] = useState(false);

  const [datePicker, setPicker] = useState({
    start: false,
    end: false,
  });
  const [pickedDate, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  //filter by income and expenses
  const [filterExpenses, setExpenses] = useState([]);
  const [filterExpensesState, setExpensesState] = useState(false);
  const [filterIncome, setIncome] = useState([]);
  const [filterIncomeState, setIncomeState] = useState(false);

  //modal
  let [modalState, setModalState] = useState(false);

  const currentdate = moment()
    .year('year')
    .month('month')
    .date('day')
    .add(1, 'd')
    .format('YYYY-MM-DD');
  const weekstartdate = moment().clone().weekday(0).format('YYYY-MM-DD');
  const dayofweek = moment().day();
  const endmonth = moment().subtract(dayofweek, 'd').format('YYYY-MM-DD');
  const startmonth = moment().subtract(1, 'M').format('YYYY-MM-DD');

  const getHistoryWeek = url => {
    let config = {
      method: 'GET',
      url: url ? url : `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        start: weekstartdate,
        end: currentdate,
        sort: 'date-ZA',
        limits: 4,
        pages: weekpage,
      },
    };
    axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          // console.log('res', {res});
          setThisWeek(res.data);
          return;
        }
        if (res.data.result.length === 0) {
          return false;
        }
      })
      .catch(err => console.log({err}));
  };
  const getHistoryMonth = url => {
    let config = {
      method: 'GET',
      url: url ? url : `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        start: startmonth,
        end: endmonth,
        sort: 'date-ZA',
        limits: 5,
        pages: monthpage,
      },
    };
    axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          // console.log('res', {res});
          setThisMonth(res.data);
          return;
        }
        if (res.data.result.length === 0) {
          return false;
        }
      })
      .catch(err => console.log({err}));
  };

  const getHistoryFilterDate = url => {
    const start = moment(pickedDate.startDate).format('YYYY-MM-DD');
    const end = moment(pickedDate.endDate).add(1, 'd').format('YYYY-MM-DD');

    // console.log('formated start', start);
    // console.log('formated end', end);

    let config = {
      method: 'GET',
      url: url ? url : `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        start: start,
        end: end,
        sort: 'date-ZA',
        limits: 10,
        pages: filterpage,
      },
    };
    axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          // console.log('res', {res});
          setFilterData(res.data);
          return;
        }
        if (res.data.result.length === 0) {
          return null;
        }
      })
      .catch(err => console.log({err}));
  };
  const getHistoryFilterIncome = type => {
    let config = {
      method: 'GET',
      url: `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        type: type,
        limits: 50,
      },
    };
    return axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          // console.log('res', {res});
          setIncome(prevIncome => {
            return [...prevIncome, ...res.data.result];
          });
          return;
        }
        if (res.data.result.length === 0) {
          return null;
        }
      })
      .catch(err => console.log('Fungsi', {err}));
  };
  const getHistoryFilterExpenses = type => {
    console.log('check type expenses', type);
    let config = {
      method: 'GET',
      url: `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        type: type,
        limits: 10,
      },
    };
    return axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          // console.log('res', {res});
          // console.log('filterExpense', {filterExpenses});
          setExpenses(prevExpenses => {
            return [...prevExpenses, ...res.data.result];
          });
          return;
        }
        if (res.data.result.length === 0) {
          return null;
        }
      })
      .catch(err => console.log('Expenses', {err}));
  };

  useEffect(async () => {
    await getHistoryWeek();
    await getHistoryMonth();
  }, [weekpage, monthpage]);

  useEffect(async () => {
    await getHistoryFilterDate();
  }, [filterstate, pickedDate, filterpage]);

  // const incomeHandler = () => {
  //   const topup = getHistoryFilterIncome('topup');
  //   const debit = getHistoryFilterIncome('debit');
  //   const hasil = [...topup, ...debit];
  //   return setIncome(hasil);
  // };

  useEffect(() => {
    const getIncome = async () => {
      await getHistoryFilterIncome('topup');
      await getHistoryFilterIncome('debit');
    };
    setIncome([]);
    getIncome();
  }, [filterIncomeState]);

  useEffect(() => {
    const getExpenses = async () => {
      await getHistoryFilterExpenses('subscription');
      await getHistoryFilterExpenses('credit');
    };
    setExpenses([]);
    getExpenses();
  }, [filterExpensesState]);

  // console.log('startdate', pickedDate.startDate);
  // console.log('enddate', pickedDate.endDate);
  // console.log('filtereddata', filterdata);
  return (
    <View>
      <Modal
        visible={modalState}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setModalState(!modalState);
        }}>
        <View style={classes.modalcontainer}>
          <StatusBar translucent transparent />
          <View style={classes.container}>
            <View style={classes.filtersection}>
              <Text
                style={{
                  ...classes.bytypebtntext,
                  alignSelf: 'center',
                  marginBottom: '5%',
                }}>
                Filter by Expenses or Income
              </Text>
              <View style={classes.bytype}>
                <TouchableOpacity
                  style={{...classes.bytypebtn, backgroundColor: 'white'}}
                  onPress={() => {
                    setIncome('');
                    setIncomeState(false);
                    setExpensesState(true);
                  }}>
                  <Ionicons
                    name="caret-down-outline"
                    size={24}
                    color={'rgba(255, 91, 55, 1)'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...classes.bytypebtn, backgroundColor: 'white'}}
                  onPress={() => {
                    setIncome([]);
                    setExpensesState(false);
                    setIncomeState(true);
                  }}>
                  <Ionicons
                    name="caret-up-outline"
                    size={24}
                    color={'rgba(30, 193, 95, 1)'}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...classes.bytypebtntext,
                  alignSelf: 'center',
                  marginVertical: '5%',
                }}>
                Filter by Date
              </Text>
              {datePicker.start ? (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={classes.bytypebtntext}>
                    Select the start date
                  </Text>
                  <DatePicker
                    mode={'date'}
                    date={pickedDate.startDate}
                    onDateChange={value => {
                      setDate({...pickedDate, startDate: value});
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      ...classes.bytypebtn,
                      backgroundColor: 'rgba(99, 121, 244, 1)',
                      width: 120,
                    }}
                    onPress={() => {
                      setPicker({...datePicker, start: false});
                      setFilterDateState(true);
                    }}>
                    <Text style={{...classes.modalbtntext, color: 'white'}}>
                      Select
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {datePicker.end ? (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={classes.bytypebtntext}>Select the end date</Text>
                  <DatePicker
                    mode={'date'}
                    date={pickedDate.endDate}
                    onDateChange={value => {
                      setDate({...pickedDate, endDate: value});
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      ...classes.bytypebtn,
                      backgroundColor: 'rgba(99, 121, 244, 1)',
                      width: 120,
                    }}
                    onPress={() => {
                      setPicker({...datePicker, end: false});
                      setFilterDateState(true);
                    }}>
                    <Text style={{...classes.modalbtntext, color: 'white'}}>
                      Select
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {datePicker.start || datePicker.end ? null : (
                <View style={{...classes.bytype}}>
                  <TouchableOpacity
                    style={{
                      ...classes.bytypebtn,
                      backgroundColor: 'white',
                      width: 120,
                    }}
                    onPress={() => {
                      setPicker({...datePicker, start: true});
                    }}>
                    <Text style={classes.bytypebtntext}>Start Date</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      ...classes.bytypebtn,
                      backgroundColor: 'white',
                      width: 120,
                    }}
                    onPress={() => {
                      setPicker({...datePicker, end: true});
                    }}>
                    <Text style={classes.bytypebtntext}>End Date</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <TouchableOpacity
              style={classes.modalbtnconfirm}
              onPress={() => {
                setFilter(true);
                setModalState(false);
              }}>
              <Text style={{...classes.modalbtntext, color: 'white'}}>
                Confirm
              </Text>
            </TouchableOpacity>
            <View style={classes.modalbtngroup}>
              <TouchableOpacity
                style={{
                  ...classes.modalbtn,
                  backgroundColor: 'rgba(218, 218, 218, 1)',
                }}
                onPress={() => {
                  setModalState(!modalState);
                }}>
                <Text
                  style={{
                    ...classes.modalbtntext,
                    color: 'rgba(136, 136, 143, 1)',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...classes.modalbtn, backgroundColor: 'white'}}
                onPress={() => {
                  setFilter(false);
                  setFilterDateState(false);
                  setExpenses();
                  setIncome();
                  setModalState(false);
                }}>
                <Text
                  style={{
                    ...classes.modalbtntext,
                    color: 'rgba(255, 91, 55, 1)',
                  }}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <Header isBack={true} title="History" navigation={navigation} />
        <View style={classes.maincontainer}>
          {filterstate && filterdatestate ? (
            <>
              <HistoryFilterDate
                data={{
                  filterdata,
                  start: moment(pickedDate.startDate).format('YYYY-MM-DD'),
                  end: moment(pickedDate.endDate)
                    .add(1, 'd')
                    .format('YYYY-MM-DD'),
                }}
              />
              {filterdata ? (
                <View style={classes.paginationsection}>
                  <TouchableOpacity
                    style={
                      filterdata.info.prev !== null
                        ? classes.paginationbtn
                        : classes.paginationbtndisable
                    }
                    disabled={!filterdata.info.prev}
                    onPress={() => {
                      if (filterpage === 1) {
                        return;
                      }
                      setFilterPage(filterpage - 1);
                    }}>
                    <Ionicons
                      name="arrow-back-outline"
                      size={24}
                      color={
                        !filterdata.info.prev
                          ? 'rgba(136, 136, 143, 1)'
                          : 'white'
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      filterdata.info.next !== null
                        ? classes.paginationbtn
                        : classes.paginationbtndisable
                    }
                    disabled={!filterdata.info.next}
                    onPress={() => {
                      if (filterpage === filterdata.info?.totalPage) {
                        return;
                      }
                      setFilterPage(filterpage + 1);
                    }}>
                    <Ionicons
                      name="arrow-forward-outline"
                      size={24}
                      color={
                        !filterdata.info.next
                          ? 'rgba(136, 136, 143, 1)'
                          : 'white'
                      }
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
            </>
          ) : filterstate && filterExpensesState ? (
            <HistoryFilterExpenses data={{filterExpenses}} />
          ) : filterstate && filterIncomeState ? (
            <HistoryFilterIncome data={{filterIncome}} />
          ) : (
            <>
              <HistoryWeek
                data={{thisWeek: thisWeek}}
                // new={defaultData.thisWeek}
              />
              {thisWeek ? (
                <View style={classes.paginationsection}>
                  <TouchableOpacity
                    style={
                      thisWeek.info.prev !== null
                        ? classes.paginationbtn
                        : classes.paginationbtndisable
                    }
                    disabled={!thisWeek.info.prev}
                    onPress={() => {
                      if (weekpage === 1) {
                        return;
                      }
                      setWeekPage(weekpage - 1);
                    }}>
                    <Ionicons
                      name="arrow-back-outline"
                      size={24}
                      color={
                        !thisWeek.info.prev ? 'rgba(136, 136, 143, 1)' : 'white'
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      thisWeek.info.next !== null
                        ? classes.paginationbtn
                        : classes.paginationbtndisable
                    }
                    disabled={!thisWeek.info.next}
                    onPress={() => {
                      if (weekpage === thisWeek.info?.totalPage) {
                        return;
                      }
                      setWeekPage(weekpage + 1);
                    }}>
                    <Ionicons
                      name="arrow-forward-outline"
                      size={24}
                      color={
                        !thisWeek.info.next ? 'rgba(136, 136, 143, 1)' : 'white'
                      }
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
              <HistoryMonth data={{thisMonth: thisMonth}} />
              {thisMonth ? (
                <>
                  {thisMonth ? (
                    <View style={classes.paginationsection}>
                      <TouchableOpacity
                        style={
                          thisMonth.info.prev !== null
                            ? classes.paginationbtn
                            : classes.paginationbtndisable
                        }
                        disabled={!thisMonth.info?.prev}
                        onPress={() => {
                          if (monthpage === 1) {
                            return;
                          }
                          setMonthPage(monthpage - 1);
                        }}>
                        <Ionicons
                          name="arrow-back-outline"
                          size={24}
                          color={
                            !thisMonth.info.prev
                              ? 'rgba(136, 136, 143, 1)'
                              : 'white'
                          }
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          thisMonth.info.next !== null
                            ? classes.paginationbtn
                            : classes.paginationbtndisable
                        }
                        disabled={!thisMonth.info?.next}
                        onPress={() => {
                          if (monthpage === thisMonth.info?.totalPage) {
                            return;
                          }
                          setMonthPage(monthpage + 1);
                        }}>
                        <Ionicons
                          name="arrow-forward-outline"
                          size={24}
                          color={
                            !thisMonth.info?.next
                              ? 'rgba(136, 136, 143, 1)'
                              : 'white'
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </>
              ) : null}
            </>
          )}
        </View>
      </ScrollView>
      <View style={classes.filter}>
        <TouchableOpacity
          style={classes.filterbtn}
          onPress={() => {
            setFilter(false);
            setModalState(!modalState);
          }}>
          <Text style={classes.filterbtntext}>Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionHistory;
