# FeedtheBump

Your healthy guide to eating for two.  Feed the Bump is an online nutrition diary for pregnant women. Expectant moms who choose to log their food intake in a traditional app are forced to guess their requirements or try to apply outside research to the data found in the app.

 Feed the Bump combines existing research on prenatal nutrition with Nutritionix Database to provide helpful, accurate information for women seeking healthy pregnancies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You can clone this project to your local machine, but you will need your own set of API keys.

```
Nutrixionix API Keys can be found at Nutrixionix's website. 
The API is free for a limited number of searches. 
```

### Installing

Fork or clone this project to your local machine. To clone, in your terminal run:
```

git clone <downloadLink>
```

You will need to install node modules and depencies for the server side.  From the project root run:

```
npm install
```
You will also need to install node modules and depencies for the client side.  From the client folder run:

```
npm install 
```

*Remember you will need to create a APIKeys.js file and import it to the nutrixionixSearchController.js file to fully run the app.*

When these steps are completed, you are able to start the application by running (in your terminal): 

```
npm run dev
```

## Deployment

To deploy the application to heroku, run: 
```
yarn run build
```

Then go through heroku steps.  Through the CLI, typically: 
```
heroku create
```

## Built With

* [React](https://reactjs.org/) - The front-end framework used
* [Express](http://expressjs.com/) - The back-end framework used
* [AuthO](https://auth0.com/) - Used to authenticate users
* [React-Materialize](https://react-materialize.github.io/#/) - React specific components


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/phiniezyc/FeedtheBump/releases). 

## Authors

* **Brelon Buckner** - *Initial work* - [Brelon Buckner](https://github.com/bbuckner2092)
 * **Star Lee** - *Initial work* - [siriuszz](https://github.com/siriuszz)
* **Chance Phiniezy** - *Initial work* - [phiniezyc](https://github.com/phiniezyc)

See also the list of [contributors](https://github.com/phiniezyc/FeedtheBump/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone's code we used/adapted/were inspired by in making this project
* And special thanks to all the pregnancies out there. Without pregnancy this app wouldn't be possible :)
