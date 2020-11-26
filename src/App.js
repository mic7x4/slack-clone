import './App.css';
import {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Login';

function App() {
  const [user,setUser]  = useState(null);
  return (
    //BEM naming
    <div className="app">
      <Router>
        {!user?(<Login/>) 
        : (
          <>
          <Header/>
         <div className="app__body"> 
            <Sidebar/>
            <Switch>
              <Route path="/room/:roomId">
                  <Chat/>
              </Route>
              <Route>
                <h1>Welcome</h1>
              </Route>
            </Switch>
         </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;

