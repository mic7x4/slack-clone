import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    //BEM naming
    <div className="app">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;

