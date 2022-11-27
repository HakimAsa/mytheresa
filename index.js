import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import movieReducer from './src/stores/Movie';
import App from './src/App';
const store = configureStore({
  reducer: {
    //multiple state
    movie: movieReducer,
  },
});

const container = document.getElementById('myt');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
