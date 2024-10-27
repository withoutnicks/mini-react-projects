import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance="dark">
      <App />
    </Theme>
  </StrictMode>,
)
