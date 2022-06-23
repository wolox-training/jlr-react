import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from 'components/App';
import 'config/i18n';
import 'scss/application.scss';
import 'scss/forms.scss';

import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

const renderApp = () => {
  render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
