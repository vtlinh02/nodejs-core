import fs from "node:fs";

const readStream = fs.createReadStream("./text.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

for (let i = 0; i < 100000; i++) {
  console.log("1");
}
