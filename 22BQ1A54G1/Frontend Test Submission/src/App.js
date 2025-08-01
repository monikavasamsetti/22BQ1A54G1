import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { Log } from '../../LoggingMiddleware/loggingMiddleware';

const YOUR_TOKEN = "your_token_here"; // Replace with actual token

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
