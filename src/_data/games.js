const axios = require('axios');

module.exports = async () => {
  const games = await axios.get('https://gamestoriesapi20200902151026.azurewebsites.net/api/game/recentGames/20');

  result = games.data.map(game => game.gameId = game.gameId.toString());
  console.log(games.data[0]);
  return games.data;
};