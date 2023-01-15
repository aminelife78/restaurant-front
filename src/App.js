import "./style/App.scss";
import RoutePublic from "./pages/public/RouterPublic";
import { Routes, Route } from "react-router-dom";
import RouterAuth from "./pages/auth/RouterAuth";
import RouterAdmin from "./pages/admin/RouterAdmin";
import AuthVerify from "./_helper/AuthVerify";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<RoutePublic />} />
      <Route
        path="/admin/*"
        element={
          <AuthVerify>
            <RouterAdmin />
          </AuthVerify>
        }
      />
      <Route path="/auth/*" element={<RouterAuth />} />
    </Routes>
  );
}

export default App;
