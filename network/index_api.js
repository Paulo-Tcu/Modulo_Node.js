const fsPromise = require('fs').promises;
const path = require('path');
const https = require('https');

function fetchPokemon(id = 5) {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const pokeURL = `${BASE_URL}${id}`;
  
    return new Promise((resolve, reject) => {
      const req = https.request(pokeURL, res => {
        const data = [];
  
        res.on('data', chunk => {
          data.push(chunk);
        });
  
        res.on('end', () => {
          const pokemonRaw = Buffer.concat(data).toString();
          const pokemonJSON = JSON.parse(pokemonRaw);
          resolve(pokemonJSON.name);
        });
      })
  
      req.on('error', error => {
        reject(error);
      });
  
      req.end();
    });
  }

  module.exports = {
    fetchPokemon,
  };