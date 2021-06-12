import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SocketProvider} from './src/services/contexts/SocketProvider';
import storewithPersistor from './src/services/redux/Store';

const AppRedux = () => {
  return (
    <Root>
      {/* <SocketProvider> */}
        <Provider store={storewithPersistor.store}>
          <PersistGate loading={null} persistor={storewithPersistor.persistor}>
            <App />
          </PersistGate>
        </Provider>
      {/* </SocketProvider> */}
    </Root>
  );
};

AppRegistry.registerComponent(appName, () => AppRedux);
