import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import MainContent from './MainContent';
import OneBoxNavbar from './OneBoxNavbar';
import Inbox from './Inbox';

const OneBoxScreen = () => {  
  const [activeContent, setActiveContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      navigate("/login"); // Redirect to login if token is not present
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <OneBoxNavbar />
      <div className="flex flex-1">
        <SideBar setActiveContent={setActiveContent} />
        {activeContent === 'inbox' ? <Inbox /> : <MainContent />}
      </div>
    </div>
  );
};

export default OneBoxScreen;
