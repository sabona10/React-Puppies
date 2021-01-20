import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="App">
        <div>
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </div>
    );
}

export default AuthPage;
