const axios = require('axios');

module.exports = {
  search(req, res) {
    const searchTerm = 'q=butter';
    const url = 'https://api.nal.usda.gov/ndb/nutrients/?format=json&';
    const apiKey = '&api_key=Dmu1LQGkpd52KRfzyfeM';
    const rest = 'ZAPW6blrxrdnmVIubwK6&nutrients=205&nutrients=204&nutrients=208&nutrients=269';
    // const search = `https://api.nal.usda.gov/ndb/nutrients/?format=json&
    // q=${searchTerm}&api_key=Dmu1LQGkpd52KRfzyfeM` +
    // "ZAPW6blrxrdnmVIubwK6&nutrients=205&nutrients=204&nutrients=208&nutrients=269"
    // ;
    const search = url + searchTerm + apiKey + rest;

    axios
      .get(search)
      .then((response) => {
        console.log(response.data.report.foods[0]);

        res.send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.send({ err });
      });
  },

};
