import './App.css';

import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
import Movies from './Movies';
import Seats from './Seats';
import { useState } from "react";
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
toast.configure()

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(null);
  


  const logIn = () => {

    let password = prompt("Lütfen şifre giriniz.");
    
    if (password !== "admin") {
      toast.error('Şifre Yanlış', {position: toast.POSITION.TOP_CENTER});
      return;
    }

    setisLoggedIn(true);

    localStorage.setItem('isAdmin', true);

    

  };
  const logOut = () => {
    setisLoggedIn(false);
    localStorage.setItem('isAdmin', false);


  };

  const navStyle = {
    color: 'white'
};

  return (
    <Router>
      <div className='App'>
      <nav>
        <ul className="nav-links">
            <Link style={navStyle} to='/'>
            <li>Filmler</li>
            </Link>

            
            {isLoggedIn ? (
            
            <Link style={navStyle} to='/DeleteMovie'>
            <li>Film Kaldır</li>
            </Link>      ) : (
            null
          )}

            {isLoggedIn ? (
            <Link style={navStyle} to='/AddMovie'>
            <li>Film Ekle</li>
            </Link>     ) : (
            null
          )}

            {isLoggedIn ? (
            <button onClick={logOut}>Çıkış</button>
          ) : (
            <button onClick={logIn}>Admin Giriş</button>
          )}
        </ul>
    </nav>
        <Switch>

          <Route path='/AddMovie' component={AddMovie} />
          <Route path='/DeleteMovie' component={DeleteMovie} />
          <Route path='/Seats' component={Seats} />
          <Route path='/' component={Movies} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
