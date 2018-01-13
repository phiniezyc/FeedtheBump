import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import AddMealPage from './pages/AddMealPage';







class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
              <Switch>
                <div>
                  {/* <Header /> */}
                  <Route exact path='/' component={LandingPage} />
                  <Route exact path='/user/dashboard' component={UserDashboard} />
                  <Route exact path='/user/addMeal' component={AddMealPage} />
                  {/* <Footer/> */}
                </div>
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
