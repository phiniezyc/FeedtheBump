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






class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
              <Switch>
               
                  {/* <Header /> */}
                  <Route exact path='/user/dashboard' component={UserDashboard} />
                  <Route exact path='/user/addMeal' component={AddMealPage} />
                  {/* Pages below here need to be completed */}
                  <Route exact path='/user/settings' component={UserSettingsPage} />
                  <Route exact path='/user/nutritionReport' component={UserNutritionReport} />
                  <Route exact path='/user/notes' component={UserNotesPage} />
                  <Route exact path='/' component={LandingPage} />
                  
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
