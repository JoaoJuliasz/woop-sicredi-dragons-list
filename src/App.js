import React from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import Routes from './routes/Routes';
import store from './redux/store'
import Header from './Components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
        <Routes />
      </div>
    </Provider>
  );
}

export default App
