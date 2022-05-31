import { CreateUser } from "./components/CreateUser";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <CreateUser/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
