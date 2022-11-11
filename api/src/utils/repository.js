const { writeFile, readFile } = require("fs/promises");
const productsDB = require('./../database/products.json')
const cartDB = require('./../database/sales.json')


const save = async (data, database) => {
  const filepath = databaseFile.replace("/C:", "");

  const currentData = JSON.parse(await readFile(filepath));
  currentData.push(data);

  await writeFile(filepath, JSON.stringify(currentData));
  return currentData;
}

module.exports = save