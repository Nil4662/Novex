import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import DemoPurchasePage from './pages/DemoPurchasePage';

// ============================================================================
//  کامپوننت ریشه — App with router and language provider.
// ============================================================================

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo-purchase" element={<DemoPurchasePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
