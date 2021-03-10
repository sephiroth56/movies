
import React from 'react';
import { LogBox, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux'
import { createStore ,applyMiddleware} from 'redux'
import Routes from './src/navigation'
import reducer from './src/reducers'
import thunk from 'redux-thunk';

LogBox.ignoreAllLogs(true)
const store = createStore(reducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <Routes />
    </SafeAreaView>
  </Provider>
)

export default App;
