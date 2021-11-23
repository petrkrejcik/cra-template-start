import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from 'components/Theme/Theme';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { Router } from 'components/Router/Router';
import { UIProvider } from 'components/UIContext/UIContext';

export const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <UIProvider>
          <Theme>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Router />
            </BrowserRouter>
          </Theme>
        </UIProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});
