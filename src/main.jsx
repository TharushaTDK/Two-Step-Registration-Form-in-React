import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { FormProvider } from './context/FormContext';
import './index.css'

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </StrictMode>
);
