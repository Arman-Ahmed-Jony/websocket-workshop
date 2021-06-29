const WebSocket = require("ws");
const webSocketServer = new WebSocket.Server({ port: 8082 });

webSocketServer.on("connection", (ws) => {
  console.log("new client connected... ");

  ws.on("message", (data) => {
    console.log('data came from client', data);
    webSocketServer.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
    // ws.send(data)
  })


  ws.on("close", () => {
    console.log("client disconneted...");
  });
});

