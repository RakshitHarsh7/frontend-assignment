import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HandleGoogleRedirect = () => {
  const [tokenProcessed, setTokenProcessed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenProcessed) return; // Prevent double execution

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log("Redirect URL Parameters:", window.location.search);
    console.log("Extracted Token:", token);

    if (token) {
      localStorage.setItem('jwt_token', token);
      setTokenProcessed(true); // Mark as processed
      navigate("/google-login");
    } else {
      console.error("Token not found in URL");
      navigate("/");
    }
  }, [navigate, tokenProcessed]);

  return <div>Redirecting...</div>;
};

export default HandleGoogleRedirect;
