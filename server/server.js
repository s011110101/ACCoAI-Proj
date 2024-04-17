const express = require('express');
const cors = require('cors');

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const { exec } = require('child_process');
const { spawn } = require('child_process');

const app = express();
const port = 3001; // Ensure this does not conflict with your React app's port

app.use(cors()); // This will allow all domains. For production, configure allowed origins.
app.use(express.json());
//const scriptPath = 'openaiTest.py';
// app.post('/run-python', (req, res) => {
//     const { scriptPath, args } = req.body;
//     exec(`python ${scriptPath} ${args.join(' ')}`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return res.status(500).send(stderr);
//         }
//         res.send(stdout);
//     });
// });
app.post('/run-python', (req, res) => {
    const { scriptPath, args } = req.body;
    const pythonProcess = spawn('python', [scriptPath, ...args]);

    // Set the response to stream mode
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked'
    });

    // Handle data from the Python process
    pythonProcess.stdout.on('data', (data) => {
        res.write(data);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        res.end();
        console.log(`child process exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});