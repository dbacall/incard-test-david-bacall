import React from 'react';
import Login from './pages/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: 'white'
  },
  fonts: {
    bold: 'Poppins-SemiBold'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
