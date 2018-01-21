const axios = require("axios");

module.exports = {
    search: function (req, res) {
        const search = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=Dmu1LQGkpd52KRfzyfeM" +
                "ZAPW6blrxrdnmVIubwK6&nutrients=205&nutrients=204&nutrients=208&nutrients=269";

        axios
            .get(search)
            .then(response => {
                console.log(response.data["report"]["foods"][0]);
            
                // res.send(response);
            })
            .catch(err => {
                console.log(err);
                res.send({err});
            });

    }

};