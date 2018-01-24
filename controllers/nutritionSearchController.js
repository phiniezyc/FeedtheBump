const axios = require('axios');

module.exports = {
  search(req, res) {
    // const search = url + searchTerm + apiKey + rest;
    // const id = '&appId=7168da35';
    // const api_key = '&appKey=6e3a2666ac19b9cd3d4b5fd92c295d87';

    // const url = "https://api.nutritionix.com/v1_1/search/banana?results=0%3A20&cal_min=0&cal_max=50000&fields=*&appId=YOURID&appKey=YOURKEY";

    const search = "https://api.nutritionix.com/v1_1/search/banana?results=0%3A20&cal_min=0&cal_max=50000&fields=*&appId=7168da35&appKey=6e3a2666ac19b9cd3d4b5fd92c295d87";



    // const search = "https://api.nutritionix.com/v1_1/search/banana?results=0%3A20&cal_min=0&cal_max=50000&fields=*" + id + api_key;

    axios
      .get(search)
      .then((response) => {
        // console.log(response.data.report.foods[0]);

        res.send(response.data);
      })
      .catch((err) => {
        
        res.send({ err });
      });
  },

};
