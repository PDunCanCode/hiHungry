import http, { IncomingMessage, ServerResponse } from "http";
import path from "path";
import fs from "fs/promises";

async function requestListener(req: IncomingMessage, res: ServerResponse) {
  const filePath = path.join(__dirname, "static/index.html");

  const data = await fs.readFile(filePath, "utf-8");

  res.writeHead(200, {
    "Content-type": "text/html",
    "content-lenght": data.length,
  });
  res.write(data);
  res.end();
}

http.createServer(requestListener).listen(3000, () => {
  console.log("HTTP Server is Listening");
});
