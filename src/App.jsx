import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import "./components/FontAwesomeIcons";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div>
        <ItemListContainer darBienvenida="おかえり - Okaeri" />
      </div>
    </>
  );
}

export default App;
