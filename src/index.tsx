import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { THEME } from './theme';


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={THEME} >
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HelmetProvider>
    </QueryClientProvider>
  </ThemeProvider>
);