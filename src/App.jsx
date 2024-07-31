import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import HandleGoogleRedirect from './components/HandleGoogleRedirect';
import OneBoxScreen from './OneBox/OneBoxScreen';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="467667605518-nfug71l6f09aqqmr449208r70l6pt389.apps.googleusercontent.com">
      <Router>   
        <Routes>
          <Route path="/google-login" element={<OneBoxScreen />} />
          <Route path="/handle-google-redirect" element={<HandleGoogleRedirect />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
