const axios = require('axios');

module.exports = {
    search(req, res) {
        // const url = "https://healthfinder.gov/FreeContent/developer/Search.json?";
        // const apiKey = "api_key=rlaulqdetivhvqxo";
        // const keyword = "&keyword=pregnancy";

        const search = "https://healthfinder.gov/FreeContent/developer/Search.json?api_key=rlaulqdetivhvqxo&keyword=pregnancy";




        axios
            .get(search)
            .then((response) => {
                // console.log(response.data.data.Result.Topics[0]);

                res.send(response.data);

            })
            .catch(err => {
                console.log(err);

                res.send({ err });
            });

    },

};