import "./App.css";
import { Login } from "./components/Login";
import { MenuBar } from "./components/MenuBar";
import { CardList } from "./components/CardList";

function App() {
  return (
    <div>
      <header>
        <Login />
      </header>
      <div className="mainPage">
        <MenuBar />
        <CardList />
      </div>
    </div>
  );
}

export default App;
