import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<Navigate to="/login"/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>
}

export default App;
