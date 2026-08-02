import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/theme/global.css';
import './ui/screens/screens.css';
import './app/i18n';
import { App } from './ui/App';
import { useSettings, applyTheme } from './app/store/settings';
import { applyDirection } from './app/i18n';

// Apply persisted theme/direction before first paint to avoid a flash.
const s = useSettings.getState();
applyTheme(s.theme, s.fontScale);
applyDirection(s.language);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
