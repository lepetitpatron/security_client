import React, { Component } from 'react';
import Logo from './secure.png';
import './App.css';
import Auth from './Auth';

import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import CallBack from './components/CallBack';
import Logout from './components/LogOut';

const auth = new Auth();

{/* Alle components werden door ons aangemaakt. De App component werd volledig herschreven.*/}
class App extends Component 
{
  render() 
  {
    let MainComponent = '';
    
    switch(window.location.pathname)
    {
      case '/':
        MainComponent = <LandingPage auth={auth} logo={Logo}/>;
        break;
      case '/profile':
        MainComponent = auth.isAuthenticated() ? <Profile auth={auth} logo={Logo}/> : <NotFound logo={Logo}/>;
        break;
      case '/callback':
        MainComponent = <CallBack logo={Logo}/>;
        break;
      case '/logout':
        MainComponent = <Logout logo={Logo}/>;
        break;

      default:
        MainComponent = <NotFound logo={Logo}/>;
    }

    return (
      <div className="App">
          {MainComponent}
      </div>
    );
  }
}

export default App;
