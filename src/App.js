import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <main>
                <Home />
              </main>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
