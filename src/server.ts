import express from "express";
import bodyParser from "body-parser";

let PORT = 3000;
let server = express();
const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

server.use(middlewares);

server.get("/", (_, res) =>
  res.send(`<!DOCTYPE html>
            <style>
            html,body{ width: 99vw; height: 96vh; }
            </style>
            <html>
              <head></head>
              <body>
                <script src="/bundle.js"></script>
              </body>
            </html>
          `)
);

server.listen(PORT, function () {
  console.log(`server listening on port: ${PORT}`);
});
