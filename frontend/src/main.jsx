import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setBackendStatus(data.message);
      })
      .catch(() => {
        setBackendStatus('Backend connection failed');
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>DevBank</h1>
        <h2>Microservices Application</h2>

        <div className="service">
          <h3>Frontend Service</h3>
          <p>React application is running.</p>
        </div>

        <div className="service">
          <h3>Backend Service</h3>
          <p>{backendStatus}</p>
        </div>

        <div className="status">
          ✓ Application Status: Running
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
