const axios = require('axios');

module.exports = getCharacters = async () => {
    try {
      return await axios.get('https://rickandmortyapi.com/api/character/')
    } catch (error) {
      console.error(error)
    }
  }
  
  const countCharacters = async () => {
    const characters = await getCharacters()
  
    if (characters.info.count) {
    //   console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
        console.log(`${characters.info.count} characters`);
    }
  }
  
  countCharacters();