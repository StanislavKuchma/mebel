const fs = require("fs");
const path = require("path");

function allImage() {
  const directoryPath = path.join(__dirname, "../foto");
  const allFoto = fs.readdirSync(directoryPath);
  return allFoto;
}
const foto = allImage();
console.dir(foto[0]);
// const pathToFile = "foto1.js";
// fs.writeFileSync(pathToFile, foto[0]);
