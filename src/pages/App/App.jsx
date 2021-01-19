// import logo from './logo.svg';
import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import NavBar from '../../components/NavBar/NavBar';
import AllPuppiesPage from '../AllPuppiesPage/AllPuppiesPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      { user ?
      <>
      <NavBar />
      <Switch>
        <Route path="/puppies/new">
          <NewPuppyPage />
          </Route>
        <Route path="/puppies">
          <AllPuppiesPage />
          </Route>
          <Redirect to="/puppies" />
        </Switch>
        </>
        :
        <AuthPage />
      }
    </div>
  );
}

export default App;
