// import logo from './logo.svg';
import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import NavBar from '../../components/NavBar/NavBar';
import AllPuppiesPage from '../AllPuppiesPage/AllPuppiesPage';

function App() {
  const [user, setUser] = useState(getUser);

  return (
    <div className="App">
      { user ?
      <>
      <NavBar user={user} setUser = {setUser} /> 
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
        <AuthPage setUser = {setUser}/>
      }
    </div>
  );
}

export default App;
