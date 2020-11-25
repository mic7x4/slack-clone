import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming
    <div className="app">
    <Header/>
    <div className="app__body">   
      <Sidebar/>
      {/* {Sidebar} */}
      {/* {React Router -> Chat Screen} */}
    </div>
    </div>
  );
}

export default App;
