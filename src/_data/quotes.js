'use strict'
const axios = require('axios');

module.exports = async function () {
    const url = 'https://dummyjson.com/quotes';
    const response = await axios.get(url)
        .then(res => {
            return res.data.quotes
        });
        
    return response;
}
// return [
//     {
//         "id": 1,
//         "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
//         "author": "Rumi"
//     },
//     {
//         "id": 2,
//         "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
//         "author": "Abdul Kalam"
//     },
// ];