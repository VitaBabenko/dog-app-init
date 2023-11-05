import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { DogAppThemeProvider } from './theme';
import {
  BreedsPage,
  BreedItemPage,
  VotePage,
  HistoryPage,
  UploadPage
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404</div>,
    children: [
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
    <DogAppThemeProvider>
      <RouterProvider router={router} />
    </DogAppThemeProvider>
  </React.StrictMode>
);
