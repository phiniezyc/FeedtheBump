const apiConfig = require('../client/src/utils/API_Keys');
const axios = require('axios');




module.exports = {
  search(req, res) {
    const id = apiConfig.nutritionixId;
    const api_key = apiConfig.nutritionixAPIKey;
    const searchTerm = `tacos`;
    const url = `https://api.nutritionix.com/v1_1/search/${searchTerm}?results=0%3A20&cal_min=0&cal_max=50000&fields=*`

    const search = `${url}${id}${api_key}`

    // axios.get('/api/nutritionix/searchTerm').then((response) => {
    //   console.log(response.data).then(response.end())
    // })

    // axios.get('/api/nutritionix/userSearch').then( response =>{
    //   console.log(response.data)
    // })

    // router.get('/user/addMeal', function (req, res){
    //     const searchTerm = req.state.search;
    //     console.log("test" + searchTerm);
    // })

    axios
      .get(search, )
      .then((console.log(req.body)))
      .then((response) => {
        // console.log(response.data.hits[0].fields.item_name);

        res.send(response.data);
      })
      .catch((err) => {

        res.send({err});
      });
  }
};
