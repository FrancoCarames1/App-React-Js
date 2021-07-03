import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import "./components/FontAwesomeIcons";
import Bienvenida from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <body>
      <Navbar/>
      <div>
        <Bienvenida darBienvenida="おかえり - Okaeri" />
      </div>
    </body>
  );
}

export default App;
