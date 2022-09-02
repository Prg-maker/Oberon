import GlobalStyles from "./styles/GlobalStyles";
import {Router} from './Routes/routes-pages'
import {UserAuthContextProvider} from './context/useContext'
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Router/>
      </UserAuthContextProvider>
      
      <GlobalStyles/>
    </div>
  );
}

export default App;
