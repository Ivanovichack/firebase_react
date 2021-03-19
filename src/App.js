import "bootstrap/dist/css/bootstrap.min.css";

import LedList from './components/led-list'

function App() {
  return (
    <div>     
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Ivanoskin.com
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <h2>React Firebase RGB Led - NodeMCU ESP</h2>
          <LedList />
          
        </div>
    </div>
  );
}

export default App;
