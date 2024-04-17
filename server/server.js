const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const port = 3001; // Ensure this does not conflict with your React app's port

app.use(cors()); // This will allow all domains. For production, configure allowed origins.
app.use(express.json());

app.post('/backend/openaiTest.py', (req, res) => {
    const { scriptPath, args } = req.body;
    exec(`python ${scriptPath} ${args.join(' ')}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
