import http, { IncomingMessage, ServerResponse } from "http";
import path from "path";
import fs from "fs/promises";

async function requestListener(req: IncomingMessage, res: ServerResponse) {
  const filePath = path.join(__dirname, "static/index.html");

  const data = await fs.readFile(filePath);
}

http.createServer(requestListener).listen(3000, () => {
  console.log("HTTP Server is Listening");
});
