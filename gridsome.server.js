// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function (api) {  
  api.loadSource(async actions =>  {
    const data = require('./src/data/ateco.json');
    const collection = actions.addCollection('Ateco');

    for (const item of data ) {
      collection.addNode({
        codice: item.CODICE,
        descrizione: item.DESCRIZIONE
      })
    }
    
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.loadSource(async actions =>  {
    const data = require('./src/data/vantaggiConsulente.json');
    const collection = actions.addCollection('vantaggiConsulente');

    for (const item of data ) {
      collection.addNode({
        pre: item.pre,
        name: item.name,
        title: item.title,
        text: item.text
      })
    }
    
  })

  api.loadSource(async actions =>  {
    const data = require('./src/data/vantaggiRepower.json');
    const collection = actions.addCollection('vantaggiRepower');

    for (const item of data ) {
      collection.addNode({
        pre: item.pre,
        name: item.name,
        title: item.title,
        text: item.text
      })
    }
    
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
