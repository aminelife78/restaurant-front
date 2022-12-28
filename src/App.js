import './style/App.scss';
import RoutePublic from "./pages/public/RouterPublic"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/*" element={<RoutePublic />}/> 
    </Routes>
  );
}

export default App;
