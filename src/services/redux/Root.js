import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducers from './reducers/Login.js';
import userReducers from './reducers/Users.js';
import profileReducers from './reducers/Profile.js'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  loginReducers,
  userReducers,
  profileReducers
});

export default persistReducer(persistConfig, rootReducer);
