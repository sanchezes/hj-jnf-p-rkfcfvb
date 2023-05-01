const fs = require("fs");
const { Transform } = require("stream");

// Всі букви в словах великі

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     const upperCaseChunk = chunk.toString().toUpperCase();
//     callback(null, upperCaseChunk);
//   },
// });

//Тільки перші букви слів великі

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperCaseChunk = chunk
      .toString()
      .toLowerCase()
      .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
    this.push(upperCaseChunk);
    callback();
  },
});

const filePath = "stream.txt";
const writePath = "writeStream.txt";

const rStream = fs.createReadStream(filePath, "utf8");

let data = "";
upperCaseTransform.on("data", (chunk) => {
  data += chunk;
});

const wStream = fs.createWriteStream(writePath, "utf8");
rStream.pipe(upperCaseTransform).pipe(wStream);

upperCaseTransform.on("end", () => {
  console.log("Текст UpperCase додано в файл");
});
