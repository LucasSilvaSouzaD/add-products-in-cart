const { writeFile, readFile } = require("fs/promises");

const save = async (data, database) => {
  console.log('checgou save', {
    data, database
  })
  const URL = './src/database/' + database + '.json'

  const currentData = JSON.parse(await readFile(URL));
  currentData.push(data);

  console.log('checgou save currentData', currentData)

  await writeFile(URL, JSON.stringify(currentData));
  return data;
}

const update = async (data, database) => {
  console.log('checgou update', {
    data, database
  })
  const URL = './src/database/' + database + '.json'

  const currentData = JSON.parse(await readFile(URL));

  const product = currentData.find(product => product.id == data.id)
  const productsFilter = currentData.filter(product => product.id !== data.id)
  product.quantityReserved = Number(product.quantityReserved) + Number(data.quantityReserved)

  const hasStock =  data.inStock >= product.quantityReserved 

  console.log('checgou hasStock', hasStock)
  
  if (!hasStock) throw 'Não temos estoque para essa quantidade'
  console.log('checgou hasStock IF', hasStock)

  productsFilter.push(product);

  await writeFile(URL, JSON.stringify(productsFilter));
  return product;
}

module.exports = {
  save,
  update
}