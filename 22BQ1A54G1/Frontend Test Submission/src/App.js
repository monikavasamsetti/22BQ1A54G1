import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { Log } from '../../LoggingMiddleware/loggingMiddleware';

const YOUR_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmJxMWE1NGcxQHZ2aXQubmV0IiwiZXhwIjoxNzU0MDI5MDM2LCJpYXQiOjE3NTQwMjgxMzYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhOTQxMmZlMy1lZGNjLTQ3ODEtODliNi1hNTM2ZDAyMGE3OTIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ2YXNhbXNldHRpIG1vbmlrYSBkdXJnYSBzYXR5YSB2YW5pIiwic3ViIjoiMTU2MTlmMDMtM2E3ZS00MzFkLTlkNzItMTYwZDNiMmYyNzFmIn0sImVtYWlsIjoiMjJicTFhNTRnMUB2dml0Lm5ldCIsIm5hbWUiOiJ2YXNhbXNldHRpIG1vbmlrYSBkdXJnYSBzYXR5YSB2YW5pIiwicm9sbE5vIjoiMjJicTFhNTRnMSIsImFjY2Vzc0NvZGUiOiJQblZCRlYiLCJjbGllbnRJRCI6IjE1NjE5ZjAzLTNhN2UtNDMxZC05ZDcyLTE2MGQzYjJmMjcxZiIsImNsaWVudFNlY3JldCI6Im5CUlh0Sm1yeEFmVnpQZFIifQ.KD4h2LNB25B4FxXXTmDfvc3pdz2NE5P02-aTBsOSlis"; // Replace with actual token

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!url) return;
    await Log("frontend", "info", "UI", "User submitted URL", YOUR_TOKEN);
    const shortcode = Math.random().toString(36).substring(2, 7);
    const generatedShortUrl = `http://localhost:3000/${shortcode}`;
    setShortUrl(generatedShortUrl);
    localStorage.setItem(shortcode, url);
  };

  return (
    <Box p={4}>
      <Typography variant="h4">URL Shortener</Typography>
      <TextField
        label="Enter Long URL"
        fullWidth
        margin="normal"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
      {shortUrl && (
        <Typography variant="h6" mt={2}>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </Typography>
      )}
    </Box>
  );
}

export default App;
