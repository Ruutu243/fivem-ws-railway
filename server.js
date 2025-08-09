const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on('connection', (ws) => {
  ws.send('SERVER: Hei!');
  ws.on('message', (msg) => {
    console.log('Pelaaja lähetti:', msg);
    ws.send('SERVER: Kuulin sinut!');
  });
});
