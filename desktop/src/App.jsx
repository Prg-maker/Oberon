import { CreateUser } from "./components/CreateUser";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Login/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
