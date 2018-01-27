const axios = require("axios");

module.exports = {
    search: function (req, res) {
        const url = "https://healthfinder.gov/FreeContent/developer/Search.json?";
        const apiKey = "api_key=rlaulqdetivhvqxo";
        const keyword = "&keyword=pregnancy";

        const search = url + apiKey + keyword;




        axios
            .get(search)
            .then(response => {
                console.log(response.data["result"]["topics"][0]);

                res.send(response.data);

            })
            .catch(err => {
                console.log(err);
                res.send({err});
            });

    }

};
