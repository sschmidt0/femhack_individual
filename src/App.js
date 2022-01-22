import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterLoginPage } from './pages/RegisterLoginPage';
import './styles/App.scss';

export const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterLoginPage />} />
            <Route path="/iniciar" element={<RegisterLoginPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};
