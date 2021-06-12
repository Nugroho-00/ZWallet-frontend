import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducers from './reducers/Login.js';
import userReducers from './reducers/Users.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  loginReducers,
  userReducers,
});

export default persistReducer(persistConfig, rootReducer);
