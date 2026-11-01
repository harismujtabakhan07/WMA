
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/info')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.info);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>React + Node.js Lab</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {message && <p>Message from backend: {message}</p>}
    </div>
  );
}

export default App;
