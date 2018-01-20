const router = require("express").Router();
const mealsRoutes = require("./meals");

// Book routes
router.use("/meals", mealsRoutes);

module.exports = router;

// Below Code was added by Brelon Buckner

// Taking my url and breaking into smaller pieces so we can make our
// Beginning component of my url.
// When we click the "Add" btn, we need to be able to hit "Search" and a list of that food should generate.
// There also needs to be a quantity button and/or when we select the food we need to be able to manual place the amount in the app.
// Look into MyFitnessPal for a better understanding of how the functionality works.
var apiNutrition = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=Dmu1LQGkpd52KRfzyfeMZAPW6blrxrdnmVIubwK6&nutrients=205&nutrients=204&nutrients=208&nutrients=269";
var apiHealth = "https://healthfinder.gov/FreeContent/developer/Search.json?api_key=rlaulqdetivhvqxo&keyword=*";
// This is calories before Pregnancy
var calorieIntake = "";
// Below code:
// If possible, make this a drop-down
var pregnancyStage = "";
var request = require("request");
var apiKey = "api_key=Dmu1LQGkpd52KRfzyfeMZAPW6blrxrdnmVIubwK6";

$.ajax({
    url: apiNutrition,
    method: 'GET'
}).done(function (response) {
    console.log(response);

    // Below Code: notes from Andrew
    // var foodNutrients = response.something.something.calories // 550
    // var anotherFoodNutrients = response.something.something.calories //650
    // var totalCalories = foodNutrients + anotherFoodNutrients;

    // $('#foodCalories').text(totalCalories)
});

// Below Code:
// This makes the request 1st
// Error: hold any errors that we may receive.
// Response: is simply the statusCode that comes back.  Looking for a 200 code specifically.
// Body: the actual code itself for the http we are Requesting.
var url = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=Dmu1LQGkpd52KRfzyfeMZAPW6blrxrdnmVIubwK6&nutrients=%205&nutrients=204&nutrients=208&nutrients=269", function (error, response, body) {

    request("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=Dmu1LQGkpd52KRfzyfeMZAPW6blrxrdnmVIubwK6&nutrients=205&nutrients=204&nutrients=208&nutrients=269", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // body is actually a "string".  Since it is
            // a string we must use "JSON.parse" in order to
            // extract the string and turn it into a 
            // JS object.
            var parseData = JSON.parse(body);
            // The 1st console.log will grab the name of the food.
            // The 2nd console.log will grab the ndbno, which is id specific
            console.log(parseData["report"]["foods"]["name"]);
            console.log(parseData["report"]["foods"]["ndbno"]);

            // res.json(data)
            // fetch(url)
            // handleSubmit
        };

    });

    // Allows us to "select" the button when the user submits their input.
    // When "pressed", we will retrieve the user's calories needed for that specific trimester
    var button = select('#submit');
    button.onClick(necessaryCalories);