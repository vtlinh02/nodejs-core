import http from "node:http";

const server = http.createServer((req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  req.on("end", () => {
    res.write("Hello world");
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
