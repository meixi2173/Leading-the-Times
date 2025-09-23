const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const LOG_FILE = path.join(__dirname, 'logs', 'hestia_log.json');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 读取日志
app.get('/api/logs', (req, res) => {
  if (!fs.existsSync(LOG_FILE)) return res.json([]);
  const logs = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
  res.json(logs);
});

// 写日志
app.post('/api/logs', (req, res) => {
  const { event, details } = req.body;
  let logs = [];
  if (fs.existsSync(LOG_FILE)) {
    logs = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
  }
  logs.push({ event, details, time: new Date().toISOString() });
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
