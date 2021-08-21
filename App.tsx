/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import BookDoctorScreen from './src/pages/book-doctor';
import reducer from './src/redux/reducers';

const newReducer: any = reducer;
const store = createStore(newReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <BookDoctorScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
