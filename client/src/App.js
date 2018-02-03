import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import AddMealPage from './pages/AddMealPage';
import NutritionGuide from './pages/NutritionGuide';
import FoodstoAvoid from './pages/FoodstoAvoid';
import routeErrorPage from "./pages/routeErrorPage/routeErrorPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/user/dashboard' component={UserDashboard}/> {/*<Route exact path='/user/addMeal/:search?' component={AddMealPage} />*/}
              <Route exact path='/user/addMeal' component={AddMealPage}/>
              <Route exact path='/guide' component={NutritionGuide}/>
              <Route exact path='/foodstoavoid' component={FoodstoAvoid}/> {/* Pages below here need to be completed */}

              <Route component={routeErrorPage}/> {/* <Route path='*' component={LandingPage} /> */}

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
