import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Gate from './components/Gate';
import store, {persistor} from './redux/store';

const cacheFonts = fonts => fonts.map(font => font.loadAsync(font));

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  );
}
