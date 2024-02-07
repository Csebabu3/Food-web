import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav';
import Sidebar from './Component/Sidebar';
import Meals from './Component/Meals';

function App() {
  return (
    <div className="App">
     <Sidebar />
     <Meals />
    </div>
  );
}

export default App;
