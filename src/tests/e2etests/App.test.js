import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../../stores/Movie';
import App from '../../App';

test('renders arbit blog link', () => {
  let store = configureStore({ reducer: { movie: movieReducer } });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/MYTHERESA/i);
  expect(linkElement).toBeInTheDocument();
});
