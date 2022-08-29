import { Login } from "./pages/Login";
import {  DetailsProjectHome} from "./pages/DetailsProject";
import GlobalStyles from "./styles/GlobalStyles";
import {Router} from './Routes/routes-pages'

function App() {
  return (
    <div className="App">
      <Router/>

      
      <GlobalStyles/>
    </div>
  );
}

export default App;
