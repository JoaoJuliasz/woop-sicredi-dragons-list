import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Routes from './routes/Routes';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
