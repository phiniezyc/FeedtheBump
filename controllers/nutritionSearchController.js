const apiConfig = require('../client/src/utils/API_Keys');
const axios = require('axios');

// const express = require('express');
// const app = express();



// Postman returns this when performing get from this url:
// {
//   "message": "Cast to ObjectId failed for value \"search\" at path \"_id\" for model \"Meal\"",
//   "name": "CastError",
//   "stringValue": "\"search\"",
//   "kind": "ObjectId",
//   "value": "search",
//   "path": "_id"
// }
// app.get("/api/meals/search", (req,res)=>{
//   res.json(req.query);
// })

// app.get("/user/addMeal", (req, res) =>{
//   res.json(req.query);
// })


// axios.get('/').then (function(response){
//   console.log(response);
// })

// });app.get('/', function(req, res){
//   res.send('search: ' + req.query);
// });

//  axios.get("/user/addMeals").then(function(response){
//   console.log(response);
// }).catch(function(response){
//   console.log(response);
// })

  // let param = req.query;
  // console.log(param);
  //  res.end();






  // axios.get('/user/addMeal')
  //   .then(res =>{
  //     console.log(res.data) //returns the value of the binary
  //       })
  //   .catch(error => {
  //       console.log(error)
  //   })


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
