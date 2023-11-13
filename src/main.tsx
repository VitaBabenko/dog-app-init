import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { api } from './services/api';
import { store } from './services/store';
import './index.css';
import { DogAppThemeProvider } from './theme';
import {
  MainPage,
  BreedsPage,
  BreedItemPage,
  VotePage,
  HistoryPage,
  UploadPage,
  ErrorPage
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'breed',
        element: <BreedsPage />
      },
      {
        path: 'breed/:breedId',
        element: <BreedItemPage />
      },
      {
        path: 'vote',
        element: <VotePage />
      },
      {
        path: 'history',
        element: <HistoryPage />
      },
      {
        path: 'upload',
        element: <UploadPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={api}>
        <DogAppThemeProvider>
          <RouterProvider router={router} />
        </DogAppThemeProvider>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
