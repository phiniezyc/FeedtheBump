import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import AddMealPage from './pages/AddMealPage';
import UserSettingsPage from './pages/UserSettingsPage';
import UserNutritionReport from './pages/UserNutritionReport';
import UserNotesPage from './pages/UserNotesPage';
import HealthArticle from "./pages/HealthArticle";
import routeErrorPage from "./pages/routeErrorPage/routeErrorPage";






class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
              <Switch>
                  {/* <Header /> */}
                  <Route exact path='/' component={LandingPage} />
                  <Route exact path='/user/dashboard' component={UserDashboard} />
                  <Route exact path='/user/addMeal' component={AddMealPage} />
                  <Route exact path='/user/settings' component={UserSettingsPage} />
                  
                  {/* Pages below here need to be completed */}
                  <Route exact path='/user/nutritionReport' component={UserNutritionReport} />
                  <Route exact path='/user/notes' component={UserNotesPage} />
                  <Route exact path='/article' component={HealthArticle} />
                  <Route component={routeErrorPage}/>



                  {/* <Route path='*' component={LandingPage} /> */}
                  {/* <Footer/> */}
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
