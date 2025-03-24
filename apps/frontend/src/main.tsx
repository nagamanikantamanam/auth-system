import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import ProductsPage from './pages/ProductsPage';
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ProductsPage></ProductsPage>
    </StrictMode>
  );
}
