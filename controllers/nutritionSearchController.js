const apiConfig = require('../client/src/utils/API_Keys');
const rp = require('request-promise');



module.exports = {
  search(req, res, next) {
    const id = process.env.NUTRITIONIX_ID || apiConfig.nutritionixId;
    const api_key = process.env.NUTRITIONIX_API_KEY || apiConfig.nutritionixAPIKey;
     const searchTerm = req.query.searchTerm;
    // const searchTerm = 'toast'
    const url = `https://api.nutritionix.com/v1_1/search/${searchTerm}?results=0%3A20&cal_min=0&cal_max=50000&fields=*`

    const search = `${url}${id}${api_key}`
    
    console.log(search)
    console.log(searchTerm);
    rp
      .get(search)
      .then((response) => {
           console.log(response.data.hits[0].fields.item_name);

        res.json(response.data);
        return response.data
      })
      .catch(next);
  }
};
