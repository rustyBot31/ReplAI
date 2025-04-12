import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CssBaseline
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError("Failed to generate email reply. Please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="false" className="glass-container">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          className="typewriter-header"
          fontFamily="sans-serif"
          fontWeight="bold"
          color='#b9ebff'
        >
          ReplAI
        </Typography>

        {/* Description Box with Typewriter Effect */}
        <Box
          variant="body1"
          sx={{
            color: '#b9ebff',
            fontFamily: "sans-serif",
            fontSize: '1.1rem',
            textAlign: 'center',
            maxWidth: '100%',
            mb: 3,
            overflow: 'hidden',
            padding: '0 15px', // Ensure some space for the text to scroll
          }}
        >
          <p>Got a lot of mails to reply to? Tired of cold-mailing? Not sure about what to write?</p>
          <p>Don't need to worry - we got you covered! Powered by Gemini, let the AI craft you instantaneous replies with the tones of your choice - </p>
          <p>be it professional, casual, or witty (although we don't recommend using this tone for people who are short on sarcasm!),</p>
           <p>while you chill out sipping coffee!</p>
        </Box>

        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={10}
            variant="outlined"
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#ccc' } }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ color: '#ccc' }}>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
              sx={{ color: '#fff' }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="witty">Witty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
          >
            {loading ? <CircularProgress size={24} /> : "Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              variant="outlined"
              value={generatedReply || ''}
              InputProps={{ readOnly: true, style: { color: '#fff' } }}
            />
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy To Clipboard
            </Button>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
